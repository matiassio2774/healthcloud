import { useEffect, useState } from 'react'
import axios from 'axios'

const URL = "http://localhost:3000/api/departamentos";

function Departamentos() {

  const [departamentos, setDepartamentos] = useState()

  useEffect(() => {
    async function getDepartamentos(){
      try {
        const { data } = await axios.get(URL)
        setDepartamentos(data)
      } catch (error) {
        console.error(error)
      }
    }
    getDepartamentos()
  }, [])

  return (
    <>
      <div className="w-full flex justify-center items-center mt-6">
        <div className="grid grid-cols-3 w-5/6 gap-10">
          {
            departamentos && departamentos.map((depto) => (
              <div key={depto.id_departamento} className=" p-4 text-center rounded depto-card w-72">
                <p className="pb-2 text-xl font-bold">{depto.nombre}</p>
                <p>Jefe dpto.: {depto.jefe}</p>
                <p>Ubicación: {depto.ubicacion}</p>
                <p>Camas disponibles: {depto.camas_disponibles.toString()}</p>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Departamentos;
