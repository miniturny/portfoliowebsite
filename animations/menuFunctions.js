var screen = {no: 0, name: "#welcomeScreen"};

function animateBurger(x) {
    x.classList.toggle("burgerChange");
    if(screen.no == 1){
      if($('#aboutScreen').css("left").replace('px', '') > 0){
        console.log("doing it");
        if($(window).width() < 500){
          $('#aboutScreen').css("right", "35%");
          $('#aboutScreen').css("left", "-15%");
        }else{
          $('#aboutScreen').css("right", "20%");
          $('#aboutScreen').css("left", "0%");
        }
      }else{
        $('#aboutScreen').css("right", "10%");
        $('#aboutScreen').css("left", "10%");
      }
    }else if(screen.no == 2){
      if($('#skillScreen').css("left").replace('px', '') > 0){
        if($(window).width() < 500){
          $('#skillScreen').css("right", "35%");
          $('#skillScreen').css("left", "-15%");
        }else{
          $('#skillScreen').css("right", "20%");
          $('#skillScreen').css("left", "0%");
        }
      }else{
        $('#skillScreen').css("right", "10%");
        $('#skillScreen').css("left", "10%");
      }
    }else if(screen.no == 3){
      if($('#portfolioScreen').css("left").replace('px', '') > 0){
        if($(window).width() < 500){
          $('#portfolioScreen').css("right", "35%");
          $('#portfolioScreen').css("left", "-15%");
        }else{
          $('#portfolioScreen').css("right", "20%");
          $('#portfolioScreen').css("left", "0%");
        }
      }else{
        $('#portfolioScreen').css("right", "10%");
        $('#portfolioScreen').css("left", "10%");
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
