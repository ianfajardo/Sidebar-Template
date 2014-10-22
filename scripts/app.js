$("#menu-icon").on('click', function(){
  $(".navigation").toggle();
});

$(window).on('resize', function(){
  if($(window).width() > 992){
    $(".navigation").show();
  }
  else{
    $(".navigation").hide();
  }
});