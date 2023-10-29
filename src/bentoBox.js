import React from 'react';
import ppBounce from './ppBounce.gif';
import './bentoBox.css';

function bento() {
    return (
        <div className='bento-container'>
                <div className="T1 content">
                    <div className="T1-text-container">
                        <div className="T1-Main content2"> <p>PEECHAT FOREVER</p></div>
                        <div className="T1-Sub content2">
                            <p> Peechat.club is a webpage affiliated with the Peechat Exclusive Club server, a small community of Ludwig fans </p>
                            <p>Here you can find all resources assoiated with the server, including the bot source code, the minecraft server files, and other related projects!</p>
                        </div>
                    </div>
                </div>
                <div className="T2 content"> <img src={ppBounce} alt="ppBounce"/> <p>W.I.P</p> </div>
        </div>
    )
}

export default bento;

