import React from 'react';
import './mcServer.css';
import Divider from './Divider.js';
import Clipboard from './clipboard-copy.svg';

function mcServer() {
    const serverIP = "mc.peechat.club";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(serverIP);
    };

    return (
        <div className='mcServer-container'>
            <div className='mcServer'>
                <h1 className='mcServer-title'>Minecraft Server</h1>

                <Divider marginTop="1rem" marginBottom="2rem" width='30%' align='left' />

                <div className='Server-IP-container'>
                    <p className='Server-IP'>{serverIP}</p>
                    <div className='clipBoard-click' onClick={copyToClipboard}>
                        <img src={Clipboard} alt='copy to clipboard' className='clipBoard-img' />
                    </div>
                </div>

                <p className='mcServer-text'>
                    
                </p>

            </div>
        </div>
    )
};

export default mcServer;