import React, { useState } from 'react';

const BlogForm = ({ blog, onSubmit }) => {
    const [title, setTitle] = useState(blog ? blog.title : '');
    const [description, setDescription] = useState(blog ? blog.description : '');
    const [image, setImage] = useState(blog ? blog.image : '');
    const [error, setError] = useState('');

    const onTitleChange = (e) => {
        const newTitle = e.target.value;
        setTitle(newTitle);
    };

    const onDescriptionChange = (e) => {
        const newDescription = e.target.value;
        setDescription(newDescription);
    };
    const handleImageChange = (event) => {
        const file = event.target.files[0];
    
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            const dataUrl = reader.result;
            setImage(dataUrl);
          };
          reader.readAsDataURL(file);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !description) {
            setError('Missing field');
        } else {
            setError('');
            onSubmit({
                title,
                description,
                image,
                dateAdded: Date.now(),
            });
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <form onSubmit={handleSubmit} style={{ width: '400px', padding: '30px', border: '1px solid #ddd', borderRadius: '10px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)', marginTop: '-50px' }}>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div style={{ marginBottom: '30px' }}>
                    {!image && (
                        <div>
                            <label htmlFor="fileInput">Upload Image:</label>
                            <input type="file" id="fileInput" onChange={handleImageChange} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd' }} />
                        </div>
                    )}
                    {image && (
                        <div style={{ marginTop: '20px' }}>
                            <img src={image} alt="Preview" style={{ maxWidth: '300px', maxHeight: '300px' }} />
                        </div>
                    )}
                </div>
    
                <div style={{ marginBottom: '30px' }}>
                    <label htmlFor="titleInput">Title:</label>
                    <input type="text" id="titleInput" placeholder='Enter title' value={title} onChange={onTitleChange} style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd' }} />
                </div>
    
                <div style={{ marginBottom: '30px' }}>
                    <label htmlFor="descriptionTextarea">Description:</label>
                    <textarea id="descriptionTextarea" placeholder='Enter description' value={description} onChange={onDescriptionChange} style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd' }}></textarea>
                </div>
    
                <div>
                    <button type='submit' style={{ backgroundColor: '#007BFF', color: 'white', padding: '15px', borderRadius: '8px', cursor: 'pointer', width: '100%' }}>Save changes</button>
                </div>
            </form>
        </div>
    );
    
    
};

export default BlogForm;
