function correctPattern()
{
  var answer = document.getElementById("pat")
  if(answer.value == 3)
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
