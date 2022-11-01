import axios from 'axios'
const baseUrl = '/api/users'

const getOAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export default { getOAll }
