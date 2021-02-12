import React from 'react';
import api from "../utils/api.js";
import Card from "./Card";
import CurrentUserContext from '../contexts/CurrentUserContext';

function Main(props) {
  const [cards, setCards] = React.useState([]);

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect( () => {
    Promise.resolve(api.getCards())
      .then((data) => {
        setCards(data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-block">
          <img src={currentUser.avatar} className="profile__avatar" alt="Аватар"/>
          <button className="button button_type_edite-avatar opacity" aria-label="Редактировать" type="button" onClick={props.onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <div className="profile__full-name-wraper">
            <h1 className="profile__full-name">{currentUser.name}</h1>
            <button className="button button_type_edite-profile opacity" aria-label="Редактировать" type="button" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__occupation">{currentUser.about}</p>
        </div>
        <button className="button button_type_add-card opacity" aria-label="Добавить карточку" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="cards">
        <ul className="cards__block">
          {cards.map(item => <Card key = {item._id} onCardClick={props.onCardClick} {...item}/>)}
        </ul>
      </section>
    </main>
  );
}

export default Main;