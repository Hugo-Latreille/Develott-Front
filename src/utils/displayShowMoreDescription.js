const DisplayShowMoreDescription = (texte) => {
  const sentenceArray = [];

  // pour chaque article, on récupère le texte de l'article dans une variable
  const wordsArray = [];

  for (let i = 0; i < 100; i++) {
    // on split la string (texte de l'article) à chaque " ", puis on ajoute chaque mot dans un nouveau tableau
    const word = texte.split(" ");
    wordsArray.push(word[i]);
  }

  console.log(wordsArray);
  // on transforme notre array de mots (qui en contient 100), en une string.
  const sentence = wordsArray.join(" ");
  console.log(sentence);

  //on ajoute ces nouvelles string dans un nouvel array (qui contiendra donc les textes de chacun des articles avec 30 mots suelement)
  sentenceArray.push(sentence);

  return sentenceArray;
};
export default DisplayShowMoreDescription;
