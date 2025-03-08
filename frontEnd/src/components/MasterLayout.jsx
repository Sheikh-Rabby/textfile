import React from 'react';
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";

const MasterLayout = (props) => {
    return (
        <div>
            <Navbar/>
            {props.children}
            <Footer/>
        </div>

    );
};

export default MasterLayout;