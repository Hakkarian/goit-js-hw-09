!function(){var t,e={start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]"),body:document.querySelector("body")};e.start.addEventListener("click",(function(){t=setInterval((function(){e.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),e.start.setAttribute("disabled",!0)})),e.stop.addEventListener("click",(function(){e.start.disabled=!1,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.b035ea81.js.map
