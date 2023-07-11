import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './index.css'


const Home = () => {   
    const [entries, setEntries] = useState([])
        console.log(entries)
    let getEntries = async (req, res) => {
       let response = await axios({
            method:"GET",
            url: '/entries',
        })
       
        setEntries(response.data)
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

//make an array of nice jsx from the data
    let entriesJSX = entries.map((entry)=>{
        return (
            <div className="entries">
                <div>
                    {entry.title}
                </div>
                <div>
                    {entry.author}
                </div>
                <div>
                    {entry.content}
                </div>
                <button onClick={ ()=>handleClick(entry._id)}>delete</button>
            </div>
        )
    })
  return (
   <div>
        <h1>
        homepage
        </h1>
        {entriesJSX}
    </div>
 
    
  )
}

export default Home