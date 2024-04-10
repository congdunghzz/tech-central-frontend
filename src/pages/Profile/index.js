import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as userService from "../../services/userService";

import "./profile.css";
function Profile() {

    const navigate = useNavigate();
    const [profile, setProfile] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [initialProfile, setInitialProfile] = useState(null);
    const [isDataChanged, setIsDataChanged] = useState(false);

    const getProfile = async () => {
        const res = await userService.getMyProfile();
        console.log(res);

        if (res?.status === 403) {
            alert("You need to login");
            navigate('/login');
            return
        }
        if (res?.status !== 403 && res?.status >= 400 && res?.status < 500) {
            alert(res.data.message);
            return
        }
        if (res?.status >= 500) {
            alert("Something went wrong on server side");
            return
        }
        setProfile(res.data);
        setInitialProfile(res.data);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile(prev => ({
            ...prev,
            [name]: value
        }));

    };

    const handleUpdateClick = () => {
        setIsEditing(true);
    };
    const handleCancelUpdateClick = () => {
        setProfile(initialProfile);
        setIsEditing(false);

    };

    const submitNewProfile = async () => {
        const res = await userService.updateProfile(profile);
        console.log(res);

        if (res?.status === 403) {
            alert("You need to login");
            navigate('/login');
            return
        }
        if (res?.status !== 403 && res?.status >= 400 && res?.status < 500) {
            alert(res.data.message);
            return
        }
        if (res?.status >= 500) {
            alert("Something went wrong on server side");
            return
        }
        setProfile(res.data);
        setInitialProfile(res.data);
    }
    useEffect(() => {

        setIsDataChanged(true);
        if (initialProfile == profile) {
            console.log(initialProfile == profile);
            setIsDataChanged(false);
        }
    }, [profile]);

    useEffect(() => {
        getProfile();
    }, []);

    return (

        <div className="row align-items-center d-flex px-5 container">
            {
                profile ? (

                    <div className="card px-5">
                        <div className="card-header mb-5">
                            <h3 className="card-title text-center">My Profile</h3>
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="name">Name</span>
                            <input type="text" className="form-control"
                                aria-label="Sizing example input" aria-describedby="name"
                                name="name" value={profile.name}
                                onChange={isEditing ? handleChange : null} />
                        </div>

    {/* Bug : cant update gender field */}

                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="gender">Gender</label>
                            <select className="form-select" id="gender" name="gender" disabled={!isEditing} onChange={isEditing ? handleChange : null}>
                                <option value="MALE" selected={profile.gender === 'MALE'}>Male</option>
                                <option value="FEMALE" selected={profile.gender === "FEMALE"}>Female</option>
                                <option value="OTHERS" selected={profile.gender === "OTHERS"}>Others</option>
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="dob">Day Of Birth</span>
                            <input type="date" className="form-control"
                                aria-label="Sizing example input" aria-describedby="dob"
                                name="dob" value={profile.dob}
                                onChange={isEditing ? handleChange : null} />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="email">Email</span>
                            <input type="text" className="form-control"
                                aria-label="Sizing example input" aria-describedby="email"
                                name="email" value={profile.email} disabled />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="phone">Phone</span>
                            <input type="number" className="form-control"
                                aria-label="Sizing example input" aria-describedby="phone"
                                name="phone" value={profile.phone}
                                onChange={isEditing ? handleChange : null} />
                        </div>
                        <div className="d-flex col-6 ms-auto">


                            {isEditing ? (
                                <>
                                    <button className="btn btn-secondary mb-5 w-75 me-1" onClick={handleCancelUpdateClick}>Cancel</button>
                                    <button className="btn btn-primary mb-5 w-75"
                                        disabled={!isDataChanged} onClick={submitNewProfile} >
                                        Save
                                    </button>
                                </>
                            ) : (
                                <button className="btn btn-primary mb-5 w-100" onClick={handleUpdateClick}>Update Information</button>
                            )}

                        </div>

                    </div>
                ) : (
                    <div className="d-flex justify-content-center align-items-center">
                        <h1 className="text-center">LOADING</h1>
                    </div>)
            }

        </div>
    );
}

export default Profile;