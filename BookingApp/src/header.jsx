import React from "react";

export default function Header(props) {
  return (
    <div className="header">
      <div className="header-title">
        <p className="header-title-subtitle"></p>
        <p className="header-title-subtitle-0"></p>
        <p className="header-title-subtitle-1">País: {props.country}</p>
        <p className="header-title-subtitle-2">Precio: {props.price}</p>
        <p className="header-title-subtitle-3">habitaciones: {props.rooms}</p>
      </div>
      <img className="header-picture" src="./assets/beaches_banner.jpg" />
      <div className="header-picture-style"></div>
    </div>
  );
}
