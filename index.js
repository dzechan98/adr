const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const books = [
  {
    id: 1,
    title: "Nghệ Thuật Viết Code Sạch",
    author: "Nguyễn Văn An",
    description: "Cẩm nang về kỹ thuật viết code chuyên nghiệp",
    imageUrl:
      "https://salt.tikicdn.com/ts/upload/f7/9e/83/ab28365ea395893fe5abac88b5103444.png",
    price: 699000,
  },
  {
    id: 2,
    title: "Lập Trình Viên Thực Dụng",
    author: "Trần Minh Hiếu",
    description: "Hành trình đến với sự thành thạo trong lập trình",
    imageUrl:
      "https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png",
    price: 549000,
  },
  {
    id: 3,
    title: "Thuật Toán và Cấu Trúc Dữ Liệu",
    author: "Lê Thị Hương",
    description: "Nền tảng cơ bản cho mọi lập trình viên",
    imageUrl:
      "https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png",
    price: 450000,
  },
  {
    id: 4,
    title: "Trí Tuệ Nhân Tạo Cơ Bản",
    author: "Phạm Quốc Bảo",
    description: "Khám phá thế giới AI từ căn bản đến nâng cao",
    imageUrl:
      "https://salt.tikicdn.com/ts/upload/21/c9/ce/ecf520f4346274799396496b3cbbf7d8.png",
    price: 799000,
  },
  {
    id: 5,
    title: "Phát Triển Ứng Dụng Web Hiện Đại",
    author: "Hoàng Thị Lan",
    description: "Xây dựng website chuyên nghiệp với các công nghệ mới nhất",
    imageUrl:
      "https://salt.tikicdn.com/ts/upload/21/c9/ce/ecf520f4346274799396496b3cbbf7d8.png",
    price: 650000,
  },
  {
    id: 6,
    title: "Bảo Mật Thông Tin",
    author: "Đỗ Văn Cường",
    description: "Những nguyên tắc và kỹ thuật bảo mật quan trọng",
    imageUrl:
      "https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png",
    price: 520000,
  },
  {
    id: 7,
    title: "Quản Lý Dự Án Phần Mềm",
    author: "Vũ Thị Thanh",
    description: "Phương pháp quản lý dự án hiệu quả trong ngành IT",
    imageUrl:
      "https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png",
    price: 480000,
  },
  {
    id: 8,
    title: "Học Sâu và Học Máy",
    author: "Ngô Quang Minh",
    description: "Khám phá các kỹ thuật học máy và học sâu hiện đại",
    imageUrl:
      "https://salt.tikicdn.com/ts/upload/f7/9e/83/ab28365ea395893fe5abac88b5103444.png",
    price: 850000,
  },
  {
    id: 9,
    title: "Phát Triển Ứng Dụng Di Động",
    author: "Lý Hoàng Nam",
    description: "Xây dựng ứng dụng di động đa nền tảng",
    imageUrl:
      "https://salt.tikicdn.com/ts/upload/f7/9e/83/ab28365ea395893fe5abac88b5103444.png",
    price: 620000,
  },
];

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.json(book);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
