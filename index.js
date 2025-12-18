const express = require('express');
const cors = require('cors');   // ← 追加
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());                // ← 追加（これが本体）
app.use(express.json());

console.log('🔥 API起動');

app.post('/login', (req, res) => {
  console.log('🔥 /login に来た');
  console.log(req.body);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log('API起動中：${PORT}');
});
