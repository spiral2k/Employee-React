import React, { Component } from 'react';

export default class TopBarSelect extends Component {

    constructor(){
        super();

        this.state = {value: 'meal'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render(){
        return (
            <div className="topbar-search">

            <form onSubmit={this.handleSubmit}>

                    <div className="search-type">
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="meal">Meal</option>
                            <option value="yoyo">Yoyo</option>
                            <option value="jojo">Jojo</option>
                            <option value="dodo">Dodo</option>
                        </select>
                    </div>


                    <div className="search-query">
                        <input placeholder="Address or Merchant Name"/>
                    </div>

                    <div className="search-km">
                        
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="meal">5 km</option>
                            <option value="meal2">7 km</option>
                            <option value="meal3">10 km</option>
                            <option value="meal4">100 km</option>

                        </select>
                    </div>



                    <div className="search-cusine">

                        <select >
                            <option value="type">Cusine Type</option>
                            <option value="meal2">7 km</option>
                            <option value="meal3">10 km</option>
                            <option value="meal4">100 km</option>

                        </select>
                        
                    </div>

                    <span className="submit">
                        Search
                    </span>

            </form>

            </div>

        )
    };


};