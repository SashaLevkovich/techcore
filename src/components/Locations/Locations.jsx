import React from 'react';

import { useSelector } from 'react-redux';

import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Head from '../Head/Head';

import './Locations.css';
import LocationsCard from './LocationsCard';

const Locations = () => {
	const open = useSelector(state => state.open.isOpen);
	
	return (
		<div className={open ? "locations open" : "locations"}>
			<div className="locations__container">
				<div className="locations__body">
					<Breadcrumbs />
					
					<Head />
					
					<LocationsCard />
					
				</div>
			</div>
		</div>
	);
};

export default Locations;

