import React, { useState } from "react";

import "./styles.css";
import "./hotel-card.css";
import "./nav-bar.css";
import "./header.css";
import "./notfound.css";
import Header from "./header";
import NavBar from "./navBar";
import Seccion from "./seccion";
import { hotelsData } from "./data";

export default function App() {
  const [hotelList, setHotelList] = useState(hotelsData);
  const [fechaIn, setFechaIn] = useState();
  const [fechaOut, setFechaOut] = useState();
  const [country, setCountry] = useState("Todos");
  const [rooms, setRooms] = useState("Todos");
  const [price, setPrice] = useState("Todos");

  return (
    <div className="App">
      <Header country={country} price={price} rooms={rooms} />

      <NavBar
        setCountry={setCountry}
        setPrice={setPrice}
        setRooms={setRooms}
        fechaIn={fechaIn}
        setFechaIn={setFechaIn}
        fechaOut={fechaOut}
        setFechaOut={setFechaOut}
      />

      <Seccion
        hotelList={hotelList}
        country={country}
        price={price}
        rooms={rooms}
        fechaIn={fechaIn}
        fechaOut={fechaOut}
      />
    </div>
  );
}
