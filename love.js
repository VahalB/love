const heartImage = document.querySelector('.heart');
const skullImage = document.querySelector('.death');
const yesButton = document.querySelector('.yes');
const noButton = document.querySelector('.no');

const yesSound = new Audio('star.mp3');
const noSound = new Audio('gameover.mp3');

noButton.addEventListener('click', () => {
  heartImage.style.display = 'none';
  skullImage.style.display = 'block';
  noSound.play();
  yesSound.pause();
});

yesButton.addEventListener('click', () => {
  heartImage.style.display = 'block';
  skullImage.style.display = 'none';
  yesSound.play();
  noSound.pause();
});
