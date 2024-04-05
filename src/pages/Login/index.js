import { Link, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import * as authenticationService from "../../services/authenticationService";
import "./Login.css"
function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginBtn = async () => {

        if(email.trim() === '' || password.trim() === '') {
            alert("Please enter all information login");
            return;
        }

        const loginRequest = {
            email: email, 
            password: password
        }
        const res = await authenticationService.login(loginRequest)
        if(res.status === 200){
            console.log("login successfully");
        } else if(res?.status === 403){
            setPassword('');
            alert("Email or password is incorrect");
        }else {
            alert("Cant not log in now");
        }
    }

    

    return (
        <div className="login container-fluid mh-100  d-flex align-items-center justify-content-center">
            <div className="login-cart  p-4">
                <h2 className="text-center">Login</h2>
                <hr></hr>
            
                    <div className="mb-4">
                        <label htmlFor="email" className="form-label">Email</label>
                        <br></br>
                        <input type="email" className="w-100 h-100"
                            id="email" placeholder="Enter your email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }} required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="form-label">Password</label>
                        <br />
                        <input type="password" className="w-100 h-100"
                            id="password" placeholder="Enter your password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }} />
                    </div>

                    <button className="btn btn-light rounded-pill w-100 fw-bold" onClick={handleLoginBtn}>Login</button>

                
                <div className="text-center mt-3 d-flex ">
                    <Link to="/register" className="text-decoration-none text-light">Register</Link>
                    <a href="#" className="text-decoration-none ms-auto text-light">Forgot Password?</a>
                </div>
            </div>
        </div>
    );
}

export default Login;