import React from 'react';
import { Typography } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { closeAddModal } from '../../redux/openSlice';

import FormAddLoc from '../FormAddLoc/FormAddLoc';

import './CreateLocation.css';

import { ReactComponent as Cross } from '../../img/icons/cross.svg';

const { Title } = Typography;

const CreateLocation = () => {
	const open = useSelector(state => state.open.isOpenAdd)
	const dispatch = useDispatch();
	return (
		<div className={open ? "popup open" : "popup"}>
			<div className="popup__container">
				<div className="popup__body">
					<div className="popup__head">
						<Title level={5}>
							Create Location
						</Title>
						
						<Cross onClick={()=>dispatch(closeAddModal())}/>
					</div>
					<div className="popup__main">
						<FormAddLoc />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateLocation;