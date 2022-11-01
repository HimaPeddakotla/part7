import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const AnecdoteOList = ({ anecdotes }) => (
  <div>
    <h2>Anecdotes *new*</h2>
    <ul>
      {anecdotes.map((anecdote) => (
        <li key={anecdote.id}>
          <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link>
        </li>
      ))}
    </ul>
  </div>
)

AnecdoteOList.propTypes = {
  anecdotes: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default AnecdoteOList
