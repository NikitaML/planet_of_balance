$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  new ClipboardJS('.copy-link__icon');

$('.copy-link__icon').on('click', function(){
   
  console.log($('.tootlip .show').html())

})

