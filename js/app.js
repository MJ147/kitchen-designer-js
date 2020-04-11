document.addEventListener('DOMContentLoaded', function() {
   setWalls();
   setInitialCabinets();
   $(function () {
      $('[data-toggle="popover"]').popover()
   })
});