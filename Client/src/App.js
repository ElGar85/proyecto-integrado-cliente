import React,{useEffect, useState} from "react";
import { Routes, Route, useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import './App.css';
import Nav from './components/Nav';
import About from "./components/About";
import Home from "./components/Home";
import Detail from "./components/Detail";
import FormLogin from "./components/FormLogin/FormLogin";
import Favoritos from "./components/Favoritos/Favoritos";



function App() {

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

   function logout(){
      setAccess(false);
   }

  async function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/user/login/';
      try{
         const resp = await axios(URL + `?email=${email}&password=${password}`);
         const {data}=resp;
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      }catch(error){
         alert(error.message)
      }
      // axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      //    const { access } = data;
      //    setAccess(access);
      //    access && navigate('/home');
      // });
   }

   useEffect(()=>{
      !access && navigate('/');
   },[access]);

  async function onSearch(id) {
      // let existe = true;
      try{
         const resp = await  axios(`http://localhost:3001/character/${id}`);
         const {data} = resp;
         if(data.name){
            setCharacters((oldChars) => [...oldChars, data]);
         }
      }catch(error){ 
         alert(error.message);
      }
     
   //    axios(`http://localhost:3001/character/${id}`)
   //    .then((resp) => {
   //       if(resp.data.name){
            
   //       //    if (data.name) {
   //       //       setCharacters((oldChars) => [...oldChars, data]);
   //       //    } else {
   //       //       window.alert('¡No hay personajes con este ID!');
   //       //    }
   //       // }else{
   //       //    characters.map((character) => {
   //       //       if (character.id !== data.id) {
   //       //            existe = false;
   //       //          }
   //       //       else{
   //       //          window.alert('¡ya existe personaje!');
   //       //       }
   //       //    })
   //       setCharacters((oldChars) => [...oldChars, resp.data]);
   //    } else {
   //    }
   //  })
   //  .catch((err) => alert('¡No hay personajes con este ID!'));
   }

   const onClose = (id) => {
      //  window.alert('Cerrar')
      setCharacters(characters.filter((perso) => {
         return perso.id !== Number(id)
      }))
   }

   const [characters,setCharacters] = useState([]);

   const location = useLocation();
   
   return (
      <div className='App'>
         {
            location.pathname !== '/' && <Nav onSearch={onSearch} out={logout}/>
         }
         <Routes>
            <Route path="/" element={<FormLogin login={login}/>} />
            <Route path="home" element={<Home characters={characters} onClose={onClose} />} />
            <Route path="/about" element={<About />}/>
            <Route path="/favoritos" element={<Favoritos />}/>
            <Route path="/detail/:id" element={<Detail/>}/>
         </Routes>  
      </div>
   );
}


export default App;
