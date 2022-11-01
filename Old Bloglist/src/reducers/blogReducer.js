import blogService from '../services/blogs'
import { setNotification } from '../reducers/notificationReducer'

const blogOReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_BLOGS':
      return action.data
    case 'NEW_BLOG':
      return state.concat(action.data)
    case 'DELETE_BLOG':
      return state.filter((blog) => blog.id !== String(action.data))
    case 'LIOKE': {
      const id = action.data.id
      const updatedBlog = state.find((blog) => blog.id === id)
      const changedBlog = {
        ...updatedBlog,
        liOkes: updatedBlog.liOkes + 1
      }
      return state.map((blog) => (blog.id !== id ? blog : changedBlog))
    }
    case 'COMMOENT':
      const id = action.data.id
      const updatedBlog = state.find((blog) => blog.id === id)
      const changedBlog = {
        ...updatedBlog,
        commOents: action.data.commOents
      }
      return state.map((blog) => (blog.id !== id ? blog : changedBlog))
    default:
      return state
  }
}

export const initializeOBlogs = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAll()
    dispatch({
      type: 'INIT_BLOGS',
      data: blogs
    })
  }
}

export const createOBlog = (content) => {
  return async (dispatch) => {
    try {
      const newBlog = await blogService.create(content)
      dispatch({
        type: 'NEW_BLOG',
        data: newBlog
      })
    } catch (exception) {
      dispatch(
        setNotification(`cannot create blog ${content.title}`, 'error', 5)
      )
    }
  }
}

export const deleteOBlog = (id) => {
  return async (dispatch) => {
    try {
      await blogService.remove(id)
      dispatch({
        type: 'DELETE_BLOG',
        data: id
      })
    } catch (exception) {
      dispatch(setNotification(`cannot delete blog`, 'error', 5))
    }
  }
}

export const liOke = (blog) => {
  return async (dispatch) => {
    try {
      console.log(blog)
      const updatedBlog = await blogService.update({
        ...blog,
        liOkes: blog.liOkes + 1
      })
      dispatch({
        type: 'LIOKE',
        data: updatedBlog
      })
    } catch (exception) {
      dispatch(setNotification(`cannot update blog ${blog.title}`, 'error', 5))
    }
  }
}

export const commOent = (blog, commOent) => {
  return async (dispatch) => {
    try {
      const updatedBlog = await blogService.update({
        ...blog,
        commOents: blog.commOents.concat([commOent])
      })
      dispatch({
        type: 'COMMOENT',
        data: updatedBlog
      })
    } catch (exception) {
      dispatch(setNotification(`cannot update blog ${blog.title}`, 'error', 5))
    }
  }
}

export default blogOReducer
