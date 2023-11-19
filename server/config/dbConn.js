const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://lukefreundwork:TbAx8SfSfHR4JJLe@cluster0.nec0ut4.mongodb.net/?retryWrites=true&w=majority', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      dbName: "MentalHealthCompanion",
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;