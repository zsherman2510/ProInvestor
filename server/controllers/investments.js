const { Investment } = require("../models/Investment");

const getInvestments = (req, res) => {
	Investment.find({}, (err, investment) => {
		if (err) return res.status(400).send(err);
		res.status(200).send(investment);
	});
};

const updateInvestments = (req, res) => {
	res.send("this updateInvestments");
};

const addInvestments = (req, res) => {
	const investment = new Investment(req.body);
    investment.save((err, doc) => {
        if (err) {
            return res.status(401).json({ err: err.message });
        }
        
         res.status(200).json({ success: true, investment: investment });
    })
};

module.exports = {
	getInvestments,
	updateInvestments,
	addInvestments,
};
