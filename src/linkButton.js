import React from "react";
import "./linkButton.css";
import discordLogo from "./discordLogo.svg";

function linkButton() {
    return <div className="linkButton-container">
        <div className="button-1">
            <a href="https://discord.com/channels/1152979295128535130/1152979295799615551" target="_blank" rel="noopener noreferrer">
                <img src={discordLogo} alt="Discord Logo" />
                <p>go to server</p>
            </a>
        </div>
    </div>;
}

export default linkButton;