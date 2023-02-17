import react, { useEffect, useState } from "react";
import data from "./data";
import stories from "./data";

export default function Story({ story = "", title = "", handleNewRound })  {
  return (
    <div className="story-box">
      <h3>{title.toUpperCase()}</h3>
      <p>{story}</p>
      <button onClick={handleNewRound} className="restart-btn">
        restart
      </button>
    </div>
  );
}

//}

// TODO
//optimize the code,
//separate in components
//add css
//fill blaks as you type
//further, inputs that change depending on the template loaded

// {
//     title: "Camping Trip",
//     template:
//       "[Name] went on a camping trip to the [Adjective] woods. [Name] saw a [Adjective] [Animal] and cooked [Adjective] food over the campfire. But at night, it started to [Verb] and [Name] had to take shelter in the tent.",
//     blanks: ["Name", "Adjective", "Animal", "Verb"],
//   },
