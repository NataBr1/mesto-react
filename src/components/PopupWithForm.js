import React from "react";

function PopupWithForm(props) {
  return (
    <div className={`popup popup_${props.name} ${props.isOpen ? `popup_opened`: ""}`} >
      <div className="popup__container">
        <form
          className={`popup__form popup__form_${props.name}`}
          name={`${props.name}`}
          noValidate=""
        >
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <button className="popup__button" type="submit" aria-label="Сохранить">
            {props.buttonTitle}
          </button>
        </form>
        <button
          className="popup__closed link-hover"
          type="button"
          aria-label="Закрыть"
          onClick={props.onClose}
        />
      </div>
    </div>
  );
}

export default PopupWithForm;
