let skillBtn = document.querySelector("#skills-btn") as HTMLButtonElement;
let skillList = document.querySelector(".skills") as HTMLElement;

skillBtn.innerHTML = "Hide Skills";

skillBtn?.addEventListener("click", () => {
    if (skillList.style.display === "none" || !skillList.style.display) {
        skillBtn.innerHTML = "Hide Skills"
        skillList.style.display = "block"
    }
    else {
        skillList.style.display = "none"
        skillBtn.innerHTML = "Show Skills"


    }
})
