import React from 'react';
import './mcServer.css';
import Divider from './Divider.js';
import Clipboard from './clipboard-copy.svg';

function mcServer() {
    const serverIP = "mc.peechat.club";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(serverIP);
    };

    const downloadMods = () => {
        window.location.href = "URL_TO_YOUR_ZIP_FILE";
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

                <div className='mcServer-text'>
                    <p>
                        Join the peechat minecraft modded SMP! the server is running on 1.20.1 and is modded with the QuiltMC mod loader.
                        <br />
                        <br />
                        follow the simple steps below to join the server!
                    </p>
                    <Divider marginTop="1rem" marginBottom="5rem" width='10%' align='left' />
                    <div className='mcServer-steps'>
                        <ol>
                            <li>
                                <p>Download the <a href="https://quiltmc.org/en/install/client/" target="_blank" rel="noopener noreferrer">Quilt client</a> Mod Loader</p>
                            </li>
                            <li>
                               <p> Download the mods 
                                <button onClick={downloadMods}>Download mods V1.0</button> </p>
                            </li>
                            <li>
                               <p> Unzip and place the mods in the 'mods' folder </p>
                            </li>
                            <li>
                                <p> Join the server using the IP above and <span className="fun-text">have fun!</span></p>
                            </li>
                        </ol>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default mcServer;