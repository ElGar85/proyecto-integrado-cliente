import React from "react";
import { useState } from "react";

const Form = () => {

    const [usuario,setUsuario]= useState({username: "",email: "", password:""})

    function handleSubmit (event) {
        event.prevetDefault();
    }

    function handleChange (event) {
        
            setUsuario({...usuario, [event.target.value]: event.target.value});
        

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label >User Name</label>
                <input 
                    key='1'
                    name='username' 
                    onChange={handleChange}
                    value={usuario.name} 
                    type="text" />
                <label htmlFor="">Email</label>
                <input 
                    key='2'
                    name='email' 
                    onChange={handleChange}
                    value={usuario.name} 
                    type="text" />
                <label htmlFor="">Password</label>
                <input 
                    key='3'
                    name='password' 
                    onChange={handleChange}
                    value={usuario.name} 
                    type="password" />

                <input type="submit"></input>
            </form>
        </div>
    )

}


export default Form;