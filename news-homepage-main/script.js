((d) => {
  const $navigationMenu = document.querySelector("nav");
  const $buttonOpen = document.querySelector("#menuOpenButton");
  const $buttonClose = document.querySelector("#menuCloseButton");

  window.addEventListener("resize", (e) => {
    if (window.innerWidth >= 1024) {
      $navigationMenu.classList.remove("open");
      $buttonOpen.classList.remove("none");
      $buttonClose.classList.add("none");
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target.matches("button") || e.target.matches("button img")) {
      $navigationMenu.classList.toggle("open");
      $buttonOpen.classList.toggle("none");
      $buttonClose.classList.toggle("none");
    }

    if (e.target.matches("ul li")) {
      $navigationMenu.classList.remove("open");
      $buttonOpen.classList.remove("none");
      $buttonClose.classList.add("none");
    }
  });
})(document);
