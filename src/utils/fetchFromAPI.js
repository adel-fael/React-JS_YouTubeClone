import axios from 'axios'

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

//! this is wrong hide your KEY
const RAPID_API_KEY = '6c2056a586msh5d5ea533df733e9p18e7e2jsn2eb5fb53e406'

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
}

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options)

  return data
}
