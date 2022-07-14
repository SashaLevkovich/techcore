import React from 'react';

import Menu from '../components/Menu/Menu';
import Locations from '../components/Locations/Locations';

const LocationsPage = () => {
	return (
		<div className="settings">
			<Menu />
			<Locations />
		</div>
	);
};

export default LocationsPage;