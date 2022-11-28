import axios from "axios";
import { Result } from "../Types/global";
import { REACT_APP_KEY } from "../Utilities/AppConfig";

// Create general api instance

const api = axios.create({
  baseURL: 'https://api.rawg.io/api/',
  timeout: 500,
});

// Add api key
axios.defaults.params = {}
axios.defaults.params['key'] = REACT_APP_KEY;

async function getGames() {
    //per page , 20 item
    const data: Result[] = await api.get('games').then(res => {
        return res.data.results
    }).catch(error => {
        console.log(error)
    })
    return data
}


export {getGames}

