import { useRef, useState, useEffect } from 'react';
import axios from 'axios'
import { useRouter } from 'next/router'
import { useAuthContext } from "../../context/authContext";

const URL = "http://localhost:3000/api/doctores";

function DoctorForm() {

  const [doctor, setDoctor] = useState(null)

  const { login, saveInfo } = useAuthContext();

  const nombreRef = useRef(null);
  const apellidoRef = useRef(null);
  const matriculaRef = useRef(null);

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setDoctor({
      nombre: nombreRef.current.value,
      apellido: apellidoRef.current.value,
      matricula: matriculaRef.current.value
    })
    
  }

  const validateUser = async () => {
    try {
      const { data } = await axios.get(`${URL}/${doctor.nombre}/${doctor.apellido}/${doctor.matricula}`);
      console.log(data[0])
      saveInfo('doctor')
      login()
      router.push('/')
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  useEffect(() => {
    if (doctor) {
      validateUser()
    }
  }, [doctor])

  return (
    <>
      <div className="flex justify-center items-center h-4/5 mt-10">
        <form className="w-60 flex flex-col gap-6" onSubmit={handleSubmit}>
          <input
            className="bg-gray-200 border rounded-xs py-2 px-6 outline-none text-sm font-light"
            type="text"
            placeholder="Nombre"
            ref={nombreRef}
          />
          <input
            className="bg-gray-200 border rounded-xs py-2 px-6 outline-none text-sm font-light"
            type="text"
            placeholder="Apellido"
            ref={apellidoRef}
          />
          <input
            className="bg-gray-200 border rounded-xs py-2 px-6 outline-none text-sm font-light"
            type="text"
            placeholder="Matrícula"
            ref={matriculaRef}
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

export default DoctorForm;
