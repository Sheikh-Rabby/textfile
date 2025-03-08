import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-success">
                <div className="container">
                    <a className="navbar-brand text-white fw-bold" href="#">Mess Management</a>
                    <Link className="navbar-brand text-white ms-4 btn navbtn" to="/">Home</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
                            style={{ "--bs-scroll-height": "100px" }}>
                        </ul>
                        <div className="d-flex">
                            <button className="btn navbtn text-white">Logout</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;