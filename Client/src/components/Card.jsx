import React, { useState, useEffect } from "react";
import style from './Card.module.css';
import { Link } from "react-router-dom";
import {addFavorite, deleteFavorite} from "../redux/actions";
import {  useSelector, useDispatch } from "react-redux";


function Card({name, species,onClose,gender,status,origin,image,id }) {

const [isFav, setIsFav] = useState(false);
const favorites = useSelector((state) => state.favorites);
const dispatch = useDispatch();

   function handleClick(){

      if(isFav){
         setIsFav(false);
         dispatch(deleteFavorite(id))
      }else {
         setIsFav(true);
        dispatch(addFavorite({
            name,
            species,
            onClose,
            gender,
            status,
            origin,
            image,
            id,
         }));
      }

   }

   useEffect(() => {
      favorites.forEach(fav => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [favorites]);
   
   return (
      <div className={style.contenedor}>
         <button onClick={() => onClose(id)}>X</button>
         
         <div className={style.contenedorImg}>
            <h2 className={style.h2style}>{id}</h2>
            <Link to={`/detail/${id}`}>
               <img src={image} alt={name} />
            </Link>
            <h2 className={style.h2nombre}>{name}</h2>
         </div>
         <div>
            <h2>{status}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
         </div>
         {
            isFav ? (
               <button onClick={handleClick}>❤️</button>
            ) : (
               <button onClick={handleClick}>🤍</button>
            )
         }
      </div>
   );
}

export default Card;

// export function mapDispatchToProps(dispatch){
//    return {
//       addFavorite: function(character){
//          const objAct = addFavorite(character)
//          dispatch(objAct)
//       },
//       // addFavorite: (character) => {dispatch(addFavorite(character))} 

//       deleteFavorite: (id) => {dispatch(deleteFavorite(id))},
//    }
// }

// export function mapStateToProps(globalState) {
//      return {
//        favorites: globalState.favorites,
//      };
//    }


// export default connect(mapStateToProps,mapDispatchToProps)(Card);
