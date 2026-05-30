// DATASTRUCTUUR
// Object om de score bij te houden per blok
var spelData = {
  score: 0
};

// FUNCTIE
// Wordt opgeroepen wanneer de gebruiker op een vraagteken-knop klikt
function toonCoin(knop) {

  // Haal de coin-afbeelding op uit hetzelfde blok als de knop
  var coin = knop.parentElement.querySelector('.coin');

  // Verwijder de klasse eerst zodat de animatie herstart bij snel klikken
  coin.classList.remove('actief');

  // Forceer een reflow zodat de browser de klasse-verwijdering opmerkt
  void coin.offsetWidth;

  // Voeg de klasse toe om de animatie te starten
  coin.classList.add('actief');

  // CONTROLESTRUCTUUR
  // Verhoog de score en toon een bericht bij elke 10 coins
  spelData.score = spelData.score + 1;
  document.getElementById('score').textContent = 'Coins: ' + spelData.score;

  if (spelData.score % 10 === 0) {
    alert('Wauw! Je hebt al ' + spelData.score + ' coins verzameld!');
  }

  // Verwijder de klasse na de animatie zodat je opnieuw kan klikken
  setTimeout(function () {
    coin.classList.remove('actief');
  }, 750);
}