const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors({
  origin: 'https://instagram-com-accounts-login-87xa.onrender.com/' // ※本番では後でURL指定にする
}));
app.use(express.static(path.join(__dirname, 'frontend')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.post('/login', (req, res) => {
  console.log('🔥 /login に来た');
  console.log(req.body);
  res.json({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API起動中：${PORT}`);
});