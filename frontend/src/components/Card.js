import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `element__like-btn ${isLiked && 'element__like-btn_active'}`;

  const handleCardClick = () => {
    onCardClick(card);
  };

  const handleDeleteClick = () => {
    onCardDelete(card);
  };

  const handleLikeClick = () => {
    onCardLike(card);
  };

  return (
    <article className="element">
      <img src={card.link} alt={card.name} onClick={handleCardClick} className="element__img" />
      {isOwn && <button className="element__trash-btn" onClick={handleDeleteClick} type="button" aria-label="Удалить картинку" />}
      <div className="element__description">
        <h2 className="element__title">{card.name}</h2>
        <button className={cardLikeButtonClassName} onClick={handleLikeClick} type="button" aria-label="Лайк"></button>
        <span className="element__like-count">{card.likes.length}</span>
      </div>
    </article>
  );
}

export default Card;
