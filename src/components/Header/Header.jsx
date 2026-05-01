import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./Header.module.css";

const navClass = ({ isActive }) => clsx(s.link, isActive && s.linkActive);

export default function Header() {
  return (
    <header className={s.header}>
      <div className={clsx("container", s.inner)}>
        <NavLink to="/" className={s.logo}>
          Travel<span className={s.logoAccent}>Trucks</span>
        </NavLink>
        <nav className={s.nav}>
          <NavLink to="/" end className={navClass}>
            Home
          </NavLink>
          <NavLink to="/catalog" className={navClass}>
            Catalog
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
