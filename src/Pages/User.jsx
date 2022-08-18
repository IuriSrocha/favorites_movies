import React from 'react'
import { Link } from "react-router-dom";


export default function User() {
  return (
    <div>
         <h1> bem vindo ao svl</h1>

<nav>
    <Link to="/about">About</Link>
    <Link to="/">Home</Link>
</nav>
    </div>
  )
}
