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
      "https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
    price: 699000,
  },
  {
    id: 2,
    title: "Lập Trình Viên Thực Dụng",
    author: "Trần Minh Hiếu",
    description: "Hành trình đến với sự thành thạo trong lập trình",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
    price: 549000,
  },
  {
    id: 3,
    title: "Thuật Toán và Cấu Trúc Dữ Liệu",
    author: "Lê Thị Hương",
    description: "Nền tảng cơ bản cho mọi lập trình viên",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
    price: 450000,
  },
  {
    id: 4,
    title: "Trí Tuệ Nhân Tạo Cơ Bản",
    author: "Phạm Quốc Bảo",
    description: "Khám phá thế giới AI từ căn bản đến nâng cao",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
    price: 799000,
  },
  {
    id: 5,
    title: "Phát Triển Ứng Dụng Web Hiện Đại",
    author: "Hoàng Thị Lan",
    description: "Xây dựng website chuyên nghiệp với các công nghệ mới nhất",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
    price: 650000,
  },
  {
    id: 6,
    title: "Bảo Mật Thông Tin",
    author: "Đỗ Văn Cường",
    description: "Những nguyên tắc và kỹ thuật bảo mật quan trọng",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
    price: 520000,
  },
  {
    id: 7,
    title: "Quản Lý Dự Án Phần Mềm",
    author: "Vũ Thị Thanh",
    description: "Phương pháp quản lý dự án hiệu quả trong ngành IT",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
    price: 480000,
  },
  {
    id: 8,
    title: "Học Sâu và Học Máy",
    author: "Ngô Quang Minh",
    description: "Khám phá các kỹ thuật học máy và học sâu hiện đại",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
    price: 850000,
  },
  {
    id: 9,
    title: "Phát Triển Ứng Dụng Di Động",
    author: "Lý Hoàng Nam",
    description: "Xây dựng ứng dụng di động đa nền tảng",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
    price: 620000,
  },
  {
    id: 10,
    title: "Cơ Sở Dữ Liệu Nâng Cao",
    author: "Trương Minh Đức",
    description: "Thiết kế và tối ưu hóa cơ sở dữ liệu",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
    price: 580000,
  },
  {
    id: 11,
    title: "DevOps Thực Hành",
    author: "Mai Văn Hoàng",
    description: "Triển khai quy trình DevOps trong doanh nghiệp",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
    price: 750000,
  },
  {
    id: 12,
    title: "Kiến Trúc Phần Mềm",
    author: "Đinh Thị Hà",
    description: "Nguyên lý thiết kế và kiến trúc phần mềm hiện đại",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
    price: 680000,
  },
  {
    id: 13,
    title: "Blockchain Cơ Bản",
    author: "Bùi Quang Huy",
    description: "Nhập môn công nghệ chuỗi khối và ứng dụng",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
    price: 720000,
  },
  {
    id: 14,
    title: "Điện Toán Đám Mây",
    author: "Nguyễn Thị Mai",
    description: "Giải pháp điện toán đám mây cho doanh nghiệp",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
    price: 590000,
  },
  {
    id: 15,
    title: "Lập Trình Game 2D",
    author: "Trần Văn Tuấn",
    description: "Hướng dẫn phát triển game 2D từ cơ bản đến nâng cao",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
    price: 630000,
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
