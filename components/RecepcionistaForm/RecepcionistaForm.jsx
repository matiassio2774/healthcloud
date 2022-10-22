import { useRef, useState, useEffect } from 'react';
import axios from 'axios'
import { useRouter } from 'next/router'
import { useAuthContext } from "../../context/authContext";

const URL = "http://localhost:3000/api/recepcionistas";

function RecepcionistaForm() {
  const [recepcionista, setRecepcionista] = useState(null)

  const { login, isAuthenticated, saveInfo } = useAuthContext();

  const usuarioRef = useRef(null);
  const contraseñaRef = useRef(null);

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setRecepcionista({
      usuario: usuarioRef.current.value,
      contraseña: contraseñaRef.current.value
    })
    
  }

  const validateUser = async () => {
    try {
      const { data } = await axios.get(`${URL}/${recepcionista.usuario}/${recepcionista.contraseña}`);
      console.log(data[0])
      saveInfo('recepcionista')
      login()
      router.push('/')
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  useEffect(() => {
    if (recepcionista) {
      validateUser()
    }
  }, [recepcionista])
  

  return (
    <>
      <div className="flex justify-center items-center h-4/5 mt-10">
        <form className="w-60 flex flex-col gap-6" onSubmit={handleSubmit}>
          <input
            className="bg-gray-200 border rounded-xs py-2 px-6 outline-none text-sm font-light"
            type="text"
            placeholder="Usuario"
            ref={usuarioRef}
          />
          <input
            className="bg-gray-200 border rounded-xs py-2 px-6 outline-none text-sm font-light"
            type="password"
            placeholder="Contraseña"
            ref={contraseñaRef}
          />
          <button
            type="submit"
            className="bg-button text-white py-2 px-8 rounded-sm hover:bg-active"
          >
            Ingresar
          </button>
        </form>
      </div>
    </>
  );
}

export default RecepcionistaForm;
