import React, { Component } from 'react';

export default class Remunera_Pager extends Component {

    constructor(props){
        super(props);

        this.pageChange = this.pageChange.bind(this);

    }
    
    pageChange(event){
        this.props.setPage(parseInt(event.target.getAttribute("data-value")));
    }
    
    render(){

        let currentPage = this.props.currentPage + 1;
        let lastPage = this.props.maxPage;
        let previous = "";
        let next = "";

        if(this.props.currentPage > 0){
            previous = <span onClick={this.props.previous} className="previous">{this.props.previousText}</span>
        }else{
            previous = <span className="previous disabled">{this.props.previousText}</span>           
        }


        if(this.props.currentPage != (this.props.maxPage -1)){
            next = <span onClick={this.props.next} className="next">{this.props.nextText}<i className="glyphicon glyphicon-arrow-right"></i></span>
        }else{
            next =<span className="next disabled">{this.props.nextText}</span>
        }

        return (
            <div className="pager">

                <div className="pager-wrapper">
                    <div className="directions">{previous}</div>
                    <div className="info">
                        {currentPage} Of {lastPage}
                    </div>
                    <div className="directions">{next}</div>
                </div>
            </div>
        )
    }
};