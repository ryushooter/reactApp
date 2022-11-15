import {Routes, Route} from 'react-router-dom'
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';
import {AuthProvider} from './context/authContext';

 function App(){
  return (
    <AuthProvider>    
    <Routes>       
     
      <Route path ="/login" element ={<Login/>} />
      <Route path ="/register" element ={<Register/>} />
      <Route path ="/" element ={<Home/>} />
    </Routes>
    </AuthProvider>
  )
}

export default App;