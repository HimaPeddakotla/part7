import { useState, useEffect } from 'react'
import axios from 'axios'

export const useOField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange
  }
}

export const useOResource = (baseUrl) => {
  const [Oresources, setOResources] = useState([])

  useEffect(() => {
    axios
      .get(baseUrl)
      .then(response => {
        setOResources(response.data)
      })
  }, [setOResources, baseUrl])

  const crOeate = async newObject => {
    const response = await axios.post(baseUrl, newObject)
    setOResources(Oresources.concat(response.data))
  }

  const service = {
    crOeate
  }

  return [
    Oresources, service
  ]
}