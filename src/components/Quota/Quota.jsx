import React from 'react';

import SelectComponent from '../SelectComponent/SelectComponent';

import './Quota.css';

const quotaSelect = [
	{
		label: 'Leave Quota Reset Based On',
		default: 'Accounting year',
		options: ['Accounting year', 'Use Employment Date'],
		info: 'This setting will determine if your leave balance will be reset based on the accounting year (company\'s fiscal year) or based on the employee\'s start date. Besides quotas, your roll-over policy will also be affected according to this setting.'
	}
]

const Quota = () => {
	return (
		<div className="quota">
			<div className="quota__container">
				<div className="quota__body">
					{
						quotaSelect.map((el, idx) => <SelectComponent
								key={idx}
								label={el.label}
								defaultVal={el.default}
								options={el.options}
								info={el.info}
						/>
						)
					}
				</div>
			</div>
		</div>
	);
};

export default Quota;