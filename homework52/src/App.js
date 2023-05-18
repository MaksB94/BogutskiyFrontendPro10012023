import './App.css';

import React, { useState, useEffect } from 'react';

function UsersList() {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedAlbumId, setSelectedAlbumId] = useState(null);

  useEffect(() => {
    // Отримання списку користувачів
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  }, []);

  const handleAlbumClick = (userId) => {
    setSelectedUserId(userId);
    setSelectedAlbumId(null);

    // Отримання списку альбомів для конкретного користувача
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then(response => response.json())
      .then(data => setAlbums(data))
      .catch(error => console.log(error));
  };

  const handlePhotosClick = (albumId) => {
    setSelectedAlbumId(albumId);

    // Отримання списку фото для конкретного альбому
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then(response => response.json())
      .then(data => setPhotos(data))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h1>Список користувачів</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => handleAlbumClick(user.id)}>Album</button>
            {selectedUserId === user.id && (
              <ul>
                {albums.map(album => (
                  <li key={album.id}>
                    {album.title}
                    <button onClick={() => handlePhotosClick(album.id)}>Photos</button>
                    {selectedAlbumId === album.id && (
                      <ul>
                        {photos.map(photo => (
                          <li key={photo.id}>
                            <img src={photo.thumbnailUrl} alt={photo.title} />
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
