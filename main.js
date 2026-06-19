/* 方寸製作所 — interactions */
(function () {
  "use strict";
  // mobile nav
  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("navlinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") links.classList.remove("open");
    });
  }
  // footer year
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // product-detail colour swatches (purely visual demo)
  var sws = document.querySelectorAll(".sw");
  var label = document.getElementById("sw-label");
  sws.forEach(function (s) {
    s.addEventListener("click", function () {
      sws.forEach(function (o) { o.style.outline = ""; });
      s.style.outline = "4px solid var(--blue)";
      s.style.outlineOffset = "2px";
      if (label) label.textContent = s.getAttribute("data-name") || "";
    });
  });

  // contact form — front-end only, no backend
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = document.getElementById("form-msg");
      if (msg) msg.hidden = false;
      form.reset();
    });
  }
})();
