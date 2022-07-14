import React from 'react';
import Select from '../SelectComponent/SelectComponent';

import './TimeZone.css';

const timeSelect = [
	{
		label: 'Time Zone*',
		default: '(GMT+03:00) Moscow+00 - Moscow',
		options: ['(GMT+03:00) Minsk'],
		info: 'This default time zone is used throughout the system. For example for accurately displaying leave information in the calendar and for the system events listed in the Logs.'
	}
];

const TimeZone = () => {
	return (
		<div className="time-zone">
			{
				timeSelect.map((el, idx) => <Select
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

export default TimeZone;