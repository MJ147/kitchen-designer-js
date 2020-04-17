/* scale features */

function scaleWorkspaceWithWindow() {
   setScale();
   window.addEventListener('resize', setScale);
}

function setScale() {
   var workspace = $('.workspace').children();
 
   var scaleValueX = (parseFloat(window.innerWidth) / ($('#back-wall-width-input')[0].value * 4));
   var scaleValueY = (parseFloat(window.innerHeight) / ($('#back-wall-height-input')[0].value * 3));
   
   var scaleValue = Math.min(scaleValueX, scaleValueY);
   workspace.css('transform', 'scale(' + scaleValue + ',' + scaleValue + ')');
}
