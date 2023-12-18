import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

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
    <div><p>{note?.body}</p></div>
  )
}

export default NotePage