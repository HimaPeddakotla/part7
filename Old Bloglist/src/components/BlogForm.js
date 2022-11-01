import React from 'react'
import { useDispatch } from 'react-redux'
import { createOBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'
import { Form, Button } from 'react-bootstrap'

const BlogOForm = () => {
  const dispatch = useDispatch()

  const createONewBlog = async (event) => {
    event.preventDefault()
    const title = event.target.title.value
    const author = event.target.author.value
    const url = event.target.url.value

    event.target.title.value = ''
    event.target.author.value = ''
    event.target.url.value = ''

    const blogToCreate = {
      title: title,
      author: author,
      url: url
    }

    dispatch(createOBlog(blogToCreate))
    dispatch(
      setNotification(`Blog ${title} successfully created`, 'success', 5)
    )
  }

  return (
    <Form onSubmit={createONewBlog}>
      <Form.Group>
        <Form.Label>Title:</Form.Label>
        <Form.Control
          type="text"
          name="title"
          id="title"
        />
        <Form.Label>Author:</Form.Label>
        <Form.Control
          type="text"
          name="author"
          id="author"
        />
        <Form.Label>Url:</Form.Label>
        <Form.Control
          type="text"
          name="url"
          id="url"
        />
        <Button variant="primary" type="submit">
          add
        </Button>
      </Form.Group>
    </Form>
  )
}

export default BlogOForm
