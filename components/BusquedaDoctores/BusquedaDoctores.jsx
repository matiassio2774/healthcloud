import { useEffect, useState } from 'react'
import axios from 'axios'

const URL = "http://localhost:3000/api/doctores";

function BusquedaDoctores() {

  const [doctores, setDoctores] = useState()
  const [defaultDoctores, setDefaultDoctores] = useState()
  const [busqueda, setBusqueda] = useState("")

  useEffect(() => {
    async function getDoctores(){
      try {
        const { data } = await axios.get(URL)
        setDoctores(data)
        setDefaultDoctores(data)
      } catch (error) {
        console.error(error)
      }
    }
    getDoctores()
  }, [])

  const handleChange = (e)=>{
    setBusqueda(e.target.value)
    filterSearch(e.target.value)
  }

  const filterSearch = (searchInput)=>{
    var searchResult = defaultDoctores.filter((doctor)=>{
      if(doctor.nombre.toString().toLowerCase().startsWith(searchInput.toLowerCase())){
        return doctor
      }
    }
    )
    setDoctores(searchResult)
  }

  
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="flex w-full justify-center items-center">
        <input
          className="bg-gray-200 w-2/4 h-10 border rounded-xl py-2 px-6 outline-none text-sm font-light mb-6"
          type="text"
          placeholder="Búsqueda por nombre de doctor..."
          onChange={handleChange}
      />
        </div>
      {
        doctores && doctores.length < 1 ? 
          <div className="my-6">
            <p>No se encontró un doctor...</p>
          </div>
        :
          <div className='overflow-scroll rounded-lg shadow h-80 mt-2'>
            <table className='w-full'>
              <thead className='border-b-2 border-gray-200'>
                <tr className='h-10'>
                  <th className='font-normal text-gray-500 text-left p-3 tracking-wide w-20'>ID:</th>
                  <th className='font-normal text-gray-500 text-left p-3 tracking-wide w-40'>Nombre</th>
                  <th className='font-normal text-gray-500 text-left p-3 tracking-wide w-40'>Apellido</th>
                  <th className='font-normal text-gray-500 text-left p-3 tracking-wide w-40'>Matricula</th>
                  <th className='font-normal text-gray-500 text-left p-3 tracking-wide w-40'>NRO Depto</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-100'>
                {
                  doctores && doctores.map((doctor) => (
                    <tr key={doctor.id_paciente} className='font-semibold'>
                      <td className='p-3 text-sm whitespace-nowrap'>{doctor.id_doctor}</td>
                      <td className='p-3 text-sm whitespace-nowrap'>{doctor.nombre}</td>
                      <td className='p-3 text-sm whitespace-nowrap'>{doctor.apellido}</td>
                      <td className='p-3 text-sm whitespace-nowrap'>{doctor.matricula}</td>
                      <td className='p-3 text-sm whitespace-nowrap'>{doctor.id_departamento}</td>
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

export default BusquedaDoctores