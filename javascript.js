let container = document.getElementsByClassName('etch-grid-container')[0];

 function createGridElements(gridnum) {
   container.style.gridTemplateColumns = `repeat(${gridnum}, 1fr)`
   container.style.gridTemplateRows = `repeat(${gridnum}, 1fr)`
   container.style.display = "grid";
   container.style.backgroundColor="powderblue";
   
   let i,j;
      for (i=0; i<gridnum; i++) {
         for(j=0; j<gridnum; j++){ 
            const griditem = document.createElement("div");
            griditem.setAttribute('class',"gridblock")
            container.appendChild(griditem);
            /*console.log(griditem);*/
            griditem.addEventListener("mouseover",() => {
            griditem.style.backgroundColor="black";})
      }
   }       
}      

createGridElements(16);

function changeGridSize(){
   let input = prompt("enter the grid size between 1 and 64");

   if (input>1 && input<=64){
   createGridElements(input);
   return;   
   }
   else {
   prompt("Kindly enter a number between 1 & 64");
    return changeGridSize();  
   }
}

function clearGrid(){
      container.innerHTML=''
      changeGridSize();    
}



