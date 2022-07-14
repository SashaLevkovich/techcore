import React from 'react';
import Select from '../SelectComponent/SelectComponent';

import './WeekStarts.css';

const weekSelect = [
	{
		label: 'Week Starts On',
		default: 'Monday',
		options: ['Tuesday', 'Wednesday'],
		info: null
	}
];

const WeekStarts = () => {
	return (
		<div className="week-starts">
			{
				weekSelect.map((el, idx) => <Select
					key={idx}
					label={el.label}
					defaultVal={el.default}
					options={el.options}
					info={el.info}
				/>
				)
			}
			
		</div>
	);
};

export default WeekStarts;