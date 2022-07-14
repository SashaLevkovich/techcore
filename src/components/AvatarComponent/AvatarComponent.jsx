import React, { useEffect, useState } from 'react';
import { Avatar } from 'antd';

import axios from 'axios';

import './AvatarComponents.css';

const TOKEN = 'jZQaL5Xg7UJoETKge0oWdqKxMVBDMBDVo5sMFV7LYjs';

const AvatarComponent = ({ users }) => {
	const [avatars, setAvatars] = useState([]);
	
	useEffect(()=> {
	const apiRoot = 'https://api.unsplash.com';
	
	axios
		.get(`${apiRoot}/photos/random?client_id=${TOKEN}&count=${users}`)
		.then(res => setAvatars([...avatars, ...res.data]))
	}, [avatars, users])
	return (
		<Avatar.Group maxCount={7}>
			{
				avatars.map((el, idx) =>
					<Avatar key={ idx } src={el.urls.thumb} />
				)
			}
		</Avatar.Group>
	);
};

export default AvatarComponent;