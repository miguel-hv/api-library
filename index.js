require('dotenv').config();
const express = require('express');
const db = require('./db.js');
const cors = require('cors');

const PORT = 3001;
// const PORT = process.env.PORT || 3001;
db.connect();
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(cors({
  origin: ['http://localhost:3000', 'https://mylibrary.herokuapp.com'], 
  credentials: true, 
}));

const router = express.Router();
const booksRoutes = require('./routes/books.routes');
// const bookRoutes = require('./routes/book.routes');

const { urlencoded } = require('express');


app.use(express.json());
app.use(urlencoded({ extended: false }));

app.use('/books', booksRoutes);
// app.use('/book', bookRoutes);

app.use('/', router);

app.use('*', (req, res, next) => {
  const error = new Error('Route not found');
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  console.log('Error handler ', err);
  res.status(err.status || 500).json(err.message || "Unexpected error")
});

app.listen(PORT, () => {
  console.log(`Servidor a todo trapo in http://localhost:${PORT}`);
});