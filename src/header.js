import React from 'react';
import logo from './MewSpin.gif';
import LinkButton from './linkButton';

function Header() {
    return (
        <div className="header">
            <div className="logo-container">
                <img src={logo} alt="PeeChat Logo" />
                <p>PeeChat Exclusive Server Club!</p>
                < LinkButton />
            </div>
        </div>


    )
}

export default Header;