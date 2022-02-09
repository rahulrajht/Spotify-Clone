import React, { useState, useEffect } from 'react';

import './styles.css';

import api from '../../services/api';

import HomeItems from '../../components/HomeItems';

function Home() {
    const [newReleases, setNewReleases] = useState([]);
    const [categories, setCategories] = useState([]);
    const [playlists, setPlaylists] = useState([]);

    const [load, setLoad] = useState(true);

    async function loadReleases() {
        const response = await api.get(
            '/browse/new-releases?country=US'
        );

        setNewReleases(response.data.albums.items);

        setLoad(false);
    }

    async function loadCategories() {
        const response = await api.get('/browse/categories?country=us');

        setCategories(response.data.categories.items);

        setLoad(false);
    }

    async function loadPlaylists() {
        const response = await api.get(
            'browse/featured-playlists?country=us'
        );

        setPlaylists(response.data.playlists.items);

        setLoad(false);
    }

    useEffect(() => {
        loadReleases();
        loadCategories();
        loadPlaylists();
    }, []);

    return (
        <div id="home" className="container">
            {load ? (
                <h1 className="loading">Loading...</h1>
            ) : (
                <>
                    <HomeItems
                        itemType="album"
                        itemTitle="New releases"
                        itemData={newReleases}
                    />
                    <HomeItems
                        itemType="category"
                        itemTitle="Categories"
                        itemDataCategories={categories}
                    />
                    <HomeItems
                        itemType="playlist"
                        itemTitle="High playlists"
                        itemData={playlists}
                    />
                </>
            )}
        </div>
    );
}

export default Home;
