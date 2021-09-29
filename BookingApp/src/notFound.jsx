import React from "react";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";

export default function NotFound(props) {
  return (
    <div className="notfound">
      <div className="notfound-Icon">
        <SentimentVeryDissatisfiedIcon
          style={{ fontSize: "80px", color: "white" }}
        />
      </div>
      <div className="notfound-Text">
        Lo sentimos, no encontramos ningún hotel en estas fechas.
      </div>
    </div>
  );
}
