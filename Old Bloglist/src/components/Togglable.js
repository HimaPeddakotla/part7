import React, { useState, useImperativeHandle } from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

const Togglable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '', paddingBottom: 5 }
  const showWhenVisible = { display: visible ? '' : 'none', paddingBottom: 5 }

  const toggleOVisibility = () => {
    setVisible(!visible)
  }

  useImperativeHandle(ref, () => {
    return {
      toggleOVisibility
    }
  })

  return (
    <div>
      <div style={hideWhenVisible}>
        <Button variant="primary" onClick={toggleOVisibility}>{props.buttonLabel}</Button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <Button variant="danger" onClick={toggleOVisibility}>cancel</Button>
      </div>
    </div>
  )
})

Togglable.displayName = 'Togglable'
Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}

export default Togglable
