import React from "react";
import SideNav from "../SideNav";
import Header from "../Header";
import "../../index.css";
function Dashboard(props) {
	return (
		<div className="App">
			<Header />
			<SideNav />
			<div className="main">
				{ props.children }
			</div>
		</div>
	);
}

export default Dashboard;
