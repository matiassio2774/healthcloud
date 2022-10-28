import { useState, useEffect, useRef } from 'react'
import axios from 'axios'

const URL = "http://localhost:3000/api/citas";
const URL2 = "http://localhost:3000/api/camas";
const URL3 = "http://localhost:3000/api/citas/update";
const URL4 = "http://localhost:3000/api/citas/baja";

function Citas() {

  const [citas, setCitas] = useState()
  const [defaultCitas, setDefaultCitas] = useState()
  const [busqueda, setBusqueda] = useState("")
  const [camasDisponibles, setCamasDisponibles] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenBaja, setIsOpenBaja] = useState(false)
  const [currentCita, setCurrentCita] = useState()

  const camaRef = useRef()

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
  }, [,isOpen,isOpenBaja])

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


  const handleAltaClick = async (cita) => {
    setIsOpen(true)
    setCurrentCita(cita)
    // 1- Obtener camas disponibles de departamento
    try {
      const { data } = await axios.get(`${URL2}/${cita.departamento}`)
      setCamasDisponibles(data)
    } catch (error) {
      console.error(error)
    }
  }

  const handleBajaClick = async (cita) => {
    setIsOpenBaja(true)
    setCurrentCita(cita)
  }

  const handleUpdatearCita = async () => {
    // Dar cita de alta: UPDATE fecha_alta, hora_alta, id_cama
    try {
      const { data } = await axios.post(`${URL3}`,{
        id_cama: camaRef.current.value,
        fecha_alta: new Date().toLocaleDateString(),
        hora_alta: new Date().toLocaleTimeString(),
        id_cita: currentCita.id_cita,
        departamento: currentCita.departamento
      })
      console.log(data)
      setIsOpen(false)
    } catch (error) {
      console.error(error)
      setIsOpen(false)
    }
  }

  const handleBajaCita= async () => {
        // Dar cita de baja: UPDATE fecha_baja, hora_baja, id_cama
    try {
      const { data } = await axios.post(`${URL4}`,{
        id_cama: currentCita.id_cama,
        fecha_baja: new Date().toLocaleDateString(),
        hora_baja: new Date().toLocaleTimeString(),
        id_cita: currentCita.id_cita,
        departamento: currentCita.departamento
      })
      console.log(data)
      setIsOpenBaja(false)
    } catch (error) {
      console.error(error)
      setIsOpenBaja(false)
    }

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
      {isOpenBaja && isOpenBaja ?
        <div className='flex flex-col items-center justify-center w-full mt-10'>
          <div className='flex'>
            <p>¿Quiere dar debaja al paciente?</p>
          </div>
          <button type="submit" className="px-8 py-2 text-sm text-white rounded-sm bg-button hover:bg-active" onClick={handleBajaCita}>Dar de baja</button>
        </div>
      : 
      isOpen && isOpen ?
        <div className='flex flex-col items-center justify-center w-full mt-10'>
          <div className='flex'>
            <p>Seleccione una cama disponible:</p>
            <select name="camas" id="camas" ref={camaRef}>
              {camasDisponibles ? camasDisponibles.map((cama)=>(
                <option key={cama.id_cama} value={cama.id_cama}>{cama.id_cama}</option>
              ))
            :
            <p>No hay camas disponibles.</p>
            }
            </select>
          </div>
          <button type="submit" className="px-8 py-2 text-sm text-white rounded-sm bg-button hover:bg-active" onClick={handleUpdatearCita}>Dar de alta</button>
        </div>
      :
      (citas && citas.length < 1 ? 
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
                      <td>{cita.fecha_alta ? cita.fecha_alta : <button type="submit" className="px-8 py-2 text-sm text-white rounded-sm bg-button hover:bg-active" onClick={() => handleAltaClick(cita)}>Alta</button>} {cita.hora_alta && "| "+cita.hora_alta}</td>
                      {}
                      {
                        !cita.fecha_alta ? null : 
                        cita.fecha_baja ? <td>{cita.fecha_baja} | {cita.hora_baja}</td>
                        :
                        <td>
                          <button type="submit" className="px-8 py-2 text-sm text-white rounded-sm bg-button hover:bg-active" onClick={() => handleBajaClick(cita)}>Baja</button>
                        </td>
                      }
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
      )
    }
    </>
  )
}

export default Citas