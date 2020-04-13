document.addEventListener('DOMContentLoaded', function() {
   scaleWorkspaceWithWindow();
   setWalls();
   setInitialCabinets();
   
   $(function () {
         $('[data-toggle="popover"]').popover()
   })
});

