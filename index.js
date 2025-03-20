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
      "https://salt.tikicdn.com/ts/category/cc/66/3d/4e4f1b8b1e772fe9e09611c6bec98746.png",
    price: 699000,
  },
  {
    id: 2,
    title: "Lập Trình Viên Thực Dụng",
    author: "Trần Minh Hiếu",
    description: "Hành trình đến với sự thành thạo trong lập trình",
    imageUrl:
      "https://salt.tikicdn.com/ts/category/53/0f/bc/f6e936554ec845b45af8f94cbd4f1569.png",
    price: 549000,
  },
  {
    id: 3,
    title: "Thuật Toán và Cấu Trúc Dữ Liệu",
    author: "Lê Thị Hương",
    description: "Nền tảng cơ bản cho mọi lập trình viên",
    imageUrl:
      "https://salt.tikicdn.com/cache/750x750/ts/product/7e/6e/d9/bd6bd1c3ceeea13a3f5eaa046689892a.jpg.webp",
    price: 450000,
  },
  {
    id: 4,
    title: "Trí Tuệ Nhân Tạo Cơ Bản",
    author: "Phạm Quốc Bảo",
    description: "Khám phá thế giới AI từ căn bản đến nâng cao",
    imageUrl:
      "https://salt.tikicdn.com/cache/750x750/ts/product/bb/4d/53/ea97e4cad166882680c2ec7dda80290c.jpg.webp",
    price: 799000,
  },
  {
    id: 5,
    title: "Phát Triển Ứng Dụng Web Hiện Đại",
    author: "Hoàng Thị Lan",
    description: "Xây dựng website chuyên nghiệp với các công nghệ mới nhất",
    imageUrl:
      "https://salt.tikicdn.com/cache/750x750/ts/product/3e/31/e5/4c7e03d791a9b464e2779ef0ee77e429.jpg.webp",
    price: 650000,
  },
  {
    id: 6,
    title: "Bảo Mật Thông Tin",
    author: "Đỗ Văn Cường",
    description: "Những nguyên tắc và kỹ thuật bảo mật quan trọng",
    imageUrl:
      "https://salt.tikicdn.com/cache/750x750/ts/product/90/49/97/ec88ab408c1997378344486c94dbac40.jpg.webp",
    price: 520000,
  },
  {
    id: 7,
    title: "Quản Lý Dự Án Phần Mềm",
    author: "Vũ Thị Thanh",
    description: "Phương pháp quản lý dự án hiệu quả trong ngành IT",
    imageUrl:
      "https://salt.tikicdn.com/cache/750x750/ts/product/71/9d/f6/034e4969a68181a0f850cdfa24503e0c.jpg.webp",
    price: 480000,
  },
];

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/books/search", (req, res) => {
  const { keyword } = req.query;
  console.log(keyword);

  if (!keyword) {
    return res
      .status(400)
      .json({ message: "Vui lòng cung cấp từ khóa tìm kiếm" });
  }

  const lowerKeyword = keyword.toLowerCase();
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(lowerKeyword) ||
      book.author.toLowerCase().includes(lowerKeyword) ||
      book.description.toLowerCase().includes(lowerKeyword)
  );

  // if (filteredBooks.length === 0) {
  //   return res.status(404).json({ message: "Không tìm thấy sách phù hợp" });
  // }

  res.json(filteredBooks);
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
