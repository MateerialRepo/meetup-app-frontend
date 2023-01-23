import { useRef } from "react";
import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";

const NewMeetupForm = (props) => {

    const titleInput = useRef();
    const imageInput = useRef();
    const addressInput = useRef();
    const descriptionInput = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredTitle = titleInput.current.value;
        const enteredImage = imageInput.current.value;
        const enteredAddress = addressInput.current.value;
        const enteredDescription = descriptionInput.current.value;

        const meetupData = {
        title: enteredTitle,
        image: enteredImage,
        address: enteredAddress,
        description: enteredDescription,
        };

        console.log(meetupData);

        props.onAddMeetup(meetupData)
  };

  return (
    <Card>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input ref={titleInput} type="text" required id="title" />
        </div>

        <div className={classes.control}>
          <label htmlFor="image">Meetup Image URL</label>
          <input ref={imageInput} type="url" required id="image" />
        </div>

        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input ref={addressInput} type="text" required id="address" />
        </div>

        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows="5"
            ref={descriptionInput}
            required
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
