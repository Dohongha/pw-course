//Ex1:
let total = 0;
for (let i = 1; i<= 100; i++){
    total = total + i;
}
console.log(total);

//Ex2:
for(let i =2; i<=9; i++){
    for(let j =1; j<=9; j++){
        console.log(`${i}x${j} = ${i*j}`);
    }
}

//Ex3:
let array = [];
for (let i =1; i<= 99; i++){
    if (i %2 ===1){
        array.push(i);
    }
}
console.log(array);

//Ex4:
const revenue =[
    {"month": 1, "total": 100},
    {"month": 2, "total": 95},
    {"month": 3, "total": 89},
    {"month": 4, "total": 76},
];
let totalYear = 0;
for (let i=0; i< revenue.length; i++){
    let eachMonth = revenue[i];
    totalYear = totalYear + eachMonth["total"];
}
console.log(`Total is ${totalYear}`);