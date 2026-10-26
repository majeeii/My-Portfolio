const sectionLinks = document.querySelectorAll(
    '.navbar a[href="#hero"], .navbar a[href="#about"], .navbar a[href="#projects"]'
);

sectionLinks.forEach((link) => {
    link.addEventListener("click", () => {
        const section = document.querySelector(link.getAttribute("href"));

        if (!section) {
            return;
        }

        section.classList.remove("nav-transition");
        void section.offsetWidth;
        section.classList.add("nav-transition");
    });
});
