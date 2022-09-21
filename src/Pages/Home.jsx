import React from "react";
import Card from "../Component/Card";
import { movie_Data } from "./Data";

// import Card from '../Component/Card'
export default function () {
  return (
    <div className="container mt-5 cards_container">
      {movie_Data.map((val, i) => {
        return (
          <Card
            name={val.name}
            time={val.time}
            img={val.img}
            desc={val.description}
            profile={val.profile_img}
            key={i}
          />
        );
      })}
    </div>
  );
}
