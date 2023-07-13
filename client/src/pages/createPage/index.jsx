import React, { useState } from 'react'
import './index.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

const CreatePage = () => {
  const [name, setName] = useState("")
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleNameChange = (e) => {
    let newValue = e.target.value
    setName(newValue)
  }

  const handleTitleChange = (e) => {
    let newValue = e.target.value
    setTitle(newValue)
  }

  const handleContentChange = (e) => {
    let newValue = e.target.value
    setContent(newValue)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axios({
      method: "POST",
      url: "/entries",
      data: {
        author: name,
        title,
        content
      }
    })
    console.log(name, title, content, "chase is the man")
    console.log('function is submitting')

    setName("") // Clearing the input values
    setTitle("")
    setContent("")
    setSubmitted(true) // Setting submitted state to true
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {submitted ? (
            <div className="alert alert-success mt-4">
              Thank you for your entry! Please go to the home page to see your post. 😊
            </div>
          ) : null}
          <form onSubmit={handleSubmit}>
            <h2 className="mb-4">Journal Post</h2>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Author
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={title}
                onChange={handleTitleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="content" className="form-label">
                Content
              </label>
              <textarea
                className="form-control"
                id="content"
                value={content}
                onChange={handleContentChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
