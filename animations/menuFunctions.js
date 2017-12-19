var screen = {no: 0, name: "#welcomeScreen"};

function animateBurger(x) {
    x.classList.toggle("burgerChange");
    if(screen.no == 1){
      if($('#aboutScreen').css("left") == (150+"px")){
        $('#aboutScreen').css("right", "300px");
        $('#aboutScreen').css("left", "0px");
      }else{
        $('#aboutScreen').css("right", "150px");
        $('#aboutScreen').css("left", "150px");
      }
    }else if(screen.no == 2){
      if($('#skillScreen').css("left") == (150+"px")){
        $('#skillScreen').css("right", "300px");
        $('#skillScreen').css("left", "0px");
      }else{
        $('#skillScreen').css("right", "150px");
        $('#skillScreen').css("left", "150px");
      }
    }
}

function showScreen(newScreen, name){
  $('#bc').click();
  if(screen.name == name){
    return;
  }
  $(screen.name).fadeOut('slow');
  $(name).delay(750);
  $(name).fadeIn('slow');
  screen.no = newScreen;
  screen.name = name;
}

window.onscroll = function (e) {
// called when the window is scrolled.
  var height = (document.documentElement.scrollTop+10);

  document.getElementById("bc").style.top = height + "px";
}
