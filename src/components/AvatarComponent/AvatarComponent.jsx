import React from 'react';
import { Avatar } from 'antd';


import './AvatarComponents.css';
import { createUsers } from '../../helpers/createUsers';

const AvatarComponent = ({ users }) => {
	const userArr = Array(users)
	createUsers(userArr, users)
	console.log(userArr);
	return (
		<Avatar.Group maxCount={7}>
			{
				userArr.map(el => <Avatar key={ el.id } src={el}/>)
			}
		</Avatar.Group>
	);
};

export default AvatarComponent;