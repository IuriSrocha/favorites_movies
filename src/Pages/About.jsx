import React from 'react'
import { Link } from "react-router-dom";


export default function About() {
    return (
        <div>
            <h1> bem vindo ao svl</h1>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/user">User</Link>
            </nav>
        </div>
    )
}
