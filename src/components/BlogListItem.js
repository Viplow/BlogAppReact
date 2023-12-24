import React from 'react'
import { Link } from 'react-router-dom'
import noImage from "../img/no-image-icon-2048x2048-2t5cx953.png"
import store from '../store/configureStore'
const BlogListItem = ({ id, title, image, description }) => {
    let loggedInUser = store.getState().auth ? store.getState().auth.uid : "";
    if(!image)
        image = noImage
        return (
            <>
                <div className="col-sm-3 mb-3 mb-sm-0" style={{ "width": "250px", "height": "350px" }}>
                    <div className="card h-100" style={{ "width": "100%" }}>
                        <img src={image} className="card-img-top" style={{ "maxWidth": "200px", "maxHeight": "200px" }} alt="Card" />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                                
                            {id==loggedInUser && 
                                <>
                                    <a href={`/blogs/${id}`} className="btn btn-primary" style={{"marginRight" : "5px"}} >Detail</a>
                                    <a href={`/edit/${id}`} className="btn btn-primary" style={{"marginRight" : "5px"}}>Edit</a>
                                </>
                            }
                            
                        </div>
                    </div>
                </div>
            </>
        );
        
}

export default BlogListItem
