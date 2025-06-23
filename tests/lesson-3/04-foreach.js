//Ex1:
const list = [1, 3, 5, 7];
list.forEach(value => {
    console.log(value);
})

//Ex2:
let total = 0;
let max = list[0];
let min = list[0];
list.forEach(value => {
    total = total + value;
    if (value > max) {
        max = value;
    } else if (value < min) {
        min = value;
    }
})
console.log("Total is", total);
console.log("Max is", max);
console.log("Min is", min);

//Ex3:
let newList = [];
list.forEach(value => {
    let newValue = value * 2;
    newList.push(newValue);
})
console.log(newList);