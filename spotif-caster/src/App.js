import './App.css';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import axios from "axios"
import { useState } from 'react';


function App(props) {

const [song, setSong] = useState("");
const [track, setTrack] = useState("");

const onType = (e) => { 
  setSong(e.target.value); 
}

const login = () => {
  const clientId = 'ab04a22634f04a44bf5844805f4b5100';
  const redirectUri = 'http://localhost:3000';
  const scope = 'user-read-private user-read-email user-modify-playback-state user-read-currently-playing user-read-playback-position';
  const authEndpoint = 'https://accounts.spotify.com/authorize';
  const queryParams = `?response_type=token&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
  window.location = `${authEndpoint}${queryParams}`;
};

const skip_song = async () => {

  const hashParams = window.location.hash.substr(1).split('&').reduce((acc, item) => {
    const parts = item.split('=');
    acc[parts[0]] = parts[1];
    return acc;
  }, {});

  if (hashParams.access_token) {

    console.log(hashParams.access_token);

    const skip_url = 'https://api.spotify.com/v1/me/player/next';

    let skip_axios = axios.create(); 
    let data = ""
    const response = await skip_axios.post(skip_url, data , {
      headers: { 
        'Authorization': `Bearer  ${hashParams.access_token}`,
      }
    })
  }
};

const play_song = async () => {

  const hashParams = window.location.hash.substr(1).split('&').reduce((acc, item) => {
    const parts = item.split('=');
    acc[parts[0]] = parts[1];
    return acc;
  }, {});

  if (hashParams.access_token) {

    const query = encodeURIComponent(song);
    const type = 'track';
    const url = `https://api.spotify.com/v1/search?q=${query}&type=${type}`;

    axios.get(url, {
      headers: {
        'Authorization': `Bearer ${hashParams.access_token}`
      }
    }).then(response => {
      const tracks = response.data.tracks.items;

      const uri = tracks[0].uri;
      
      const url = `https://api.spotify.com/v1/me/player/queue?uri=${uri}`;


      const res = axios.post(url, null , {
        headers: { 
          'Authorization': `Bearer  ${hashParams.access_token}`,
        }
      })
      
      }
    )
  

  }
};

  
  return ( 

    <div className="App" style={{
        backgroundColor: 'white',
        width: '100%',
        height: '100%', 
        display: "flex", 
        flexDirection: "column"
    }}>   

    <div style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 20

    }}>

    <div style={{
      paddingTop: 20,
      marginLeft: 100, 
      fontSize: 20
    }}>
      Spotify Party Queuer  
    </div>
    
    <div style={{
      paddingTop: 10,
      marginLeft: 30, 
      marginRight: 10 
    }}>
      <Button variant="contained" onClick={login}>Login</Button>
    </div>  

    </div>


    {/* Search bar */}
    <div style={{
      padding: 30
    }}>
      <TextField id="outlined-basic" onChange={onType} label="Song" variant="outlined" />

    </div>  

    <div style={{
      display: "flex", 
      flexDirection: "row", 
      justifyContent: "center"
    }}>

    <div style={{
      padding: 10
    }}>
      <Button variant="contained" onClick={play_song}>Play</Button>

    </div>

    
    <div style={{
      padding: 10
    }}>
      <Button variant="contained" onClick={skip_song}>Skip</Button>

    </div>  


    </div>
    

    <div>    

    
    </div>

    </div>
  );
}

export default App;
