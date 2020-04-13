/** back wall **/
var backwall = $('#back-wall');
var wallSection = $('.wall-section');

var backWallHeightInput = $('#back-wall-height-input')[0];
var backWallWidthInput = $('#back-wall-width-input')[0];

function setWalls() {
   updateDivDimension(backWallHeightInput, backwall);
   updateDivDimension(backWallWidthInput, backwall);
   setWallsColor(); 
}

function setWallsColor(){
   setColorFromPicker(backwallColorPicker, backwall); 
}

/* back wall color */
var backwallColorPicker = $('#back-wall-color-picker')[0];
pickerHandler(backwallColorPicker,backwall);

/* back wall height */
backWallHeightInput.addEventListener('keyup', function(){ 
      handleKeyUpOnWallDimInput(event, backwall, backWallHeightInput, 2300, 3000);
});

/* back wall width */
var backWallWidthInput = $('#back-wall-width-input')[0];
backWallWidthInput.addEventListener('keyup', function(){ 
      handleKeyUpOnWallDimInput(event, backwall, backWallWidthInput, 1200, 5000);
});
