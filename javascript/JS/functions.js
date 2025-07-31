function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function calculator(a, b, operator) {
  return eval(`${a} ${operator} ${b}`);
}

function switchedCal(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a/b;
    case "%":
        return a%b;
    default :
        return "No such operator is allowed"
  }
}

// function askingcustomer() {
//    let A = prompt("Enter the valid number :") 
// }
function validdetails(value) {

    return "Values Has Added Successfully"
}

export { sum, sub, mul, calculator , switchedCal, validdetails };
