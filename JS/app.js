function toonCoin(knop) {
  // Haal de coin img op uit dezelfde blok-wrapper
  var wrapper = knop.parentElement;
  var coin = wrapper.querySelector('.coin');

  // Verwijder de klasse eerst (voor herhaald klikken)
  coin.classList.remove('springt');

  // Even wachten zodat de animatie opnieuw start
  void coin.offsetWidth; // forceer reflow

  // Zet de animatie terug aan
  coin.classList.add('springt');

  // Na de animatie: verberg de coin weer
  setTimeout(function() {
    coin.classList.remove('springt');
  }, 700);
}