const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const investmentRoutes = require('./routes/investments');
const userRoutes = require('./routes/users');


//mongoose.Promise = global.Promise;
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());


app.use("/investments", investmentRoutes);
app.use("/users", userRoutes);

// app.post("/api/users/register", (req, res) => {
// 	const user = new User(req.body);
// 	user.save((err, doc) => {
// 		if (err) return res.json({ success: false, err: err });
// 		res.status(200).json({
// 			success: true,
// 		});
// 	});
// });

const port = process.env.PORT || 3002;


mongoose
	.connect(process.env.DATABASE, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() =>
		app.listen(port, () => {
			console.log(`Server running on ${port}`);
		})
	).catch(err => {
        console.log(err)
    });

