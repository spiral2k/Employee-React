import React, { Component } from 'react';

export default class CSV extends Component {

    constructor(props){
        super();
    }


    render(){
        return(
            <div className="cvs">
                <div className="cvs-wrapper">

                    <div className="title">
                        Report Peyments
                    </div>

                    <div className="input-wrapper">
                        <span>Merchant Name</span>
                        <input type="text"/>
                    </div>

                    <div className="input-wrapper">
                        <span className="left">Merchant Adderess</span>
                        <span className="right">Optional</span>
                        <input type="text"/>
                    </div>

                    <div className="input-wrapper">
                        <span>Amount</span>
                        <input type="text"/>
                    </div>



                    <div className="input-wrapper split">
                        <div className="left">
                            <span>Date</span>
                            <input type="text"/>
                        </div>
                        <div className="right">
                            <span>Time</span>
                            <input type="text"/>
                        </div>
                    </div>

                    <div className="upload">

                        <img src="./images/upload.png"/>

                        <span>
                            Upload a Receipt
                        </span>

                    </div>



                </div>

            </div>
        )}

}

