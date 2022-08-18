import React from 'react'
import { useNavigate } from "react-router-dom";


export default function NotFound() {
    let navigate = useNavigate();

    const voltar = () =>{
        navigate('/')
    }
  return (
    <div>
        <h1> Página não encontrada! deu ruim barão... </h1>
        <button onClick={ voltar }>voltar</button>
    </div>
  )
}
