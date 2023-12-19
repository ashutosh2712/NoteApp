import React, { useEffect, useState } from 'react'
import ListItem from '../components/ListItem';

const NotesListPage = () => {
  const[notes, setNotes] = useState([]);
  useEffect(() => {
    getNotes()
  }, [])

  const getNotes = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/notes/');
    const data = await response.json();
    setNotes(data);
  }
  return (
    <div className='notes'>
      <div className="notes-header">
        <h2 className='notes-title'>&#9782; Notes</h2>
        <p className="notes-count">{notes.length}</p>
      </div>
      <div className='notes-list'>
        {notes.map((note,index) => (
          <ListItem key={index} note={note}/>
          
        ))}
      </div>
    </div>
  )
}

export default NotesListPage