function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

function calculate(num1, num2, func) {
    func(num1, num2)
}

calculate(5,3,(num1, num2) => {
    let result = num1 - num2;
    displayResultPassive(result);
})
calculate(5,3,(num1, num2) => {
    let result = num1 - num2;
    displayResultPassive(result);
})