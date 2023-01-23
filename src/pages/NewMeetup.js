import {useHistory} from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {

  const history = useHistory()

  const addMeetupHandler = async (meetupData) => {

    // fetch("https://meetup-app-58a46-default-rtdb.firebaseio.com/meetups.json", {
    //   method: "POST",
    //   body: JSON.stringify(meetupData),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then(() => {
    //   history.replace("/");
    // });

    try{
      let response = await fetch("https://meetup-app-58a46-default-rtdb.firebaseio.com/meetups.json", {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if(response.ok){
        history.replace("/");
      } 

    } catch (error) {
      console.log(error);
    }

  };



  return (
    <div>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
};


export default NewMeetupPage;
