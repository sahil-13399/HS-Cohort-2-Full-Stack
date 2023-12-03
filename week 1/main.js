//CALLBACKS
function sum(num1, num2, func) {
    let result = num1 + num2;
    func(result);
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

sum(2,3,displayResultPassive)