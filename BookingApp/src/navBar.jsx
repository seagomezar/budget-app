import React from "react";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import swal from "sweetalert";

export default function NavBar(props) {
  const HandleHotelChange = (event) => {
    props.setCountry(event.target.value);
  };

  const HandlePriceChange = (event) => {
    props.setPrice(event.target.value);
  };

  const HandleRoomChange = (event) => {
    props.setRooms(event.target.value);
  };

  const HandleDateChangeIn = (e) => {
    const fechaInputIn = e.target.value;
    props.setFechaIn(fechaInputIn);
  };

  const HandleDateChangeOut = (e) => {
    const fechaInputOut = e.target.value;
    props.setFechaOut(fechaInputOut);
  };

  const HandleReset = () => {
    props.setFechaIn();
    props.setFechaOut();
    props.setPrice("Todos");
    props.setRooms("Todos");
    props.setCountry("Todos");
    document.getElementById("Place").value = "Todos";
    document.getElementById("Cost").value = "Todos";
    document.getElementById("Size").value = "Todos";
    document.getElementById("Class-FechaIn").value = "";
    document.getElementById("Class-FechaOut").value = "";
  };

  return (
    <div className="navBar">
      <input
        id="Class-FechaIn"
        type="date"
        onChange={HandleDateChangeIn}
        name="begin"
        value={props.fechaIn}
        min="2018-01-01"
        max="2030-12-31"
      ></input>
      <input
        id="Class-FechaOut"
        type="date"
        onChange={HandleDateChangeOut}
        name="begin"
        value={props.fechaOut}
        min="1997-01-01"
        max="2030-12-31"
      ></input>
      <select className="Country" id="Place" onChange={HandleHotelChange}>
        <option value="Todos">Todos los paises</option>
        <option value="Argentina">Argentina</option>
        <option value="Brasil">Brasil</option>
        <option value="Chile">Chile</option>
        <option value="Uruguay">Uruguay</option>
      </select>
      <select className="Price" id="Cost" onChange={HandlePriceChange}>
        <option value="Todos">Todos los Precios</option>
        <option value="$">$</option>
        <option value="$$">$$</option>
        <option value="$$$">$$$</option>
        <option value="$$$$">$$$$</option>
      </select>
      <select className="Rooms" id="Size" onChange={HandleRoomChange}>
        <option value="Todos">Todos los tamaños</option>
        <option value="Pequeño">Pequeño</option>
        <option value="Mediano">Mediano</option>
        <option value="Grande">Grande</option>
      </select>
      <button type="button" className="button-clean" onClick={HandleReset}>
        <div className="button-clean-icon">
          <DeleteOutlinedIcon style={{ fontSize: "20px" }} />
        </div>
        <div className="button-clean-text"> Reiniciar </div>
      </button>
    </div>
  );
}
