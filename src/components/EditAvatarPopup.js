import React from 'react';
import PopupWithForm from './PopupWithForm';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function EditAvatarPopup(props){

  const [avatar, setAvatar] = React.useState();

  const currentUser = React.useContext(CurrentUserContext);

  const avatarRef = React.useRef();

  React.useEffect(() => {
    setAvatar(currentUser.name);
  }, [currentUser]);

  function handleSubmit(e){
    e.preventDefault();
    
    props.onUpdateAvatar({
      avatar: avatarRef.current.value
    });

    avatarRef.current.value = '';
  }

  return (
    <PopupWithForm 
      title="Обновить аватар" 
      buttonName="Сохранить" 
      name="avatar" 
      isOpen={props.isOpen} 
      onClose={props.onClose}
      onSubmit={handleSubmit}
      >
      <input
        ref={avatarRef}
        type="url" 
        className="popup__input popup__input_avatar-link" 
        name="avatar" 
        placeholder="Ссылка на картинку" 
        required
        id="avatar"/>
      <span id="avatar-error" className="popup__error"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;