import React, { useEffect, useState } from 'react';
import { Avatar } from 'antd';

import axios from 'axios';

import './AvatarComponents.css';

const TOKEN = 'i_TgiCqBlFumkuYqnhDJpdt6I_gUWwAj4nxHXGvPoyQ';

const AvatarComponent = ({ users }) => {
	const [avatars, setAvatars] = useState([]);
	
	useEffect(()=> {
	const apiRoot = 'https://api.unsplash.com';
	
	axios
		.get(`${apiRoot}/photos/random?client_id=${TOKEN}&count=${users}`)
		.then(res => setAvatars([...avatars, ...res.data]))
	}, [])
	
	console.log(avatars);
	return (
		<Avatar.Group maxCount={7}>
			{
				avatars.map((el, idx) => <Avatar key={ idx } src={el.urls.thumb}/>)
			}
		</Avatar.Group>
	);
};

export default AvatarComponent;