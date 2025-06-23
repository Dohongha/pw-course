//Ex1:
let student = {
    "name": "Ha",
    "grades": {
        "math": 9,
        "english": 10
    }
};
console.log(`Math score is ${student["grades"]["math"]}`);

//Ex2:
let product = {
    "Toyota": 50000,
    "Audi": 80000,
    "BMW": 70000,
    "Mazda": 60000
}
for (let brand in product) {
    console.log(`${brand} : ${product[brand]} USD `);
}

//Ex3:
let bike = {
    "name": "Mizu"
};
bike.color = "pink";
console.log(bike);

//Ex4:
let employee = {
    "name": "Ha",
    "age": 18
}
delete employee.age;
console.log(employee);

//Ex5:
let school = {
    "classA": ["An", "Bình", "Châu"],
    "classB": ["Đào", "Hương", "Giang"]
}
console.log(school);