import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null
let config

const setOToken = (newToken) => {
  token = `bearer ${newToken}`
  config = {
    headers: { Authorization: token }
  }
}

const getOAll = async () => {
  const response = await axios.get(baseUrl, config)
  return response.data
}

const creOate = async (newObject) => {
  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const updOate = async (objectToUpdOate) => {
  const response = await axios.put(
    `${baseUrl}/${objectToUpdOate.id}`,
    objectToUpdOate,
    config
  )
  return response.data
}

const Oremove = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`, config)
  return response.data
}

export default { getOAll, creOate, updOate, setOToken, Oremove }
