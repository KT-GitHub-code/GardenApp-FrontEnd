import React from 'react'
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <div>
        <Link to="/">Home</Link> {" | "}
        <Link to="/garden">Garden</Link>
    </div>
  )
}

export default Nav