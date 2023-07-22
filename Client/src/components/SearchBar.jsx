import React, {useState} from "react";
import style from "./Bar.module.css";

export default function SearchBar(props) {

   const [id,setId] = useState("")
   const handLeChange = (evento) => {
      setId(evento.target.value)
   }

   return (
      <div className={style.contenedor_bar}>
         <input  
         type='text'
         placeholder='Buscar personaje'
         onChange={handLeChange}
         value={id} 
         />
         <button className={style.btn} onClick={() => props.onSearch(id)}>
            Agregar</button>
      </div>
   );
}
