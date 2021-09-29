import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../contexts/App.Context';
import "./Card.css";

export default function Card() {

  const {state} = useContext(AppContext);
  const [balance, setBalance] = useState(0)
  const [spend, setSpend] = useState(0)
  const [profit, setProfit] = useState(0)

  useEffect(() => {
    let acc = 0;
    let spendAcc = 0;
    let profitAcc = 0;
    state.movements.forEach((it) => {
      console.log(acc, spendAcc, profitAcc)
      if (it.type === "Income") {
        acc = acc + parseFloat(it.ammount)
        profitAcc = profitAcc + parseFloat(it.ammount)
      } else {
        acc = acc - parseFloat(it.ammount)
        spendAcc = spendAcc - parseFloat(it.ammount)
      }
    });
    setBalance(acc)
    setProfit(profitAcc)
    setSpend(spendAcc)
  }, [state])


  return (
    <div className="Card">
      <div className="balance">
        My Balance
        <h1>${new Intl.NumberFormat().format(balance)}</h1>
      </div>
      <div className="summary">
        <div>
          Spend
          <h2>${new Intl.NumberFormat().format(spend)}</h2>
        </div>
        <div>
          Profit
          <h2>${new Intl.NumberFormat().format(profit)}</h2>
        </div>
      </div>
    </div>
  )
}
