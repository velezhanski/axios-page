var eur = "EUR";
var btc = "BTC";

function switchCurrency(){
  const input = document.getElementById('input-currency').innerHTML;

  if (input == eur) {
    document.getElementById('input-currency').innerHTML = btc;
    document.getElementById('output-currency').innerHTML = eur;
  } else {
    document.getElementById('input-currency').innerHTML = eur;
    document.getElementById('output-currency').innerHTML = btc;
  }
}