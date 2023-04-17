import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [openPopupAvatar, setOpenPopupAvatar] = React.useState(false);
  const [openPopupUser, setOpenPopupUser] = React.useState(false);
  const [openPopupPlace, setOpenPopupPlace] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  function handleEditAvatarClick() {
    setOpenPopupAvatar(true)
  }

  function handleEditProfileClick() {
    setOpenPopupUser(true)
  }

  function handleAddPlaceClick() {
    setOpenPopupPlace(true)
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function closeAllPopups() {
    setOpenPopupAvatar(false)
    setOpenPopupUser(false)
    setOpenPopupPlace(false)
    setSelectedCard(false)
  }

  return (
    <div className="page">

      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
      <Footer />
      <PopupWithForm isOpen={openPopupAvatar} name="avatar" title="Обновить аватар" buttonTitle="Сохранить" onClose={closeAllPopups}>
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
      <PopupWithForm isOpen={openPopupUser} name="user" title="Редактировать профиль" buttonTitle="Сохранить" onClose={closeAllPopups}>
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
      <PopupWithForm isOpen={openPopupPlace} name="place" title="Новое место" buttonTitle="Сохранить" onClose={closeAllPopups}>
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
