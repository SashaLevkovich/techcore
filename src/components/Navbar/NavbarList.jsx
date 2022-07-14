import React from 'react';

import { Link } from 'react-router-dom';

import { Space, Typography } from 'antd';

import { ReactComponent as HomeIcon } from '../../img/icons/home.svg';
import { ReactComponent as UsersIcon } from '../../img/icons/users.svg';
import { ReactComponent as SettingIcon } from '../../img/icons/setting.svg';
import { ReactComponent as FolderIcon } from '../../img/icons/folder.svg';
import { ReactComponent as CalendarIcon } from '../../img/icons/calendar.svg';

const { Text } = Typography;

const NavbarList = () => {
	return (
		<Space
			direction="vertical"
			size={40}
			style={{
				display: 'flex',
				flexDirection: 'column',
				marginBottom: '68px'
			}}
		>
			<Link to="" className="menu-item">
				<HomeIcon />
				<Text>
					Dashboard
				</Text>
			</Link>
			
			<Link to="" className="menu-item">
				<UsersIcon />
				<Text>
					Users
				</Text>
			</Link>
			
			<Link to="" className="menu-item active">
				<SettingIcon />
				<Text>
					Settings
				</Text>
			</Link>
			
			<Link to="" className="menu-item">
				<FolderIcon />
				<Text>
					P&L
				</Text>
			</Link>
			
			<Link to="" className="menu-item">
				<CalendarIcon />
				<Text className="last-item">
					Vacation Manager
				</Text>
			</Link>
		</Space>
	);
};

export default NavbarList;