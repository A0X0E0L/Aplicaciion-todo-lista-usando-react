import React, {useState} from "react";

const Home = () => {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);


    function handleInput(e) {
        setInput(e.target.value);
    }

    const handleClick = () => {
        if (input.length ===0 ) {
            alert("Debe ingresar un valor")
        } else {
            setTodos(todos.concat([input]));
            setInput("");
        }
    }

    const clickBorrar = () => {
        setTodos([])
    }


    return (
        <div className="container">

            <div className="m-auto tamañoDiv padding-superior ">
                <div className="p-3 color-de-fondo">
                <h5 className="pb-3 text-light ">
                     Ingresar tareas a realizar porfa:</h5>
                <div className="input-group mb-3">
                    <button onClick={handleClick}
                        className="btn-group btn-group-lg"
                        type="button"
                        id="button">Ingresar Tarea</button>
                    <input onChange={handleInput}
                        type="text"
                        className="form-control"
                        placeholder=""
                        value={input}
                        aria-label="Example text with button addon"
                        aria-describedby=""/>
                </div>
                <div id="contenedorTodos" className="bg-secondary text-light">
                  
                    {
                    todos.map((item, index) => (
                        <div className="row d-flex p-2">
							<div className="col-6">
                                <h5 class>{item}</h5>
                            </div>
							<div className="col-6 text-end">
                           
							</div>
							</div>                        
                    ))
                } </div>
                <div id="contadorTodos">
                    <p className="text-light">{
                        todos.length
                    }
                        &nbsp;Tareas faltantes</p>
                </div>
                <button onClick={clickBorrar}
                    className="btn-group btn-group-lg"
                    type="button"
                    id="button-addon1">Eliminar</button>
            </div>
        </div>
        </div>
    );
};

export default Home;
