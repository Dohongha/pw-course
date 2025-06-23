//Ex1:
let array = [];
const toolName = "Playwright";
for (let i = toolName.length - 1; i >= 0; i--) {
    array.push(toolName[i]);
}
console.log(array);

//Ex2: In ra các phần tử 1 lần duy nhất, phần tử nào đã có thì không in nữa [1,2,3,4,1,3] -> [1,2,3,4]
const numbers = [1, 2, 3, 1, 2, 4, 5];
let list = [];
for (let number of numbers) {
    let duplication = false;
    for (let newNumber of list) {
        if (number === newNumber) {
            duplication = true;
            break;
        }
    }
    if (duplication === false) { // if(!duplication): so sánh giá trị duplication với false, còn nếu mà dùng 1 dấu = là gán giá trị cho duplication = false
        list.push(number);
    }
}
console.log(list);

//Ex2: (đúng đề bài) Lọc ra các phần tử chỉ xuất hiện 1 lần trong mảng [1,2,3,4,1,3] -> [2,4]
const arr = [1, 2, 3, 1, 2, 4, 5];
function findUniqueNumber(arr) {
    let result = [];
    for (let num of arr) {
        let count = 0;
        //console.log("num", num); 

        for (let x of arr) {
            //console.log("x", x);
            if (num === x) {
                count++;
            }
        }
        if (count === 1) {
            result.push(num);
        }
    }

    return result;
}
let uniqueNumbers = findUniqueNumber(arr);
console.log(uniqueNumbers);