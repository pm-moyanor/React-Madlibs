import { useState, useEffect } from "react";
import Story from "./Story";
import stories from "./data";
import { replaceBlanks } from "../utils/utils";

export default function Form() {
  const emtpyFormValues = {
    name: "",
    animal: "",
    adjective: "",
    verb: "",
  };
  const emptyStory = { story: "", title: "" };
  const [formData, setFormData] = useState(emtpyFormValues);
  const [story, setStory] = useState(emptyStory);

  //grab one random story from data and set title and story
  function loadStory() {
    const random = Math.floor(Math.random() * stories.length);
    setStory({ story: stories[random].template, title: stories[random].title });
  }
  //load on mount(select the story)
  useEffect(() => {
    loadStory();
  }, []);

  //on submitting with click replace the templates with the input values and empty inputs
  const handleSubmit = (e) => {
    e.preventDefault();
    for (let input of Object.values(formData)) {
      if (input === "") {
        alert("Please fill out all fields");
        return;
      }
    }
    replaceBlanks(formData, story, setStory);
    setFormData(emtpyFormValues);
  };

  // replacing all the values(refactor with cleaner function? ) and set new ones in state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((fData) => ({ ...fData, [name]: value }));
  };

  //reset game
  function handleNewRound() {
    setFormData(emtpyFormValues);
    setStory(emptyStory);
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
          <button onClick={handleSubmit} className="get-btn">
            get story
          </button>
        </form>
      </div>

      {story.story &&
        story.story.includes("[") === false && ( // only if the blanks are replaced by input values, render
          <Story
            story={story.story}
            title={story.title}
            handleNewRound={handleNewRound}
          />
        )}
    </div>
  );
}
