import {useAuth} from '../context/authContext';



export function Home() {

    const {userSesion,handleLogout,loading} = useAuth()

    if (loading) return <h1>Cargando</h1>
    
    return <div> <h1>Bienvenido {userSesion.email} </h1>
                <button onClick={handleLogout}>
                    logout
                </button>
    </div>
}

