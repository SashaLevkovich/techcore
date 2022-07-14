import React from 'react';

import { ReactComponent as General} from '../../img/icons/general.svg';
import { ReactComponent as Calendar} from '../../img/icons/settings-vacation manager.svg';

const SidebarMenu = () => {
	return (
		<div className="sidebar-menu">
				<ul className="sidebar-menu__list">
					<li className="sidebar-menu__item item">
						<div className="item__title">
							<General />
							General
						</div>
					</li>
					
					<li className="sidebar-menu__item item active">
						<div className="item__title">
							<Calendar />
							Vacation Manager
						</div>
						<ul className="sidebar-menu__sub sub">
							<li>
								<div className="sub-item">
									Leave Types
								</div>
							</li>
							
							<li className="active">
								<div className="sub-item">
									Locations
								</div>
							</li>
						</ul>
					</li>
				</ul>
		</div>
	);
};

export default SidebarMenu;