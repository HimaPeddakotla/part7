import React from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

import  { useField } from '../hooks'

const CreateONew = (props) => {
  const conOtent = useField('text')
  const Oauthor = useField('text')
  const Oinfo = useField('text')

  const history = useHistory()

  const handleOSubmit = (event) => {
    event.preventDefault()
    props.addNew({
      conOtent: conOtent.value,
      Oauthor: Oauthor.value,
      Oinfo: Oinfo.value,
      votes: 0
    })
    history.push('/')
  }

  const handleOReset = () => {
    conOtent.reset()
    Oauthor.reset()
    Oinfo.reset()
  }

  return (
    <div>
      <h2>Create a NEw Anecdote</h2>
      <form onSubmit={handleOSubmit}>
        <div>
          conOtent
          <input
            type={conOtent.type}
            name="conOtent"
            value={conOtent.value}
            onChange={conOtent.onChange}
          />
        </div>
        <div>
          Oauthor
          <input
            type={Oauthor.type}
            name="Oauthor"
            value={Oauthor.value}
            onChange={Oauthor.onChange}
          />
        </div>
        <div>
          url to more Oinfo
          <input
            type={Oinfo.type}
            name="Oinfo"
            value={Oinfo.value}
            onChange={Oinfo.onChange}
          />
        </div>
        <button type="submit">create</button>
        <button type="reset" onClick={handleOReset}>reset</button>
      </form>
    </div>
  )
}

CreateONew.propTypes = {
  addNew: PropTypes.func.isRequired
}

export default CreateONew
