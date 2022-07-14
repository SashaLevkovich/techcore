import React from 'react';

import uuid from 'react-uuid'

import { useDispatch } from 'react-redux';

import { addLocation } from '../../redux/locationSlice';

import './SubmitBtn.css';
import { closeAddModal } from '../../redux/openSlice';

const SubmitBtn = ({locationVal}) => {
	const dispatch = useDispatch();
	const sub = (val) => {
		dispatch(addLocation({
			id: uuid(),
			location: val,
			default: false,
			users: 0
		}));
		
		dispatch(closeAddModal())
	}
	return (
		<button
			onClick={()=> sub(locationVal)}
			className="subBtn"
		>
			Create
		</button>
	);
};

export default SubmitBtn;