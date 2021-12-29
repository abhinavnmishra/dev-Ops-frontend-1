import { useState, useEffect} from "react";
import axios from "axios";
const Login = () =>{

    const url = "https://restaurant-app-devops.herokuapp.com/authentication/login";

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    
    async function submit() {
        console.log(userName, password)
        let data = {userName, password};
        let result = await fetch("https://restaurant-app-devops.herokuapp.com/authentication/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
        },
        body: JSON.stringify(data) 
        });
        result = await result.json();
        console.log(result);
    }
    return (
        <>
            <div className="container">
                <form action="" className="form">
                    <div className="first">
                        <input type="text" name="Username" className="box" placeholder="Username" onChange={(e)=>{setUserName(e.target.value)}}></input>
        
                    </div>
                    <div className="second">
                        <input type="password" name="password" className="box" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}></input>
                    </div>
                    <button type="submit" value="Login" className="submit" onClick={submit}>Submit</button>
                </form> 
            </div>
        </>
    )
}

export default Login;