import './App.css';
import facebook from './icons8-facebook-100.png';
import twitter from '././icons8-twitter-120.png';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
const File = () =>{
    return(
        <>
        <input type="button" className="btn-ufi" value="Update Food Item"></input>

        <div id="div-tbl">
            <h1 className="menu">Menu</h1>
            <div className = "table">
                <tr>
                <div className = "padd1">
                    <th>Food Item</th>
                    <th>Amount</th>
                    <th></th>
                </div>   
                </tr>

                <tr>
                <div className = "padd1">
                    <td>item</td>
                    <td>amount</td>
                    <td><input className="btn" type="button" value="Delete"></input></td>
                </div>
                </tr>

            </div>
        
        </div>
        
        <div className="add-items">
            <input className="btn" type="button" value="Add Item"></input>
        </div>
    
        <div className="save">
            <input className="btn" type="button" value="Save"></input>
        </div>
        
        
        <footer className="foot">
            <a href="https://www.facebook.com/"><img className="f-icon" src={facebook} alt ="facebookicon"></img></a>
            <a href="https://twitter.com/Twitter?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img className="f-icon" src={twitter} alt="twittericon"></img></a>
        </footer>
    </>
    )
}
export default File;