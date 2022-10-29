import { useEffect, useState } from 'react'
import axios from 'axios'

const URL = "http://localhost:3000/api/tratamientos";

function BusquedaTratamientos() {

  const [tratamientos, setTratamientos] = useState()
  const [defaultTratamientos, setDefaultTratamientos] = useState()
  const [busqueda, setBusqueda] = useState("")

  useEffect(() => {
    async function getTratamientos(){
      try {
        const { data } = await axios.get(URL)
        setTratamientos(data)
        setDefaultTratamientos(data)
      } catch (error) {
        console.error(error)
      }
    }
    getTratamientos()
  }, [])

  const handleChange = (e)=>{
    setBusqueda(e.target.value)
    filterSearch(e.target.value)
  }

  const filterSearch = (searchInput)=>{
    var searchResult = defaultTratamientos.filter((tratamiento)=>{
      if(tratamiento.paciente.toString().toLowerCase().startsWith(searchInput.toLowerCase())){
        return tratamiento
      }
    }
    )
    setTratamientos(searchResult)
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="flex items-center justify-center w-full">
        <input
          className="w-2/4 h-10 px-6 py-2 text-sm font-light bg-gray-200 border outline-none rounded-l-xl"
          type="text"
          placeholder="Búsqueda por CUIL de paciente..."
          onChange={handleChange}
      />

        </div>

        {
        tratamientos && tratamientos.length < 1 ? 
          <div className="my-6">
            <p>No se encontró un tratamiento...</p>
          </div>
        :
          <div className='overflow-scroll h-80 mt-6 rounded-lg shadow'>
            <table className='w-full'>
              <thead className='border-b-2 border-gray-200'>
                <tr className='h-10'>
                  <th className='font-normal text-gray-500 text-left p-3 tracking-wide w-20'>ID:</th>
                  <th className='font-normal text-gray-500 text-left p-3 tracking-wide w-40'>Tratamiento</th>
                  <th className='font-normal text-gray-500 text-left p-3 tracking-wide w-40'>Duracion</th>
                  <th className='font-normal text-gray-500 text-left p-3 tracking-wide w-40'>Reacciones</th>
                  <th className='font-normal text-gray-500 text-left p-3 tracking-wide w-40'>Medicamentos</th>
                  <th className='font-normal text-gray-500 text-left p-3 tracking-wide w-40'>Paciente</th>
                  <th className='font-normal text-gray-500 text-left p-3 tracking-wide w-40'>Doctor</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-100'>
                {
                  tratamientos && tratamientos.map((tratamiento) => (
                    <tr key={tratamiento.id_tratamiento} className='font-semibold'>
                      <td className='p-3 text-sm whitespace-nowrap'>{tratamiento.id_tratamiento}</td>
                      <td className='p-3 text-sm whitespace-nowrap'>{tratamiento.tratamiento}</td>
                      <td className='p-3 text-sm whitespace-nowrap'>{tratamiento.duracion + ' días'}</td>
                      <td className='p-3 text-sm whitespace-nowrap'>{tratamiento.reacciones || '-'}</td>
                      <td className='p-3 text-sm whitespace-nowrap'>{tratamiento.medicamentos}</td>
                      <td className='p-3 text-sm whitespace-nowrap'>{tratamiento.paciente}</td>
                      <td className='p-3 text-sm whitespace-nowrap'>{tratamiento.doctor}</td>
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

export default BusquedaTratamientos