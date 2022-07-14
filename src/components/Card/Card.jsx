import React, { useState } from 'react';
import { Typography } from 'antd';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Options from '../Options/Options';

import { ReactComponent as Dots } from '../../img/icons/dots.svg';

import './Card.css';
import AvatarComponent from '../AvatarComponent/AvatarComponent';

const { Title } = Typography;

const Card = ({ location }) => {
	const open = useSelector(state => state.open.isOpen);
	const [openModal, setOpenModal] = useState(false);
	
	
	return (
		<div className={open ? "card open" : "card"}>
			<div className="card__container">
				<div className="card__body">
					<div className="card__title">
						<div className="left">
							<Title level={5}>
								{location.location}
							</Title>
							
							
							<div className={location.default ? "card__default open" : "card__default"}>
								default
							</div>
						</div>
						
						
						<div onClick={() => setOpenModal(!openModal)} className="card__options">
							<Dots />
						</div>
					</div>
					
					<Options
						id={location.id}
						location={location.location}
						open={openModal}
					/>
					
					<div className="card__features features">
						<div className="features__item">
							<span>Holidays</span>
							<Link to="">View Holidays</Link>
						</div>
						
						<div className="features__item">
							<span>Leave Policies</span>
							<Link to="">View Leave Policies</Link>
						</div>
					</div>
					
					<AvatarComponent users={location.users}/>
				</div>
			</div>
		</div>
	);
};

export default Card;