function performExchange() {
  const currency = document.getElementById('input-currency').innerHTML;
  const ammount = document.getElementById('input').value;

  $.ajax({
    url: `https://demo.tezelt.com/api/v1/exchange?${currency}=${ammount}`,
    success: function (result) {
      document.getElementById('output').value = result;
    }
  });
}