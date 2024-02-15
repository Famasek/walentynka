document.getElementById('yesButton').addEventListener('click', function() {
  window.location.href = 'podstrona.html';
});

document.getElementById('noButton').addEventListener('mouseenter', function() {
  moveButton();
});

document.getElementById('noButton').addEventListener('click', function() {
  moveButton();
});

function moveButton() {
  var button = document.getElementById('noButton');
  var container = document.querySelector('.full-screen-container');
  var containerRect = container.getBoundingClientRect();
  var maxX = containerRect.width - button.offsetWidth;
  var maxY = containerRect.height - button.offsetHeight;
  
  var randomX = Math.floor(Math.random() * maxX);
  var randomY = Math.floor(Math.random() * maxY);

  button.style.position = 'absolute';
  button.style.left = randomX + 'px';
  button.style.top = randomY + 'px';
}
