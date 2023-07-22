import React from "react";
import Card from './Card';
import style from './Cards.module.css';

export default function Cards(props) {
   return (
   <div className={style.contenedor_cards}>
      {props.characters.map(perso => (
      <Card
         key={perso.id}
         id={perso.id}
         name={perso.name}
         onClose={props.onClose}
         gender={perso.gender}
         status={perso.status}
         image={perso.image}
         origin={perso.origin.name}

      />))}
   </div>);
}
