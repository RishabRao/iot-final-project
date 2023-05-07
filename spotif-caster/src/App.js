import './App.css';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import axios from "axios";
import queryString from 'query-string';



  const login = () => {
    const queryParams = queryString.stringify({
      response_type: 'token',
      client_id: 'ab04a22634f04a44bf5844805f4b5100',
      redirect_uri: 'http://localhost:3000/',
      scope: 'user-read-private user-read-email',
    });
    window.location = `https://accounts.spotify.com/authorize?${queryParams}`;
  };


const skip_song = async () => {

  // const skip_url = 'https://api.spotify.com/v1/me/player/next';

  // let skip_axios = axios.create(); 
  // let data = ""
  // const response = await skip_axios.post(skip_url, data , {
  //   headers: { 
  //     'Authorization': `Bearer  ${access_token}`,
  //   }
  // })

};



function App() {
  return ( 

    <div className="App" style={{
        backgroundColor: 'white',
        width: '100%',
        height: '100%', 
        display: "flex", 
        flexDirection: "column"
    }}>   

    <div style={{
      paddingTop: 20  
    }}>
      Spotify Music Queuer  
    </div>
    
    {/* Search bar */}
    <div style={{
      padding: 30
    }}>
      <TextField id="outlined-basic" label="Song" variant="outlined" />

    </div>  

    <div style={{
      display: "flex", 
      flexDirection: "row", 
      justifyContent: "center"
    }}>

    <div style={{
      padding: 10
    }}>
      <Button variant="contained" onClick={skip_song}>Play</Button>

    </div>

    
    <div style={{
      padding: 10
    }}>
      <Button variant="contained" onClick={skip_song}>Skip</Button>

    </div>  
    <div style={{
      padding: 10
    }}>
      <Button variant="contained" onClick={login}>Login</Button>

    </div>  

    </div>
    

    <div>    

    
    </div>

    </div>
  );
}

export default App;
