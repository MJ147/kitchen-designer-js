/** cabinets **/

/* cabinets color */


function setInitialCabinets() {
   createCabinetWrappers();
   var baseCabinetsWrapper = $('#base-cabinets-wrapper');
   createCabinets(baseCabinetsWrapper);

   var upperCabinetsWrapper = $('#upper-cabinets-wrapper');
   createCabinets(upperCabinetsWrapper);
   
   allCabinets = $('.global-color');
   
   var cabinetColorPicker = $('#cabinets-color-picker')[0];
   setColorFromPicker(cabinetColorPicker, allCabinets);
   pickerHandler(cabinetColorPicker, allCabinets);
   
   countertop = $('#countertop-wrapper');
   
   var countertopColorPicker = $('#countertop-color-picker')[0];
   setColorFromPicker(countertopColorPicker, countertop);
   pickerHandler(countertopColorPicker, countertop);
}

function createCabinetWrappers() {
   var backWall = $('#back-wall');
   backWall.empty();
   backWall.append('<div class="global-color border border-secondary" id="moulding-wrapper"></div>');
   backWall.append('<div class="border border-secondary" id="main-cabinets-wrapper"></div>');
   backWall.append('<div class="global-color border border-secondary" id="plinth-wrapper"></div>');
  
   var mainCabinetsWrapper = $('#main-cabinets-wrapper');
   mainCabinetsWrapper.append('<div class="border border-secondary" id="fridge-wrapper"></div>');
   mainCabinetsWrapper.append('<div class="border border-secondary" id="cabinets-wrapper-1"></div>'); 
   
   var fridgeWrapper = $('#fridge-wrapper');
   fridgeWrapper.append('<div class="global-color border border-secondary" id="cabinet-over-fridge"></div>');
   fridgeWrapper.append('<div class="global-color border border-secondary" id="fridge"></div>');
   
   var cabinetsWrapper1 = $('#cabinets-wrapper-1');
   cabinetsWrapper1.append('<div class="global-color" id="upper-cabinets-wrapper"></div>');
   cabinetsWrapper1.append('<div id="backsplash-wrapper"></div>');
   cabinetsWrapper1.append('<div id="countertop-wrapper"></div>');
   cabinetsWrapper1.append('<div class="global-color" id="base-cabinets-wrapper"></div>');
}

function createCabinets(cabinetsWrapper) {
   cabinetsWrapper.empty();
   //create all 60cm width cabinets
   for(var i = 0; i < (cabinetsWrapper[0].offsetWidth/600) - 1 ; i++) {
      cabinetsWrapper.append('<div class="cabinet border border-secondary"></div>');    
   }   
   //create last cabinet
   cabinetsWrapper.append('<div class="last-cabinet border border-secondary"></div>');  
}