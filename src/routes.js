import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Body from './components/Body';

import Login from './pages/Login';
import Home from './pages/Home';
import Search from './pages/Search';
import Album from './pages/Album';
import Playlist from './pages/Playlist';
import Categories from './pages/Categories';
import Artist from './pages/Artist';

import UserPlaylists from './pages/UserPlaylists';
import UserAlbums from './pages/UserAlbums';

import User from './pages/User';
import { getTokenFromResponse } from './spotify';

const token = getTokenFromResponse().access_token
function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) =>
                token !== undefined ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    );
}

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/login" component={Login} />
            <Body>
                <PrivateRoute exact path="/" component={Home} />
                <PrivateRoute path="/search" component={Search} />
                <PrivateRoute
                    path="/collection/playlists"
                    component={UserPlaylists}
                />
                <PrivateRoute
                    path="/collection/albums"
                    component={UserAlbums}
                />
                <PrivateRoute path="/album/id=:albumId" component={Album} />
                <PrivateRoute
                    path="/playlist/id=:playlistId"
                    component={Playlist}
                />
                <PrivateRoute
                    path="/genre/id=:categoryId"
                    component={Categories}
                />
                <PrivateRoute path="/artist/id=:artistId" component={Artist} />
                <PrivateRoute path="/user/:userId" component={User} />
            </Body>
        </Switch>
    </BrowserRouter>
);

export default Routes;
