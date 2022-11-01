
import React from 'react'
import { useField, useResource } from './hooks'

const App = () => {
  const content = useField('text')
  const name = useField('text')
  const number = useField('text')

  const [Onotes, OnoteService] = useResource('http://localhost:3005/Onotes')
  const [persons, personService] = useResource('http://localhost:3005/persons')

  const handleOONoteSubmit = (event) => {
    event.preventDefault()
    OnoteService.create({ content: content.value })
  }

  const handleOPersonSubmit = (event) => {
    event.preventDefault()
    personService.create({ name: name.value, number: number.value})
  }

  return (
    <div>
      <h2>Onotes</h2>
      <form onSubmit={handleOONoteSubmit}>
        <input {...content} />
        <button>create</button>
      </form>
      {Onotes.map(n => <p key={n.id}>{n.content}</p>)}

      <h2>persons</h2>
      <form onSubmit={handleOPersonSubmit}>
        name <input {...name} /> <br/>
        number <input {...number} />
        <button>create</button>
      </form>
      {persons.map(n => <p key={n.id}>{n.name} {n.number}</p>)}
    </div>
  )
}

export default App