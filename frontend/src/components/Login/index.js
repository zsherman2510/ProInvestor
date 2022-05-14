
import React, { useEffect, useState } from "react";
import { login, userSelector } from "../../store/users/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { errorHelper } from "../utils/tools";
import { TextField, Button } from "@mui/material";
import '../Register/index.css';

const Login = (props) => {
    const [loading, setLoading] = useState(false);
    const [successful, setSuccessful] = useState(false);
    const dispatch = useDispatch();
    
    const history = useNavigate();
    const formik = useFormik({
		initialValues: { email: "", password: "" },
		validationSchema: Yup.object({
			email: Yup.string()
				.required("Sorry the email is required")
				.email("This is an invalid email"),
			password: Yup.string().required("Sorry the email is required"),
		}),
		onSubmit: (values) => {
			setLoading(true);
			console.log("loading");
			handleSubmit(values);
            
		},
        
	});
    
    const handleSubmit = async ({
        email,
        password,
    }) => {
        setSuccessful(false);
        dispatch(login({ email, password }))
            .unwrap()
            .then(() => {
                setSuccessful(true);
                setLoading(false);
                history('/dashboard');
            })
            .catch(() => {
                setSuccessful(false);
                setLoading(false);
            });
        
    };
  return (
		<div className="register-form">
			<h1 className="page-title">Login Page</h1>
			{loading ? (
				<h1>Loaddingg..</h1>
			) : (
				<>
					<form autoComplete="off" onSubmit={formik.handleSubmit}>
						<div className="form-group_login">
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
							Login
						</Button>
					</form>	
				</>
			)}
		</div>
  );
}

export default Login