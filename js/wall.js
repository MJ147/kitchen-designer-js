var backWallHeightInput = $('#wall-height-input')[0];
var backWall = $('.back-wall')[0]

backWallHeightInput.addEventListener('keyup', function(event) {
   if (event.keyCode === 13) {
      backWall.style.height = event.target.value + 'px';
   }
});

var backWallWidthInput = $('#wall-width-input')[0];
var backWall = $('.back-wall')[0]

backWallWidthInput.addEventListener('keyup', function(event) {
   if (event.keyCode === 13) {
      backWall.style.width = event.target.value + 'px';
   }
});
