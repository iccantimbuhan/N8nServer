import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Force HTTPS redirect on Render
app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect(`https://${req.headers.host}${req.url}`);
  }
  next();
});

// Example route
app.get('/', (req, res) => {
  res.send('Hello! You are on HTTPS 🔒');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
