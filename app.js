const btn = document.querySelector(".btn");
const btnClose = document.querySelector(".btn-close");

let modal = document.querySelector(".modal");


btn.addEventListener("click", () => {
    modal.style.display = "block"
})

btnClose.addEventListener("click", () => {
    modal.style.display = "none";
})
