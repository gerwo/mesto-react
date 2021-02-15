import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api.js";
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function App() {

  

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setImagePopup] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

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

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <div className="root">
          <Header/>
          <Main 
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
          />
          <Footer/>
        </div>
        
        <PopupWithForm title="Новое место" buttonName="Создать" name="card" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
            <input 
              type="text" 
              className="popup__input popup__input_image-title" 
              name="image-title" 
              placeholder="Название" 
              required 
              minLength="2" 
              maxLength="30"
              id="image-title"/>
            <span id="image-title-error" className="popup__error"></span>
            <input 
              type="url" 
              className="popup__input popup__input_image-link" 
              name="image-link" 
              placeholder="Ссылка на картинку" 
              required
              id="image-link"/>
            <span id="image-link-error" className="popup__error"></span>
        </PopupWithForm>
        
        <PopupWithForm title="Обновить аватар" buttonName="Сохранить" name="avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <input 
            type="url" 
            className="popup__input popup__input_avatar-link" 
            name="avatar" 
            placeholder="Ссылка на картинку" 
            required
            id="avatar"/>
          <span id="avatar-error" className="popup__error"></span>
        </PopupWithForm>
        
        <PopupWithForm title="Редактировать профиль" buttonName="Сохранить" name="profile" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <input 
            type="text" 
            className="popup__input popup__input_full-name" 
            name="name" 
            placeholder="ФИО" 
            required 
            minLength="2" 
            maxLength="20"
            id="full-name"/>
          <span id="full-name-error" className="popup__error"></span>
          <input 
            type="text" 
            className="popup__input popup__input_occupation" 
            name="occupation" 
            placeholder="Род деятельности" 
            required 
            minLength="2" 
            maxLength="200"
            id="occupation"/>
          <span id="occupation-error" className="popup__error"></span>
        </PopupWithForm>
        
        <PopupWithForm title="Вы уверены?" buttonName="Да" name="confirm"></PopupWithForm>

        <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups}></ImagePopup>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
