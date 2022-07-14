import React from 'react';

import './Warning.css';

import { ReactComponent as WarningIcon} from '../../img/icons/warning.svg';

const Warning = ({ show }) => {
	
	console.log(show);
	return (
		<div className={show ? "warning open" : "warning"}>
			<div className="warning__container">
				<div className="warning__body">
					<WarningIcon />
					
					<p>Adding or removing a user might impact the user's configuration and leave information (e.g. the initial brought forward days).</p>
				</div>
			</div>
		</div>
	);
};

export default Warning;