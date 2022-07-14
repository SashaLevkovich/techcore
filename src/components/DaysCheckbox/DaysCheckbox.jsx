import React from 'react';

import './DaysCheckbox.css';

import { ReactComponent as Done} from '../../img/icons/done.svg';

const DaysCheckbox = ({ mes }) => {
	return (
		<div className="list">
			<label className="checkbox">
				<input
					type="checkbox"
				/>
				<div className="checkbox__status">
					<Done className="checked"/>
				</div>
				
			</label>
			{mes}
		</div>
	);
};

export default DaysCheckbox;