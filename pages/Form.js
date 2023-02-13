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
  let newStory = "";

  function loadStory() {
    setStory(stories[random].template);
    setTitle(stories[random].title);
  }

  useEffect(() => {
    loadStory();
  }, []);

  console.log(typeof story);

  const handleClick = (e) => {
    e.preventDefault();
    replaceBlanks(story, name,animal,adj,verb);
    setName('')
    setAnimal('')
    setAdj('')
    setVerb('')
  };

//   let replacementObj = {
//     wild: name,
//     "[Animal]": animal,
//     "[Adjective]": adj,
//     "[Verbing]": verb,
//   };

  function replaceBlanks(string, name, animal, adj, verb) {
  let newStory =   string
      .replaceAll("[Name]", name)
      .replaceAll("[Animal]", animal)
      .replaceAll("[Adjective]", adj)
      .replaceAll("[Verbing]", verb);

setStory(newStory)
     
  }

  // const handleChange(){

  // }

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
      <Story story={story} title={title}/>

    </>
  );
}
