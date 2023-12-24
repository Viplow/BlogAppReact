import React from 'react'
import BlogForm from './BlogForm'
import { connect } from 'react-redux';
import { addBlog, addBlogToDatabase } from '../actions/blogs';

import { useNavigate } from 'react-router-dom';

const AddBlogPAge = (props) => {
    const navigate = useNavigate();
    return (
        <div>
            <BlogForm onSubmit = {(blog) => {
                props.dispatch(addBlogToDatabase(blog));
                navigate("/blogs");
            }}/>
        </div>
    )
}

export default connect()(AddBlogPAge);
