function initialize() {
  const currency = document.getElementById('input-currency').innerHTML;
  const ammount = document.getElementById('input').value;

  $.ajax({
    url: `https://demo.tezelt.com/api/v1/exchange?btc=1`,
    success: function (result) {
      document.getElementById('currency-price').innerHTML = `Market Rate* : 1 BTC - ${result} EUR`;
    }
  });
}