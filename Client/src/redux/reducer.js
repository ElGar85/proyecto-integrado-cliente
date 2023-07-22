import {ADDFAVORITE, DELETEFAVORITE, FILTER, ORDER} from "./types";

const initialGlobalState = {
    favorites:[],
    AllCharacters:[],
    acces: false,
    datail:[]
}

export default function rootReducer(state = initialGlobalState, action){

    switch(action.type){
        case ADDFAVORITE:
            // const addper = [...state.AllCharacters, action.payload]
            return {...state, favorites:action.payload, AllCharacters:action.payload};
            // return {...state, favorites:[...state.favorites, action.payload]};
        case DELETEFAVORITE:
            return {...state, favorites: action.payload}
        case FILTER:
            return {...state, favorites: state.AllCharacters.filter((pj)=> pj.gender === action.payload)}
        case ORDER:
            const copy = state.favorites.sort((a,b)=>{
                if(action.payload==='A'){
                    if(a.id > b.id) return 1
                    if(a.id < b.id) return -1
                    return 0
                }else{
                    if(a.id > b.id) return -1
                    if(a.id < b.id) return 1
                    return 0
                }
            })
            return {...state, favorites:copy}
        default: 
            return {...state}
    }

}