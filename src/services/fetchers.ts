import axios from 'axios'

export const fetchMessage = async function () {
  const response = await axios.get('/elements')
  return response.data.elements
}
export const fetchClient = async function () {
  const response = await axios.get('/client')
  return response.data.client
}