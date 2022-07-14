import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { delLocation } from '../../redux/locationSlice';

import './DeleteBtn.css';
import { closeModal } from '../../redux/modalSlice';

const DeleteBtn = () => {
	const idDel = useSelector(state => state.modalDel.id);
	const dispatch = useDispatch();
	
	const Del = (id) => {
		dispatch(delLocation({id: id }));
		dispatch(closeModal());
	}
	
	return (
		<div className="del-btn__container">
			<button
				onClick={()=>Del(idDel)}
				className="del-btn">
				Yes, Delete
			</button>
		</div>
	
	);
};

export default DeleteBtn;