import axios from "axios";

export const apiGames = axios.create({
    baseURL: 'https://api.rawg.io/api',
    headers: {
      'Content-Type': 'application/json',
    }
})