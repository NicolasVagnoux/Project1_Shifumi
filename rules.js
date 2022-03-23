const imgPFCLS = document.getElementsByClassName("spinOff__grid__2__paragraph");
const imgFEF = document.getElementsByClassName("spinOff__grid__4__paragraph");
const imgPFCP = document.getElementsByClassName("spinOff__grid__6__paragraph");
const gridPFCLS = document.getElementsByClassName("spinOff__grid__2");
const gridFEF = document.getElementsByClassName("spinOff__grid__4");
const gridPFCP = document.getElementsByClassName("spinOff__grid__6");

gridFEF.addEventListener("click", function(){
    imgFEF.style.display=flex;
})

gridPFCLS.addEventListener("click", function(){
    imgPFCLS.style.display=flex;
})

gridPFCP.addEventListener("click", function(){
    imgPFCP.style.display=flex;
})