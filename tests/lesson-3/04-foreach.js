//Ex1:
const list = [1, 3, 5, 7];
list.forEach(value => {
    console.log(value);
})

//Ex2:
let total = 0;
let max = 0;
list.forEach(value => {
    total = total + value;
    if (value > max) {
        max = value;
    }
})
console.log("Total is", total);
console.log("Max is", max);

//Ex3:
let newList = [];
list.forEach(value => {
    let newValue = value * 2;
    newList.push(newValue);
})
console.log(newList);