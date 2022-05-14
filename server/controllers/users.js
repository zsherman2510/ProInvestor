const {User} = require("../models/User");

const loginUser = (req, res) => {
    console.log(req.body);
	User.findOne({ email: req.body.email }, (err, user) => {
        if (!user) {
            return res.json({ loginSuccess: false, message: err.message})
        }
        user.comparePassword(req.body.password, (err, isMatch) => {
            console.log('compare password');
            if (!isMatch) {
                console.log(!isMatch);
                return res.json({ message: err.message })
            }
            
            user.generateToken((err, user) => {
                console.log('generateToken');
                console.log(user);
                if (err) return res.status(400).send(err);
                res.cookie("w_auth", user.token).status(200).json({ loginSuccess: true, user: user })
            });
        });
    });
    
    return User;
    
};

const registerUser = (req, res) => {
    console.log(req.body);
	const user = new User(req.body);
    user.save((err, doc) => {
        if (err){
            return res.status(401).json({ success: false, err: err.message });
        } else {
            res.status(200).json({ success: true, user: user});
        } 
        
    })
};

const logout = (req, res) => {
   User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, doc) => {
		if (err) return res.json({ success: false, err });
		return res.status(200).send({
			success: true,
		});
   }); 
}

const authenticateUser = (req, res) => {
    res.status(200).json({ 
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        email: req.user.email,
        investments: req.user.investments
    })
}

module.exports = {
	loginUser,
	registerUser,
    logout,
    authenticateUser
};
