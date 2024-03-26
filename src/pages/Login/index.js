import { Link } from "react-router-dom";

import "./Login.css"
function Login(){
    return (
        <div className="login container-fluid mh-100  d-flex align-items-center justify-content-center">
            <div className="login-cart  p-4">
                <h2 className="text-center">Login</h2>
                <hr></hr>
                <form>
                    <div className="mb-4">
                        <label for="email" className="form-label">Email</label>
                        <br></br>
                        <input type="email" className="w-100 h-100" id="email" placeholder="Enter your email"/>
                    </div>
                    <div className="mb-4">
                        <label for="password" className="form-label">Password</label>
                        <br/>
                        <input type="password" className="w-100 h-100" id="password" placeholder="Enter your password"/>
                    </div>
                        
                    <Link to={'/'}>
                        <button type="submit" className="btn btn-light rounded-pill w-100 fw-bold">Login</button>
                    </Link>
                </form>
                <div className="text-center mt-3 d-flex ">
                    <a href="#" className="text-decoration-none text-light">Register</a>
                    <a href="#" className="text-decoration-none ms-auto text-light">Forgot Password?</a>
                </div>
            </div>
        </div>
    );
}

export default Login;