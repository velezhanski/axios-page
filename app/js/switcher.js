var eur = "eur";
var btc = "btc";

function switchCurrency(){
  const input = document.getElementById('input-currency').innerHTML;
  document.getElementById('input').value = 0
  document.getElementById('output').value = 0

  if (input == eur) {
    document.getElementById('input-currency').innerHTML = btc;
    document.getElementById('output-currency').innerHTML = eur;
  } else {
    document.getElementById('input-currency').innerHTML = eur;
    document.getElementById('output-currency').innerHTML = btc;
  }
}