// A small Markdown renderer for the consent texts and the legal drafts. It builds DOM nodes with
// createElement and textContent only, never innerHTML, so a text can never become markup or script.
// Supports what docs/legal uses: headings, paragraphs, lists, blockquotes, tables, rules, **bold**,
// *italic*, `code` and [links]; a link target must pass `linkOk` or the link stays plain text.
(function () {
  'use strict';
  var INLINE = '`([^`]+)`|\\*\\*(.+?)\\*\\*|\\[([^\\]]+)\\]\\(([^)\\s]+)\\)|\\*([^*\\s][^*]*)\\*';

  function el(tag, cls) { var e = document.createElement(tag); if (cls) e.className = cls; return e; }

  function inline(parent, text, linkOk) {
    // A fresh pattern per call: bold text recurses, and a shared /g pattern would lose its place.
    var re = new RegExp(INLINE, 'g'), last = 0, m;
    while ((m = re.exec(text)) !== null) {
      if (m.index > last) parent.appendChild(document.createTextNode(text.slice(last, m.index)));
      if (m[1] !== undefined) { var c = el('code'); c.textContent = m[1]; parent.appendChild(c); }
      else if (m[2] !== undefined) { var b = el('strong'); inline(b, m[2], linkOk); parent.appendChild(b); }
      else if (m[3] !== undefined) {
        if (linkOk && linkOk(m[4])) {
          var a = el('a'); a.href = m[4]; a.target = '_blank'; a.rel = 'noopener noreferrer';
          a.textContent = m[3]; parent.appendChild(a);
        } else parent.appendChild(document.createTextNode(m[3]));
      } else { var i = el('em'); i.textContent = m[5]; parent.appendChild(i); }
      last = re.lastIndex;
    }
    if (last < text.length) parent.appendChild(document.createTextNode(text.slice(last)));
  }

  function cells(line) {
    return line.replace(/^\s*\|/, '').replace(/\|\s*$/, '').split('|').map(function (s) { return s.trim(); });
  }

  // Renders `text` into `parent`.
  function block(parent, text, linkOk) {
    var lines = String(text).replace(/\r\n?/g, '\n').split('\n'), i = 0;
    while (i < lines.length) {
      var line = lines[i];
      if (/^\s*$/.test(line)) { i++; continue; }
      var h = /^(#{1,4})\s+(.*)$/.exec(line);
      if (h) { var hd = el('h' + Math.min(h[1].length + 1, 5)); inline(hd, h[2], linkOk); parent.appendChild(hd); i++; continue; }
      if (/^\s*(---|\*\*\*)\s*$/.test(line)) { parent.appendChild(el('hr')); i++; continue; }
      if (/^>/.test(line)) {
        var q = [];
        while (i < lines.length && /^>/.test(lines[i])) { q.push(lines[i].replace(/^> ?/, '')); i++; }
        var bq = el('blockquote'); block(bq, q.join('\n'), linkOk); parent.appendChild(bq); continue;
      }
      if (/^\s*\|/.test(line)) {
        var table = el('table'), first = true;
        while (i < lines.length && /^\s*\|/.test(lines[i])) {
          var row = cells(lines[i]); i++;
          if (row.every(function (c) { return /^:?-{3,}:?$/.test(c); })) continue;
          var tr = el('tr');
          row.forEach(function (c) { var td = el(first ? 'th' : 'td'); inline(td, c, linkOk); tr.appendChild(td); });
          table.appendChild(tr); first = false;
        }
        var wrap = el('div', 'table'); wrap.appendChild(table); parent.appendChild(wrap); continue;
      }
      var li = /^\s*(-|\*|\d+\.)\s+/;
      if (li.test(line)) {
        var ordered = /^\s*\d+\./.test(line), list = el(ordered ? 'ol' : 'ul'), item = null;
        while (i < lines.length && (li.test(lines[i]) || (item && /^\s{2,}\S/.test(lines[i])))) {
          if (li.test(lines[i])) { item = el('li'); list.appendChild(item); inline(item, lines[i].replace(li, ''), linkOk); }
          else inline(item, ' ' + lines[i].trim(), linkOk);
          i++;
        }
        parent.appendChild(list); continue;
      }
      var para = [line.trim()];
      i++;
      while (i < lines.length && !/^\s*$/.test(lines[i]) && !/^(#{1,4}\s|>|\s*\||\s*(-|\*|\d+\.)\s)/.test(lines[i])) {
        para.push(lines[i].trim()); i++;
      }
      var p = el('p'); inline(p, para.join(' '), linkOk); parent.appendChild(p);
    }
  }

  window.IdMd = { block: block, inline: inline };
})();
