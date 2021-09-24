import React from 'react'
import "./MovementItem.css";
import IncomeIcon from "../../images/1.png"
import ExpenseIcon from "../../images/2.png"

export default function MovementItem(props) {
  return (
    <div className="MovementItem">
      <img src={(props.type === "Income") ? IncomeIcon : ExpenseIcon} alt={(props.type === "Income") ? "Income" : "Expense"}/>
      <h3>{(props.type === "Income") ? "" : "-"}${new Intl.NumberFormat().format(props.ammount)}</h3>
      <button>Remove X</button>
    </div>
  )
}
