import React from 'react';
import { Select } from 'antd';

import './MultiSelect.css';

const { Option } = Select;

const MultiSelect = ({ show, setShow }) => {
	return (
		<div>
			<Select
				onClick={()=> setShow(true)}
				mode="multiple"
				size={"middle"}
				placeholder="Add Users"
				style={{
					width: '100%',
				}}
			>
				<Option key={1}>Jessica Monro</Option>
				<Option key={2}>Aleksandr</Option>
				<Option key={3}>Julia Senko</Option>
			</Select>
		</div>
	);
};

export default MultiSelect;