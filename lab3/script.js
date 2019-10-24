var themeButton = document.getElementById('theme'),
  color = document.getElementById('background-color'),
  checkImg = document.querySelectorAll('img.check');

function theme() {
  if (themeButton.checked) {
    color.classList.toggle('night');
    checkImg[0].className = 'check';
  } else {
    color.classList.toggle('night');
    checkImg[1].className = 'check none';
  }
}