var video = document.querySelectorAll('iframe');
var btn = document.querySelectorAll('button');
var comment = document.querySelectorAll('.comment-block');
video[0].classList.add('active');
comment[0].classList.add('active');
var current = 0;

function changevideo(videoIndex) {
  video[current].classList.remove('active');
  comment[current].classList.remove('active');
  var src = video[current].getAttribute('src');
  video[current].setAttribute('src', src);
  current = videoIndex;
  video[current].classList.add('active');
  comment[current].classList.add('active');
}
console.log(comment);