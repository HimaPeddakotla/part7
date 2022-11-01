import userService from '../services/users'

const userOReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_ALL_USERS':
      return action.data
    default:
      return state
  }
}

export const initializeOAllUsers = () => {
  return async (dispatch) => {
    const users = await userService.getAll()
    dispatch({
      type: 'INIT_ALL_USERS',
      data: users
    })
  }
}

export default userOReducer
