import React from 'react';

import './CreateBtn.css';
import { useDispatch } from 'react-redux';
import { openAddModal } from '../../redux/openSlice';

const CreateBtn = () => {
	const dispatch = useDispatch();
	
	return (
		<button onClick={()=>dispatch(openAddModal())} className="btn">
			Create Location
		</button>
	);
};

export default CreateBtn;