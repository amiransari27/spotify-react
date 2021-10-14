
import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player/Player';

const spotify = new SpotifyWebApi()

function App() {

  const [token, setToken] = useState("")

  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ""
    console.log("TOKEN>>>>", hash)
    const _token = hash.access_token

    if (_token) {
      setToken(_token)
      spotify.setAccessToken(_token)

      spotify.getMe().then(user => {
        console.log("person", user)
      })
    }

  }, [])

  return (
    <div className="app">
      {
        token ?
          <Player /> :
          <Login />

      }
    </div>
  );
}

export default App;
