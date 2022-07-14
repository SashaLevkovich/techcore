import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Typography } from 'antd';

import SidebarMenu from './SidebarMenu';

import './Sidebar.css';

import { ReactComponent as Arrow } from '../../img/icons/Arrow.svg';
import { setOpen } from '../../redux/openSlice';

const { Title } = Typography;

const Sidebar = () => {
	const open = useSelector(state => state.open.isOpen);
	const dispatch = useDispatch();
	
	return (
		<div className={open ? "sidebar open" : "sidebar"}>
			<div className="sidebar__container">
				<div className="sidebar__body">
					<Title
						level={4}
						className="sidebar__title"
					>
						Settings</Title>
					
					<SidebarMenu/>
				
					<div onClick={()=>dispatch(setOpen())} className={open ? "sidebar__arrow open" : "sidebar__arrow"}>
						<Arrow />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;