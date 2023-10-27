import React from 'react';
import logo from './MewSpin.gif';

function Header() {
    return (
        <div className="header">
            <div className="logo-container">
                <img src={logo} alt="PeeChat Logo" />
                <p>PeeChat Exlusive Server Club!</p>
            </div>
        </div>
    )
}

export default Header;