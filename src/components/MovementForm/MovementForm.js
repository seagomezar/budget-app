import React, { useContext} from 'react'
import { useState } from 'react/cjs/react.development';
import { AppContext } from '../../contexts/App.Context';
import "./MovementForm.css";

export default function MovementForm() {

  const { state, setState } = useContext(AppContext);

  const [ammount, setAmmount] = useState(0);
  const [type, setType] = useState("Income");

  const handleCloseForm = ()=>{
      setState({ ...state, isOpenMovementForm: false })
  }

  const saveMovement = (event, data)=>{
    event.preventDefault();
    const newMovement = {
      ammount,
      type,
      date: Date.now()
    }
    const movements = state.movements;
    movements.push(newMovement);
    setState({...state, movements, isOpenMovementForm: false})
    localStorage.setItem("state", JSON.stringify(state));
  }

  return (
    <div className="MovementForm">
      <button className="closeForm" onClick={handleCloseForm}>X</button>
      <form onSubmit={saveMovement} >
        <h2>Save new Movement</h2>
        <input name="ammount"
               type="number"
               onChange={(event)=>{setAmmount(event.target.value)}}
               value={ammount} />
        <select name="type"
                onChange={(event) => { setType(event.target.value) }}
                value={type}>
          <option>Income</option>
          <option>Expense</option>
        </select>
        <button className="submit" type="submit">Save</button>
      </form>
    </div>
  )
}
