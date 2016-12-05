import React, { Component } from 'react';
import { Link } from 'react-router';
import MenuItem from './menu-item';
import CSV from './cvs';

import TopBarSearch from './topbar-search';

import UserSection from './user-section';

class Layout extends Component {

	constructor(props){
		super();
	}
	

	render(){
		return (
				<div className="top-bar">

					<span className="logo">
						<Link to={`/`}>
							<img src="./images/logo.png" />
						</Link>
					</span>
					
					<span className="topbar-right">
						
						<TopBarSearch/>
						
						<div className="menu-items">
	

							<Link to={`/budget_policy`}>
								<MenuItem title="Budget & Policy"/>
							</Link>

							<Link to={`/reports`}>
								<MenuItem title="Reports"/>
							</Link>
								
						</div>

						<UserSection/>

						<CSV/>

					</span>
				</div>
		)

	}
}


export default Layout;