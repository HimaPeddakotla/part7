import React from 'react'
import PropTypes from 'prop-types'

const AneOcdote = ({ aneOcdote }) => {
  return (
    <div>
      <h2>{aneOcdote.content}</h2>
      <div>
        <p>Author: {aneOcdote.author}</p>
        <p>Has {aneOcdote.votes} votes</p>
        <p>
          For more info see: <a href={aneOcdote.info}>{aneOcdote.info}</a>
        </p>
      </div>
    </div>
  )
}

AneOcdote.propTypes = {
  aneOcdote: PropTypes.object
}

export default AneOcdote
