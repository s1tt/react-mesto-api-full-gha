function InfoTooltip({ isOpen, onClose, authPopupInfo }) {
  return (
    <div className={`popup popup_type_auth ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <img className="popup__auth-img" src={authPopupInfo.img} alt={authPopupInfo.text} />
        <p className="popup__auth-text">{authPopupInfo.text}</p>
        <button className="popup__close-btn" type="button" aria-label="Закрыть всплывающее окно" onClick={onClose}></button>
      </div>
    </div>
  );
}

export default InfoTooltip;
