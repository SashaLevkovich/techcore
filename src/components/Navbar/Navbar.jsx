import React from 'react';

import { Link } from 'react-router-dom';
import { Space } from 'antd';

import './Navbar.css';

import { ReactComponent as LogoIcon } from '../../img/logo-icon.svg';
import { ReactComponent as BellIcon } from '../../img/icons/bell.svg';
import NavbarList from './NavbarList';

const Navbar = () => {
	return (
		<div className="menu">
			<div className="menu__container">
				<div className="menu__body">
					<LogoIcon className="menu__logo"/>
					
					<NavbarList />
					
					<Space
						direction="vertical"
						size={24}
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center'
						}}
					>
						<Link to="" className="menu__bell">
							<BellIcon />
							<div className="menu__notification"></div>
						</Link>
						
						<Link to="" className="menu__user">
							JS
						</Link>
					</Space>
				</div>
			</div>
		</div>
	);
};

export default Navbar;