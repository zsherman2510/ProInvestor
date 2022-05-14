import React from 'react'
import { useSelector } from "react-redux";
import './styles.css';

import { userSelector } from '../../store/users/userSlice';

const Header = () => {
	const user = useSelector(userSelector);
	
  return (
		<header className="bck_b_light">
			<div className="container">
				<div className="logo">InvestorPro</div>
				<div className="user_info">
					Welcome back,{" "}
					{user.isLoggedIn ? (
						<span>
							{" "}
							{user.user.lastName}, {user.user.firstName}
						</span>
					) : (
						<span></span>
					)}
					!
				</div>
			</div>
		</header>
  );
}

export default Header