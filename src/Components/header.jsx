import React from 'react';

const Header = () => {
    return (
        <div className='bg-dark text-white d-flex align-items-center justify-content-between' style={{ height: "10vh", fontSize: "24px", fontWeight: "bold", padding: "0px 10px" }}>
            <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Reddit Posts</h1>
        </div>
    );
}

export default Header;
