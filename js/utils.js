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
      objectsToChange.css('border', 'solid 1px rgba(0, 0, 0, 0.1)');
   }
}

/* dimension input */

function handleKeyUpOnWallDimInput(objectsToChange, input) {
   input.value = chceckLimitsForValue(input);
   updateDivDimension(input, objectsToChange)
}

function updateDivDimension(input, objectsToChange) {
   var inputId = input.id;
   if (inputId.includes('height')) {
      for (var i = 0; i < objectsToChange.length; i++) {
         objectsToChange[i].style.height = input.value*2 + 'px';
      }
   }
   if (inputId.includes('width')) {
      for (var i = 0; i < objectsToChange.length; i++) {
         objectsToChange[i].style.width = input.value*2 + 'px';
      }
   }
}

function chceckLimitsForValue(input) {
   if (input.value < parseInt(input.min)) {
      return input.min;
   }
   if (input.value > parseInt(input.max)) {
      return input.max;
   }

   return input.value;
}
