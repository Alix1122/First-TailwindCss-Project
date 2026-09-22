let mobileBtn = document.getElementById("mobile-btn");
let mobileMenu = document.getElementById("mobile-menu");

mobileBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("flex");
    mobileMenu.classList.toggle("hidden");
});
