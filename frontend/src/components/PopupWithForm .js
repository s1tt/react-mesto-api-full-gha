function PopupWithForm({ title, name, isOpen, onClose, textOnButton, children, onSubmit }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form action="#" name={name} onSubmit={onSubmit} className={`popup__form popup__form-${name}`} noValidate>
          {children}
          <button className="popup__btn" type="submit">
            {textOnButton}
          </button>
        </form>
        <button className="popup__close-btn" type="button" aria-label="Закрыть всплывающее окно" onClick={onClose}></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
