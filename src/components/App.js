import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectedCard(null)
  }

  return (
    <div className="page">

      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
      <Footer />
      <PopupWithForm isOpen={isEditAvatarPopupOpen} name="avatar" title="Обновить аватар" buttonTitle="Сохранить" onClose={closeAllPopups}>
        <label className="field">
          <input
            id="avatar-input"
            className="popup__input"
            name="userAvatar"
            type="url"
            placeholder="Ссылка на картинку"
            required=""
          />
          <span className="popup__input-error avatar-input-error" />
        </label>
      </PopupWithForm>
      <PopupWithForm isOpen={isEditProfilePopupOpen} name="user" title="Редактировать профиль" buttonTitle="Сохранить" onClose={closeAllPopups}>
        <label className="field">
            <input
              id="name-input"
              className="popup__input"
              name="nameUser"
              type="text"
              defaultValue="По"
              placeholder="Укажите ваше имя"
              required=""
              minLength={2}
              maxLength={40}
            />
            <span className="popup__input-error name-input-error" />
          </label>
          <label className="field">
            <input
              id="job-input"
              className="popup__input"
              name="jobUser"
              type="text"
              defaultValue="Мастер кунг-фу"
              placeholder="Укажите вашу профессию"
              required=""
              minLength={2}
              maxLength={200}
            />
            <span className="popup__input-error job-input-error" />
          </label>
      </PopupWithForm>
      <PopupWithForm isOpen={isAddPlacePopupOpen} name="place" title="Новое место" buttonTitle="Сохранить" onClose={closeAllPopups}>
        <label className="field">
          <input
            id="place-input"
            className="popup__input"
            name="name"
            type="text"
            placeholder="Название"
            required=""
            minLength={2}
            maxLength={30}
          />
          <span className="popup__input-error place-input-error" />
        </label>
        <label className="field">
          <input
            id="link-input"
            className="popup__input"
            name="link"
            type="url"
            placeholder="Ссылка на картинку"
            required=""
          />
          <span className="popup__input-error link-input-error" />
        </label>
      </PopupWithForm>
      <PopupWithForm name="deletecard" title="Вы уверены?" buttonTitle="Да" />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

    </div>
  );
}

export default App;
