import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';

export const UserMenu = ({ close }) => {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useAuth();
  const isMobile = useMediaQuery({ query: '(max-width: 833px)' });

  return (
    <div className={isMobile ? css.mobileWrapper : css.wrapper}>
      <p className={css.username}>{user.name}</p>
      <div className={isMobile ? css.propMob : css.prop}>
        <button type="button" onClick={() => dispatch(logOut())} >
        {'logout'}
      </button>
      </div>
    </div>
  );
};