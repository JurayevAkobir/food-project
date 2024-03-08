window.addEventListener("DOMContentLoaded", () => {
    const headerBtn = document.querySelector(".menu_lines"),
          headerMediaContent = document.querySelector(".header__contact-box"),
          close = document.querySelector(".close");


    function openHeaderMediaContent() {
        headerBtn.addEventListener('click', (event) => {
            headerMediaContent.classList.add("header__contact-box_2");
            headerMediaContent.style.transition = "0.4s all linear";
        });

        close.addEventListener('click', (event) => {
            headerMediaContent.classList.remove("header__contact-box_2");
        })
    }
    openHeaderMediaContent()

})
