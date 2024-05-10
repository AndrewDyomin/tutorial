import { NavLink } from 'react-router-dom';
import css from './Footer.module.css';

export const Footer = () => {

  return (
    <nav className={css.navBlock}>
      <NavLink className={css.link} to="/">
        <p>home</p>
      </NavLink>
    </nav>
  );
};