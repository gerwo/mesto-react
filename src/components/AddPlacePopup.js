import React from 'react';
import PopupWithForm from './PopupWithForm';
import {CurrentUserContext} from '../contexts/CurrentUserContext';


function AddPlacePopup(props) {

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <PopupWithForm 
      title="Новое место" 
      buttonName="Создать" 
      name="card"
      isOpen={props.isOpen}
      onClose={props.onClose}>
      
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
  )
}

export default AddPlacePopup;