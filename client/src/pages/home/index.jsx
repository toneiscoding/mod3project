import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './index.css'
import EditEntry from '../editEntry'


const Home = () => {   
    const [entries, setEntries] = useState([]);
    const [oldEntries, setOldEntries] = useState([])
    const [editId, setEditId] = useState("")

        console.log(entries)
    let getEntries = async (req, res) => {
       let response = await axios({
            method:"GET",
            url: '/entries',
        })
       
        setEntries(response.data)
        setOldEntries(response.data)
    }

    useEffect(()=>{
        getEntries() 
    }, [])

    const handleClick= async (id)=> {
        console.log(id)
        let response = await axios({
            method:"DELETE",
            url: `/entries/${id}`
        })
        let newEntries = entries.filter((element)=>{
           if (element._id === id) {
            //do not put in new array
           } else {
            //put in a new array
            return element
           }
        })
            setEntries(newEntries)
    }
    
    const handleEdit= async (id)=> {
        setEditId(id)
        setEntries(oldEntries)
    }

    console.log(editId)

    const handleSave= async (id, newTitle)=> {
        setOldEntries(entries)
        let response = await axios({
            method:"PUT",
            url:`/entries/${id}`,
            data: {title: newTitle}

        })
        let updatedEntry = response.data
        let updatedEntries = entries.map((entry) => {

            if (entry._id === updatedEntry._id) {
                return updatedEntry;
            } 
            return entry
            })
            setEntries(updatedEntries)
        }
        // go save THIS entry to database
        // send axios PUT request to /entries (don't forget to send new title)
        // get request on server and make update in database (findbyidandupdate)
    

        // originalTodos state

        // when click save, change originalTodos to new todos
    const handleChange= async (e, id)=> {
        const newValue = e.target.value
        console.log("changing");
        const updatedEntries = entries.map((entry) => {
            if (entry._id === id) {
                return {...entry, title: newValue}
            }
            return entry
        })
        setEntries(updatedEntries)
        }

        //loop through entries state
        //find entry with same id
        //change title new value
        //
//make an array of nice jsx from the data
    let entriesJSX = entries.map((entry)=>{
        return (
            <div className="entries">
                {
                    editId === entry._id ? (
                        <input value={entry.title} onChange={(e)=>handleChange(e, entry._id)}/>
                    ):(
                        <div className="text">
                            {entry.title}
                        </div>

                    )
                }
                <div className="text">
                    {entry.author}
                </div>
                <div className="text">
                    {entry.content}
                </div>
                <button onClick={ ()=>handleClick(entry._id)}>delete</button>
               
                {
                    editId === entry._id ? (
                        <button onClick={ ()=>handleSave(entry._id, entry.title)}>save</button>
                    ):(
                        <button onClick={ ()=>handleEdit(entry._id)}>edit</button>

                    )
                }

            </div>
        )
    })
  return (
   <div>
        <h1>
        homepage
        </h1>
        {entriesJSX}
        {EditEntry}
    </div>
 
    
  )
}

export default Home