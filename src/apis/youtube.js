import axios from 'axios';

// set up api and get key https://console.developers.google.com/projectselector/apis
// unclear documentation at https://developers.google.com/youtube/v3/docs/search/list

const KEY = 'AIzaSyCBdrILnfXEMMKqogln1pfGC_byqr-hy9k';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        'part': 'snippet',
        'maxResults': '5',
        'key': 'KEY'
    }
});