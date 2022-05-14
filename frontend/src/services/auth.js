import axios from 'axios';
const API_URL = "http://localhost:3002";

const register = async (firstName, lastName, email, password) => {
   try {
		const user = await fetch(`${API_URL}/users/register`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				password,
				firstName,
				lastName,
			}),
		});
		let data = await user.json();
		return data
   } catch (e) {
		console.log(e);
   }
}

const login = async (email, password) => {
    try {
        const user = await fetch(`${API_URL}/users/login`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });
        let data = await user.json();
        localStorage.setItem("user", JSON.stringify(data));
        return data;
        
    } catch (e) {
        console.log(e);
    } 
   
   
}

const logout = () => {
	localStorage.removeItem("user");
};

const authService = {
    register,
    login,
    logout
}

export default authService;


