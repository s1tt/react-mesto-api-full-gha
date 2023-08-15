import React from 'react';
import PopupWithForm from './PopupWithForm ';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser, isOpen]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description
    });
  }

  return (
    <PopupWithForm title="Редактировать профиль" name="edit-profile" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} textOnButton="Сохранить">
      <label className="popup__input-field">
        <input id="name-input" className="popup__input popup__input_value_name" onChange={handleNameChange} type="text" placeholder="Имя" name="name" minLength="2" maxLength="40" value={name || ''} required />
        <span className="popup__input-error-message name-input-error"></span>
      </label>
      <label className="popup__input-field">
        <input id="job-input" className="popup__input popup__input_value_job" onChange={handleDescriptionChange} type="text" placeholder="О себе" name="job" minLength="2" maxLength="200" value={description || ''} required />
        <span className="popup__input-error-message job-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
