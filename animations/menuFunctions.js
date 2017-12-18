function animateBurger(x) {
    x.classList.toggle("burgerChange");
}

function showAboutScreen(){
  $('#bc').click();
  $('#welcomeScreen').fadeOut('slow');
  $('#aboutScreen').delay(1000);
  $('#aboutScreen').fadeIn(250);
}
