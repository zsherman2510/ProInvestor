import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AddInvestment from './components/Investments/add';
import EditInvestment from "./components/Investments/edit";
import Dashboard from "./components/Dashboard/";
import Register from './components/Register'
import Login from './components/Login';

const AllRoutes = (props) => {
   
    return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/investments/add_investments"
					element={<AddInvestment />}
				/>
				<Route
					path="/investments/edit_investments/:id"
					element={<EditInvestment />}
				/>
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/" element={<Register />} />
				<Route path="/Login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default AllRoutes;