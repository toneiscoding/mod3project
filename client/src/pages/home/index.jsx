// // import React, { useEffect, useState } from 'react'
// // import axios from 'axios'
// // import './index.css'
// // import EditEntry from '../editEntry'
// // import Navbar from '../../components/navbar'


// // const Home = () => {   
// //     const [entries, setEntries] = useState([]);
// //     const [oldEntries, setOldEntries] = useState([])
// //     const [editId, setEditId] = useState("")

// //         console.log(entries)
// //     let getEntries = async (req, res) => {
// //        let response = await axios({
// //             method:"GET",
// //             url: '/entries',
// //         })
       
// //         setEntries(response.data)
// //         setOldEntries(response.data)
// //     }

// //     useEffect(()=>{
// //         getEntries() 
// //     }, [])

// //     const handleClick= async (id)=> {
// //         console.log(id)
// //         let response = await axios({
// //             method:"DELETE",
// //             url: `/entries/${id}`
// //         })
// //         let newEntries = entries.filter((element)=>{
// //            if (element._id === id) {
// //             //do not put in new array
// //            } else {
// //             //put in a new array
// //             return element
// //            }
// //         })
// //             setEntries(newEntries)
// //     }
    
// //     const handleEdit= async (id)=> {
// //         setEditId(id)
// //         setEntries(oldEntries)
// //     }

// //     console.log(editId)

// //     const handleSave= async (id, newTitle)=> {
// //         setOldEntries(entries)
// //         let response = await axios({
// //             method:"PUT",
// //             url:`/entries/${id}`,
// //             data: {title: newTitle}

// //         })
// //         let updatedEntry = response.data
// //         let updatedEntries = entries.map((entry) => {

// //             if (entry._id === updatedEntry._id) {
// //                 return updatedEntry;
// //             } 
// //             return entry
// //             })
// //             setEntries(updatedEntries)
// //             setEditId('')
// //         }
// //         // go save THIS entry to database
// //         // send axios PUT request to /entries (don't forget to send new title)
// //         // get request on server and make update in database (findbyidandupdate)
    

// //         // originalTodos state

// //         // when click save, change originalTodos to new todos
// //     const handleChange= async (e, id)=> {
// //         const newValue = e.target.value
// //         console.log("changing");
// //         const updatedEntries = entries.map((entry) => {
// //             if (entry._id === id) {
// //                 return {...entry, title: newValue}
// //             }
// //             return entry
// //         })
// //         setEntries(updatedEntries)
// //         }

// //         //loop through entries state
// //         //find entry with same id
// //         //change title new value
// //         //
// // //make an array of nice jsx from the data
// //     let entriesJSX = entries.map((entry)=>{
// //         return (
// //             <div className="entries" key={entry._id}>
// //                 {
// //                     editId === entry._id ? (
// //                         <input value={entry.title} onChange={(e)=>handleChange(e, entry._id)}/>
// //                     ):(
// //                         <div className="text">
// //                             {entry.title}
// //                         </div>

// //                     )
// //                 }
// //                 <div className="text">
// //                     {entry.author}
// //                 </div>
// //                 <div className="text">
// //                     {entry.content}
// //                 </div>
// //                 <button onClick={ ()=>handleClick(entry._id)}>delete</button>
               
// //                 {
// //                     editId === entry._id ? (
// //                         <button onClick={ ()=>handleSave(entry._id, entry.title)}>save</button>
// //                     ):(
// //                         <button onClick={ ()=>handleEdit(entry._id)}>edit</button>

// //                     )
// //                 }

// //             </div>
// //         )
// //     })

    
// //   return (
// //    <div>
// //         <h1>
// //         homepage
// //         </h1>
// //         {entriesJSX}
// //         {EditEntry}
// //     </div>
 
    
// //   )
// // }

// // export default Home


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';
import EditEntry from '../editEntry';
import Navbar from '../../components/navbar';

const Home = () => {
  const [entries, setEntries] = useState([]);
  const [oldEntries, setOldEntries] = useState([]);
  const [editId, setEditId] = useState('');

  useEffect(() => {
    const getEntries = async () => {
      try {
        const response = await axios.get('/entries');
        setEntries(response.data);
        setOldEntries(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getEntries();
  }, []);

  const handleClick = async (id) => {
    console.log(id);
    try {
      await axios.delete(`/entries/${id}`);
      const newEntries = entries.filter((element) => element._id !== id);
      setEntries(newEntries);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (id) => {
    setEditId(id);
    setEntries(oldEntries);
  };

  const handleSave = async (id, newTitle) => {
    setOldEntries(entries);
    try {
      await axios.put(`/entries/${id}`, { title: newTitle });
      const updatedEntries = entries.map((entry) =>
        entry._id === id ? { ...entry, title: newTitle } : entry
      );
      setEntries(updatedEntries);
      setEditId('');
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e, id) => {
    const newValue = e.target.value;
    const updatedEntries = entries.map((entry) =>
      entry._id === id ? { ...entry, title: newValue } : entry
    );
    setEntries(updatedEntries);
  };

  const entriesJSX = entries.map((entry) => (
    <div className="card mb-4" key={entry._id}>
      <div className="card-body">
        {editId === entry._id ? (
          <input
            className="form-control mb-2"
            value={entry.title}
            onChange={(e) => handleChange(e, entry._id)}
          />
        ) : (
          <h5 className="card-title font-cursive">{entry.title}</h5>
        )}
        <p className="card-text">
          <strong>{entry.author}</strong>
        </p>
        <p className="card-text font-italic">{entry.content}</p>
        <button className="btn btn-danger me-2" onClick={() => handleClick(entry._id)}>
          Delete
        </button>
        {editId === entry._id ? (
          <button className="btn btn-primary" onClick={() => handleSave(entry._id, entry.title)}>
            Save
          </button>
        ) : (
          <button className="btn btn-primary" onClick={() => handleEdit(entry._id)}>
            Edit
          </button>
        )}
      </div>
    </div>
  ));

  return (
    <div className="home-page">
      <Navbar />
      <div className="container py-4">
        <h1 className="mb-4">Home</h1>
        <div className="scrollable-container" style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto' }}>
          {entriesJSX}
        </div>
        {EditEntry}
      </div>
    </div>
  );
};

export default Home;
