//Ex1:
function getBMI(height, weight) {
    const BMI = weight / (height * height);
    if (BMI < 18.5) {
        return "Thiếu cân";
    } else if (BMI < 25) {
        return "Bình thường";
    } else if (BMI < 30) {
        return "Thừa cân";
    } else {
        return "Béo phì";
    }
}
const resultBMI = getBMI(1.58, 50);
console.log(resultBMI);

//Ex2:
function transferTemp(temperature, unit) {
    if (unit === "C") {
        const degreesF = temperature * 9 / 5 + 32;
        return (`${degreesF} độ F`);
    } else if (unit === "F") {
        const degreesC = (temperature - 32) * 5 / 9;
        return (`${degreesC} độ C`);
    } else {
        return "Invalid value";
    }
}
const resultTemperature = transferTemp(114, "F");
console.log(resultTemperature);

//Ex3: chưa xong
// const numberList = [0, 1, 2, 3, 4, 5, 6, 7];
// function getPrime(arrNumber) {
//     let isPrime = true;
//     for (let i = 0; i < arrNumber.length; i++) {
//         if (arrNumber[i] < 2) {
//             return isPrime=false;
//         }else{
            
//         }
//     }
// }

//Ex4:
const globals = [
    { "name": "Ha", "email": "hado@gmail.com" },
    { "name": "Lan", "email": "lan@gmail.com" }
];
function updateEmail(name, newEmail) {
    for (let user of globals) {
        if (user["name"] === name) {
            user["email"] = newEmail;
        }
    }
    return globals;
}
let resultUser = updateEmail("Ha", "test@gmail.com");
console.log(resultUser);

//Ex5:
const studentList = [
    { "name": "Alex", score: 85 },
    { "name": "Mary", score: 70 }
];
function getAverageScore(students) {
    let total = 0;
    for (let student of students) {
        total = total + student["score"];
    }
    const average = total / students.length;
    return average;
}
const resultAverage = getAverageScore(studentList);
console.log(resultAverage);


//Ex6:
function getAge(age) {
    if (age < 5) {
        return "Miễn phí";
    } else if (5 <= age && age <= 17) {
        return "Giá vé là 50000 VND";
    } else {
        return "Giá vé là 100000 VND";
    }
}

const resultPrice = getAge(17);
console.log(resultPrice);

//Ex7:
function getMonth(month) {
    switch (month) {
        case 1:
            return "January";
        case 2:
            return "February";
        case 3:
            return "March";
        case 4:
            return "April";
        case 5:
            return "May";
        case 6:
            return "June";
        case 7:
            return "July";
        case 8:
            return "August";
        case 9:
            return "September";
        case 10:
            return "October";
        case 11:
            return "November";
        case 12:
            return "December";
    }
}
const resultMonth = getMonth(10);
console.log(resultMonth);

//Ex8:
function getTemp(temp) {
    if (temp < 20) {
        return "Lạnh";
    } else if (20 <= temp && temp < 30) {
        return "Mát";
    } else {
        return "Nóng";
    }
}
const resultTemp = getTemp(29);
console.log(resultTemp);