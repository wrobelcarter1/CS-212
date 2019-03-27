function calculate()
{
  var tax = document.getElementById("taxpercent").value;
  var tip = document.getElementById('tippercent').value;
  var price = document.getElementById('price').value;
  var taxpercent = Number(tax) / 100;
  var taxtotal = taxpercent * Number(price);
  var tippercent = Number(tip) / 100;
  var tiptotal = (taxtotal + Number(price)) * tippercent;
  var totalprice = Number(price) + tiptotal + taxtotal;
  var taxinput = document.getElementById("taxpercent");
  var tipinput = document.getElementById('tippercent');
  if(!taxinput.checkValidity())
  {
    var error1 = "Invalid entry for tax percent. Must be a number between 0 and 100";
  }
  if(!tipinput.checkValidity())
  {
    var error2 = "Invalid entry for tip percent. Must be a number between 0 and 200";
  }
  if(error1 || error2)
  {
    window.alert(error1 + '\n' + error2);
  }
  else {
    document.getElementById('priceresult').innerHTML = "Price: $" + Number(price).toFixed(2);
    document.getElementById('taxresult').innerHTML = "Tax: $" + Number(taxtotal).toFixed(2);
    document.getElementById('tipresult').innerHTML = "Tip: $" + Number(tiptotal).toFixed(2);
    document.getElementById('totalresult').innerHTML = "Total: $" + Number(totalprice).toFixed(2);
  }
}
