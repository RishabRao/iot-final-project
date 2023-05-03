import './App.css';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import axios from "axios";
import { Track } from 'react-spotify-api'
import { Search } from 'react-spotify-api'

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
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />

    </div>

    <div>
      <Button variant="contained">Play</Button>

    </div>

    <div>    

    
    </div>

    </div>
  );
}

export default App;
