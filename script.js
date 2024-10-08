"use strict"

let image = document.querySelector('#image');
let title = document.querySelector('#title');
let btnYes = document.querySelector('#btnYes');
let btnNo = document.querySelector('#btnNo');
let happySound = new Audio("./https://www.myinstants.com/en/instant/happy-happy-happy-cat-17367/?utm_source=copy&utm_medium=share")
let sadSound = new Audio("./https://www.myinstants.com/en/instant/crying-cat-45397/?utm_source=copy&utm_medium=share")

btnYes.addEventListener('click', () => {
    image.src = "./assets/happy-cat-happy-happy-cat.gif"
    title.innerHTML = "Aww I love you too 😘"
    sadSound.pause()
    happySound.play()
    happySound.loop = true
})

let btnYesScale = 1;
let btnNoScale = 1;

btnNo.addEventListener('click', () => {
    image.src = "https://i.pinimg.com/originals/64/4b/88/644b88254ec38a97c422ce861ddcaea2.gif"
    title.innerHTML = "Oh no, please click yes"
    happySound.pause()
    sadSound.play()
    sadSound.loop = true
    btnNoScale -= 0.1;
    btnYesScale += 0.1;
    btnNo.style.transform = `scale(${btnNoScale})`
    btnYes.style.transform = `scale(${btnYesScale})`
});
