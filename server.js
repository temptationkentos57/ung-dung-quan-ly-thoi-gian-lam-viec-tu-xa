const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Cấu hình body-parser để xử lý dữ liệu JSON
app.use(express.json());

// Kết nối đến MongoDB với cấu hình kết nối thích hợp
mongoose.connect('mongodb://localhost:27017/quanlythoi-gian', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Kết nối đến MongoDB thành công');
}).catch(err => {
  console.error('Lỗi kết nối đến MongoDB:', err);
});

// Định nghĩa route cho API gốc
app.get('/', (req, res) => {
  res.send('API hoạt động!');
});

// Khởi động server và lắng nghe trên cổng chỉ định
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server đang chạy trên cổng ${PORT}`);
});