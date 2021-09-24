import React, { useContext }  from 'react'
import { AppContext } from '../../contexts/App.Context';
import "./AddButton.css";

export default function AddButton() {
  const { state, setState } = useContext(AppContext)
  const showForm = ()=>{
    console.log("Debe abrir el formulario de gasto")
    setState({...state, isOpenMovementForm: true});
  }

  return (
    <button onClick={showForm} className="AddButton">
      +
    </button>
  )
}
