import React from "react";
import Cards from "./Cards";
import style from "./Home.module.css"

export default function Home(props){

    return(

    <div>
        <h1 className={style.titulo}>Home</h1>
        <Cards characters={props.characters} onClose={props.onClose}/>
    </div>

    )
}