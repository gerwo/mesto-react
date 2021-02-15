import React from 'react';
import PopupWithForm from './PopupWithForm';

function ConfirmPopup(props){

  function handleSubmit(e) {
    e.preventDefault();
    //console.log(props)
    props.onConfirm(props);
  }

  return (
    <PopupWithForm 
      title="Вы уверены?" 
      buttonName="Да" 
      name="confirm" 
      isOpen={props.isOpen} 
      onClose={props.onClose}
      onSubmit={handleSubmit}
      >
    </PopupWithForm>
  );
}

export default ConfirmPopup;