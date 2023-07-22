import { connect} from "react-redux"
import Card from "../Card"
import style from "../Cards.module.css"
import {filterCards, orderCards} from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";



const Favoritos = (props) => {

  // const favorites = useSelector((state) => state.favorites);
    // const favorites = state.favorites;
    const [aux, setAux] = useState(false)
    const dispatch = useDispatch();

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value));
        setAux(!aux);
    }

    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value));
        // setAux(true);

    }

    return (
     <div>
        <div>
          <select className={style.selectores} onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
          </select>
          <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
          </select>
        </div>

        <div className={style.contenedor_cards}>
            {props.favorites?.map((char) => (
            <Card
                key={char.id}
                id={char.id}
                name={char.name}
                species={char.species}
                gender={char.gender}
                status={char.status}
                image={char.image}
                origin={char.origin.name}
            />
            ))}
        </div>
      </div>
      );

}

// export default Favoritos;

export function mapStateToProps(globalState){
    return {
       favorites: globalState.favorites,
    }
 }

export default connect(mapStateToProps)(Favoritos);