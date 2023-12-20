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

  function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
const csrftoken = getCookie('csrftoken');

  const getNote = async () => {
    if (noteId == 'new') return
    const response = await fetch(`http://127.0.0.1:8000/api/notes/${noteId}`)
    const data = await response.json()
    setNote(data)
  }

  const createNote = async () => {
    fetch(`http://127.0.0.1:8000/api/notes/create/`, {
          method: "POST",
          headers : {
            'Content-Type' : 'application/json',
            'X-CSRFToken': csrftoken,
          },
          body : JSON.stringify(note)

    })
  }

  const updateNote = async () => {
    fetch(`http://127.0.0.1:8000/api/notes/${noteId}/update/`, {
          method: "PUT",
          headers : {
            'Content-Type' : 'application/json',
            'X-CSRFToken': csrftoken,
          },
          body : JSON.stringify(note)

    })
  }

  const deleteNote = async () => {
    fetch(`http://127.0.0.1:8000/api/notes/${noteId}/delete/`, {
      method:'DELETE',
      headers : {
        'Content-Type' : 'application/json',
        'X-CSRFToken': csrftoken,
      }
    })
    history('/')
  }

  let handleSubmit = () => {
    if(noteId != 'new' && !note.body){
      deleteNote()
    }else if(noteId != 'new'){
      updateNote()
    }else if(noteId == 'new' && note.body!== null){
      createNote()
    }
    history('/')
  }

  return (
    <div className='note'>
      <div className="note-header">
        <h3>
          <img src={ArrowLeft} alt=""  onClick={handleSubmit}/>
        </h3>
          {noteId !== 'new' ? (
            <button onClick={deleteNote}>Delete</button>
          ):<button onClick={handleSubmit}>Done</button>}
      </div>
      <textarea onChange={(e) => {setNote({...note, 'body' :e.target.value})}} 
      value={note?.body}>
      </textarea>
    </div>
  )
}

export default NotePage