/** cabinets **/

/* cabinets color */
var cabinetColorPicker = $('#cabinets-color-picker')[0];

function setInitialCabinets() {
   var baseCabinetsWrapper = $('#base-cabinets-wrapper');
   createCabinets(baseCabinetsWrapper);

   var upperCabinetsWrapper = $('#upper-cabinets-wrapper');
   createCabinets(upperCabinetsWrapper);
   
   allCabinets = $('.cabinet, .last-cabinet, #plinth, #moulding');
   
   setColorFromPicker(cabinetColorPicker, allCabinets);
   pickerHandler(cabinetColorPicker, allCabinets);
}

function createCabinets(cabinetsWrapper) {
   cabinetsWrapper.empty();
   //create all 60cm width cabinets
   for(var i = 0; i < (cabinetsWrapper[0].offsetWidth/60) - 1 ; i++) {
      cabinetsWrapper.append('<div class="cabinet border border-secondary"></div>');    
   }   
   //create last cabinet
   cabinetsWrapper.append('<div class="last-cabinet border border-secondary"></div>');  
}