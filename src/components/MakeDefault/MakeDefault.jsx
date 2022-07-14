import React from 'react';
import DaysCheckbox from '../DaysCheckbox/DaysCheckbox';
import Info from '../Info/Info';

import './MakeDefault.css';

const mes = 'Make This Location Default';
const info = 'By making this Location the default one, all new team members will be automatically added to this Location.';


const MakeDefault = () => {
	return (
		<div className="make-default">
			<DaysCheckbox mes={mes}/>
			<Info info={info}/>
		</div>
	);
};

export default MakeDefault;