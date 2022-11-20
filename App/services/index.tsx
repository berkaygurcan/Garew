import axios from "axios";

// Create general api instance

const api = axios.create({
  baseURL: 'https://api.rawg.io/api/',
  timeout: 1000,
});

// Add api key
axios.defaults.params = {}
axios.defaults.params['key'] = "251d06632eda4802b3d5e9310534d9d9";


async function getGames() {
    //per page , 20 item
    const response =  await api.get('games').then(res => {
        return res
    }).catch(error => {
        console.log(error)
    })

}


export {getGames}

