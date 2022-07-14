import React, { useState } from 'react';

import './SelectComponent.css';

import Info from '../Info/Info';
import { Select } from 'antd';
const { Option } = Select;

const SelectComponent = ({ defaultVal, label, options, info }) => {
	
	return (
		<div className="select">
			<div className="select__container">
				<div className="select__body">
					<div className="select__block">
						{
							label
								?
								<label>{label}</label>
								:
								null
						}
						
						<Select
							defaultValue={defaultVal}
						>
							{
								options.map((el, idx) => <Option key={idx} value={el}>{el}</Option>)
							}
						
						
						</Select>
					</div>
					
					{
						info
							?
							<Info info={info}/>
							:
							<div></div>
					}
				</div>
			</div>
		</div>
	);
};

export default SelectComponent;