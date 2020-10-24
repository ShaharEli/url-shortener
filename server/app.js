const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
require("dotenv").config();
const { nanoid } = require("nanoid");
const { urlScheme, Url } = require("./helpers");

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(helmet());
app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 1000,
  max: 1,
});

app.get("/:prefix", async (req, res) => {
  const { prefix } = req.params;
  try {
    const { url } = await Url.findOne({ prefix });
    res.redirect(url);
  } catch (e) {
    res.status(400).json({ message: "prefix not foun" });
  }
});

app.use(limiter);

app.post("/", async (req, res) => {
  const { body } = req;
  const objectToValidate = {
    url: body.url,
    prefix: body.prefix.length > 0 ? body.prefix : nanoid(4),
    createdAt: new Date(),
  };
  const { error } = urlScheme.validate(objectToValidate);
  if (error) return res.status(400).json({ message: error.message });
  try {
    const checkIfUrlPredixExsists = await Url.find({
      prefix: objectToValidate.prefix,
    });
    if (checkIfUrlPredixExsists.length > 0) {
      return res.status(400).json({ message: "prefix already exists" });
    }
  } catch (e) {
    return res.status(500).end();
  }
  const urlToCreate = new Url(objectToValidate);
  urlToCreate.save((err, result) => {
    if (err) return res.status(400).json({ message: error.message });
    res.json(result);
  });
});

module.exports = app;
