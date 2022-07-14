import React, { useState } from 'react';

import MultiSelect from '../MultSelect/MultiSelect';
import Warning from '../Warning/Warning';

const Users = () => {
	const [show, setShow] = useState(false);
	return (
		<div>
			<MultiSelect show={show} setShow={setShow} />
			<Warning show={show} />
		</div>
	);
};

export default Users;