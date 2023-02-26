const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv")


dotenv.config()
app.use(express.json());
app.use(cors({ origin: "*" }));





app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/auth", require("./routes/auth"));

const startApp = () => {
	try {
		mongoose.set('strictQuery', false)
		mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}, () => console.log('Mongo DB connected'))

		const PORT = process.env.PORT || 3000
		app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
	} catch (error) {
		console.log(error)
	}
}

startApp()
