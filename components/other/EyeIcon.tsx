import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const VisibilityOn = (): JSX.Element => (
  <FontAwesomeIcon icon={faEyeSlash} style={{ fontSize: '1.35rem' }} />
  // <i className='fas fa-eye-slash' style={{ fontSize: '1.35rem' }} />
);
const VisibilityOff = (): JSX.Element => (
  <FontAwesomeIcon icon={faEye} style={{ fontSize: '1.35rem' }} />
  // <i className='fas fa-eye' style={{ fontSize: '1.35rem' }} />
);

export { VisibilityOn, VisibilityOff };
