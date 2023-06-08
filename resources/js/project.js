/* Crea tu propia lógica para hacer fetch de un post y enseñar su información utilizando DOM manipulation */
/* ADVANCED: consigue que la info del post funcione dinámicamente y enseñe un post u otro según la URL */
fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects")
  .then((response) => {
    return response.json();//trasnforma la respuesta en .json
  })
  .then((data) => {//data= objeto
  
    const contenedor=  document.getElementById("recent_projects1");//selecciono el ID en el cual quiero trabajar y lo guardo en variable
   


      for(let i=0;i<data.length-1;i++){
        
        const proyecto= data[i]; //almaceno en variable cada posicion del resultado obtenido en la respuesta anterior 
       const divided= document.createElement("div");
     const imagen = document.createElement("img");
      imagen.src = proyecto.image;

      const tituloh2 = document.createElement("h2");// creo etiqueta h2
      tituloh2.textContent=proyecto.name; //lo que esta en proyecto name se lo asigno en la variable anterior. textconten ya que me ayuda al modificr el texto dentro del elemento h2
  

      const parrafo = document.createElement("p");//creo etiqueta p
      parrafo.textContent=proyecto.content;//lo que esta en proyecto.content se lo asigno al texto dentro de parrafo de p


      divided.appendChild(imagen);
     divided.appendChild(tituloh2);// agreggo el elemento a ser hijo de divided(recent projects)
     divided.appendChild(parrafo);
     contenedor.appendChild(divided);//agreggo el elemento a ser hijo de divided(recent projects)
      }

      
  })  
  .catch((err) => console.log("no existen datos"+err));  
