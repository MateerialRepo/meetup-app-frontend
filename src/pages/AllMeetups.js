import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const Dummy_data = [
  {
    id: 1,
    title: "first Item",
    image:
      "http://img.izismile.com/img/img7/20141206/640/madonnas_latest_raunchy_photo_shoot_640_11.jpg",
    description: "lorem Ipsum",
  },
];

const AllMeetupsPage = () => {
  return <section>
    <h1>All Meetups</h1>
    <MeetupList meetups = {Dummy_data} />
  </section>;
};

export default AllMeetupsPage;
 