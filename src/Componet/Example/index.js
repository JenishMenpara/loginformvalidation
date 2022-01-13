import './index.css';
/* USING CLASS COMPONET */

/* import React, { Component } from 'react'


export default  class index extends Component {
        constructor(props){
            super(props);
            this.state={
                name:props.name
            };
        }

    render() {
        return (
            <div className="container war">
                <p>This is the page for {this.props.name}</p>
                <p>Don't share your {this.props.lastname}</p>
            </div>
        );
    }
} */

/* USING FUNCTION COMPONET */

import React from 'react'

export default function index (props) {
   

    return (
        <div className="container">
            <p> {props.name} PAGE</p>
            <p>Don't share your {props.detailed}</p>
        </div>
       
    )
}

