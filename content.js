(function () {
  "use strict";
  document.getElementById("ok18-roadblock-wrap").remove();
  setTimeout(function () {
    [
      ...document.getElementsByClassName("okam-each-ad"),
      ...document.getElementsByClassName("details__info"),
      ...document.getElementsByClassName("widget-area side__add"),
      ...document.getElementsByClassName("dtl-img"),
      ...document.getElementsByClassName("custom_breadcrumb"),
      ...document.getElementsByClassName("logo__holder"),
      ...document.getElementsByClassName("post_ftr"),
      ...document.getElementsByClassName("emo_sectn"),
      ...document.getElementsByClassName("ok18-comment-wrap"),
      ...document.getElementsByClassName("okam-ad-position-wrap"),
    ].forEach((element) => element.remove());
  }, 200);
})();
