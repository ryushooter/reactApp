import { useAuth } from "../context/authContext";
import { Link } from 'react-router-dom';
export function Navbar() {

  const {handleSubmitLogin,handleChange} = useAuth();

  

    return <nav className=" border-gray-200 px-2 sm:px-4 py-2.5  bg-green-600">
    <div className="container flex flex-wrap justify-between items-center mx-auto">
    
    <div className="flex md:order-2">
    <form className="w-full" onSubmit={handleSubmitLogin}>
    <input className="appearance-none bg-white border-none  text-black mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="youremail@hotmail.com" aria-label="Full name" name="email" onChange={handleChange}/>
    <input className="appearance-none bg-white border-none  text-black mr-3 py-1 px-2 leading-tight focus:outline-none" type="password" placeholder="**********" aria-label="Full name" name="password" onChange={handleChange}/>
  
        <button  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Iniciar sesion</button>
        </form>
        <Link to="/register">Registrarse</Link>
    </div>
    
    <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-cta">
      <ul className="flex flex-col p-4 mt-4  rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  bg-green-600 md:bg-green-600 ">
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-white" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
        </li>
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
        </li>
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
        </li>
      </ul>
    </div>
    </div>
  </nav>
}