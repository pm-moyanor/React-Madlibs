export function replaceBlanks(formData, story, setStory) {
  let storyWithUserInputs = story.story;
  let titleWithUserInputs = story.title;
  let replacements = {
    "[Name]": formData.name,
    "[Animal]": formData.animal,
    "[Adjective]": formData.adjective,
    "[Verbing]": formData.verb,
  };
  for (let variable of Object.keys(replacements)) {
    storyWithUserInputs = storyWithUserInputs.replaceAll(
      variable,
      (v) => replacements[v]
    );

    titleWithUserInputs = titleWithUserInputs.replaceAll(
      variable,
      (v) => replacements[v]
    );
  }
  setStory({ story: storyWithUserInputs, title: titleWithUserInputs });
}
