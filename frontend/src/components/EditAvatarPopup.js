import PopupWithForm from './PopupWithForm ';
import React from 'react';

function EditProfilePopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  }

  return (
    <PopupWithForm title="Обновить аватар" name="change-avatar" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} textOnButton="Сохранить">
      <label className="popup__input-field">
        <input id="img-url-avatar-input" className="popup__input popup__input_value_img-link" ref={avatarRef} type="url" placeholder="Ссылка на новый аватар" name="img-link" required />
        <span className="popup__input-error-message img-url-avatar-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
