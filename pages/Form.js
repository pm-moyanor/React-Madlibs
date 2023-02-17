import react, { useState, useEffect } from "react";
import Story from "./Story";
import stories from "./data";

export default function Form() {
  const emtpyFormValues = {
    name: "",
    animal: "",
    adjective: "",
    verb: "",
  };
  const [formData, setFormData] = useState(emtpyFormValues);
  /*   const [name, setName] = useState("");
  const [animal, setAnimal] = useState("");
  const [adj, setAdj] = useState("");
  const [verb, setVerb] = useState(""); */
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
    replaceBlanks(formData);
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
  function replaceBlanks({ name, animal, adj, verb }) {
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(name, value);
    setFormData((fData) => ({ ...fData, [name]: value }));
  };

  //reset game
  function handleNewRound() {
    setFormData(emtpyFormValues);
  }

  return (
    <div className="main-container">
      <div className="form-box">
        <form className="form">
          <div className="input-group">
            <input
              type="text"
              placeholder="name"
              value={formData.name}
              onChange={handleChange}
              name="name"
            ></input>
            <input
              type="text"
              placeholder="animal"
              value={formData.animal}
              onChange={handleChange}
              name="animal"
            ></input>
            <input
              type="text"
              placeholder="adjective"
              value={formData.adjective}
              onChange={handleChange}
              name="adjective"
            ></input>
            <input
              type="text"
              placeholder="verb"
              value={formData.verb}
              onChange={handleChange}
              name="verb"
            ></input>
          </div>
          <button onClick={handleClick} className="get-btn">
            get story
          </button>
        </form>
      </div>

      {story.includes("[") === false && ( // only if the blanks are replaced by input values, render
        <Story story={story} title={title} handleNewRound={handleNewRound} />
      )}
    </div>
  );
}
