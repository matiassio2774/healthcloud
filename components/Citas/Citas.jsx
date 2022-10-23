import { useState, useEffect } from 'react'
import axios from 'axios'

const URL = "http://localhost:3000/api/citas";

function Citas() {

  const [citas, setCitas] = useState()
  const [defaultCitas, setDefaultCitas] = useState()
  const [busqueda, setBusqueda] = useState("")

  useEffect(() => {
    async function getCitas(){
      try {
        const { data } = await axios.get(URL)
        setCitas(data)
        setDefaultCitas(data)
      } catch (error) {
        console.error(error)
      }
    }
    getCitas()
  }, [])

  const handleChange = (e)=>{
    setBusqueda(e.target.value)
    filterSearch(e.target.value)
  }

  const filterSearch = (searchInput)=>{
    var searchResult = defaultCitas.filter((cita)=>{
      if(cita.cuil.toString().toLowerCase().startsWith(searchInput.toLowerCase())){
        return cita
      }
    }
    )
    setCitas(searchResult)
  }

  return (
    <>
    <div className="flex items-center justify-center w-full">
          <input
            className="w-2/4 h-10 px-6 py-2 text-sm font-light bg-gray-200 border outline-none rounded-xl"
            type="text"
            placeholder="Búsqueda por CUIL de paciente..."
            onChange={handleChange}
          />
        </div>
        {
          citas && citas.length < 1 ? 
            <div className="my-6">
              <p>No se encontró una cita...</p>
            </div>
          :
            <div className="w-full mt-10 overflow-scroll max-h-80">
              <table className="w-full">
                <thead>
                  <tr className="text-left">
                    <th>Departamento</th>
                    <th>Paciente</th>
                    <th>CUIL</th>
                    <th>Cama</th>
                    <th>Registro</th>
                    <th>Alta</th>
                    <th>Baja</th>
                  </tr>
                </thead>
                <tbody>
                  {citas && citas.map((cita) => (
                    <tr key={cita.id_cita} className="h-11">
                      <td>{cita.departamento}</td>
                      <td>{cita.nombre}</td>
                      <td>{cita.cuil}</td>
                      <td>{cita.id_cama || 'No asignada'}</td>
                      <td>{cita.fecha_registro} | {cita.hora_registro}</td>
                      <td>{cita.fecha_alta ? cita.fecha_alta : <button type="submit" className="px-8 py-2 text-sm text-white rounded-sm bg-button hover:bg-active">Alta</button>} {cita.hora_alta && "| "+cita.hora_alta}</td>
                      {}
                      {
                        !cita.fecha_alta ? null : 
                        cita.fecha_baja ? <td>{cita.fecha_baja} | {cita.hora_baja}</td>
                        :
                        <td>
                          <button type="submit" className="px-8 py-2 text-sm text-white rounded-sm bg-button hover:bg-active">Baja</button>
                        </td>
                      }
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        }
    </>
  )
}

export default Citas