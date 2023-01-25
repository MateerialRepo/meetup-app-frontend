import { useContext } from 'react'
import MeetupList from '../components/meetups/MeetupList'
import FavouritesContext from '../store/favourites-context';

const FavouritesPage = () => {
  const favouritesCtx = useContext(FavouritesContext);

  const favMeetups = favouritesCtx.favourites;

  let content;

  if(favMeetups.length === 0) {
    content = <p>You got no favourites yet. Start adding some?</p>
  } else {
    content = <MeetupList meetups={favMeetups} />
  }


  return (
    <section>
      <h1>Favourite Meetups</h1>
      {content}
    </section>
  );
}

export default FavouritesPage