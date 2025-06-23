//Ex1:
let departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ 1104";
let crew = ["Nhat Anh", "Ha", "Trang", "Thom"];
function launchShip(crew) {
    return `Chuẩn bị khởi động! Phi hành đoàn gổm: ${crew} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`;
}
let result = launchShip(crew);
console.log(result);
console.log("-----------------");

//Ex2:
function calculateDistance(speed, time) {
    let distance = speed * time;
    return distance;
}
let resultDistance = calculateDistance(1000, 24);
console.log(`The distance is ${resultDistance} km.`);
console.log("-----------------");

//Ex3:
function convertTimeToHex(time) {
    let timeToHec = time.toString(16);
    return timeToHec;
}
let resultTimeToHec = convertTimeToHex(120);
console.log(`The time converted to hex is ${resultTimeToHec}.`);
console.log("-----------------");

//Ex4:
function decryptCode(code) {
    let newCode = "";
    for (let i = 0; i < code.length; i++) {
        if (code[i] >= "A" && code[i] <= "Z") {
            newCode += code[i].toLowerCase();
        } else if (code[i] >= "a" && code[i] <= "z") {
            newCode += code[i].toUpperCase();
        } else {
            newCode += code[i];
        }
    }
    return newCode;
}
let resultCode = decryptCode("1104 Challenge");
console.log(resultCode);
console.log("-----------------");

//Ex5:
function returnToEarth() {
    return `Chuẩn bị trở về ${departurePlanet}!`;
}
console.log(returnToEarth());