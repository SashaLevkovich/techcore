import React from 'react';

import './Info.css';

import { ReactComponent as InfoIcon } from '../../img/icons/info.svg';

const Info = ( { info }) => {
	return (
		<div className="info">
			<InfoIcon className="info-icon"/>
			
			<div className="info-popup">
				{info}
			</div>
		</div>
	);
};

export default Info;