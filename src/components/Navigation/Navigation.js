import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {

  return (
    <nav className={css.navBlock}>
      <NavLink className={css.link} to="/">
        <p>Logo</p>
      </NavLink>
    </nav>
  );
};