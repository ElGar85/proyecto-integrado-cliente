import React from "react";
import style from "./FormLogin.module.css";
import imgRick from "../imagenes/rym.png";
import { useState } from "react";
import validation from "./validation";


const FormLogin = (props) => {

    const [useData,setUseData] = useState({email:"",  password:""});
    const [ errors,setErrors]= React.useState({});

    function handleChange (event) {
        // forma para destructurar
        const {name,value} = event.target

        setUseData({...useData, [name]:value})
        setErrors(validation({...useData, [name]:value}));
        // setUseData({...useData, [event.target.name]: event.target.value});
        // setErrors(validate({...useData,[event.target.name]: event.target.value}));
    }

    const handleSubmit= event => {
        event.preventDefault();
        props.login(useData);
    }
 
    return(
        <div className={style.contenedorLogin}>
            <div >
                <img src={imgRick} />
            </div>

            <form onSubmit={handleSubmit}>
                    
                    <label className={style.label}>EMAIL</label>
                    
                    <input className={style.inputs}
                        key='1'
                        name='email' 
                        onChange={handleChange}
                        value={useData.email} 
                        type="text" 
                        placeholder="email.."/>
                        {/* condicional ternario - RENDERIZAR */}
                        <span className={style.error}> {errors.email ? errors.email : null}</span>
                    
                    <label className={style.label}>PASSWORD</label>
                   
                    <input className={style.inputs}
                        key='2'
                        name='password' 
                        onChange={handleChange}
                        value={useData.password} 
                        type="password" 
                        placeholder="Pass..."/>
                    <span className={style.error}> {errors.password ? errors.password : null}</span>
                    <input className={style.btn} type="submit"></input>
                </form>
        </div>
    )

}

export default FormLogin;