/* Crea tu propia lógica para hacer fetch de un post y enseñar su información utilizando DOM manipulation */
/* ADVANCED: consigue que la info del post funcione dinámicamente y enseñe un post u otro según la URL */

fetch("https://api.spacexdata.com/v4/launches")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("Parsed response: ", data); 
  })
  .catch((err) => console.log(err));