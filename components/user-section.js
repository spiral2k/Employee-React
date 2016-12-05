import React, { Component } from 'react';


import UserMenu from './user-menu';

export default class UserSection extends Component {

    constructor(){
        super();
        this.state = {
            showMenu: false
        }

        this.toggleMenu = this.toggleMenu.bind(this)

    }

    toggleMenu(){

        console.log(this.state.showMenu);

        let state = this.state.showMenu;


        this.setState({
            showMenu: !state
        });
    }


    render(){
        return (
               <div className="user-section">

                   <div className="user-menu-top" onClick={this.toggleMenu}>

                       <div className="user-img">
                           <img src="./images/user_photo.png"/>
                       </div>
                       <div className="user-name">
                           Balaal alal
                       </div>

                       <div className="arrow">
                           <img src="./images/user_section_dropdown.png"/>
                       </div>

                   </div>

                   { this.state.showMenu ? <UserMenu /> : null }

               </div>
        )
    };


};