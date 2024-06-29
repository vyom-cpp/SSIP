const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI;

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const FormDataSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    pincode: String,
    city: String,
    area: String,
    society: String,
    behavior1: String,
    behavior2: String,
    behavior3: String,
    additionalFeedback: String,
  },
  { collection: "feedbacks" }
);

const FormData = mongoose.model("FormData", FormDataSchema);

app.post("/api/send_form_data", async (req, res) => {
  console.log("Received data:", req.body);
  const formData = new FormData(req.body);
  try {
    await formData.save();
    console.log("Data saved successfully");
    res.status(200).json({ message: "Form data saved successfully" });
  } catch (error) {
    console.log("Error saving data:", error);
    res.status(500).json({ message: "Error saving form data", error });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));