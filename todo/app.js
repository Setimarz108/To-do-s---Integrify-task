
// add a task //

function addItem (){
    const input = document.getElementById("nuevoItem").value;
    const li = document.createElement("li");
    const t= document.createTextNode(input);

    const deletebtn = document.createElement('button')
    deletebtn.textContent = ("\u00D7");  
    deletebtn.addEventListener("click", removeItem); 
    deletebtn.className = "close";
    li.appendChild(deletebtn);
    li.appendChild(t);

    if (input === '') {
        alert("Please add a task!");
      } else {
        document.getElementById("lista").appendChild(li);
        
          }
      }
      document.getElementById("lista").value = "";
                      
    
   // agregar tarea presionando Enter//
   const contenido = document.getElementById("nuevoItem");
    contenido.addEventListener("keyup", (event) => {
        if (event.key === "Enter" ) {
        addItem();
        document.getElementById("lista").value = "";
                  
      }
    });

  
  
    //remove Task//
 
function removeItem (){ 
   const lista = this.parentNode;
  const ul   = lista.parentNode;
  ul.removeChild(lista);  
}


//delete all//


removeAll = () => {
  const nodes = document.getElementById("lista");
  while (nodes.firstChild) {
    nodes.removeChild(nodes.lastChild);
  }
}
// cross as done! //


 const list = document.querySelector("ul");
 list.addEventListener('click', function(ev){
   console.log(Event)
   if (ev.target.tagName ==="LI") {
     ev.target.classList.toggle("done");
   }
 },false);


 
 


