import { useRouter } from 'next/router'

function Navbar() {

  const router = useRouter()

  return (
    <>
      <div className="navbar w-full h-16 bg-primary text-light flex justify-between items-center px-6">
        <button onClick={()=>router.push('/')}>Inicio</button>
        <button 
          className="text-xs bg-active w-20 px-4 py-3 hover:bg-button transition-all"
          onClick={()=>router.push('/login')}
        >
          Acceder
        </button>
      </div>
    </>
  );
}

export default Navbar;
