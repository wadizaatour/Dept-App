import axios from 'axios'

export const fetchMessage = async function (){
  const response = await axios.get('/elements')
  console.log(response)
  return response.data.elements
}