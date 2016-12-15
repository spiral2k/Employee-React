import React, { Component } from 'react';

export default class EditProfile extends Component {

    constructor(props){
        super();
    }


    render(){
        return(
            <div className="blocks">

                <div className="block">

                    <div className="block-inner">

                        <span className="title">
                            Personal Information
                        </span>


                        <div className="content">
                            <span className="item">
                                Alexander Baumberg  Manager
                            </span>
                            <span className="item">
                                Workplace 365 Technologies
                            </span>
                            <span className="item">
                                No. 42159236591
                            </span>

                            <span className="item">
                                axel.baum@365-tech.com
                            </span>


                            <div className="checkboxs">
                                <span className="item-checkbox">
                                    <span className="checkbox"></span>  cewewfewfewfewfewfewfew
                                </span>
                                <span className="item-checkbox">
                                    <span className="checkbox"></span>  cewewfewfewfewfewfewfew
                                </span>

                            </div>

                        </div>

                    </div>

                    <div className="button">
                        Save
                    </div>

                </div>

                <div className="block">

                    <div className="block-inner">

                    <span className="title">
                        Reset Password
                    </span>


                        <div className="content">

                            <div className="input-field">
                                <span>Current Password</span>
                                <input type="text"/>
                            </div>

                            <div className="input-field">
                                <span>New Password</span>
                                <input type="text"/>
                            </div>

                            <div className="input-field">
                                <span>Repeat New Password</span>
                                <input type="text"/>
                            </div>

                        </div>

                    </div>

                    <div className="button">
                        Reset
                    </div>

                </div>

                <div className="block">

                    <div className="block-inner">

                    <span className="title">
                        My Credit Card
                    </span>


                        <div className="content">

                            <div className="card">
                                <img src="../images/visa.png"/>

                                <span className="date">03/2015</span>
                                <span className="last-nums">1234</span>
                                <span className="name">Alexander Baumberg</span>
                            </div>


                        </div>

                </div>

                <div className="button">
                    Edit
                </div>


                </div>

            </div>
            
        )}

};

