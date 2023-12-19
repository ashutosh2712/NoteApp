import React from 'react'
import Add from '../assets/add.png'
import { Link } from 'react-router-dom'

const AddButton = () => {
  return (
    <Link to="/note/new" className='floating-button'>
        <img src={Add} alt="" />
    </Link>
  )
}

export default AddButton