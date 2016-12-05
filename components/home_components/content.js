import React, { Component } from 'react';

export default class Content extends Component {

    constructor(){
        super();
    }

    render(){
        return (
            <div className="content">

                <div className="content-boxs">

                    <div className="content-box one">
                        <span className="title left">Transaction</span>

                        <span className="price">$5</span>
                        <span className="sub-price">Amount</span>
                    </div>
                    
                    <div className="content-box">
                        <span className="title">Customized Range</span>

                        <div className="split">
                            <span className="price">$30</span>
                            <span className="sub-price">Amount</span>
                        </div>
                        
                        <div className="split">
                            <span className="price">2</span>
                            <span className="sub-price">No. Of Days</span>
                        </div>
                    </div>

                    <div className="content-box">
                        <span className="title">Day</span>

                        <div className="split">
                            <span className="price">$30</span>
                            <span className="sub-price">Amount</span>
                        </div>

                        <div className="split">
                            <span className="price">2</span>
                            <span className="sub-price">No. Of Days</span>
                        </div>

                    </div>

                    <div className="content-box">
                        <span className="title">Week</span>

                        <div className="split">
                            <span className="price">$30</span>
                            <span className="sub-price">Amount</span>
                        </div>

                        <div className="split">
                            <span className="price">2</span>
                            <span className="sub-price">No. Of Days</span>
                        </div>

                    </div>

                    <div className="content-box">
                        <span className="title">Month</span>

                        <div className="split">
                            <span className="price">$30</span>
                            <span className="sub-price">Amount</span>
                        </div>

                        <div className="split">
                            <span className="price">2</span>
                            <span className="sub-price">No. Of Days</span>
                        </div>

                    </div>

                </div>

                <div className="title">
                    When
                </div>
                
                <div className="content-boxs">

                    <div className="content-box">
                        <span className="price">SUN</span>
                        <span className="sub-price">No Limitations</span>
                    </div>

                    <div className="content-box">
                        <span className="price">MON</span>
                        <span className="sub-price">No Limitations</span>
                    </div>

                    <div className="content-box">
                        <span className="price">TUE</span>
                        <span className="sub-price">No Limitations</span>
                    </div>

                    <div className="content-box">
                        <span className="price">WED</span>
                        <span className="sub-price">No Limitations</span>
                    </div>

                    <div className="content-box">
                        <span className="price">TUR</span>
                        <span className="sub-price">No Limitations</span>
                    </div>

                    <div className="content-box">
                        <span className="price">FRI</span>
                        <span className="sub-price">No Limitations</span>
                    </div>

                    <div className="content-box">
                        <span className="price">SAT</span>
                        <span className="sub-price">No Limitations</span>
                    </div>

                </div>




                <div className="title">
                    Where
                </div>

                <div className="content-boxs">

                    <div className="content-box">
                        <span className="price">3,600</span>
                        <span className="sub-price"><a>Merchants Applying</a></span>
                    </div>

                </div>

            </div>
        )
    };


};