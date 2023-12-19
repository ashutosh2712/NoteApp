import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import ArrowLeft from '../assets/leftArrow.png'
const NotePage = () => { 

  const { id } = useParams();
  const noteId = id;

  const[note, setNote] = useState(null);

  useEffect(() => {
     getNote()
  },[noteId])

  const getNote = async () => {
    const response = await fetch(`http://127.0.0.1:8000/api/notes/${noteId}`)
    const data = await response.json()
    setNote(data)
  }

  return (
    <div className='note'>
      <div className="note-header">
        <h3>
          <Link to="/"><img src={ArrowLeft} alt="" /></Link>
        </h3>
      </div>
      <textarea defaultValue={note?.body}></textarea>
    </div>
  )
}

export default NotePage