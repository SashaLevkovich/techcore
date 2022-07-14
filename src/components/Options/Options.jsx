import React from 'react';
import { useDispatch } from 'react-redux';

import { addToLocalDel } from '../../redux/modalSlice';

import './Options.css';

import { ReactComponent as Pencil } from '../../img/icons/pencil.svg';
import { ReactComponent as Star } from '../../img/icons/star.svg'
import { ReactComponent as Del } from '../../img/icons/del.svg'

const Options = ({ open, location, id }) => {
	const dispatch = useDispatch();
	
	return (
		<div className={open ? "options open" : "options"}>
			<div className="options__container">
				<div className="options__body">
					<div className="options__item">
						<Pencil/>
						Edit
					</div>
					
					<div className="options__item">
						<Star />
						Set as Default
					</div>
					
					<div
						onClick={()=>dispatch(addToLocalDel({id: id, location: location}))}
						className="options__item"
					>
						<Del />
						Delete
					</div>
					
				</div>
			</div>
		</div>
	);
};

export default Options;