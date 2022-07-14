import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../Card/Card';

const LocationsCard = () => {
	const locations = useSelector(state => state.location.value);
	
	return (
		
		<div className="locations__card">
			{
				locations.map((location, idx)=><Card key={idx} location={location} idx={idx}/>)
			}
		</div>
	);
};

export default LocationsCard;