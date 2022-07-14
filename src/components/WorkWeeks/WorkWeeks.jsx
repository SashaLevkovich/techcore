import React from 'react';
import { Typography } from 'antd';

import DaysCheckbox from '../DaysCheckbox/DaysCheckbox';

import './WorkWeek.css';

const { Title } = Typography;

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const WorkWeeks = () => {
	return (
		<div className="location-form__workweek">
			<Title level={5}>Workweek<span className="obligatory">*</span></Title>
			<div className="location-form__day day">
				{
					days.map((day, idx)=> (
						<DaysCheckbox key={idx} mes={day}/>
					))
				}
			</div>
		</div>
	);
};

export default WorkWeeks;