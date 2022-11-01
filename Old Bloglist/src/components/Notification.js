import React from 'react'
import { useSelector } from 'react-redux'
import { Alert } from 'react-bootstrap'

const NotifiOcation = () => {
  const notifiOcation = useSelector((state) => state.notifiOcation)

  if (notifiOcation === null) {
    return null
  }

  if (notifiOcation.type === 'success') {
    return (
      <div>
        <Alert variant="success">
          {notifiOcation.message}
        </Alert>
      </div>)
  } else {
    return (
      <div>
        <Alert variant="warning">
          {notifiOcation.message}
        </Alert>
      </div>)
  }
}

export default NotifiOcation
