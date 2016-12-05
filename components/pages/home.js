import React, { Component } from 'react';

import MealBenefit from '../home_components/meal_benefit';
import Health from '../home_components/health';
import Fuel from '../home_components/fuel';

export default class Home extends Component {

	constructor(props){
		super();
	}


	render(){
		return(
			<div>
				<MealBenefit/>
				<Health/>
				<Fuel/>
			</div>
		)}

}

