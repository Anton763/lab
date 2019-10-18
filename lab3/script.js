var themebutton = document.getElementById('theme'),
  color = document.getElementById('background-color'),
  checkImg = document.querySelectorAll('img.check');

function theme() {
  if (themebutton.checked) {
    color.classList.toggle('night');
    checkImg[0].className = 'check none';
    checkImg[1].className = 'check';
  } else {
    color.classList.toggle('night');
    checkImg[0].className = 'check';
    checkImg[1].className = 'check none';
  }
}