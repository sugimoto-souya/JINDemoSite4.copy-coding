$(function(){
  pagetop = $('#page-top');
  pagetop.hide();
  $(window).scroll(function(){
    if($(this).scrollTop() > 700){
      pagetop.fadeIn();
    }else{
      pagetop.fadeOut();
    }
  });

  pagetop.click(function(){
     $('body,html').animate({
       scrollTop: 0
     }, 500);
     return false;
   });
});
