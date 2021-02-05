import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2/',
  timeout: 5000,
});

export default httpClient