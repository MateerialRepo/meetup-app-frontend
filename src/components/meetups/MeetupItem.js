import { useContext } from 'react';
import classes from './MeetupItem.module.css'
import Card from '../ui/Card'
import FavouritesContext from '../../store/favourites-context';

const MeetupItem = (props) => {

  const favouritesCtx = useContext(FavouritesContext);

  const itemIsFavourite = favouritesCtx.itemIsFavourite(props.id);

  const toggleFavouriteStatusHandler = () => {
    if (itemIsFavourite) {
      favouritesCtx.removeFavourite(props.id);
    } else {
      favouritesCtx.addFavourite({
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        description: props.description,
      });
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouriteStatusHandler}>
            {itemIsFavourite ? 'Remove from Favourites' : 'To Favourites'}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem