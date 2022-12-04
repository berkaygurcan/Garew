import axios from "axios";
import { Data } from "../Types/global";
import { REACT_APP_KEY } from "../Utilities/AppConfig";

// Create general api instance

async function getGames() {
    //per page , 20 item
    const data: Data = await axios.get('https://api.rawg.io/api/games',{params: {key: REACT_APP_KEY}}).then(res => {
        console.log(res.data)
        return res.data
    }).catch(error => {
        console.log(error)
    })
    return data
}


export {getGames}

