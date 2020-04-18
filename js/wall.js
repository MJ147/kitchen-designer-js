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
backWallHeightInput.addEventListener('keyup', enterKeyOnBackWallInputs);
backWallHeightInput.addEventListener('focusout', focusoutOnBackWallInputs);

/* back wall width */
backWallWidthInput.addEventListener('keyup', enterKeyOnBackWallInputs);
backWallWidthInput.addEventListener('focusout', focusoutOnBackWallInputs);

function enterKeyOnBackWallInputs(event){
   if (event.keyCode === 13) {
      handleKeyUpOnWallDimInput(backwall, this);
      updateCabinets();
      setScale();   
   }
}

function focusoutOnBackWallInputs(event){
   handleKeyUpOnWallDimInput(backwall, this);
   updateCabinets();
   setScale();   
}
