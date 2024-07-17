console.log("Hey")

// import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://flixster.p.rapidapi.com/movies/get-opening',
  params: {countryId: 'usa'},
  headers: {
    'x-rapidapi-key': '40bcf01dc7mshec5c2a0d32e2fe8p1d6077jsn4089bddf8ed8',
    'x-rapidapi-host': 'flixster.p.rapidapi.com'
  }
};

async function getdata(){
  try {
	const response = await axios.request(options);
	console.log(response.data.opening["24"].name);
} catch (error) {
	console.error(error);
}
}

getdata()

