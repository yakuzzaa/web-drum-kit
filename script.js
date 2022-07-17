
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
