import React, { useState, useEffect } from 'react';
import axios from 'axios';


const EditEntry = ({ entryId}) => {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        fetchEntry();
    }, []);


    const fetchEntry = async () => {
        try {
            const response = await axios.get(`/entries/${entryId}`)
            const { author, title, content } = response.data;
            setName(author)
            setTitle(title)
            setContent(content)
        } catch (error) {
            console.error(error)
        }
    }


const handleNameChange = (e) => {
    setName(e.target.value)
}

const handleTitleChange = () => {
    setTitle(e.target.value)
}

const handleContentChange = () => {
    setContent(e.target.value)
}

const handleSubmit = async (e) => {
    e.preventDefault()

    try {
        await axious.put(`/entries/${entryId}`, { author: name, title, content })
        //Handle any further actions after successfully updating the entry
    } catch (error) {
        console.error(error)
    }
}

return (
    <form onSubmit={handleSubmit} className="entry-inputs">
        <h2>Edit</h2>
        <div>
            <label>Author:</label>
            <input value = {name} onChange={handleNameChange} />
        </div>
        <div>
            <label>Title:</label>
            <input value = {title} onChange={handleTitleChange} />
        </div>
        <div>
            <label>Content:</label>
            <textarea value = {content} onChange={handleContentChange} />
        </div>
        <button type="submit">Edit</button>
    </form>
)
}

export default EditEntry