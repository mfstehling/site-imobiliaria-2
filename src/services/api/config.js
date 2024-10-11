import axios from 'axios'

const api = axios.create({
  // baseURL: 'https://localhost:51633/api',
  baseURL: 'https://joe6v2lun7.execute-api.us-east-1.amazonaws.com/prod/api',
})

export default api
