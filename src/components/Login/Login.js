import React from "react";
import { loginUrl } from "../../spotify";
import './Login.css'

function Login() {


    return (
        <div className="login">
            <img src="spotify2019-830x350.jpg" alt="" />
            
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login