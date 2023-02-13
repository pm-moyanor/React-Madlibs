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
  const random = Math.floor(Math.random() * stories.length);
 

  function loadStory() {
    setStory(stories[random].template);
    setTitle(stories[random].title);
    console.log(story,title)
  }
  function startGame(){
    setName("");
    setAnimal("");
    setAdj("");
    setVerb("");
  }

  useEffect(() => {
    loadStory();
  }, []);



  const handleClick = (e) => {
    e.preventDefault();
    
   
    replaceBlanks(title,story, name, animal, adj, verb);
   
   // startGame()
  };

  //   let replacementObj = {
  //     wild: name,
  //     "[Animal]": animal,
  //     "[Adjective]": adj,
  //     "[Verbing]": verb,
  //   };

  function replaceBlanks(title, string, name, animal, adj, verb) {
    let newStory = string
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

  function handleNewRound() {
    setName("");
    setAnimal("");
    setAdj("");
    setVerb("");
    loadStory();
  }

  return (
    <>
      <div className="form-box">
        <form className="form">
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
          <button onClick={handleClick}>get story</button>
        </form>
      </div>
       {story.includes('[') === false && <Story story={story} title={title} />}
        <button onClick={handleNewRound}>restart</button>
        
    

    </>
  );
}
