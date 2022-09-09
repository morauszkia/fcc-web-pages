const nav = document.querySelector("#navbar");
const section1 = document.getElementById("welcome-section");
const roles = document.querySelector(".roles");
window.addEventListener("scroll", fixNav);

function fixNav() {
    const height = section1.getBoundingClientRect();
    console.log(height);
    if (
        window.scrollY >
        section1.getBoundingClientRect().height - nav.offsetHeight - 15
    ) {
        console.log("Removing");
        nav.classList.remove("dark");
        nav.classList.add("active");
    } else if (
        window.scrollY >
        roles.getBoundingClientRect().height - nav.offsetHeight
    ) {
        console.log("Dark!");
        nav.classList.remove("active");
        nav.classList.add("dark");
        console.log("Removing");
    } else {
        nav.classList.remove("dark");
        nav.classList.remove("active");
    }
}
