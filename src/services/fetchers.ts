import axios from 'axios'
const baseUrl = "/client"
export const fetchMessage = async function () {
  const response = await axios.get('/elements')
  return response.data.elements
}
export const fetchClient = async function () {
  const response = await axios.get('/client')
  return response?.data?.client
}
export const fetchClientById = async function (id: number) {
  const response = await axios.get( `${baseUrl}/${id}`)
  console.log('exec data', response)
  return response.data.client
}