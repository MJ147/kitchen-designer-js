document.addEventListener('DOMContentLoaded', function() {
   $('#staticBackdrop').modal('show')
   
   scaleWorkspaceWithWindow();
   
   $(function () {
         $('[data-toggle="popover"]').popover()
   })
});

