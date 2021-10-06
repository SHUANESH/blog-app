const mongoose = require("mongoose");
const db_Connection = process.env.db_Connection;
console.log(db_Connection);

mongoose
  .connect(
    "mongodb+srv://shuaneshAbaba:SH123456@tmcluster.jkepk.mongodb.net/BlogDB?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex:true
    }
  )
  .then(() => {
    console.log("connecting success!");
  })
  .catch(() => {
    console.error("connecting filed");
  });

module.exports = mongoose.connection;
