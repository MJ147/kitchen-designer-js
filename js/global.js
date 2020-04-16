/* scale features */

function scaleWorkspaceWithWindow() {
//   setScale();
//   window.addEventListener('resize', setScale);
}

function setScale() {
   var workspace = $('.workspace').children();
   
   var scaleValueX = (parseFloat(window.innerWidth) / ($('#back-wall-width-input')[0].value * 2));
   var scaleValueY = (parseFloat(window.innerHeight) / ($('#back-wall-height-input')[0].value * 1.5));
   var scaleValue = Math.min(scaleValueX, scaleValueY);
   workspace.css('transform', 'scale(' + scaleValue + ',' + scaleValue + ')');
   
   var xCenter = parseFloat(window.innerWidth) * parseFloat(window.innerWidth) / 10000;
   var yCenter = parseFloat(window.innerHeight) * parseFloat(window.innerHeight) / 10000;
   workspace.css('transform-origin', xCenter + 'px ' + yCenter + 'px');
   console.log($('.workspace')[0].offsetWidth);
}