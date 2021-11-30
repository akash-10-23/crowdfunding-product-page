const support = document.getElementById("support");
const supportMenu = document.querySelector(".supportMenu");
const supportClose = document.querySelector(".supportClose");

support.addEventListener("click", () => {
    supportMenu.classList.add("supportMenuShow");
    window.scrollTo(0, 0);
});

supportClose.addEventListener("click", () => {
    supportMenu.classList.remove("supportMenuShow");
    window.scrollTo(0,0);
});