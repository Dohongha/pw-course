//Ex1:
student = { "name": "Alex", "age": 10, "salary": 30 };
for (let property in student) {
    console.log(property, "=", student[property]);
}

//Ex2:
let total = 0;
for (let property in student) {
    if (typeof student[property] === "number") {
        total = total + student[property];
    }
}
console.log("Tổng giá trị của các thuộc tính là", total);

//Ex3:
let array = [];
for (let property in student) {
    array.push(property);
}
console.log(array);