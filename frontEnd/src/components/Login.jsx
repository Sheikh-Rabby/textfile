import React from 'react';
import ClientStore from "../store/ClientStore.js";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const {UForm,UFromOnChange,UdataRequest,Udata}=ClientStore()
    const navigate = useNavigate();


    const login = async () => {
        const res = await UdataRequest();
        if (res) {
            navigate("/");
        } else {
            alert("Login failed");
        }
    };


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-5 mb-5">
                        <div className="card-body">
                            <h3 className="card-title text-center">User Login</h3>

                            <div className="">
                                <label htmlFor="email">Email</label>
                                <input
                                    value={UForm.email}
                                    onChange={(e) => UFromOnChange("email", e.target.value)}
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="">
                                <label htmlFor="password">Password</label>
                                <input
                                    value={UForm.password}
                                    onChange={(e) => UFromOnChange("password", e.target.value)}
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter your password"
                                />
                            </div>
                            <button onClick={login} className="btn btn-primary btn-block mt-2">Login</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;