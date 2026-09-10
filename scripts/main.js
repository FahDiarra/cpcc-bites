


const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;

const open = document.getElementById("openBtn");
const close = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobileMenu");

open.onclick = () => {
    mobileMenu.classList.add("open");
};

close.onclick = () => {
    mobileMenu.classList.remove("open");
};