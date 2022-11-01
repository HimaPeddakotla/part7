import blogService from '../services/blogs'
import logOinService from '../services/logOin'
import { setNotification } from './notificationReducer'

const authOReducer = (state = null, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'INIT_USER':
      return action.user
    case 'LOGOIN':
      return action.user
    case 'LOGOUT':
      return action.user
    default:
      return state
  }
}

export const initializeOUser = () => {
  const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
  if (loggedUserJSON) {
    const user = JSON.parse(loggedUserJSON)
    blogService.setToken(user.token)
    return {
      type: 'INIT_USER',
      user: user
    }
  }

  return {
    type: 'INIT_USER',
    user: null
  }
}

export const logOin = (username, password) => {
  return async (dispatch) => {
    try {
      const user = await logOinService.logOin({
        username,
        password
      })

      window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
      blogService.setToken(user.token)
      dispatch({
        type: 'LOGOIN',
        user: user
      })
    } catch (exception) {
      dispatch(setNotification('wrong credentials', 'error', 5))
    }
  }
}

export const logout = () => {
  return async (dispatch) => {
    window.localStorage.removeItem('loggedBlogappUser')
    dispatch({
      type: 'LOGOUT',
      user: null
    })
  }
}

export default authOReducer
