import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import { useSelector } from 'react-redux';

const Menu = () => {
	const open = useSelector(state => state.open.isOpen);
	
	return (
		<div className={open ? "main open" : "main"}>
			<Navbar />
			<Sidebar />
		</div>
	);
};

export default Menu;