import { useEffect, useState } from 'react'
import axios from 'axios'

const URL = "http://localhost:3000/api/medicamentos";

function BusquedaMedicamentos() {

  const [medicamentos, setMedicamentos] = useState()
  const [defaultMedicamentos, setDefaultNedicamentos] = useState()
  const [busqueda, setBusqueda] = useState("")

  useEffect(() => {
    async function getMedicamentos(){
      try {
        const { data } = await axios.get(URL)
        setMedicamentos(data)
        setDefaultNedicamentos(data)
      } catch (error) {
        console.error(error)
      }
    }
    getMedicamentos()
  }, [])

  const handleChange = (e)=>{
    setBusqueda(e.target.value)
    filterSearch(e.target.value)
  }

  const filterSearch = (searchInput)=>{
    var searchResult = defaultMedicamentos.filter((medicamento)=>{
      if(medicamento.nombre.toString().toLowerCase().startsWith(searchInput.toLowerCase())){
        return medicamento
      }
    }
    )
    setMedicamentos(searchResult)
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="flex items-center justify-center w-full">
        <input
          className="w-2/4 h-10 px-6 py-2 text-sm font-light bg-gray-200 border outline-none rounded-l-xl"
          type="text"
          placeholder="Búsqueda por nombre de medicamento..."
          onChange={handleChange}
        />
        </div>
        {
        medicamentos && medicamentos.length < 1 ? 
          <div className="my-6">
            <p>No se encontró un medicamento...</p>
          </div>
        :
          <div className='overflow-scroll h-80 mt-6 rounded-lg shadow'>
            <table className='w-full'>
              <thead className='border-b-2 border-gray-200'>
                <tr className='h-10'>
                  <th className='font-normal text-gray-500 text-left p-3 tracking-wide w-20'>ID:</th>
                  <th className='font-normal text-gray-500 text-left p-3 tracking-wide w-40'>Nombre</th>
                  <th className='font-normal text-gray-500 text-left p-3 tracking-wide w-40'>Tipo</th>
                  <th className='font-normal text-gray-500 text-left p-3 tracking-wide w-40'>Fabricación</th>
                  <th className='font-normal text-gray-500 text-left p-3 tracking-wide w-40'>Vencimiento</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-100'>
                {
                  medicamentos && medicamentos.map((medicamento) => (
                    <tr key={medicamento.id_medicamento} className='font-semibold'>
                      <td className='p-3 text-sm whitespace-nowrap'>{medicamento.id_medicamento}</td>
                      <td className='p-3 text-sm whitespace-nowrap'>{medicamento.nombre}</td>
                      <td className='p-3 text-sm whitespace-nowrap'>{medicamento.tipo}</td>
                      <td className='p-3 text-sm whitespace-nowrap'>{medicamento.fabricacion}</td>
                      <td className='p-3 text-sm whitespace-nowrap'>{medicamento.vencimiento}</td>
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

export default BusquedaMedicamentos