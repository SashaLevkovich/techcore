import React from 'react';
import { Typography } from 'antd';

import CreateBtn from '../CreateBtn/CreateBtn';

import './Head.css';

const { Title } = Typography;

const Head = () => {
	return (
		<div className="head">
			<div className="head__container">
				<div className="head__body">
					<div className="head__title">
						<Title level={2}>
							Locations
						</Title>
						
						<Title level={5} style={{fontWeight: '400'}}>
							Create new users or update the existng users. You can then set their permissons here too.
						</Title>
					</div>
					
					<CreateBtn />
				</div>
			</div>
		</div>
	);
};

export default Head;