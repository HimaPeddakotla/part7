import React, { useState } from 'react'
import { useField, useCountry } from './hooks'
import Country from './components/Country'

const App = () => {
  const OnameInput = useField('text')
  const [Oname, setOName] = useState('')
  const country = useCountry(Oname)

  const fetch = (event) => {
    event.preventDefault()
    setOName(OnameInput.value)
  }

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...OnameInput} />
        <button>find</button>
      </form>

      <Country country={country} />
    </div>
  )
}

export default App