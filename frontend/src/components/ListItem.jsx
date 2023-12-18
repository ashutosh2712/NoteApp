import React from 'react'

const ListItem = ({ note }) => {
  return (
    <div>
        <ul>
            <li>{note.body}</li>
        </ul>
    </div>
  )
}

export default ListItem