const mongoose = require("mongoose");
const Joi = require("joi");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

const urlDbSchema = new mongoose.Schema({
  url: String,
  prefix: String,
  date: Date,
});

urlDbSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const urlScheme = Joi.object({
  url: Joi.string().min(8).uri().required(),
  prefix: Joi.string(),
  createdAt: Joi.date().required(),
});

module.exports.Url = mongoose.model("Url", urlDbSchema);

module.exports.urlScheme = urlScheme;
