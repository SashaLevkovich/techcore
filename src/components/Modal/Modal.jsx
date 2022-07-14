import React from 'react';
import { Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { closeModal } from '../../redux/modalSlice';

import DeleteBtn from '../DeleteBtn/DeleteBtn';

import './Modal.css';

import { ReactComponent as Cross } from '../../img/icons/cross.svg';
import { ReactComponent as Warning } from '../../img/icons/warning.svg';


const { Title } = Typography;

const Modal = () => {
	const localDel = useSelector(state => state.modalDel.del);
	const open = useSelector(state => state.modalDel.isOpen);
	
	const dispatch = useDispatch();
	
	return (
		<div className={open ? "modal open" : "modal"}>
			<div className="modal__container">
					<div className="modal__head">
						<Title level={5} className="modal__title">
							Delete Location
						</Title>
						
						<Cross onClick={()=> dispatch(closeModal())}/>
					</div>
					
					<div className="modal__body">
						<Title level={5}>Are you sure want to delete “{localDel}” Location? </Title>
						
						<div className="modal__text">
							<Warning />
							
							<p>Deleting a location might impact the users' configuration and leave information (e.g. the initial brought forward days).</p>
						</div>
						
						<DeleteBtn />
					</div>
			</div>
		</div>
	);
};

export default Modal;