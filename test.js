var runningTotal = 0.0;
function addItem()
{
  var newItem;
  newItem = document.getElementById("price").value;
  if(isNaN(newItem))
  {
    console.log("Enter price as a number");
  }
  else{
    Number(newItem);
    runningTotal = parseInt(runningTotal) + parseInt(newItem);
    var dollars = asCurrency(runningTotal);
    document.getElementById("subtotal").innerHtml = dollars;
    document.getElementById("price").value = "";
    setCookie("preTax", runningTotal, 5);
    console.log(runningTotal);
    document.cookie = "userName=preTax; value=runningTotal; expires=Thu, 18 Dec 2017 12:00:00 UTC;"
  }
  // update a cookie called "preTax" with the value of runningTotal
}
function calculateReceipt(){
  var receiptSubtotal = Number(preTax);
  var receiptTax = receiptSubtotal * 0.075;
  var receiptTotal = parseInt(receiptSubtotal) + parseInt(receiptTax);
  document.getElementById("sub").value = receiptSubtotal;
  document.getElementById("tax").value = receiptTax;
  document.getElementById("tot").value = receiptTotal;
}
//takes a number and gives a string with the number displayed as USD currency
function asCurrency(val)
{
  return "$" + val.toFixed(2);
}

function correctPattern()
{
  var answer = document.getElementById("pat");
  if(answer.value == 55)
  {
    console.log("correct");
    document.getElementById("err").innerHTML = "correct";
  }
  else if(isNan(answer.value))
  {
    document.getElementById("err").innerHTML = "incorrect";
  }
  else
    {
      document.getElementById("err").innerHTML = "Enter a number";
    }
}
