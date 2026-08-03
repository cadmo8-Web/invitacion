/*
function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
*/
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
// ---------- Pantalla de bienvenida ----------
const welcomeScreen = document.getElementById('welcome-screen');
const enterBtn = document.getElementById('enter-btn');
document.body.style.overflow = 'hidden';
enterBtn.addEventListener('click', () => {
  welcomeScreen.classList.add('hidden');
  document.body.style.overflow = '';
  setTimeout(() => { welcomeScreen.remove(); }, 850);

  bgMusic.play();
  musicToggle.classList.add('playing');
  musicToggle.setAttribute('aria-label', 'Pausar música');
});