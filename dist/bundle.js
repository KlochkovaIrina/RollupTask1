'use strict';

var img = "data:image/png;base64,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";

var e = [],
  t = [];
function n(n, r) {
  if (n && "undefined" != typeof document) {
    var a,
      s = !0 === r.prepend ? "prepend" : "append",
      d = !0 === r.singleTag,
      i = "string" == typeof r.container ? document.querySelector(r.container) : document.getElementsByTagName("head")[0];
    if (d) {
      var u = e.indexOf(i);
      -1 === u && (u = e.push(i) - 1, t[u] = {}), a = t[u] && t[u][s] ? t[u][s] : t[u][s] = c();
    } else a = c();
    65279 === n.charCodeAt(0) && (n = n.substring(1)), a.styleSheet ? a.styleSheet.cssText += n : a.appendChild(document.createTextNode(n));
  }
  function c() {
    var e = document.createElement("style");
    if (e.setAttribute("type", "text/css"), r.attributes) for (var t = Object.keys(r.attributes), n = 0; n < t.length; n++) e.setAttribute(t[n], r.attributes[t[n]]);
    var a = "prepend" === s ? "afterbegin" : "beforeend";
    return i.insertAdjacentElement(a, e), e;
  }
}

var css = "body {\n  background: #FFEFD5;\n}";
n(css,{});

console.log("Hello World!");
var body = document.querySelector("body");
var textBlock = document.createElement("h1");
textBlock.textContent = "I love JavaScript";
body.append(textBlock);
var jsPageContainer = document.createElement("img");
jsPageContainer.src = img;
body.append(jsPageContainer);
