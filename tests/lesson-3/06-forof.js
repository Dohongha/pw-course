//Ex1:
let array =[];
const toolName = "Playwright";
for(let character of toolName){
    array.push(character);
}
console.log(array);

//Ex2:
const numbers =[1,2,3,1,2,4,5];
let list=[];
for(let number of numbers){
    let duplication = false;
    for (let newNumber of list){
        if (number === newNumber){
            duplication = true;
            break;
        }
    }
    if (duplication===false){ //so sánh giá trị duplication với false, còn nếu mà dùng 1 dấu = là gán giá trị cho duplication = false
        list.push(number);
    }
}
console.log(list);

