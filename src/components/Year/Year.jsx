import React from 'react';
import Select from '../SelectComponent/SelectComponent';

import './Year.css';

const monthSelect = [
	{
		label: 'Fiscal Year Start',
		default: 'January',
		options: ['February', 'March'],
		info: ''
	}
]

const daySelect = [
	{
		label: null,
		default: '1',
		options: [1, 2, 3, 4, 5],
		info: ''
	}
]

const Year = () => {
	return (
		<div className="year">
			<div className="year__container">
				<div className="year__body">
					<div className="year__month">
						{
							monthSelect.map((el, idx) => <Select
									key={idx}
									label={el.label}
									defaultVal={el.default}
									options={el.options}
									info={el.info}
								/>
							)
						}
					</div>
					
					<div className="year__day">
						{
							daySelect.map((el, idx) => <Select
								key={idx}
								label={el.label}
								defaultVal={el.default}
								options={el.options}
								info={el.info}
							/>)
						}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Year;