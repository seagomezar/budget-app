import React, { useContext } from 'react'
import { AppContext } from '../../contexts/App.Context';
import MovementItem from '../MovementItem/MovementItem';
import "./MovementList.css";

export default function MovementList() {
  const {state} = useContext(AppContext)
  return (
    <div className="MovementList">
      {state.movements.map((movement, index) => (<MovementItem key={index} {...movement} />))}
    </div>
  )
}
