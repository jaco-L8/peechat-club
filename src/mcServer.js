import React from 'react';
import './mcServer.css';
import Divider from './Divider.js';
import Clipboard from './clipboard-copy.svg';
import modsZip from './mods-peechat-V1.zip';

function mcServer() {
    const serverIP = "mc.peechat.club";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(serverIP);
    };

    return (
        <div className='mcServer-container'>
            <div className='mcServer'>
                <h1 className='mcServer-title'>Minecraft Server</h1>

                <Divider marginTop="1rem" marginBottom="4rem" width='30%' align='left' />

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
                                <a href={modsZip} download><button> Download mods V1.0</button></a> </p>
                            </li>
                            <li>
                               <p> Unzip and place the mods in the 'mods' folder </p>
                            </li>
                            <li>
                                <p> Join the server using the IP above and <span className="fun-text">have fun!</span></p>
                            </li>
                        </ol>
                    </div>

                    
                    <h1 className='mcServer-subtitle'>Other info</h1>
                    <Divider marginTop="1rem" marginBottom="3rem" width='10%' align='left' />
                    <p>
                        - The server is running on 1.20.1, so make sure to set your minecraft version to 1.20.1 in quilt install!
                        <br />
                        <br />
                        - video showing where to place the mods: <a href="https://youtu.be/UcHjgYJwLaw" target="_blank" rel="noopener noreferrer">https://youtu.be/UcHjgYJwLaw</a>
                        <br />
                        <br />
                        <span className="fun-text">Note:</span> This server is still in development, and may be unstable at times. If you have any questions or concerns, please contact me (jaco) on discord.
                    </p>
                </div>

            </div>
        </div>
    )
};

export default mcServer;