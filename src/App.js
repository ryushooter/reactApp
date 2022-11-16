import {Routes, Route} from 'react-router-dom'
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Articles } from './components/Articles';
import { Register } from './components/Register';
import {AuthProvider} from './context/authContext';

 function App(){
  return (
    <AuthProvider>    
    <Routes>       
     
      <Route path ="/login" element ={<Login/>} />
      <Route path ="/register" element ={<Register/>} />
      <Route path ="/articles" element ={<Articles/>} />
      <Route path ="/" element ={<Home/>} />
    </Routes>
    </AuthProvider>
  )
}

export default App;