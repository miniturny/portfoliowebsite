var screen = 0;

function animateBurger(x) {
    x.classList.toggle("burgerChange");
    if(screen == 1){
      console.log($('#aboutScreen').css("left"));
      if($('#aboutScreen').css("left") == (150+"px")){
        $('#aboutScreen').css("left", "0px");
        $('#aboutScreen').css("right", "300px");
      }else{
        $('#aboutScreen').css("left", "150px");
        $('#aboutScreen').css("right", "150px");
      }
    }
}

function showAboutScreen(){
  $('#bc').click();
  $('#welcomeScreen').fadeOut('slow');
  $('#aboutScreen').delay(1000);
  $('#aboutScreen').fadeIn(250);
  screen = 1;
}
