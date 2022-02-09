import React from 'react';

import { NavLink } from 'react-router-dom';

import {
    MdHome,
    MdPlaylistPlay,
    MdAlbum,
} from 'react-icons/md';

import { FiSearch} from 'react-icons/fi';

import './styles.css';

import logo from '../../assets/spotify-clone-app-logo-white.png';

function Sidebar({ sidebarState }) {
    const menuItems = [
        {
            label: 'Home',
            path: '/',
            icon: <MdHome size="2rem" />,
        },
        {
            label: 'Search',
            path: '/search',
            icon: <FiSearch size="2rem" />,
        },
    ];

    const libraryItems = [
        
        {
            label: 'Playlists',
            path: '/collection/playlists',
            icon: <MdPlaylistPlay size="2rem" />,
        },
        {
            label: 'Albums',
            path: '/collection/albums',
            icon: <MdAlbum size="2rem" />,
        },
    ];

    return (
        <div id="sidebar">
            <img src={logo} alt="logo" />
            <ul>
                {menuItems.map((data) => (
                    <li
                        key={data.path}
                        className="menu-item"
                        onClick={window.innerWidth <= 810 ? sidebarState : null}
                    >
                        <NavLink exact className="item-link" to={data.path}>
                            <div className="item-icon">{data.icon}</div>
                            <div className="item-text">{data.label}</div>
                        </NavLink>
                    </li>
                ))}
            </ul>
            <div className="user-playlists">
                <span>Your library</span>
                <ul>
                    {libraryItems.map((data) => (
                        <li
                            key={data.path}
                            className="menu-item"
                            onClick={
                                window.innerWidth <= 810 ? sidebarState : null
                            }
                        >
                            <NavLink exact className="item-link" to={data.path}>
                                <div className="item-icon">{data.icon}</div>
                                <div className="item-text">{data.label}</div>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
