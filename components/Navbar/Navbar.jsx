import { useRouter } from 'next/router'
import { useState } from 'react'

function Navbar() {

  const [auth, setAuth] = useState(null)
  const router = useRouter()

  return (
    <>
      <div className="navbar w-full h-16 bg-primary text-light flex justify-between items-center px-6">
        <button onClick={()=>router.push('/')}>Inicio</button>
        {
          !sessionStorage.getItem('rol') ?
            <button 
              className="text-xs bg-active w-20 px-4 py-3 hover:bg-button transition-all"
              onClick={()=>{
                router.push('/login')
                setAuth(true)  
              }
              }
              >
                Acceder
            </button>
          :
            <button 
              className="text-xs bg-red-700 w-20 px-4 py-3 hover:bg-red-500 transition-all"
              onClick={()=>{
                sessionStorage.removeItem('rol')
                sessionStorage.removeItem('usuario')
                setAuth(false)
              }}
            >
              Salir
            </button>
        }

      </div>
    </>
  );
}

export default Navbar;
