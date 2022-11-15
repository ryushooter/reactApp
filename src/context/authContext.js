import { createContext, useContext, useState } from "react";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut} from 'firebase/auth'
import {auth} from '../firebase';
import { useNavigate } from "react-router-dom";


//todos los componentes React reciben la propiedad children por defecto
//aqui creamos el contexto para la aplicacion y lo exportamos
//este authContext internamente trae un propiedad llamada provider y una propiedad llamada consumer a la cual accedemos mediante el punto
export const authContext = createContext();

export const useAuth = ()=> {
    const context = useContext(authContext);
    return context
};   




export function AuthProvider ({children}) {

    const [user,setUser] = useState({
        email: '',
        password: '',
    });

    //handlechange se activa cuando el usuario empieza a escribir en los inputs especificados
    //detecta los cambios en los input, toma los valores del  name y value del evento submit del formulario, luego mediante el setUser se envia todos los valores mediante el name de los input y que tambien fueron definidos  en useState y extrae sus valores
    //el ...user sirve para en caso de que el input ya tenga algo escrito por el usuario sea detectado y siga modificiandose desde ese punto
    const handleChange = ({target: {name,value}}) => {
        setUser({...user, [name]: value})
    };

    const navigate = useNavigate();
    
    //handleSubmit se ejecuta cuando se envia el formulario
    //e captura el evento submit del formulario
    //Adicionalmente se usa un try catch donde el try se va ejecutar si no se presenta error alguno, y se va ejecutar la funcion signup a la cual  le vamos a pasar los parametros que solicita firebase que es el correo electronico y una contraseña, para despues mediante la funcion navigate redireccionar a la ruta especificada
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          await  signup(user.email, user.password)
            navigate('/')
        } catch (error) {
            console.log(error);
        }
        
    }

    const handleSubmitLogin = async (e) => {
        e.preventDefault()
        try {
          await  login(user.email, user.password)
            navigate('/')
        } catch (error) {
            console.log(error);
        }
        
    }

    const login = (email, password) =>  signInWithEmailAndPassword(auth, email, password);

    //funcion firebase para registrar usuario nuevo
    //createUserWithEmailAndPassword recibe el auth proveniente del archivo firebase.js
    //tambien recibe el email y la contraseña  provenientes del archivo Register.js
    const signup = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password);
    };

    const data = {
        user,
        signup,
        login,
        handleChange,
        handleSubmit,
        handleSubmitLogin 
    };

    

    //todos los componentes que esten dentro de authContext.Provider van a poder heredar las funciones,variables etc que esten en este documento, pero para eso tenemos que pasarle dichas variables u objetos al authContext.Provider, es por ello que haciendo uso de la palabra value pasamos la funcion signup para que pueda ser utilizada en otros componentes
    return (
        <authContext.Provider value={data}>
            {children}
        </authContext.Provider>
    );

  
    
}