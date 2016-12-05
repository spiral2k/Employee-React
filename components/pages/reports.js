import React, { Component } from 'react';
import Griddle from 'griddle-react';
import Remunera_Pager from '../home_components/pager';



export default class Reports extends Component {

	constructor(){
		super();



		this.setPageSize = this.setPageSize.bind(this);
	}


	componentWillMount(){
		this.setState({
			externalResultsPerPage: 10
		});
	}

	setPageSize(event){

		let size = event.target.value;

		this.setState({
			externalResultsPerPage: size
		});
	}


	onRowClick(rowData, event){


		console.log("row clicked! ", rowData.props.data, event)
	}

	render(){
		return(

		<div>
			<div className="top-table-info">

				<select className="per-page" onChange={this.setPageSize} value={this.state.externalResultsPerPage}>
					<option value="10">10</option>
					<option value="15">15</option>
					<option value="20">20</option>
					<option value="50">50</option>
					<option value="100">100</option>
					<option value="200">200</option>
				</select>


				<div className="info">
					Total: Amount 300,000 Discount 200,00 Net 50,000 Budget 300,000 Deals 30
				</div>


			</div>

				<Griddle results={fakeData}
						 useCustomPagerComponent="true"
						 customPagerComponent={Remunera_Pager}
						 tableClassName="regular-table"
						 bodyCssClassName="regular-table-body"
						 useGriddleStyles={false}
						 externalSetPageSize={this.setPageSize}
						 resultsPerPage={this.state.externalResultsPerPage}
						 onRowClick={this.onRowClick}
		/>
		</div>
			)
	}

}




var fakeData =  [
	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "tew wet ew tew ",
		"city": "Kapwe tewtewtowsin",
		"state": "Hawaii",
		"country": "Uniwetwetted Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "uuuuu",
		"city": "Kapowe twetwsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "kyuuonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Makuytkyukd",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mkuytkard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mykuykyutkd",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "vz\vxzvzx",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mgregergregd",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "sdgsdgdsag",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mtwt",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Maewqtweqtwtonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	},	{
		"id": 0,
		"name": "Mayer Leonard",
		"city": "Kapowsin",
		"state": "Hawaii",
		"country": "United Kingdom",
		"company": "Ovolo",
		"favoriteNumber": 7
	}

];