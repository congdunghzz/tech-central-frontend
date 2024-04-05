import { Link } from "react-router-dom";
import { useState } from "react";

import * as authenticationService from "../../services/authenticationService"
import "./Register.css"

import "../Login/Login.css"
function Register() {
    const initRegisterRequest = {
        email: '',
        password: '',
        name: '',
        gender: '',
        dob: '',
        phone: '',
    };

    const [registerRequest, setRegisterRequest] = useState(initRegisterRequest);
    const onChangeRequest = (e) => {
        setRegisterRequest(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }
    const isFormValid = () => {
        const fieldsToCheck = ['email', 'password', 'name', 'gender', 'dob', 'phone'];
        return fieldsToCheck.every(field => registerRequest[field].trim() !== '');
    };

    const handleSubmitRequest = async () => {
        const res = await authenticationService.register(registerRequest);
        console.log(res);
        if (res?.status === 200) {
            console.log("register successfully");
        } else if (res?.status >= 400 && res?.status < 500) {
            alert(res.data.message);
        }
    }

    return (
        <div className="login container-fluid mh-100  d-flex align-items-center justify-content-center">
            <div className="login-cart  p-4">
                <h2 className="text-center">Register</h2>
                <hr></hr>

                <div className="mb-4">
                    <label htmlFor="email" className="form-label">Email</label>
                    <br></br>
                    <input type="email" className="w-100 h-100"
                        id="email" placeholder="Enter your email"
                        name="email" value={registerRequest.email.trim()}
                        onChange={onChangeRequest} required />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="form-label">Password</label>
                    <br />
                    <input type="password" className="w-100 h-100"
                        id="password" placeholder="Enter your password"
                        name="password" value={registerRequest.password.trim()}
                        onChange={onChangeRequest} />
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <br />
                    <input type="text" className="w-100 h-100"
                        id="name" placeholder="Enter your password"
                        name="name" value={registerRequest.name.trim()}
                        onChange={onChangeRequest} />
                </div>
                <div class="input-group mb-3">
                    <label class="input-group-text" for="gender">Gender</label>
                    <select class="form-select" id="gender" name="gender" value={registerRequest.gender} onChange={onChangeRequest}>
                        <option selected>Choose...</option>
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                        <option value="OTHERS">Others</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="dob" className="form-label">Date Of Birth</label>
                    <br />
                    <input type="date" className="w-100 h-100"
                        id="dob" placeholder="Enter your password"
                        name="dob" value={registerRequest.dob}
                        onChange={onChangeRequest} />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <br />
                    <input type="number" className="w-100 h-100"
                        id="phone" placeholder="Enter your password"
                        name="phone" value={registerRequest.phone}
                        onChange={onChangeRequest} />
                </div>
                <button className="btn btn-light rounded-pill w-100 fw-bold"
                    onClick={handleSubmitRequest}
                    disabled={!isFormValid()}>
                    Sign up
                </button>


                <div className="text-center mt-3 d-flex ">
                    <Link to="/login" className="text-decoration-none text-light">Have account</Link>
                </div>
            </div>
        </div>
    );
}

export default Register;