import { useContext } from 'react'
import MeetupList from '../components/meetups/MeetupList'
import FavouritesContext from '../store/favourites-context';

const FavouritesPage = () => {
  const favouritesCtx = useContext(FavouritesContext);

  const favMeetups = favouritesCtx.favourites;

  return (
    <section>
      <h1>Favourite Meetups</h1>
      <MeetupList meetups={favMeetups} />
    </section>
  );
}

export default FavouritesPage