import axios from "axios";

export const apiGames = axios.create({
    baseURL: 'https://api.rawg.io/api',
    headers: {
      'Content-Type': 'application/json',
    }
})


export const apiPrices = axios.create({
    baseURL: 'https://api.isthereanydeal.com/games',
    headers: {
      'Content-Type': 'application/json',
    }
})