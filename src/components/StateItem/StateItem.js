import React from 'react'
import "./StateItem.css"

export default function StateItem(props) {
  return (
    <div className="StateItem">
      <img src={props.image} alt="No description"/>
    </div>
  )
}
