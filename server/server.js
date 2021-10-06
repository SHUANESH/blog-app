const dotenv = require('dotenv');
dotenv.config();
const PORT =process.env.PORT || 8080;
const multer = require('multer');
const express = require('express');
const cors = require('cors');
const app = express();
const path = require("path");

const connectDB = require('./DB');
connectDB.on('error' ,()=> {console.log('error')})

app.use("images" , express.static(path.join(__dirname , "/images")))

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, './client/public/images')
  },
  filename: (req, file, cb) => {
      cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
  }
})

const upload = multer({storage:storage})
app.post("/api/upload", upload.single("file"), (req,res)=>{
  res.status(200).json("file hes uploaded");
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const authRouter = require('./route/auth');
const usersRouter = require('./route/users');
const postsRouter = require('./route/posts');
const categoriesRouter = require('./route/categories');

app.use('/api/auth',authRouter);
app.use('/api/users',usersRouter);
app.use('/api/posts',postsRouter);
app.use('/api/categories',categoriesRouter);


app.listen(PORT, ()=>{
  console.log('Hi i can flay...');
});
