import { useState } from "react";

function useLocalStorage(key, initialValue) {
  // le state qui contiendra notre valeur
  // Il est possible de donner une fonction d'initialisation a useState
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Essayer de trouver dans le localstorage selon la key
      const item = window.localStorage.getItem(key);
      // Parser le résultat si il existe, sinon renvoyer la valeur initiale
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // En cas d'erreur (par exemple local storage indisponible) renvoyer aussi la valeur initiale
      console.log(error);
      return initialValue;
    }
  });
​
// Une fonction de modification, qui modifiera le state, et le local storage correspondant
  function setValue(value) {
    try {
      // Modifier le state
      setStoredValue(valueToStore);
      // Modifier le localstorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // Une version plus avancée gérerait aussi le cas d'erreur
      console.log(error);
    }    
  }
​
  // on renvoie la valeur du state, et notre fonction setValue
  return [storedValue, setValue];
}

export default useLocalStorage;


//? utilisation : 
//? const [name, setName] = useLocalStorage("name", "Brigitte");