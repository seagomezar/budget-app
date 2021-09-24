import React from 'react'
import StateItem from '../StateItem/StateItem'
import "./StateContainer.css"
import StateIcon1 from "../../images/1.png"
import StateIcon2 from "../../images/2.png"
import StateIcon3 from "../../images/3.png"
import StateIcon4 from "../../images/4.png"
import StateIcon5 from "../../images/5.png"
import StateIcon6 from "../../images/6.png"


export default function StateContainer() {
  const images = [StateIcon1, StateIcon2, StateIcon3, StateIcon4, StateIcon5, StateIcon6]
  return (
    <div className="StateContainer">
      {images.map((i, index)=><StateItem image={i} key={index} />)}
    </div>
  )
}
