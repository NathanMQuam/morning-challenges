console.log("tuesday.js");

let cans = {
   brand: "Pepsi",
   isOpened: true,
   numLeftInBox: 11
}

let tuesdayResult = `There is a box of ${cans.brand} in the fridge. It ${cans.isOpened ? "has been" : "has not been"} opened. There are still ${cans.numLeftInBox} cans in the box.`

document.getElementById("tuesday").innerText = tuesdayResult;

/* SOLID:
 * S - Single Responsibility
 * O - Open-Closed
 * L - Liskov Substitution
 * I - Interface Segregation
 * D - Dependency Inversion
 */

/* SOLID Principles:
 * S - Single Responsibility
      A class should have only ONE RESPONSIBILITY, and should not do anything else
 * O - Open-Closed
      Objects should be OPEN for extension, but CLOSED to modification
 * L - Liskov Substitution
      DigitalOcean.com: "every subclass or derived class should be substitutable for their base or parent class."
 * I - Interface Segregation
      DigitalOcean.com: "A client should never be forced to implement an interface that it doesn’t use, or clients shouldn’t be forced to depend on methods they do not use."
 * D - Dependency Inversion
      Depend on Abstractions, not concretions
      DigialOcean.com: "Entities must depend on abstractions, not on concretions. It states that the high-level module must not depend on the low-level module, but they should depend on abstractions"
 */