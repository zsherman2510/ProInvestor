import React from 'react'
import LinkBlock from '../utils/LinkBlock';
import './styles.css';

import { FaHome } from 'react-icons/fa';
import { MdSpaceDashboard } from 'react-icons/md';

const SideNav = () => {
    
    const navLinks = [
		{ name: "Dashboard", href: "/dashboard", icon: <MdSpaceDashboard /> },
		{ name: "Investments", href: "/investments", icon: <FaHome /> },
	];
    
    const navItemsJSX = navLinks.map((link) => (
		<LinkBlock 
            key={link.name} 
            name={link.name} 
            href={link.href}
            icon={link.icon} 
        />
	));
  return (
    <div className="sidenav">
        {navItemsJSX}
    </div>
  )
}

export default SideNav