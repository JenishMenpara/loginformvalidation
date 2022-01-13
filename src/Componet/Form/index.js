
import './index.css'
import React, { Component } from 'react'


const loginC = [{
    "Name": "Jenish Menpara",
    "Email": "jenish@gmail.com",
    "Password": "123"

},
{
    "Name": "Priya Bhut",
    "Email": "priyabhut@gmail.com",
    "Password": "hey@priya"
},
{
    "Name": "Jagat Vasveliya",
    "Email": "jagat0@gmail.com",
    "Password": "hey@jagat"
},
{
    "Name": "Arshit Khoshiya",
    "Email": "arshit@gmail.com",
    "Password": "hey@aarshit"
}
];

const validation = () => {

    let gemail = document.getElementById("mail").value;
    let password = document.getElementById("passw").value;

    for (let index = 0; index < loginC.length; index++) 
    {
        if (loginC[index]['Email'] == gemail)
         {

            if (loginC[index]['Password'] == password) {

                document.getElementById("mainfc").innerHTML = `<h1>Welcome<br /> ${loginC[index]["Name"]} </h1>`;
                
                break;

            } else {
                //alert("not found")
                document.getElementById("mainfc").innerHTML = `<h1>Enter valid data</h1>`;
            }
        } 
       
    }


};


export default class indexf extends Component {
    render() {
        return (
            <div>
                <form>
                    <div id="mainfc">
                        <div className="m">
                            <label className=" ff">Email address:</label>
                            <input type="email" className="email" id='mail' />

                        </div>
                        <div className="b">
                            <label className=" ff">Password:</label>
                            <input type="password" className="psaa" id='passw' />
                        </div>

                        <button type="button" className="btn btn-primary" onClick={validation}>Submit</button>
                        

                    </div>
                </form>
            </div>
        )
    }
}
