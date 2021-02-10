let wednesdayResult = ""

for(let i = 0; i <= 5; i++){
   wednesdayResult += i + " is " + evenOrOdd(i) + "<br/>"
}

function evenOrOdd(num) {
   if(num % 2 == 0)
      return "Even"
   else
      return "Odd"
}

document.getElementById("wednesday").innerHTML = wednesdayResult;