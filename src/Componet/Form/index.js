
import './index.css'
//import React, { Component } from 'react'
import React ,{useState} from 'react';
export {loginC};


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
    "Password": "123"
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

    for (let index = 0; index < loginC.length; index++) {
        if (gemail !== "" || password !== "") 
        {
            if (loginC[index]['Email'] === gemail) {

                if (loginC[index]['Password'] === password) {

                     document.getElementById("mainfc").innerHTML = `<h1> ${loginC[index]["Name"]} </h1>`;
                    break;

                }
                else {
                    document.getElementById('wom').style.display = "none";
                    document.getElementById('wop').style.display = "block";
                    //alert("wop");
                    break;
                }
            } else {
                document.getElementById('wom').style.display = "block";
                document.getElementById('wop').style.display = "none";

            }
        } else{
            //alert("not blank")
            document.getElementById("notblank").style.display = "block";
            document.getElementById("notblank").style.display = "block";
            break;
        }

    }


};



export default function indexf() {
   // const [name, setName] = useState("Your Login Data")
    return (
        <div>
                <form>
                    <div id="mainfc">
                        <div className="m">
                            <label className=" ff">Email address:</label>
                            <input type="email" className="email" id='mail' />
                            <div id='wom'>Email is not valid</div>

                        </div>
                        <div className="b">
                            <label className=" ff" id='wp'>Password:</label>
                            <input type="password" className="psaa" id='passw' /><br />
                            <div id='wop'>Password is not valid</div>
                        </div>

                        <div id='notblank'>Not Blank</div>


                        <button type="button"  className="btn btn-primary" onClick={validation}>Submit</button>


                    </div>
                </form>
            </div>
    )
}




