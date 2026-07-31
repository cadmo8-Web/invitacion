function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

// ---------- Música de fondo ----------
const bgMusic = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');
musicToggle.addEventListener('click', () => {
  if(bgMusic.paused){
    bgMusic.play();
    musicToggle.classList.add('playing');
    musicToggle.setAttribute('aria-label', 'Pausar música');
  } else {
    bgMusic.pause();
    musicToggle.classList.remove('playing');
    musicToggle.setAttribute('aria-label', 'Reproducir música');
  }
});