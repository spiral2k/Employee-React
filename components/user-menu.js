import React, { Component } from 'react';

import { Link } from 'react-router';

export default class UserMenu extends Component {

    constructor(props){
        super();
    }


    render(){
        return(
            
            <div className="sub-menu">
                <Link to={`/edit-profile`}>
                    <div className="item">
                        Edit Profile
                    </div>
                </Link>

                <div className="item first">
                    Language
                    <select className="change-lang">
                        <option value="">
                            English
                        </option>
                        <option value="">
                            Japan
                        </option>
                    </select>
                </div>

                <div className="item last">
                    Logout
                </div>

            </div>
        )}

}








