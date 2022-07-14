import React from 'react';
import DaysCheckbox from '../DaysCheckbox/DaysCheckbox';
import Info from '../Info/Info';

import './ExpiryDate.css';

const mes = 'No Brought Forward Expiry Date';
const info = 'Each year, the user\'s rolled over leaves will expire on the date you set. The quotas for each leave type are configured through the Leave Types section for this location and each can be set individually to allow or not allow roll overs.';


const ExpiryDate = () => {
	return (
		<div className="expiry-date">
			<DaysCheckbox mes={mes}/>
			<Info info={info}/>
		</div>
	);
};

export default ExpiryDate;