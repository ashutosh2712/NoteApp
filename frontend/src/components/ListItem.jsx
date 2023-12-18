import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({ note }) => {
  return (
    <Link to={`/note/${note.id}`}>
        <ul>
            <li>{note.body}</li>
        </ul>
    </Link>
  )
}

export default ListItem