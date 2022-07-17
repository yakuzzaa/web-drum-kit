function  playOnClick(alpha){
    const sound = document.querySelector('.sound'+alpha);
    sound.currentTime = 0;
    playAudio(sound);
}
function playAudio(x) {
    x.play();
}

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key= "${e.keyCode}"]`);
    audio.currentTime = 0;
    if (!audio) return;
    playAudio(audio);
    key.classList.add('playing');
}

function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing')
}

const keys =document.querySelectorAll('.key');
keys.forEach(key =>key.addEventListener('transitionend',removeTransition));

window.addEventListener('keydown', playSound);


//лютейший говнокод, исправлю когда будет вдохновение :))
const A = document.querySelector('.A');
A.addEventListener("click",function (e){
    playOnClick("A");
});
const S = document.querySelector('.S');
S.addEventListener("click",function (e){
    playOnClick("S");
});
const D = document.querySelector('.D');
D.addEventListener("click",function (e){
    playOnClick("D");
});
const F = document.querySelector('.F');
F.addEventListener("click",function (e){
    playOnClick("F");
});
const G = document.querySelector('.G');
G.addEventListener("click",function (e){
    playOnClick("G");
});
const H = document.querySelector('.H');
H.addEventListener("click",function (e){
    playOnClick("H");
});
const J = document.querySelector('.J');
J.addEventListener("click",function (e){
    playOnClick("J");
});
const K = document.querySelector('.K');
K.addEventListener("click",function (e){
    playOnClick("K");
});
const L = document.querySelector('.L');
L.addEventListener("click",function (e){
    playOnClick("L");
});
