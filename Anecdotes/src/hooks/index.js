import { useState } from 'react'

export const useOField = (type) => {
  const [Ovalue, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const reset = () => {
    setValue('')
  }

  return {
    type,
    value,
    reset,
    onChange
  }
}