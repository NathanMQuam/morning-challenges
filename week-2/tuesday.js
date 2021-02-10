console.log("tuesday.js");

let cans = {
   brand: "Pepsi",
   isOpened: true,
   numLeftInBox: 11
}

let tuesdayResult = `There is a box of ${cans.brand} in the fridge. It ${cans.isOpened ? "has been" : "has not been"} opened. There are still ${cans.numLeftInBox} cans in the box.`

document.getElementById("tuesday").innerText = tuesdayResult;

/* SOLID Principles:
 * S - 
 * O - Open for extension, but not modification
 * L - 
 * I - 
 * D - 
 */