/* color picker */

function pickerHandler(colorPicker, objectsToChange) {
   colorPicker.addEventListener('mousedown', function(){
      document.addEventListener('mousemove', function(){
         setColorFromPicker(colorPicker, objectsToChange);
      });      
   });   
}

function setColorFromPicker(colorPicker, objectsToChange) {
   for (var i = 0; i < objectsToChange.length; i++) {
      var pickerColor = colorPicker.style.backgroundColor;
      objectsToChange.css('background-color', pickerColor);
      objectsToChange.css('border', 'solid 1px rgba(0, 0, 0, 0.05)');
   }
}

/* dimension input */

function handleKeyUpOnWallDimInput(objectsToChange, input, min, max) {
   input.value = chceckLimitsForValue(input.value*2, min*2, max*2);
   updateDivDimension(input, objectsToChange)
   setInitialCabinets();  

}

function updateDivDimension(input, objectsToChange) {
   var inputId = input.id;
   if (inputId.includes('height')) {
      for (var i = 0; i < objectsToChange.length; i++) {
         objectsToChange[i].style.height = input.value*2 + 'px'
      }
   }
   if (inputId.includes('width')) {
      for (var i = 0; i < objectsToChange.length; i++) {
         objectsToChange[i].style.width = input.value*2 + 'px'
      }
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
