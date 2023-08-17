class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  //Запросить стартовые карточки с сервера
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    }).then(this._checkResponse);
  }

  //Запросить инфо о текущем пользователе
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    }).then(this._checkResponse);
  }

  //Запрос на обновление инфо о текущем пользователе
  setUserInfo(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        about
      })
    }).then(this._checkResponse);
  }

  //Запрос на добавление карточки
  addNewCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        link
      })
    }).then(this._checkResponse);
  }

  //Запрос на удаление карточки
  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      }
    }).then(this._checkResponse);
  }

  //Добавить или удалить лайк.
  changeLikeCardStatus(cardId, isLiked) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: !isLiked ? 'DELETE' : 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      }
    }).then(this._checkResponse);
  }

  //Запрос на изменение аватара
  changeUserAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar
      })
    }).then(this._checkResponse);
  }
}

export const api = new Api({
  baseUrl: 'https://api.s1tt-mesto.nomoreparties.co',
  // baseUrl: 'http://127.0.0.1:3000'
});
