var backWallHeightStartInput = $('#back-wall-height-start-input')[0];
var backWallWidthStartInput = $('#back-wall-width-start-input')[0];

var backWallHeightInput = $('#back-wall-height-input')[0];
var backWallWidthInput = $('#back-wall-width-input')[0];

var startPage = $('.start-page');

var acceptButton = $('#accept-button')[0];

backWallHeightStartInput.addEventListener('keyup', enterKeyOnBackWallStartInputs);
backWallHeightStartInput.addEventListener('focusout', focusoutOnBackWallStartInputs);

backWallWidthStartInput.addEventListener('keyup', enterKeyOnBackWallStartInputs);
backWallWidthStartInput.addEventListener('focusout', focusoutOnBackWallStartInputs);

function enterKeyOnBackWallStartInputs(event){
   if (event.keyCode === 13) {
      this.value = chceckLimitsForValue(this);
      updateCabinets(); 
   }
}

function focusoutOnBackWallStartInputs(event){
   this.value = chceckLimitsForValue(this);
   updateCabinets(); 
}

acceptButton.addEventListener('click', function(){
   backWallHeightInput.value = backWallHeightStartInput.value;
   backWallWidthInput.value = backWallWidthStartInput.value;
   updateDivDimension(backWallHeightInput, backwall);
   updateDivDimension(backWallWidthInput, backwall);
   startPage.css('display', 'none');
   updateCabinets();  
});