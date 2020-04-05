(function(){
  
/** back wall **/
   /* back wall height */
   var backWallHeightInput = $('#back-wall-height-input')[0];
   backWallHeightInput.addEventListener('keyup', handleKeyUpOnWallHeightInput);
  
 
   function handleKeyUpOnWallHeightInput(event) {
      if (event.keyCode === 13) {
         backWallHeightInput.value = chceckLimitsForValue(backWallHeightInput.value, 200, 350);
         updateDivDimension(backWallHeightInput)
      }
   }
     
   /* back wall width */
   var backWallWidthInput = $('#back-wall-width-input')[0];
   backWallWidthInput.addEventListener('keyup', handleKeyUpOnWallWidthInput);
  
 
   function handleKeyUpOnWallWidthInput(event) {
      if (event.keyCode === 13) {
         backWallWidthInput.value = chceckLimitsForValue(backWallWidthInput.value, 350, 700);
         updateDivDimension(backWallWidthInput)
      }
   }
   
   
   
   
   
   /* function matches the pair of inputs and objects by id, then resize div dimension to value from input field */
   function updateDivDimension(input) {
      var inputId = input.id;
      var objectToChangeId = convertInputIdToObjectId(inputId);
      var objectToChange = $(objectToChangeId)[0]
      if (inputId.includes('height')) {
         objectToChange.style.height = input.value + 'px'
      }
      if (inputId.includes('width')) {
         objectToChange.style.width = input.value + 'px'
      }
   }
         
   function chceckLimitsForValue(value,min,max) {
      if (value < min) {
         return min;
      }
      if (value > max) {
         return max;
      }
      return value
   }
   
   /* convet input id to object id e.g. input id="back-wall-height-dimension" with div id="back-wall" */
   function convertInputIdToObjectId(inputId){
      var objectToChangeId = '#' + inputId.replace(/-height.*/,'').replace(/-width.*/,'')
      return objectToChangeId
   }
   
})();