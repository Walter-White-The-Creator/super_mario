// 9. Datastructuur: Object om de score bij te houden per spel
let spelData = {
  score: 0
};

// 10. Functie: Wordt opgeroepen wanneer de gebruiker op een vraagteken-knop klikt
function toonCoin(knop) {
  let coin = knop.parentElement.querySelector('.coin');

  coin.classList.remove('actief');
  void coin.offsetWidth; 
  coin.classList.add('actief');

  spelData.score = spelData.score + 1;
  document.getElementById('score').textContent = 'Coins: ' + spelData.score;

  // Controlestructuur: Toon een bericht bij elke 10 coins
  if (spelData.score % 10 === 0) {
    alert('Wauw! Je hebt al ' + spelData.score + ' coins verzameld!');
  }

  setTimeout(function () {
    coin.classList.remove('actief');
  }, 500);
}