import React, { useState } from 'react'

const NoteApp=() =>{

    const [notes,setNotes]= useState([])
    const[title,setTitle]=useState('')
    const[body,setBody]=useState('')

const addNote=(e) =>{
    e.preventDefault()
setNotes([
    ...notes,{title,body}
])}

const removeNote=(title)=>{
    setNotes(notes.filter((note) =>note.title !== title))
}
    return (
        <div className='container'>
<h3>Your Saved Notes</h3>
{
    notes.map((note)=>(
        <div key={note.title}>
            <h5>{note.title}</h5>
            <p>{note.body}</p>
            <button className='btn btn-danger' onClick={() =>removeNote(note.title)}>X</button>
        </div>
    ))
}


        <form onSubmit={addNote}>
         <input type='text' className='form-control' placeholder='Enter Notes type' value={title}  onChange={(e)=> setTitle(e.target.value)}/>  
         <input type='text' className='form-control' placeholder='Enter Notes Data' value={body} onChange={(e)=> setBody(e.target.value)}/> 
        <button className='btn btn-success'>Add Notes</button>
        </form>
        </div>
    )
}
export default NoteApp




