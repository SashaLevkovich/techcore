import React from 'react';

import Quota from '../Quota/Quota';
import WorkWeeks from '../WorkWeeks/WorkWeeks';
import Year from '../Year/Year';
import ExpiryDate from '../ExpiryDate/ExpiryDate';
import WeekStarts from '../WeekStarts/WeekStarts';
import TimeZone from '../TimeZone/TimeZone';
import Users from '../Users/Users';
import MakeDefault from '../MakeDefault/MakeDefault';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import CancelBtn from '../CancelBtn/CancelBtn';

import { useInput } from '../../hooks/ValidationHook';

import './FormAddLoc.css';

const FormAddLoc = () => {
	const location = useInput('', {isEmpty: true})
	return (
		<div className="location-form">
			<div className="location-form__name">
				<input
					value={location.value}
					onChange={e => location.onChange(e)}
					onBlur={e => location.onBlur(e)}
					type="text"
					id="control_1"
					className="location-form__name-input"
					name="name"
					placeholder="Location Name"
				/>
				<label
					htmlFor="control_1"
					className={(location.isDirty && location.isEmpty) ? "input-label " : "input-label show"}
				>
					Name
					<span
						className="obligatory"
					>
						*
					</span>
				</label>
			</div>
			
			<WorkWeeks />
			
			<Quota />
			
			<Year />
			
			<ExpiryDate />
			
			<WeekStarts />
			
			<TimeZone />
			
			<Users />
			
			<MakeDefault />
			
			<div className="location-form__mes">
				Once you've created a Location, assign a <span>Leave Policy</span> to the Location, in order to enable Users to request Leave.  To assign a Leave Policy, go to Location > Leave Policies > Assign Leave Policy.
			</div>
			
			<div className="btns">
			<CancelBtn />
			<SubmitBtn locationVal={location.value}/>
			</div>
		</div>
	);
};

export default FormAddLoc;