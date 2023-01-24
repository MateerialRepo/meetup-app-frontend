import { Link } from "react-router-dom";
import { useContext } from "react";
import FavouritesContext from "../../store/favourites-context";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const favouritesCtx = useContext(FavouritesContext);
  const totalFavourites = favouritesCtx.totalFavourites;

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetup App</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favourites">
              Favourite Meetups
              <span className={classes.badge}>{totalFavourites}</span> 
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
