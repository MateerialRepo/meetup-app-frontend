import {useState, useEffect} from "react";
import MeetupList from "../components/meetups/MeetupList";


const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
 

  useEffect(() => {
    fetchMeetupsHandler();
  }, []);

  const fetchMeetupsHandler = async () => {
    try{
      let response = await fetch("https://meetup-app-58a46-default-rtdb.firebaseio.com/meetups.json");

      if (response.ok) {
        const data = await response.json();
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
        console.log(meetups);
      } else {
        throw new Error("Error occured while fetching data");
      }

    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  } 

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
};

export default AllMeetupsPage;