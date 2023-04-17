import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="element" >
      <img className="element__photo link-hover" src={props.link} alt={props.name} onClick={handleClick} />
      <button className="element__delete"></button>
      <div className="element__group">
        <h2 className="element__title">{props.name}</h2>
        <div>
          <button className="element__like" type="button"></button>
          <p className="element__like-number">{props.likes}</p>
        </div>
      </div>
    </article>
  )
}

export default Card;
