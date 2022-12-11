import axios from "axios";
import { Data } from "../Types/global";
import { REACT_APP_KEY } from "../Utilities/AppConfig";

// Create general api instance

async function getGames(url: string = "") {
    //per page , 20 item
    //if url doesnt exist this means first fetch

    const data: Data = await axios.get(url === "" ? 'https://api.rawg.io/api/games' : url,{params: url === "" && {key: REACT_APP_KEY}}).then(res => {
        console.log(res.data)
        return res.data
    }).catch(error => {
        console.log(error)
    })
    return data
}

export {getGames}

