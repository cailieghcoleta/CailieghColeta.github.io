const modal = document.getElementById('modalLetter');
const bgMusic = document.getElementById('bgMusic');

document.getElementById('openModal').addEventListener('click', function () {
  modal.style.display = 'block';
  bgMusic.currentTime = 0;
  bgMusic.play();
});

document.getElementById('closeModal').addEventListener('click', function () {
  modal.style.display = 'none';
  bgMusic.pause();
  bgMusic.currentTime = 0;
});

window.addEventListener('click', function (e) {
  if (e.target === modal) {
    modal.style.display = 'none';
    bgMusic.pause();
    bgMusic.currentTime = 0;
  }
});
