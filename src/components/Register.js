import { Link } from 'react-router-dom';
import {useAuth} from '../context/authContext';

export function Register() {

    //usuario que va tener inicialmente sus inputs de email y password en blanco
    

    //aqui recibimos la funcion signup que esta en el authContext
    //aqui recibo tambien la funcion handleChange
    const {handleChange,handleSubmit} = useAuth();
    //sirve para redireccionar 




      



    

   

    return <div> 
        
        <section className="h-screen">
  <div className="px-6 h-full text-gray-800">
    <div
      className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
    >
      <div
        className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
      >
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="w-full"
          alt="Sample image"
        />
      </div>
      <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        Nombre
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" name="nombre" onChange={handleChange}/>
      
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Apellido
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" name="apellido" onChange={handleChange}/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">

    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        Correo electronico
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="tuemail@gmail.com" name="email" onChange={handleChange}/>

      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        Confirmar correo electronico
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-emailConfirm" type="email" placeholder="tuemail@gmail.com" name="emailConfirm" onChange={handleChange}/>

      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        Contraseña
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" name="password" onChange={handleChange} />
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-passwordConfirm">
        Confirmar Contraseña
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-passwordConfirm" type="password" placeholder="******************" name="passwordConfirm" onChange={handleChange}/>      
    </div>


  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
        Departamento
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-depart" type="text" name="departamento" placeholder="Albuquerque" onChange={handleChange}/>
    </div>

    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
        Ciudad
      </label>
      <div className="relative">
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" name="ciudad" placeholder="Albuquerque" onChange={handleChange}/>
        
      </div>

    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
        Codig postal
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" name="codigoPostal" placeholder="90210" onChange={handleChange}/>
    </div>
    
  </div>
            <div className="text-center lg:text-left mt-5">
            <button className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
              Registrarse
            </button>
            <p className="text-sm font-semibold mt-2 pt-1 mb-0">
              Ya tienes una cuenta?
              <Link to="/login">Ingresar</Link>
              
            </p>
          </div>
</form>

      </div>

      

    </div>
  </div>
</section> 
    </div>
}