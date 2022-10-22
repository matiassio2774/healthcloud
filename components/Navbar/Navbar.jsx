import { useRouter } from 'next/router'
import { useAuthContext } from "../../context/authContext";


function Navbar() {
  const router = useRouter()
  const { userRol, logout } = useAuthContext();

  return (
    <>
      <div className="navbar w-full h-16 bg-primary text-light flex justify-between items-center px-6">
        <button onClick={()=>router.push('/')}>Inicio</button>

        {(() => {
        if (!userRol) {
          return (
            <button 
            className="text-xs bg-active w-20 px-4 py-3 hover:bg-button transition-all"
            onClick={()=>{
              router.push('/login')
            }
            }
            >
              Acceder
          </button>
          )
        } else {
          return (
            <button 
            className="text-xs bg-red-700 w-20 px-4 py-3 hover:bg-red-500 transition-all"
            onClick={()=>logout()}
          >
            Salir
          </button>
          )
        } 
      })()}
      </div>
    </>
  );
}

export default Navbar;
