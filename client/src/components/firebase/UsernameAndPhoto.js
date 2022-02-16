import React from 'react';

function UsernameAndPhoto({ username, userIcon, handleOpenModal }) {
  return (
    <div onClick={handleOpenModal} className='user-registered-component'>
      <h3>{username}</h3>
      {userIcon ? (
        <img src={userIcon} alt={username} />
      ) : (
        <i className='fas fa-user-circle' />
      )}
    </div>
  );
}

export default UsernameAndPhoto;
