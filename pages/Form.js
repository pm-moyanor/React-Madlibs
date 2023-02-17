import react, { useState, useEffect } from "react";
import Story from "./Story";
import stories from "./data";

export default function Form() {
  const [name, setName] = useState("");
  const [animal, setAnimal] = useState("");
  const [adj, setAdj] = useState("");
  const [verb, setVerb] = useState("");
  const [story, setStory] = useState("");
  const [title, setTitle] = useState("");
 
  //grab one random story from data and set title and story
  function loadStory() {
    const random = Math.floor(Math.random() * stories.length);
    setStory(stories[random].template);
    setTitle(stories[random].title);
   
  }
//load on mount(select the story)
  useEffect(() => {
    loadStory();
  }, []);

  //on submitting with click replace the templates with the input values and empty inputs
  const handleClick = (e) => {
    e.preventDefault();

    replaceBlanks( name, animal, adj, verb);
    setName("");
    setAnimal("");
    setAdj("");
    setVerb("");
  };

  //   let replacementObj = {
  //     wild: name,
  //     "[Animal]": animal,
  //     "[Adjective]": adj,
  //     "[Verbing]": verb,
  //   };

  // replacing all the values(refactor with cleaner function? ) and set new ones in state
  function replaceBlanks( name, animal, adj, verb) {
    let newStory = story
      .replaceAll("[Name]", name)
      .replaceAll("[Animal]", animal)
      .replaceAll("[Adjective]", adj)
      .replaceAll("[Verbing]", verb);
    let newTitle = title
      .replaceAll("[Name]", name)
      .replaceAll("[Animal]", animal)
      .replaceAll("[Adjective]", adj)
      .replaceAll("[Verbing]", verb);
    setStory(newStory);
    setTitle(newTitle);
  }
//reset game
  function handleNewRound() {
    setName("");
    setAnimal("");
    setAdj("");
    setVerb("");
    loadStory();
  }

  return (
    <div className="main-container">
      <div className="form-box">
        <form className="form">
            <div className="input-group">
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="adjective"
            value={adj}
            onChange={(e) => setAdj(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="verb"
            value={verb}
            onChange={(e) => setVerb(e.target.value)}
          ></input>
          </div>
          <button onClick={handleClick} className="get-btn" >get story</button>
        </form>
      </div>

       
       {story.includes("[") === false &&  // only if the blanks are replaced by input values, render
        <Story story={story} title={title} handleNewRound={handleNewRound} />}
      
    </div>
  );
}
