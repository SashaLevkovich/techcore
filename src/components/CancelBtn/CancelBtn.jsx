import React from 'react';

import { useDispatch } from 'react-redux';

import './CancelBtn.css';
import { closeAddModal } from '../../redux/openSlice';

const CancelBtn = () => {
	const dispatch = useDispatch();
	
	return (
		<button
			onClick={()=>dispatch(closeAddModal())}
			className="canBtn"
		>
			Cancel
		</button>
	);
};

export default CancelBtn;