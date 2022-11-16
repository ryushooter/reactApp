import {createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut} from 'firebase/auth'
import {auth,db} from '../firebase';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, QuerySnapshot } from "firebase/firestore"; 
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

//variable que va contener el estado inicial puesto que al cargarse la aplicacion esta va buscar un usuario gracias a la funcion useEfect designada para dicha accion , pero como la respuesta de firebase aun no ha llegado esto provocara un error ya que va intentar leer datos que aun no existen
const [loading, setLoading] = useState(true);

//objeto que recibe los datos digitados por el usuario
const dataUsers = {
    email: '',
    password: '',
    nombre: '',
    apellido: '',
    emailConfirm: '',
    passwordConfirm: '',
    departamento: '',
    ciudad: '',
    codigoPostal: ''
};

const dataArticles = {
    title: '',
    firstAutor: '',
    secondAutor: '',
    thirdAutor: '',
    firstKeyWord: '',
    secondKeyWord: '',
    thirdKeyWord: '',
    
};



const [saveArticles,setSaveArticles] = useState([]);

const [Articles, setArticles] = useState(dataArticles);


// variable user que guarda los datos digitador por el usuario
//tambien tiene su metodo setUser para actualizar el input con el name correspondiente
    const [user,setUser] = useState(dataUsers);

    //handlechange se activa cuando el usuario empieza a escribir en los inputs especificados
    //detecta los cambios en los input, toma los valores del  name y value del evento submit del formulario, luego mediante el setUser se envia todos los valores mediante el name de los input y que tambien fueron definidos  en useState y extrae sus valores
    //el ...user sirve para en caso de que el input ya tenga algo escrito por el usuario sea detectado y siga modificiandose desde ese punto
    //el input con el name correspondiente va a tomar el valor que digite el usuario
    const handleChange = ({target: {name,value}}) => {
        setUser({...user, [name]: value})
    };


    //va detectar los cambios en los inputs del registro de articulos
    const handleChangeArticles = ({target: {name,value}}) => {
        setArticles({...Articles, [name]: value})
    };

    const navigate = useNavigate();
    
    //handleSubmit se ejecuta cuando se envia el formulario
    //e captura el evento submit del formulario
    //Adicionalmente se usa un try catch donde el try se va ejecutar si no se presenta error alguno, y se va ejecutar la funcion signup a la cual  le vamos a pasar los parametros que solicita firebase que es el correo electronico y una contraseña, para despues mediante la funcion navigate redireccionar a la ruta especificada
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            
            await signup(user.email, user.password)
             await saveFirestore(user.email,user.emailConfirm,user.password,user.passwordConfirm,user.nombre,user.apellido,user.departamento,user.ciudad,user.codigoPostal)
            navigate('/')
        } catch (error) {
            console.log(error);
        }
        
    }
        //handle que va ejecutar la funcion para enviar a la base de datos los articulos
    const handleSubmitArticles = async (e) => {
        e.preventDefault()
        try {
           await saveFirestoreArticles(Articles.title,Articles.firstAutor,Articles.secondAutor,Articles.thirdAutor,Articles.firstKeyWord,Articles.secondKeyWord,Articles.thirdKeyWord)   
           
        } catch (error) {
            console.log(error);
        }
        
    }


    const handleSubmitLogin = async (e) => {
        e.preventDefault()
        try {
          await  
          login(user.email, user.password)          
            navigate('/')
        } catch (error) {
            console.log(error);
        }
        
    }


    

    // handle que se ejecutar la funcion logout
    const handleLogout = async () => {
        await logout();
        navigate('/login');
    }

    //variable que almacena que usuario se registro o logueo
    const [userSesion, setUserSesion] =useState()

    const login = (email, password) =>  signInWithEmailAndPassword(auth, email, password);

    //funcion firebase para registrar usuario nuevo
    //createUserWithEmailAndPassword recibe el auth proveniente del archivo firebase.js
    //tambien recibe el email y la contraseña  provenientes del archivo Register.js
    const signup =  (email, password) => createUserWithEmailAndPassword(auth, email, password);
    
    //funcion que me va permitir cerrar la cesion de firebase
    const logout = () => signOut(auth);


    const deleteArticles = async (id) => {
        
    if(window.confirm('Estas seguro de borrar este articulo')){
        await deleteDoc(doc(db,"dbArticles",id))
    }


        
    
    
    };
    


    const getArticles = async () => {
        const querySnapshot = await getDocs(collection(db, "dbArticles"));
        const docs = [];       
        querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id:doc.id});
        });
        setSaveArticles(docs);
    }
    
    
    


    /* const getArticles = () => getDocs(collection(db,'dbArticles'))
    onSnapshot(getArticles) */

    //esto es como un constructor el cual carga apenas inicia la aplicacion
    useEffect(() =>{
            onAuthStateChanged(auth, currentUser => {
                setUserSesion(currentUser);
                setLoading(false);
                getArticles();
            })
    }, [])



    //funcion que me va guardar datos en firestore
    const saveFirestoreArticles =  (title,firstAutor,secondAutor,thirdAutor,firstKeyWord,secondKeyWord,thirdKeyWord) => addDoc (collection(db,'dbArticles'),
    {
        title,
        firstAutor,
        secondAutor,
        thirdAutor,
        firstKeyWord,
        secondKeyWord,
        thirdKeyWord

    });
    

    //funcion que me va guardar datos en firestore
    const saveFirestore =  (email,emailConfirm,password,passwordConfirm,nombre,apellido,departamento,ciudad,codigoPostal) => addDoc (collection(db,'dbUsers'),
    {
        email,
        emailConfirm,
        password,
        passwordConfirm,
        nombre,
        apellido,
        departamento,
        ciudad,
        codigoPostal

    });
    

//objeto que contiene las distintas funciones y variables
    const data = {
        user,
        userSesion,
        loading,
        saveArticles,
        signup,
        login,
        handleChange,
        handleChangeArticles,
        handleSubmit,
        handleSubmitArticles,
        handleSubmitLogin ,
        handleLogout,
        signOut,
        deleteArticles
        

    };

    

    //todos los componentes que esten dentro de authContext.Provider van a poder heredar las funciones,variables etc que esten en este documento, pero para eso tenemos que pasarle dichas variables u objetos al authContext.Provider, es por ello que haciendo uso de la palabra value pasamos la funcion signup para que pueda ser utilizada en otros componentes
    return (
        <authContext.Provider value={data}>
            {children}
        </authContext.Provider>
    );

  
    
}