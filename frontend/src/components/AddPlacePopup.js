import React from 'react';
import PopupWithForm from './PopupWithForm ';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  React.useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace(name, link);
  }

  return (
    <PopupWithForm title="Новое место" name="add-card" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} textOnButton="Создать">
      <label className="popup__input-field">
        <input id="img-title-input" className="popup__input popup__input_value_img-title" onChange={handleNameChange} type="text" placeholder="Название" name="img-title" minLength="2" maxLength="30" value={name} required />
        <span className="popup__input-error-message img-title-input-error"></span>
      </label>
      <label className="popup__input-field">
        <input id="img-url-input" className="popup__input popup__input_value_img-link" onChange={handleLinkChange} type="url" placeholder="Ссылка на картинку" name="img-link" value={link} required />
        <span className="popup__input-error-message img-url-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
