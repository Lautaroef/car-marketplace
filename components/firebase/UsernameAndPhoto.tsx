import Image from 'next/image';

type Props = {
  username: string;
  userIcon: string;
  handleOpenModal: () => void;
};

function UsernameAndPhoto({ username, userIcon, handleOpenModal }: Props) {
  return (
    <div onClick={handleOpenModal} className='user-registered-component'>
      <h3>{username}</h3>
      {userIcon ? (
        <Image src={userIcon} alt={username} />
      ) : (
        <i className='fas fa-user-circle' />
      )}
    </div>
  );
}

export default UsernameAndPhoto;
