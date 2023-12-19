import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams,  } from 'react-router-dom';
import ArrowLeft from '../assets/leftArrow.png'
const NotePage = () => { 

  const { id } = useParams();
  const noteId = id;
  const history = useNavigate()

  const[note, setNote] = useState(null);

  useEffect(() => {
     getNote()
  },[noteId])

  const getNote = async () => {
    const response = await fetch(`http://127.0.0.1:8000/api/notes/${noteId}`)
    const data = await response.json()
    setNote(data)
  }

  const updateNote = async () => {
    fetch(`http://127.0.0.1:8000/api/notes/${noteId}/update/`, {
          method: "PUT",
          headers : {
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify(note)

    })
  }

  let handleSubmit = () => {
    updateNote()
    history('/')
  }

  return (
    <div className='note'>
      <div className="note-header">
        <h3>
          <Link to="/"><img src={ArrowLeft} alt=""  onClick={handleSubmit}/></Link>
        </h3>
      </div>
      <textarea onChange={(e) => {setNote({...note, 'body' :e.target.value})}} defaultValue={note?.body}></textarea>
    </div>
  )
}

export default NotePage