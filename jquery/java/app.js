var next = document.getElementById("next")
var prew = document.getElementById("prew")
var sliderUl = document.querySelector(".slider ul")
var kamran = 0
next.onclick = function () {
    kamran++;
    if (
        kamran == sliderUl.querySelectorAll('li').length) { kamran = 0 }

    sliderUl.style.left = -800 * kamran + "px"
}
prew.onclick = function () {
    kamran--;
    if (kamran == -1) { kamran = sliderUl.querySelectorAll("li").length - 1 }
    sliderUl.style.left = -800 * kamran + "px"
}