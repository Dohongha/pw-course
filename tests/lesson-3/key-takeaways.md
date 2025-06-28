## Git
1. Update commit message: có 2 cách
- C1: sửa commit message thông qua Vim
    - **git commit --amend** -> mở trình soạn thảo Vim 
    - Gõ **i** để vào chế độ insert -> input new commit message
    - Gõ **Esc** để thoát insert
    - Gõ **:wq** để write và quit

- C2: sửa commit message trực tiếp thông qua command: **git commit --amend -m"new message"**

2. Đưa file từ vùng Staging về Working Directory (undo lệnh **git add < file >**):
- **git restore --staged < file >**

3. Đưa files từ vùng Repository về Working Directory (undo lệnh **git add .** và **git commit -m"message"** gần nhất trước đó):

- **git reset HEAD~1** (undo 1 commit, có thể undo ~n commit): commit mới nhất bị gỡ bỏ, các file update/thêm mới trong commit đó được đưa về Working Directory.

4. Branching model:
- Branch: dùng để tạo ra một vùng làm việc mới, không ảnh hưởng tới vùng làm việc đã ổn định.
- Trước khi push code của mình làm thì nên pull code từ main về để chắc chắn có đầy đủ code mới nhất.
- **git branch < ten_branch >**: nhánh mới được tạo. Bạn vẫn đang ở nhánh hiện tại (Ví dụ: git branch "Lesson-3" -> nhánh "Lesson-3" được tạo nhưng bạn vẫn đang làm việc trên nhánh main).
- **git checkout < ten_branch >**: chuyển sang nhánh này làm việc (lưu ý: nhánh này phải được tạo trước đó rồi). (Ví dụ: git branch "Lesson-3" -> bạn có thể bắt đầu làm việc trên nhánh "Lesson-3").
- **git checkout -b < ten_branch >**: tạo mới và chuyển sang làm việc trên nhánh này.

5. **gitignore** file
- gitignore = git ignore = bỏ qua
- Dùng để bỏ qua các file không cần git theo dõi, các file này sẽ không bao giờ được đưa vào 3 vùng quản lý của git, luôn luôn nằm trên Local máy bạn.
- Chỉ cần thêm < file_name > hoặc < folder_ name > vào **gitignore** file -> bạn sẽ thấy các file này bị xám tên file.

## JavaScript
1. Conventions= quy tắc
- Code theo 1 format, dễ nhìn, dễ đọc ngay cả cho người khác.
- **snake_case**: chưa dùng
- **kebab-case**: tên file
- **camelCase** : tên biến
- **PascalCase**: tên class

2. **console.log** 
```
console.log('My name is Ha');
console.log ("My name is Ha");
let name = "Playwright";
console.log (`This is ${name});
console.log ("This is", name);
console.log ("This is " + name);
```
3. Object
- Object = đối tượng: dùng để lưu trữ tập hợp các giá trị vào cùng một biến hoặc hằng số.
- Khai báo: let/const < ten_object > = { < thuoc_tinh> : < gia_tri >, ...};
- Ví dụ:
```
let user = {"name":"Ha", "age": 18, "phoneNumber": 12344};
const product = {
    "name":"Asus",
    "model":"ABC1223",
    "made in":{
        "country":"China",
        "year":2024
    }
};
```
- Truy cập giá trị trong Object:

     - Dùng dấu chấm:
     ```
     user.name; //"Ha"
     ```

    - Dùng dấu ngoặc vuông:
    ```
    user["age"]; //18
    ```
- Thêm mới/ update thuộc tính:
    - Dùng dấu chấm:
    ```
    let user = {"name":"Ha", "age": 18, "phoneNumber": 12344};
    user.address = "Ha Noi"; 
    //Thêm một thuộc tính mới address vào object
    //user = {"name":"Ha", "age": 18, "phoneNumber": 12344, "address" = "Ha Noi"};

    user.age =20;
    //update giá trị thuộc tính age
    //user = {"name":"Ha", "age": 20, "phoneNumber": 12344};
    ```
    - Dùng dấu ngoặc vuông:
    ```
    let user = {"name":"Ha", "age": 18, "phoneNumber": 12344};
    user["favourite food"] = "beef";

    user["name"]="Lan";
    ```
    *Nên dùng dấu ngoặc vuông vì linh động và thuộc tính có thể chứa khoảng trắng*

- Xóa thuộc tính:
    ```
    delete user.age;

    delete user["age"];
    ```

- Vòng lặp **for...in**:
    ```
    let user = {"name":"Ha", "age": 18, "phoneNumber": 12344};
    for (let property in user){
        console.log(property)
    }
    //In ra 3 dòng lần lượt là:
    // name
    // age
    // phoneNumber
    ```
4. Logical operator:

- **&&** : cả 2 vế của mệnh đề đều đúng
- **||** : một trong 2 vế đúng
- **!** : đảo ngược lại giá trị đúng của mệnh đề

5. Array
- Array (mảng) là một kiểu dữ liệu có cấu trúc, dùng để lưu trữ nhiều giá trị trong một biến duy nhất. Mỗi phần tử trong mảng đều có index và bắt đầu = 0.
- Cách khai báo mảng:
```
let arr = [1, 2, 3];
let str = ["Ha", "Trang", "NA"];
```
- Một số thao tác với Array:
    
    - length : độ dài mảng
    - Lấy phần tử theo index : [0], [1], [2],...
    - push() : thêm phần tử vào cuối
    - pop() : xóa phần tử cuối
    - unshift(): thêm phần tử vào đầu
    - shift(): xóa phần tử đầu
    - include(): kiểm tra có phần tử hay không

```
let arr = [1, 2, 3];
arr.length; //length = 3
arr.push(4); // [1, 2, 3, 4]
arr.pop(); // [1, 2, 3];
arr.unshift(-1); //[-1, 1, 2, 3];
arr.shift(); //[1, 2, 3];
```
- Duyệt mảng (loop):

    - Vòng lặp **for**:
    ```
    for (let i = 0; i < str.length; i++){
        console.log(str[i]);
    }
    //Kết quả in ra 3 dòng lần lượt là:
    //Ha
    //Trang
    //NA
    ```
    - Vòng lặp **for ... of**:
    ```
    for (let name of str){
        console.log(name);
    }
    //Kết quả in ra 3 dòng lần lượt là:
    //Ha
    //Trang
    //NA
    ```
    - Vòng lặp **forEach**:
    ```
    str.forEach(function(name, index){
        console.log(index, item);
    })
    //Kết quả in ra 3 dòng lần lượt có cả index là:
    // 0: Ha
    // 1: Trang
    // 2: NA

    str.forEach(function(name){
        console.log(name);
    })
    //Kết quả in ra 3 dòng lần lượt là:
    //Ha
    //Trang
    //NA

6. Function
- Function (hàm) là đoạn code được đặt tên và có thể tái sử dụng, thực hiện 1 nhiệm vụ hoặc 1 tính toán cụ thể.
- Khai báo:
```
function <nameFunction>(){
    //code
}
```
```
function sayHello(){
    console.log("Hello");
}

sayHello(); //Gọi hàm
// Kết quả in ra là: Hello
```
- Hàm có tham số (parameters) và trả về (return):
```
function sum(a, b){
    return a + b;
}
let result = sum(2, 3);
console.log(result);
// Kết quả in ra: 5
```
7. Phạm vi của biến
- Global:
```
for (var i = 0; i < 5; i++){
    console.log(i); // in ra từ 0-4
}

console.log(i); // in ra 5 vì var có phạm vi Global, nên khi chạy xong vòng lặp i=4 thì i tiếp tục tăng lên 1 -> i=5, vì không thỏa mãn điều kiện vòng lặp for nên nó sẽ break ra khỏi vòng lặp, do đó i = 5 ở ngoài vòng lặp -> do đó cần dùng LET để tránh các lỗi phía dưới như VAR.
```
- Scope: {}
```
for(let i = 0; i < 5; i++){
    console.log(i); // in ra từ 0-4
}

console.log(i); // in ra lỗi i undefined vì i chưa được khai báo, ở phía trên khai báo let i nên i sẽ chỉ hoạt động trong vòng lặp for.
```
- Hoisting: vì code lần lượt chạy từ trên xuống nên cần phải khai báo biến trước khi thực hiện lệnh.
```
console.log(a); // in ra lỗi can't access a
let a = 1;
```
8. Câu điều kiện nâng cao
- If... else:
```
if (condition){
    // run code khi condition = true
}else{
    // run code khi condition = false
}
```
- If... else if... else:
```
if (condition1){
    // run code khi condition1 = true
}else if(condition2){
    // run code khi condition2 = true
}else{
    // run code khi condtion = false
}
```
- Switch...case...default:
```
let day = Tuesday;
switch(day){
    case Monday:
        console.log("Today is Monday);
        break;
    case Tuesday:
        console.log("Today is Tuesday");
        break;
    default:
        console.log("Invalid day");
}
```
9. So sánh
-  == và != : so sánh lỏng lẻo, chỉ so sánh giá trị
- === và !==: so sánh tuyệt đối, so sánh cả giá trị và kiểu dữ liệu -> Nên dùng so sánh tuyệt đối
```
const result = "5" == 5 // result is true
const result = "5" === // result is false
```
10. Continue và Break
- Continue: bỏ qua vòng lặp, chạy đến vòng lặp tiếp theo
. Nếu gặp continue thì bỏ qua đoạn code phía dưới.
```
for(let i=1; i<=5; i++){
    if(i % 2 === 0){
        continue; // Khi i = 2, 4 thì sẽ thực hiện câu lệnh continue -> chạy đến vòng lặp tiếp theo
    }
    
    console.log(i);
    // Kết quả in ra 3 dòng:
    // 1
    // 3
    // 5
}
```
- Break: sẽ thoát ra khỏi vòng lặp, không chạy tiếp nữa.
```
for(let i=1; i<=5; i++){
    if(i % 2 === 0){
        break; // Khi i = 2 thì thực hiện câu lệnh break -> dừng vòng lặp, không chạy tiếp nữa
    
    console.log(i);
    //Kết quả in ra 1 dòng:
    // 1
}
```