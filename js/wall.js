/** back wall **/
var backwall = $('#back-wall')[0];
/* back wall color */
var backwallColorPicker = $('#back-wall-color-picker')[0];


pickerHandler(backwallColorPicker,backwall);

function pickerHandler(colorPicker, objectToChange) {
   colorPicker.addEventListener('mousedown', function(){
      document.addEventListener('mousemove', function(){
         setColorFromPicker(colorPicker, objectToChange);
      });      
   });   
}

function setColorFromPicker(colorPicker, objectToChange) {
   objectToChange.style.backgroundColor = colorPicker.style.backgroundColor;
}

/* back wall height */
var backWallHeightInput = $('#back-wall-height-input')[0];
backWallHeightInput.addEventListener('keyup', function(){ 
      handleKeyUpOnWallHeightInput(event, backwall);
});

function handleKeyUpOnWallHeightInput(event, backwall) {
   if (event.keyCode === 13) {
      backWallHeightInput.value = chceckLimitsForValue(backWallHeightInput.value, 200, 350);
      updateDivDimension(backWallHeightInput, backwall)
   }
}

/* back wall width */
var backWallWidthInput = $('#back-wall-width-input')[0];
backWallWidthInput.addEventListener('keyup', function(){ 
      handleKeyUpOnWallWidthInput(event, backwall);
});

function handleKeyUpOnWallWidthInput(event, backwall) {
   if (event.keyCode === 13) {
      backWallWidthInput.value = chceckLimitsForValue(backWallWidthInput.value, 250, 700);
      updateDivDimension(backWallWidthInput, backwall)
      updateCabinets();  
   }
}

/* function matches the pair of inputs and objects by id, then resize div dimension to value from input field */
function updateDivDimension(input, objectToChange) {
   var inputId = input.id;
//   var objectToChangeId = convertInputIdToObjectId(inputId);
//   var objectToChange = $(objectToChangeId)[0]
   if (inputId.includes('height')) {
      objectToChange.style.height = input.value + 'px'
   }
   if (inputId.includes('width')) {
      objectToChange.style.width = input.value + 'px'
   }
}

function chceckLimitsForValue(value,min,max) {
   if (value < min) {
      return min ;
   }
   if (value > max) {
      return max;
   }
   return value
}

/* convet any input id to object id e.g. input id="back-wall-height-dimension" with div id="back-wall" */
//function convertInputIdToObjectId(inputId){
//   var objectToChangeId = '#' + inputId.replace(/-height.*/,'')
//                                       .replace(/-width.*/,'')
//                                       .replace(/-color.*/,'')
//   return objectToChangeId
//}

