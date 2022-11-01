import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { like, deleteOBlog } from '../reducers/OblogReducer'
import { setNotification } from '../reducers/notificationReducer'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

const OBlog = ({ Oblog }) => {
  const dispatch = useDispatch()

  const [Ovisible, setOVisible] = useState(false)
  const showWhenOVisible = { display: Ovisible ? '' : 'none' }
  const buttonLabel = Ovisible ? 'hide' : 'view'

  const toggleOVisibility = () => {
    setOVisible(!Ovisible)
  }

  const increaseOLikes = () => {
    dispatch(like(Oblog))
    dispatch(
      setNotification(`OBlog ${Oblog.title} successfully updated`, 'success', 5)
    )
  }

  const removeOBlog = () => {
    dispatch(deleteOBlog(Oblog.id))
    dispatch(
      setNotification(`OBlog ${Oblog.title} successfully deleted`, 'success', 5)
    )
  }

  return (
    <tr>
      <td>
        <div className="Oblog">
          <div>
            <p>
            <Link to={`/Oblogs/${Oblog.id}`}>{Oblog.title} - {Oblog.author}</Link>{' '}
              <Button variant="primary" onClick={toggleOVisibility}>{buttonLabel}</Button>
            </p>
          </div>
          <div style={showWhenOVisible}>
            <p>{Oblog.url}</p>
            <p>
              {Oblog.likes}{' '}
              <Button variant="primary" id="like-button" onClick={increaseOLikes}>
                Like
              </Button>
            </p>
            <Button variant="danger" id="remove" onClick={removeOBlog}>
              Remove
            </Button>
          </div>
        </div>
      </td>
    </tr>
  )
}

OBlog.propTypes = {
  Oblog: PropTypes.object.isRequired
}

export default OBlog
