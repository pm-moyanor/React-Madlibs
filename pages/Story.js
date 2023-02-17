import react, { useEffect, useState } from "react";
import data from "./data";
import stories from "./data";

export default function Story({ story = "", title = "", handleNewRound })  {
  return (
    <div className="story-box">
      <h3>{title.toUpperCase()}</h3>
      <p>{story}</p>
      <button onClick={handleNewRound} className="restart-btn">
        play again
      </button>
    </div>
  );
}



// TODO
//optimize the code,
//separate in components?
//add css

//further, inputs that change depending on the template loaded


//-----------------template sample--------------
// {
//     title: "Camping Trip",
//     template:
//       "[Name] went on a camping trip to the [Adjective] woods. [Name] saw a [Adjective] [Animal] and cooked [Adjective] food over the campfire. But at night, it started to [Verb] and [Name] had to take shelter in the tent.",
//     blanks: ["Name", "Adjective", "Animal", "Verb"],
//   },
