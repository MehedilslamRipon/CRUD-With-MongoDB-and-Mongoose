// dependencies
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = require("./app");

// dotenv
dotenv.config({ path: "./config.env" });

// mongoose

const DB = process.env.DATABASE.replace(
   "<PASSWORD>",
   process.env.DATABASE_PASSWORD
);

mongoose
   .connect(DB, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
   })
   .then(() => {
      console.log(`DataBase connection successful`);
   });

/* // Test tour
const TestTour = new Tour({
   name: "Dhaka",
   rating: 5,
   price: 15000,
});

save testing tour data to our remote database
TestTour.save()
   .then((doc) => {
      console.log(doc);
   })
   .catch((err) => {
      console.log("Error Occurred! 😆", err);
   }); */

// server port
const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
   console.log(`Server is running on PORT: ${PORT}`);
});
