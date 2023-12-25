 import React from "react";
const SigNin=()=>{
    return(
        <div>
            <div className="container">
                <div className="wrapper">
                    <div className="title">
                        <span>Login Form</span>
                        </div>

                    <form action="#">
                        <div className="row">
                            <input 
                            type="text" 
                            placeholder="Email or Phone" 
                            required/>
                        </div>

                        <div className="row">
                            <input 
                            type="password" 
                            placeholder="Password" 
                            required/>
                        </div>

                        <div className="pass">
                            <a href="#">Forgot password?</a>
                            </div>

                        <div className="row button">
                            <input type="submit" value="Login"/>
                        </div>

                        <div className="signup-link">garden sad</div>
                    </form>
                </div>
            </div>
        </div>
           )
}
export  {SigNin}