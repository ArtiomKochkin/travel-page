// fixed header

(function () {
    const header = document.querySelector(".header");
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add("header_active");
        } else {
            header.classList.remove("header_active");
        }
    };
}());


// burger handler

(function () {
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".header__nav");
    const menuCloseItem = document.querySelector(".header__nav-close");

    burger.addEventListener("click", () => {
        menu.classList.add("header__nav_active");
    });
    menuCloseItem.addEventListener("click", () => {
        menu.classList.remove("header__nav_active");
    });
}());


// scroll to sections

(function () {
   const navLinks = document.querySelectorAll(".scroll_link");
   const menu = document.querySelector(".header__nav");

   navLinks.forEach(scrollWindow);

    function scrollWindow(item) {
        item.addEventListener("click", function() {
            let currentLink = item;
            let linkID = currentLink.getAttribute("data-scroll");
            let currentSection = document.querySelector(linkID);

            menu.classList.remove("header__nav_active");

            currentSection.scrollIntoView({
                behavior: "smooth"
            });
        }); 
   }
}());