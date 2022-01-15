const Login = () =>{    
    return (
        <>
            <div className="container">
                <form action="" className="form">
                    <div className="first">
                        <input type="text" name="Username" className="box" placeholder="Username"></input>
        
                    </div>
                    <div className="second">
                        <input type="password" name="password" className="box" placeholder="Password"></input>
                    </div>
                    <button type="submit" value="Login" className="submit">Submit</button>
                </form> 
            </div>
        </>
    )
}

export default Login;