import {ADDFAVORITE, DELETEFAVORITE, FILTER, ORDER} from "./types"
import axios from "axios"
// creador de acciones
// export function addFavorite(obj){
//     return {type: ADDFAVORITE, payload:obj }
// }

export const addFavorite = (character) => {
   const endpoint = 'http://localhost:3001/favorites/';
   
      return async (dispatch) => {
         try{
            const resp = await axios.post(endpoint, character);
            const {data} = resp;
            return dispatch({
               type: ADDFAVORITE,
               payload: data,
            });
         }catch(error){
            alert(error.message)
         }
      };
   
      //  axios.post(endpoint, character).then(({ data }) => {
      //     return dispatch({
      //        type: ADDFAVORITE,
      //        payload: data,
      //     });
      //  });
   
 };

// export function deleteFavorite(id){
//     return {type: DELETEFAVORITE, payload:id }
// }

export const deleteFavorite = (id) => {
   const endpoint = 'http://localhost:3001/favorites/' + id;
   return async(dispatch) => {
      const resp = await axios.delete(endpoint)
      const {data} = resp;
      return dispatch({
         type: DELETEFAVORITE,
         payload: data,
      });
      // axios.delete(endpoint).then(({ data }) => {
      //     return dispatch({
      //        type: DELETEFAVORITE,
      //        payload: data,
      //  });
      //  });
   };
};

export function filterCards(gender){
   return {type: FILTER, payload:gender }
}

export function orderCards(order){
   return {type: ORDER, payload:order }
}

