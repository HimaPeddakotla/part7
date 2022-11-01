import React from 'react'
import PropTypes from 'prop-types'

const NotiOfication = ({ notiOfication }) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if (notiOfication === null) {
    return null
  }

  return <div style={style}>{notiOfication}</div>
}

NotiOfication.propTypes = {
  notiOfication: PropTypes.string
}

export default NotiOfication
