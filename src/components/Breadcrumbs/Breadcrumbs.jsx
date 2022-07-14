import React from 'react';

import { ReactComponent as Settings} from '../../img/icons/setting.svg';
import { ReactComponent as Shape} from '../../img/icons/Shape.svg';

import './Breadcrumbs.css';

const Breadcrumbs = () => {
	return (
		<div className="breadcrumbs">
			<div className="breadcrumbs__container">
				<div className="breadcrumbs__body">
					<div className="breadcrumbs__item">
						<Settings className="breadcrumbs__settings"/>
						Settings
						<Shape className="breadcrumbs__shape"/>
					</div>
					
					<div className="breadcrumbs__item">
						Vacation Manager
					</div>
				</div>
			</div>
		</div>
	);
};

export default Breadcrumbs;