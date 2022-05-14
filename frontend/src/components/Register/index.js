import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register, userSelector } from '../../store/users/userSlice';
import { useFormik } from "formik";
import * as Yup from "yup";
//import Loader from "utils/loader";
import { errorHelper } from "../utils/tools";
import {TextField, Button } from "@mui/material";
import './index.css';

const Register = (props) => {
	//const notifications = useSelector((state) => state.notifications);
	const [successful, setSuccessful] = useState(false);
	const { isLoggedIn } = useSelector((state) => state.user);
	const { message } = useSelector((state) => state.message)
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);
	const user = useSelector(userSelector);
	
	console.log(user);
	
	const formik = useFormik({
		initialValues: { email: "", password: "", firstName: "", lastName: "" },
		validationSchema: Yup.object({
			email: Yup.string()
				.required("Sorry the email is required")
				.email("This is an invalid email"),
			password: Yup.string().required("Sorry the email is required"),
			firstName: Yup.string().required(
				"Sorry the first name is required"
			),
			lastName: Yup.string().required(
				"Sorry the last name is required"
			),
		}),
		onSubmit: (values) => {
			setLoading(true);
			console.log('loading')
			handleSubmit(values);
			
			
		},
	});

	const handleSubmit =  async ({ email, password, firstName, lastName }) => {
		console.log('values')
		setSuccessful(false);
		 dispatch(register({ email, password, firstName, lastName }))
				.unwrap()
				.then(() => {
					setSuccessful(true);
					console.log('success');
				})
				.catch(() => {
					setSuccessful(false);
				});	
	};
	//checks if there is a notification like when someone successfully logged or registered in, then push them to the dashboard
	// useEffect(() => {
	// 	if (notifications && notifications.success) {
	// 		props.history.push("/dashboard");
	// 	} else {
	// 		setLoading(false);
	// 	}
	// }, [notifications, props.history]);

	

	return (
		<div className="register-form">
			<h1 className="page-title">Register Page</h1>
			{loading ? (
				<h1>Loaddingg..</h1>
			) : (
				<>
					<form autoComplete="off" onSubmit={formik.handleSubmit}>
						<div className="form-group">
							<TextField
								name="firstName"
								label="Enter your first name"
								variant="outlined"
								{...formik.getFieldProps("firstName")}
								{...errorHelper(formik, "firstName")}
							/>
							<TextField
								name="lastName"
								label="Enter your last name"
								variant="outlined"
								{...formik.getFieldProps("lastName")}
								{...errorHelper(formik, "lastName")}
							/>
							<TextField
								name="email"
								label="Enter your email"
								variant="outlined"
								{...formik.getFieldProps("email")}
								{...errorHelper(formik, "email")}
							/>
							<TextField
								name="password"
								label="Enter your password"
								variant="outlined"
								type="password"
								{...formik.getFieldProps("password")}
								{...errorHelper(formik, "password")}
							/>
						</div>
						<Button
							variant="contained"
							color="primary"
							type="submit"
							size="small"
						>
							Register
						</Button>
					</form>
					<p>
						If you already have an account, please{" "}
						<Link to="/login">Login!</Link>{" "}
					</p>
				</>
			)}
		</div>
	);
};

export default Register;
