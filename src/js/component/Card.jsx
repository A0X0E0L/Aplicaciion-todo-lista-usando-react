import React, {useState} from "react";




const Card = ()=>{

  const[tarea,setTarea]=useState("")
  const[lista, setLista]=useState([])
  var deleteTodo = document.getElementById("dumb");
  deleteTodo.remove(deleteTodo.selectedIndex);  
  






  const enviarDatos=(e)=> {

		e.preventDefault()// detenemos el comportamiento predeterminado para procesar nuestro codigo
    setLista([...lista,tarea])
    setTarea("")
  
 } 

console.log(tarea);

   
return (

        
<div className="card"  style={{  width:"28rem"}}>
 
  
  <input type="text"  onChange={(e)=>{setTarea(e.target.value)}} />
  
  <button onClick={enviarDatos}>click aqui </button>
  
</div>
)


}
 


 
// {lista.map(lista=>{
//   return <div> 
//     {lista}
//     <div>
//       <i>
//  <button  id="dumb" onClick={() => deleteTodo(item)}></i> type="button" className="btn btn-outline-danger col-1">X</button></buttom>
//  </div>

//    </div>
 



    

export default Card;


