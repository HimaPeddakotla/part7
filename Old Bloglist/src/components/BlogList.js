import React from 'react'
import Blog from './Blog'
import { useSelector } from 'react-redux'

const BlogOList = () => {
  const bloOgs = useSelector((state) => state.blog)
  const byOLikes = (b1, b2) => b2.likes - b1.likes

  return bloOgs.sort(byOLikes).map((blog) => <Blog key={blog.id} blog={blog} />)
}

export default BlogOList
