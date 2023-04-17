import React from "react"
import api from "../utils/Api";
import Card from "./Card";

function Main ({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
  const [userName, setUserName] = React.useState("");
  const [userDescription , seUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then(res => {
        setUserName(res.name)
        seUserDescription(res.about)
        setUserAvatar(res.avatar)
      })
      .catch((err) => {
        console.log(`${err}`);
      })
  }, [])

  React.useEffect(() => {
    api.getInitialCards()
      .then(cardData => {
        setCards(cardData);
      })
      .catch((err) => {
        console.log(`${err}`);
      })
  }, [])

  return (
    <main className="content">

      <section className="profile">

        <div className="profile__user">

          <div className="profile__avatar-group" >
            <img className="profile__avatar" src={userAvatar} alt="Аватар" />
            <button
              className="profile__avatar-edit"
              onClick={onEditAvatar} />
          </div>

          <div className="profile__intro">
            <h1 className="profile__title">{userName}</h1>
            <button
              className="profile__edit-button link-hover"
              type="button"
              aria-label="Редактировать профиль"
              onClick={onEditProfile}
            />
            <p className="profile__subtitle">{userDescription}</p>
          </div>

        </div>

        <button
          className="profile__add-button link-hover"
          type="button"
          aria-label="Добавить место"
          onClick={onAddPlace}
        />

      </section>

      {/* Карточки */}
      <section className="elements">
        {cards.map((card, _id) => (
            <Card
              key={_id}
              link={card.link}
              name={card.name}
              likes={card.likes.length}
              onCardClick={onCardClick}
              card={card}
            />
          ))}
      </section>

    </main>
  )
}

export default Main;
