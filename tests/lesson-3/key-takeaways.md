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

...To be continued ^^ Sorry teacher!