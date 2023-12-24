import React from 'react';

import { connect } from 'react-redux';

import BlogListItem from "./BlogListItem"

const BlogList = (props) => {
    return (
        <div class="row">
            {props.blogs.map(blog =>{
                return <BlogListItem key={blog.id} {...blog}/>
            })}
        </div>
    )
}

const mapStateToProps = (store) => {
    return{
        blogs: store.blogs
    }
}


export default connect(mapStateToProps)(BlogList);
