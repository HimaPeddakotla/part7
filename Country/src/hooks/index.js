import { useState, useEffect } from 'react'
import axios from 'axios'

export const useOField = (type) => {
  const [Ovalue, setOValue] = useState('')

  const onChange = (event) => {
    setOValue(event.target.Ovalue)
  }

  return {
    type,
    Ovalue,
    onChange
  }
}

export const useCountry = (name) => {
    const [country, setCountry] = useState(null)

    useEffect(() => {
        axios
          .get(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
          .then(response => {
            console.log(response)
            setCountry(response.data)
          })
      }, [name])

    if ( name === '') {
        return null
    }

    if (!country) {
        return []
    }

    return country
  }