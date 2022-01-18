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

import React from 'react';



export default function index(props) {


    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mod} bg-${props.mod}`} >
                <div className="container-fluid">
                        <div className={`form-check form-switch text-${props.mod === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mod</label>
                        </div>    
                </div>
            </nav>
            {/* <div className="container">
                <p> Login PAGE</p>
                <p>Don't share your {props.detailed}</p>
            </div> */}

        </>
    )
}

