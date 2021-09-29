import React from "react";
import LocalHotelOutlinedIcon from "@material-ui/icons/LocalHotelOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import swal from "sweetalert2";

const showAlert = () => {
  swal.fire({
    title: "Resevado",
    button: "aceptar",
    icon: "success",
    confirmButtonColor: "#0080ff",
    customClass: {
      popup: "format-pre"
    }
  });
};

export default function HotelCard(props) {
  return (
    <div className="hotel-container">
      <div className="hotel-content">
        <div className="hotel-image">
          <img src={props.cover} alt="hotel-pictures" className="hotel-pic" />
        </div>
        <div className="hotel-info">
          <div className="hotel-title">{props.naming}</div>
          <div className="hotel-availabilityFrom">{props.startdate}</div>
          <div className="hotel-availabilityTo">{props.enddate}</div>
          <div className="hotel-description">{props.description}</div>
          <div className="hotel-city">
            <div className="hotel-city-icon">
              <LocationOnOutlinedIcon style={{ fontSize: "30px" }} />
            </div>
            <div className="hotel-city-txt">{props.city}</div>
          </div>
          <div className="hotel-rooms-price">
            <div className="hotel-rooms">
              <div className="hotel-rooms-icon">
                <LocalHotelOutlinedIcon style={{ fontSize: "30px" }} />
              </div>
              <div className="hotel-rooms-txt">{props.rooms} Habitaciones</div>
            </div>
            <div className="hotel-price">{props.price}</div>
          </div>
        </div>
        <button className="hotel-button" onClick={showAlert}>
          Reservar
        </button>
      </div>
    </div>
  );
}
