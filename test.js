// Author: Garrett De Long
function correctPattern()
{
  var answer = document.getElementById("pat").value;
  if(answer == 34)
  {
    document.getElementById("err").innerHTML = "correct";
  }
  else if(isNaN(answer.value))
  {
    console.log(answer);
    console.log("incorrect");
    document.getElementById("err").innerHTML = "incorrect";
  }
  else
    {
      document.getElementById("err").innerHTML = "Enter a number";
    }
}

function correctAddition()
{
  var answer = document.getElementById("pat").value;
  if(answer == 571792992)
  {
    document.getElementById("err").innerHTML = "correct";
  }
  else if(isNaN(answer.value))
  {
    document.getElementById("err").innerHTML = "incorrect";
  }
  else
    {
      document.getElementById("err").innerHTML = "Enter a number";
    }
}

function correctContractions()
{
  var answer = document.getElementById("pat").value;
  if(answer == "mustn't")
  {
    document.getElementById("err").innerHTML = "correct";
  }
  else if(isNaN(answer.value))
  {
    document.getElementById("err").innerHTML = "Enter a word";
  }
  else
    {
      document.getElementById("err").innerHTML = "Incorrect";
    }
}

function Results()
{

}
