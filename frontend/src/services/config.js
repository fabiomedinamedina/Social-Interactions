import axios from 'axios'
const URL = 'http://localhost:3100/api/'

//axios.defaults.withCredentials = true

export const api = axios.create({
  baseURL: URL,
  withCredentials: true,
  headers: {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': true
  }
})