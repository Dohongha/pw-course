## Version control system
- VCS = Version Control System: hệ thống mở rộng các phiên bản.
- Có 3 loại VSC:
1. Local: lưu ở máy cá nhân
2. Centralize: Lưu ở một máy chủ tập trung
3. Distributed: lưu ở nhiều máy khác nhau
-> Git là loại thứ 3
## Git
### So sánh Git và GitHub:

| Git                                                       | GitHub                                  |
|:----------------------------------------------------------|:----------------------------------------|
| Là một phần mềm                                           | Là một dịch vụ web                      |
| Cài đặt trên máy của bạn                                  | Host trên web                           |
| Là một command line tool                                  | Là công cụ có giao diện                 |
| Là công cụ quản lý phiên bản, đưa file vào Git repository | Là nơi để upload Git repository lên     |
| Có các tính năng của VCS                                  | Có các tính năng của VCS và một số khác |

### Git có 3 trạng thái:
1. Working Directory: các file mới hoặc file có thay đổi.
2. Staging Area: các file đưa vào vùng chuẩn bị commit (tạo ra các phiên bản).
3. Repository: các commit (phiên bản).
### Các câu lệnh quản lý git
- **git init** : khởi tạo thư mục được quản lý bởi Git. Sau khi chạy lệnh này thì các file được đưa vào Working Directory.
- Sau khi khởi tạo xong thì cần cài đặt cấu hình git.
- Cho 1 repo: **git config user.name "name"** và **git config user.email "email"**.
- Cho toàn bộ máy tính (default, khi có một repo mới nếu không chạy 2 lệnh trên thì repo mặc định lấy theo config default này): **git config --global user.name "user"** và **git config --global user.email "email"**.
- **git add <file_name>** : thêm 1 file vào vùng Staging.
- **git add .** : thêm toàn bộ file vào vùng Staging.
- **git status**: xem trang thái file. **File màu xanh = Staging**. **File màu đỏ = Working Directory**.
- **git commit -m"message"** : tạo commit, các files được đưa vào Repository quản lý trên phiên bản vừa commit.
- **git log** : kiểm tra lịch sử commit
### Git - simple workflow
- Không dùng global config: **init -> config -> add -> commit -> push**
- Dùng global config: **init -> add -> commit -> push**
- *Note: lệnh init chỉ cần chạy cho repo mới lần đầu tiên, từ lần sau update code thì cần chạy add -> commit -> push.*

## JavaScript
- Variable = biến: dùng để lưu giá trị và có thể thay đổi giá trị được.
- Constant = hằng số: dùng để khai báo các giá trị không thể thay đổi.
- Cách khai báo biến:
1. var <ten_bien> = <gia_tri>
2. let <ten_bien> = <gia_tri>
3. const <ten_bien> = <gia_tri>
- Ưu tiên dùng let và const vì dùng var dễ gặp nhiều issue.
- Có 8 loại kiểu dữ liệu: String, Number, Bigint, Boolean, Undefined, Null, Symbol, Object.
- Quan tâm 3 kiểu chính: **String** - dùng khai báo **chuỗi**. **Number** - dùng khai báo **một số**. **Boolean** - dùng để khai báo **giá trị T/F**.
- Comparison operator = toán tử so sánh:
1. So sánh hơn kém: >, <
2.  So sánh bằng: ==, ===, !=, !==, <=, >=
- Unary operator= toán tử một ngôi:
1. i++ bằng với i=i+1
2. i-- bằng với i=i-1
- Conditional = điều kiện, dùng để kiểm tra có nên thực hiện đoạn logic không:
1. Cú pháp: if (điều_kiện){code}
2. Ví dụ: if (1>2){
            console.log("1 nhỏ hơn 2");
        }
- Loops = vòng lặp, dùng để thực hiện một đoạn logic với số lần lặp nhất định:
1. Cú pháp: for (khởi tạo biến, điều kiện dừng, điều kiện tăng){code}
2. Ví dụ: for (let i = 1; i <= 10; i++) {
            console.log("Giá trị của i là: ", i);
        }

