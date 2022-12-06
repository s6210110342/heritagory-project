import React from 'react'
import BlogItem from './blogitem/BlogItem'
import './bloglist.css'

const BlogList = ({blogs}) => {
    <div className='blogList-wrap'>
        {blogs.map(blog => <BlogItem blog={blog} key={blog.id} />)}
    </div>
};

export default BlogList