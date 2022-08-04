let closeIcon = document.querySelector(".close");
let menu = document.querySelector(".menu");
let header = document.querySelector(".header");
let upArrow = document.querySelector(".upArrow");
let closeImg = document.querySelector(".closeImg");

closeIcon.addEventListener("click", () => {
    header.style.left = "-500px"

})

menu.addEventListener("click", () => {
    header.style.left = "0px"
    // menu.style.display = "none"
})

window.addEventListener("scroll", function () {
    if (this.scrollY > 350) {
        upArrow.style.display = "block";
    }

    else {
        upArrow.style.display = "none";
    }

});

let img0 = document.getElementById("img0")
let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let img3 = document.getElementById("img3")
let img4 = document.getElementById("img4")
let img5 = document.getElementById("img5")
let img6 = document.getElementById("img6")
let img7 = document.getElementById("img7")

img0.addEventListener("click",()=> {toggleFullScreen(img0)});
img1.addEventListener("click",()=> {toggleFullScreen(img1)});
img2.addEventListener("click",()=> {toggleFullScreen(img2)});
img3.addEventListener("click",()=> {toggleFullScreen(img3)});
img4.addEventListener("click",()=> {toggleFullScreen(img4)});
img5.addEventListener("click",()=> {toggleFullScreen(img5)});
img6.addEventListener("click",()=> {toggleFullScreen(img6)});
img7.addEventListener("click",()=> {toggleFullScreen(img7)});


function toggleFullScreen(id) {

    // id.addEventListener("click", () => {
        id.classList.add("fullScreen")
        let imgParent = id.parentElement;
        imgParent.classList.add("fullSize")
        closeImg.style.display = "block";
    // })

    closeImg.addEventListener("click", () => {
        id.classList.remove("fullScreen")
        let imgParent = id.parentElement;
        imgParent.classList.remove("fullSize")
        closeImg.style.display = "none";
    })
}
