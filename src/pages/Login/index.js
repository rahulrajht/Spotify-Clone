import React from 'react';

import './styles.css';

import logo from '../../assets/spotify-clone-app-logo-white.png';
import { accessUrl } from '../../spotify';

function Login() {
    return (
        <div id="login">
            <div className="header">
                <div className="spotify-logo">
                    <img src={logo} alt="Logo" />
                </div>
            </div>
            <div className="content">
                <a
                    href={accessUrl}
                    rel="nooper noreferrer"
                >
                    <button type="button">Login to Spotify</button>
                </a>
            </div>
        </div>
    );
}

export default Login;
