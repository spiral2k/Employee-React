import React, { Component } from 'react';
import Content from './content';

export default class Fuel extends Component {

    constructor(){
        super();

        this.state = {
            show_content: false
        }

        this.showContent = this.showContent.bind(this);

    }


    showContent(){

        if(this.state.show_content)
            this.setState({
                show_content: false
            });
        else
            this.setState({
                show_content: true
            });
    }


    render(){
        return(
            <div className="component">
                <div className="component-top">

                    <div className="left">
                        <div className="title">
                            Fuel for Car Company
                        </div>

                        <div className="sub-title">
                            Left: $100
                        </div>

                        <div className="bar"><div className="fill"></div></div>
                        <div className="bar-title">
                            Allocated $1,000
                        </div>
                    </div>

                    <div className="right">
                        <div className="spent-info">
                            Spent on my Credit Card $-
                        </div>
                    </div>

                </div>

                <div className="component-bottom">
                    <span className="arrow" onClick={this.showContent}>
                        <img src="./images/arrow.png" className={this.state.show_content ? "arrow-inner spin" : "arrow-inner"}/>
                    </span>




                    <div className={this.state.show_content ? "component-content show" : "component-content"} ref="content">
                        <Content/>
                    </div>
                    <div className="padding">
                        <div className="list">
    
                            <div className="item">
                                <img src="./images/temp/mb1.png"/>
                                <div className="info">
                                    <div className="title">
                                        50% of all meals
                                    </div>
                                    <div className="text">
                                        on mondays ...
                                    </div>
                                    <div className="text">
                                        between 10:00-19:00
                                    </div>
    
                                    <div className="name">
                                        <img src="./images/temp/smb1.png"/>
                                        <span className="text">Bar Italy</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        )
    }

}