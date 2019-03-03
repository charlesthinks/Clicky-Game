import React from "react";
import "./style.css";

function Card(props) {
  return (
    <React.Fragment>
      <div className="ui card img-container">
        <div className="image" onClick={() => props.cardClicked(props.id)}>
          <img className="img" src={props.src} alt={props.alt} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Card;
