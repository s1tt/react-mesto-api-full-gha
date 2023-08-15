function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_type_view-image ${card && 'popup_opened'}`}>
      <figure className="popup__view-image-figure">
        <img src={`${card?.link}`} alt={`${card?.name}`} className="popup__view-image-item" />
        <figcaption className="popup__view-image-figcaption">{`${card?.name}`}</figcaption>
        <button className="popup__close-btn" type="button" aria-label="Закрыть всплывающее окно" onClick={onClose}></button>
      </figure>
    </div>
  );
}

export default ImagePopup;
