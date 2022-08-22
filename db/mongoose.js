const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://neeraj_maurya:75725611@cluster0.wvdvf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      //   useCreateIndex: true,
      useUnifiedTopology: true,
      //   useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log("no connection");
  });
