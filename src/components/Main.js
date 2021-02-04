import React from 'react';
import api from "../utils/api.js";
import Card from "./Card";

function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription , setUserDescription ] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect( () => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then((data) => {
        setUserName(data[0].name)
        setUserDescription(data[0].about)
        setUserAvatar(data[0].avatar);
        setCards(data[1]);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-block">
          <img src={userAvatar} className="profile__avatar" alt="Аватар"/>
          <button className="button button_type_edite-avatar opacity" aria-label="Редактировать" type="button" onClick={props.onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <div className="profile__full-name-wraper">
            <h1 className="profile__full-name">{userName}</h1>
            <button className="button button_type_edite-profile opacity" aria-label="Редактировать" type="button" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__occupation">{userDescription}</p>
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