import { useEffect, useState } from 'react'
import axios from 'axios'

const URL = "http://localhost:3000/api/pacientes";

function BusquedaPacientes() {

  const [pacientes, setPacientes] = useState()
  const [defaultPacientes, setDefaultPacientes] = useState()
  const [busqueda, setBusqueda] = useState("")

  useEffect(() => {
    async function getPacientes(){
      try {
        const { data } = await axios.get(URL)
        setPacientes(data)
        setDefaultPacientes(data)
      } catch (error) {
        console.error(error)
      }
    }
    getPacientes()
  }, [])

  const handleChange = (e)=>{
    setBusqueda(e.target.value)
    filterSearch(e.target.value)
  }

  const filterSearch = (searchInput)=>{
    var searchResult = defaultPacientes.filter((paciente)=>{
      if(paciente.cuil.toString().toLowerCase().startsWith(searchInput.toLowerCase())){
        return paciente
      }
    }
    )
    setPacientes(searchResult)
  }

  
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="flex w-full justify-center items-center">
        <input
          className="bg-gray-200 w-2/4 h-10 border rounded-xl py-2 px-6 outline-none text-sm font-light mb-6"
          type="text"
          placeholder="Búsqueda por CUIL de paciente..."
          onChange={handleChange}
      />
        </div>
      {
        pacientes && pacientes.length < 1 ? 
          <div className="my-6">
            <p>No se encontró un paciente...</p>
          </div>
        :
          <div className='overflow-scroll h-72 rounded-lg shadow'>
            <table className='w-full'>
              <thead className='border-b-2 border-gray-200'>
                <tr className='h-10'>
                  <th className='font-normal text-gray-500 text-left p-3 tracking-wide w-20'>ID:</th>
                  <th className='font-normal text-gray-500 text-left p-3 tracking-wide w-40'>Nombre</th>
                  <th className='font-normal text-gray-500 text-left p-3 tracking-wide w-40'>Cuil</th>
                  <th className='font-normal text-gray-500 text-left p-3 tracking-wide w-40'>Direccion</th>
                  <th className='font-normal text-gray-500 text-left p-3 tracking-wide w-40'>Sexo</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-100'>
                {
                  pacientes && pacientes.map((paciente) => (
                    <tr key={paciente.id_paciente} className='font-semibold'>
                      <td className='p-3 text-sm whitespace-nowrap'>{paciente.id_paciente}</td>
                      <td className='p-3 text-sm whitespace-nowrap'>{paciente.nombre}</td>
                      <td className='p-3 text-sm whitespace-nowrap'>{paciente.cuil}</td>
                      <td className='p-3 text-sm whitespace-nowrap'>{paciente.direccion}</td>
                      <td className='p-3 text-sm whitespace-nowrap'>{paciente.sexo}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
      
      }
      </div>
    </>
  )
}

export default BusquedaPacientes