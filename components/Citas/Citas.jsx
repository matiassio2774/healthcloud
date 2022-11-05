import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Select from "react-select";
import { useAuthContext } from "../../context/authContext";

const URL = "http://localhost:3000/api/citas";
const URL2 = "http://localhost:3000/api/camas";
const URL3 = "http://localhost:3000/api/citas/update";
const URL4 = "http://localhost:3000/api/citas/baja";
const URL5 = "http://localhost:3000/api/tratamientos/nuevo";

const medicamentos = [
  { value: 1, label: "Paracetamol" },
  { value: 2, label: "Aspirina" },
  { value: 3, label: "Ibuproféno" },
  { value: 4, label: "Naproxeno" },
  { value: 5, label: "Zyrtec" },
  { value: 6, label: "Loratadina" },
  { value: 7, label: "Moxifloxacina" },
  { value: 8, label: "Norfloxacina" },
  { value: 9, label: "Dipirona" },
  { value: 10, label: "Nefopam" },
];

function Citas() {
  const [citas, setCitas] = useState();
  const [defaultCitas, setDefaultCitas] = useState();
  const [busqueda, setBusqueda] = useState("");
  const [camasDisponibles, setCamasDisponibles] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenBaja, setIsOpenBaja] = useState(false);
  const [isOpenTrat, setIsOpenTrat] = useState(false);
  const [currentCita, setCurrentCita] = useState();
  const [selectedOption, setSelectedOption] = useState();
  const [medicamentosFinal, setMedicamentosFinal] = useState()

  const camaRef = useRef();
  const tratRef = useRef();
  const duracionRef = useRef();
  const reaccionRef = useRef();

  const { userName } = useAuthContext();

  useEffect(() => {
    async function getCitas() {
      try {
        const { data } = await axios.get(URL, {
          params: {
            matricula: userName
          }
        });
        setCitas(data);
        setDefaultCitas(data);
      } catch (error) {
        console.error(error);
      }
    }
    getCitas();
  }, [, isOpen, isOpenBaja, isOpenTrat]);

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filterSearch(e.target.value);
  };

  const filterSearch = (searchInput) => {
    var searchResult = defaultCitas.filter((cita) => {
      if (
        cita.cuil.toString().toLowerCase().startsWith(searchInput.toLowerCase())
      ) {
        return cita;
      }
    });
    setCitas(searchResult);
  };

  const handleAltaClick = async (cita) => {
    setIsOpen(true);
    setCurrentCita(cita);
    // 1- Obtener camas disponibles de departamento
    try {
      const { data } = await axios.get(`${URL2}/${cita.departamento}`);
      setCamasDisponibles(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleBajaClick = async (cita) => {
    setIsOpenBaja(true);
    setCurrentCita(cita);
  };

  const handleUpdatearCita = async () => {
    // Dar cita de alta: UPDATE fecha_alta, hora_alta, id_cama
    try {
      const { data } = await axios.post(`${URL3}`, {
        id_cama: camaRef.current.value,
        fecha_alta: new Date().toLocaleDateString(),
        hora_alta: new Date().toLocaleTimeString(),
        id_cita: currentCita.id_cita,
        departamento: currentCita.departamento,
      });
      console.log(data);
      setIsOpen(false);
    } catch (error) {
      console.error(error);
      setIsOpen(false);
    }
  };

  const handleBajaCita = async () => {
    // Dar cita de baja: UPDATE fecha_baja, hora_baja, id_cama
    try {
      const { data } = await axios.post(`${URL4}`, {
        id_cama: currentCita.id_cama,
        fecha_baja: new Date().toLocaleDateString(),
        hora_baja: new Date().toLocaleTimeString(),
        id_cita: currentCita.id_cita,
        departamento: currentCita.departamento,
      });
      console.log(data);
      setIsOpenBaja(false);
    } catch (error) {
      console.error(error);
      setIsOpenBaja(false);
    }
  };

  const handleTratClick = async (cita) => {
    setIsOpenTrat(true);
    setCurrentCita(cita);
  };

  const handleMedChange = (selectedOption) => {
    setSelectedOption([...selectedOption])
  }

  const handleTratSubmit = async (e) => {
    e.preventDefault()
    if(selectedOption && selectedOption.length > 0) {
      try {
        const { data } = await axios.post(`${URL5}`, {
          medicamentos: selectedOption,
          nombre_trat: tratRef.current.value,
          duracion_trat: duracionRef.current.value,
          reacciones_trat: reaccionRef.current.value,
          id_cita: currentCita.id_cita
        });
        console.log(data);
        setIsOpenTrat(false);
      } catch (error) {
        console.error(error);
        setIsOpenTrat(false);
      }
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
      {isOpenTrat && isOpenTrat ? (
        <>
          <div className="flex justify-center items-center h-4/5 mt-10">
            <form className="w-full flex flex-col gap-6" onSubmit={handleTratSubmit}>
              <div className="flex gap-6 mx-auto items-center">
                <div className="w-60 flex flex-col gap-6">
                  <input
                    className="bg-gray-200 border rounded-xs py-2 px-6 outline-none text-sm font-light"
                    type="text"
                    placeholder="Nombre de tratamiento"
                    ref={tratRef}
                    required
                  />
                  <input
                    className="bg-gray-200 border rounded-xs py-2 px-6 outline-none text-sm font-light"
                    type="number"
                    placeholder="Duración (dias)"
                    ref={duracionRef}
                    required
                  />
                  <textarea
                    className="bg-gray-200 border rounded-xs py-2 px-6 outline-none text-sm font-light"
                    placeholder="Reacciones (opcional)"
                    ref={reaccionRef}
                  />
                </div>
                <div className="w-60 flex flex-col gap-6">
                  <Select
                    isMulti
                    options={medicamentos}
                    onChange={handleMedChange}
                    value={selectedOption}
                    required
                  />
                  <button
                    type="submit"
                    className="bg-button text-white py-2 px-8 rounded-sm hover:bg-active"
                  >
                    Registrar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </>
      ) : isOpenBaja && isOpenBaja ? (
        <div className="flex flex-col items-center justify-center w-full mt-10">
          <div className="flex">
            <p>¿Quiere dar debaja al paciente?</p>
          </div>
          <button
            type="submit"
            className="px-8 py-2 text-sm text-white rounded-sm bg-button hover:bg-active"
            onClick={handleBajaCita}
          >
            Dar de baja
          </button>
        </div>
      ) : isOpen && isOpen ? (
        <div className="flex flex-col items-center justify-center w-full mt-10">
          <div className="flex">
            <p>Seleccione una cama disponible:</p>
            <select name="camas" id="camas" ref={camaRef}>
              {camasDisponibles ? (
                camasDisponibles.map((cama) => (
                  <option key={cama.id_cama} value={cama.id_cama}>
                    {cama.id_cama}
                  </option>
                ))
              ) : (
                <p>No hay camas disponibles.</p>
              )}
            </select>
          </div>
          <button
            type="submit"
            className="px-8 py-2 text-sm text-white rounded-sm bg-button hover:bg-active"
            onClick={handleUpdatearCita}
          >
            Dar de alta
          </button>
        </div>
      ) : citas && citas.length < 1 ? (
        <div className="my-6">
          <p>No se encontró una cita...</p>
        </div>
      ) : (
        <div className="w-full mt-10 overflow-scroll max-h-80">
          <table className="w-full tabla-citas">
            <thead>
              <tr className="text-left">
                <th>Departamento</th>
                <th>Paciente</th>
                <th>CUIL</th>
                <th>Cama</th>
                <th>Registro</th>
                <th>Alta</th>
                <th>Baja</th>
                <th>Trat.</th>
              </tr>
            </thead>
            <tbody>
              {citas &&
                citas.map((cita) => (
                  <tr key={cita.id_cita} className="h-11">
                    <td>{cita.departamento}</td>
                    <td>{cita.nombre}</td>
                    <td>{cita.cuil}</td>
                    <td>{cita.id_cama || "No asignada"}</td>
                    <td>
                      {cita.fecha_registro} | {cita.hora_registro}
                    </td>
                    <td>
                      {cita.fecha_alta ? (
                        cita.fecha_alta
                      ) : (
                        <button
                          type="submit"
                          className="px-8 py-2 text-sm text-white rounded-sm bg-button hover:bg-active"
                          onClick={() => handleAltaClick(cita)}
                        >
                          Alta
                        </button>
                      )}{" "}
                      {cita.hora_alta && "| " + cita.hora_alta}
                    </td>
                    {}
                    {!cita.fecha_alta ? null : cita.fecha_baja ? (
                      <td>
                        {cita.fecha_baja} | {cita.hora_baja}
                      </td>
                    ) : (
                      <>
                        <td>
                          <button
                            type="submit"
                            className="px-6 py-2 text-sm text-white rounded-sm bg-button hover:bg-active"
                            onClick={() => handleBajaClick(cita)}
                          >
                            Baja
                          </button>
                        </td>
                        <td>
                          <button
                            type="submit"
                            className="px-4 py-2 text-sm text-white rounded-sm bg-button hover:bg-active"
                            onClick={() => handleTratClick(cita)}
                          >
                            Asignar
                          </button>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default Citas;
