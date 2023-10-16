"use strict";
{
  const contentsElement = document.querySelectorAll(".contents");

  //スクロールしていくとふわっと出てくる
  document.addEventListener("scroll", () => {
    contentsElement.forEach((contents) => {
      //ウィンドウ上端から各要素上端*0.6までの距離
      let contentsHeight = contents.getBoundingClientRect().top + contents.clientHeight * .6;
      //各要素の高さ
      let showheight = window.innerHeight;

      if (contentsHeight < showheight) {
        contents.classList.add("show");
      }
    });
  });

  //メニューボタンおしたらスクロール移動
  const menuButtons = document.querySelectorAll('a[href^="#"]');
  console.log(menuButtons)
  menuButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      const target = document.querySelector(button.hash);
      const headerHeight = document.querySelector("header").clientHeight;
      const adjust = headerHeight + 128;
      const offsetTop = window.scrollY + target.getBoundingClientRect().top  - adjust;
      console.log(headerHeight);

      window.scrollTo({
        top:offsetTop,
        behavior:"smooth"
      })
    });
  });
}
