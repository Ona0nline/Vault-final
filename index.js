

new Typewriter('h1', {
  strings: ["Mooday"],
  autoStart: true,
  loop:true,
  delay:80
});

new Typewriter('p', {
  strings: "What mood are you in today? Either click on a mood wheel that describes your day or manually input it",
  autoStart: true,
  delay:10

});

function helpinfo(){
  alert("Help?")
}

let helpElement = document.getElementById("help")
helpElement.addEventListener("click",helpinfo)

// Initializing a spotify player with my access code

window.onSpotifyWebPlaybackSDKReady = () => {
const accessToken = "BQDccGwfn5e6_8Hc4LtjAT3nMm-y_BQdoJrd4iHGt6xUi-it9SN_iIS_Xy0BGoPsq9-Yr6HjJujLh6qzj8bY7cDt3g-_xIzoR5QhUdwEebXI71JSOfk"
const player = new Spotify.Player({
  name:"Web player SDK for Mooday",
  // Function to get authorization to use my access token
  getOAuthToken: callback  =>{
    callback(accessToken)
 
  }

})

// Accounting for all possible errors, getting used to arrow functions
player.addListener("initialization error", e =>{
  console.log("Initialization error")
  console.error("Initialization_error",e)
  alert("Initialization error")
console.log("Hi")
});
 player.addListener('authentication_error', e => {
      console.error('Failed_to_authenticate', e);
    });
    player.addListener('account_error', e => {
      console.error('Failed_to_validate_Spotify_account', e);
    });
    player.addListener('playback_error', e => {
      console.error('Failed_to_perform_playback', e);
    });

    // Playback status updates. This will log info on the song, artist id, duration etc etc.
    player.addListener('player_state_changed', state => {
      console.log('Playback state changed:', state);
    });

     // Ready event
    player.addListener('ready', ({ device_id }) => {
      console.log('Ready with Device ID', device_id);

      // Use the device ID to control playback
      player.connect();
    });

    // Not Ready event
    player.addListener('not_ready', ({ device_id }) => {
      console.log('Device ID has gone offline', device_id);
    });

    // Connect to the player
    player.connect();
    

    
    // fetching data
    const playlistId = "37i9dQZF1EP6YuccBxUcC1?si=8e7cbbbcc8b0496e"; // Replace with your playlist ID
  axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
  .then(response => {
    console.log('Playlist details:', response.data);
    
    // Add an event listener to the radio icon
    document.getElementById('radio').addEventListener('click', () => {
      // Play the playlist
      player.play({
        spotify_uri: `spotify:playlist:${playlistId}`,
      }).then(() => {
        console.log('Playback started');
      }).catch(error => {
        console.error('Error playing playlist:', error);
      });
    });
  })
  .catch(error => {
    console.error('Error fetching playlist details:', error);
  });
};