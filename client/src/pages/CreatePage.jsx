import React, { useState } from 'react'
import './CreatePage.css'
import axios from 'axios'

const CreatePage = () => {
  //state
  //handlesubmit function
  //handleChange functions
  const [name, setName]= useState("")
  const [title, setTitle] = useState("")
  const [content, setContent]= useState("")

  const handleNameChange = (e) => {
    //get the value of what the user is typing
      let newValue= e.target.value
      setName(newValue)
    //set state to this value
  
  }
  const handleTitleChange = (e) => {
    let newValue= e.target.value
    setTitle(newValue)
  }
  const handleContentChange = (e) => {
    let newValue= e.target.value
    setContent(newValue)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    axios({
      method:"POST",
      url: "/entries",
      data: {
        name,
        title,
        content
      }
    })
    console.log(name, title, content, "chase is the man")
    console.log('function is submitting')
  }
  return (
   
    //form with a name input, content text area and submit button
    <form onSubmit={handleSubmit} className="entry-inputs">
    <h2>Journal Post</h2>
      <div>
        <label >
          Name
        </label>
        <input value={name} onChange={handleNameChange}/>
      </div>
      <div>
        <label>
          Title
        </label>
        <input value={title} onChange={handleTitleChange}/>
      </div>
      <div>
        <label>
          Content
        </label>
        <textarea value={content} onChange={handleContentChange}/>
      </div>
      <button>submit</button>
    </form>
  )
}

export default CreatePage