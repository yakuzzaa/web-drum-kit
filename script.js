
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
    this.classList.remove('playing');
}

const keys =document.querySelectorAll('.key');
keys.forEach(key =>key.addEventListener('transitionend',removeTransition));


window.addEventListener('keydown', playSound);


//лютейший говнокод, исправлю когда будет вдохновение :))
const A = document.querySelector('.A');
A.addEventListener("click",function (e){
    playOnClick("A");
    A.classList.add('playing');
    A.forEach(A =>A.addEventListener('transitionend',removeTransition));
});
const S = document.querySelector('.S');
S.addEventListener("click",function (e){
    playOnClick("S");
    S.classList.add('playing');
    S.forEach(S =>S.addEventListener('transitionend',removeTransition));
});
const D = document.querySelector('.D');
D.addEventListener("click",function (e){
    playOnClick("D");
    D.classList.add('playing');
    D.forEach(D =>D.addEventListener('transitionend',removeTransition));
});
const F = document.querySelector('.F');
F.addEventListener("click",function (e){
    playOnClick("F");
    F.classList.add('playing');
    F.forEach(F =>F.addEventListener('transitionend',removeTransition));
});
const G = document.querySelector('.G');
G.addEventListener("click",function (e){
    playOnClick("G");
    G.classList.add('playing');
    G.forEach(G =>G.addEventListener('transitionend',removeTransition));
});
const H = document.querySelector('.H');
H.addEventListener("click",function (e){
    playOnClick("H");
    H.classList.add('playing');
    H.forEach(H =>H.addEventListener('transitionend',removeTransition));
});
const J = document.querySelector('.J');
J.addEventListener("click",function (e){
    playOnClick("J");
    J.classList.add('playing');
    J.forEach(J =>J.addEventListener('transitionend',removeTransition));
});
const K = document.querySelector('.K');
K.addEventListener("click",function (e){
    playOnClick("K");
    K.classList.add('playing');
    K.forEach(K =>K.addEventListener('transitionend',removeTransition));
});
const L = document.querySelector('.L');
L.addEventListener("click",function (e){
    playOnClick("L");
    L.classList.add('playing');
    L.forEach(L =>L.addEventListener('transitionend',removeTransition));
});
const M = document.querySelector('.M');
M.addEventListener("click",function (e){
    playOnClick("M");
    M.classList.add('playing');
    M.forEach(M =>M.addEventListener('transitionend',removeTransition));
});
