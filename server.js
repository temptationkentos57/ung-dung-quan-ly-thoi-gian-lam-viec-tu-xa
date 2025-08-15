const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Cấu hình body-parser
app.use(express.json());

// Kết nối đến MongoDB
mongoose.connect('mongodb://localhost:27017/quanlythoi-gian', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Kết nối đến MongoDB thành công');
}).catch(err => {
  console.error('Lỗi kết nối đến MongoDB:', err);
});

app.get('/', (req, res) => {
  res.send('API hoạt động!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server đang chạy trên cổng ${PORT}`);
});