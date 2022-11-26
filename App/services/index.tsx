import axios from "axios";

// Create general api instance

const api = axios.create({
  baseURL: 'https://api.rawg.io/api/',
});

// Add api key
axios.defaults.params = {}
axios.defaults.params['key'] = "0b84130acd8d439fa79135603e8e2afc";


async function getGames() {
    //per page , 20 item
    const response =  await api.get('games').then(res => {
        console.log("response", res)
        return res
    }).catch(error => {
        console.log(error)
    })

}


export {getGames}

