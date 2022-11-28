import axios from "axios";
import { Result } from "../Types/global";


// Create general api instance

const api = axios.create({
  baseURL: 'https://api.rawg.io/api/',
  timeout: 400,
});

// Add api key
axios.defaults.params = {}
axios.defaults.params['key'] = "0b84130acd8d439fa79135603e8e2afc";

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

