function scaleWorkspaceWithWindow() {
   setScale();
   window.addEventListener('resize', setScale);
}

function setScale() {
   var workspace = $('.workspace');
   var scaleValue = (parseFloat(window.innerWidth) / ($('#back-wall-width-input')[0].value * 2));
   workspace.css('transform', 'scale(' + scaleValue + ',' + scaleValue + ')');
   var xCenter = parseFloat(window.innerWidth) * parseFloat(window.innerWidth) / 10000;
   var yCenter = parseFloat(window.innerHeight) * parseFloat(window.innerHeight) / 15000;
   workspace.css('transform-origin', xCenter + 'px ' + yCenter + 'px');
}