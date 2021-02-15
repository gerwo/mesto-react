import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ConfirmPopup from './ConfirmPopup';
import api from "../utils/api.js";
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function App() { 

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setImagePopup] = React.useState(false);
  const [isConfirmPopupOpen, setConfirmPopup] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState({});
  const [cards, setCards] = React.useState([]);

  const [currentUser, setCurrentUser] = React.useState(CurrentUserContext);

  React.useEffect( () => {
    Promise.resolve(api.getUserInfo())
      .then((data) => {
        setCurrentUser(data);
      });
  }, [])

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true)
  }

  function handleConfirmClick() {
    setConfirmPopup(true)
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setImagePopup(true);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setImagePopup(false);

    setTimeout(() => {
      setSelectedCard({});
    }, 500)
  }

  React.useEffect(() => {
    Promise.resolve(api.getCards())
      .then((data) => {
        setCards(data);
      })
      .catch(error => console.log(error));
  }, []);
  
  function handleAddPlaceSubmit({name, link}) {
    Promise.resolve(api.addCard({name, link}))
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups()
    }).catch(error => console.log(error));
  }

  function handleCardConfirmDelete(card){

    console.log(card)

    //handleCardDelete(card);
  }

  function handleCardDelete(card) {

    Promise.resolve(api.deleteCard({cardId : card._id}))
      .then((data) => {
        const newCards = cards.filter((c) => c._id !== card._id);
        
        setCards(newCards);
        closeAllPopups()
      }).catch(error => console.log(error));
  }
  
  function handleCardLike(card) {
    
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    Promise.resolve(api.changeLikeCardStatus({cardId : card._id, isLiked: !isLiked}))
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        
        setCards(newCards);
      }).catch(error => console.log(error));
  }

  function handleUpdateAvatar({avatar}) {
    Promise.resolve(api.setUserAvatar({avatar}))
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      }).catch(error => console.log(error));
  }

  function handleUpdateUser({name, about}){
    Promise.resolve(api.setUserInfo({name, about}))
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      }).catch(error => console.log(error));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <div className="root">
          <Header/>
          <Main 
            onEditProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            onConfirmClick={handleConfirmClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            cards={cards}
          />
          <Footer/>
        </div>
        
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>

        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/> 
        
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/> 

        <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups}/>

        <ConfirmPopup isOpen={isConfirmPopupOpen} onClose={closeAllPopups} onConfirm={handleCardConfirmDelete} />

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
