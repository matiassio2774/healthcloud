import { useRef, useState, useEffect } from 'react';
import axios from 'axios'

const URL = "http://localhost:3000/api/departamentos";
const URL2 = "http://localhost:3000/api/pacientes/nuevo";
const URL3 = "http://localhost:3000/api/citas/nuevo";

function RegistroCitaForm() {

  const [departamentos, setDepartamentos] = useState()
  const departamentoRef = useRef('Guardia');
  const doctorRef = useRef('');
  const [selectDepto, setSelectDepto] = useState("Guardia")
  const [selectDoctor, setSelectDoctor] = useState()
  const [doctoresDepto, setDoctoresDepto] = useState()

  const [message, setMessage] = useState()
  
  const [isDisabled, setIsDisabled] = useState(true)

  const [paciente, setPaciente] = useState()
  const nombreRef = useRef();
  const direccionRef = useRef();
  const sexoRef = useRef();
  const cuilRef = useRef();

  const [cita, setCita] = useState()

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
  }, []);

  useEffect(() => {
    async function getDoctoresDepartamento(){
      try {
        const { data } = await axios.get(`${URL}/${selectDepto}`)
        setDoctoresDepto(data)
        setSelectDoctor(data[0].id_doctor)
      } catch (error) {
        console.error(error)
      }
    }
    getDoctoresDepartamento()
  }, [selectDepto]);
  

  const handleCitaSubmit = async (e) => {
    e.preventDefault()
    //Datos a enviar: id_departamento, id_paciente, id_doctor, fecha, hora
    const id_departamento = parseInt(departamentos.filter((depto)=>(depto.nombre === selectDepto))[0].id_departamento)
    const id_doctor = parseInt(selectDoctor)
    const fecha = new Date().toLocaleDateString()
    const hora = new Date().toLocaleTimeString()
    setCita({
      cuil_paciente: paciente.cuil,
      id_doctor: id_doctor,
      id_departamento: id_departamento,
      fecha: fecha,
      hora: hora
    })
  }

  const validateCita = async () => {
    console.log(cita)
    try {
      const { data } = await axios.post(`${URL3}/`, cita);
      console.log(data)
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  useEffect(() => {
    if (cita) {
      validateCita()
    }
  }, [cita])

  const handleRegistroSubmit = async (e) => {
    setIsDisabled(false)
    e.preventDefault()
    setPaciente({
      nombre: nombreRef.current.value,
      direccion: direccionRef.current.value,
      sexo: sexoRef.current.value,
      cuil: cuilRef.current.value
    })
  }

  const validateUser = async () => {
    try {
      const { data } = await axios.post(`${URL2}/`, {
        nombre: paciente.nombre,
        direccion: paciente.direccion,
        sexo: paciente.sexo,
        cuil: paciente.cuil
      });
      setMessage(data + ", registre una cita.")
    } catch (error) {
      setMessage(error.response.data.message + ", registre una cita.")
    }
  }

  useEffect(() => {
    if (paciente) {
      validateUser()
      
    }
  }, [paciente])

  return (
    <>
      {message && <p className='absolute mt-6 text-green-600'>{message}</p>}
      <div className="flex justify-center items-center h-4/5 mt-10 gap-40">
        <form className="w-60 flex flex-col gap-6" onSubmit={handleRegistroSubmit}>
          <input
            className="bg-gray-200 border rounded-xs py-2 px-6 outline-none text-sm font-light"
            type="text"
            placeholder="Nombre"
            ref={nombreRef}
            required
          />
          <input
            className="bg-gray-200 border rounded-xs py-2 px-6 outline-none text-sm font-light"
            type="text"
            placeholder="Dirección"
            ref={direccionRef}
            required
          />
          <input
            className="bg-gray-200 border rounded-xs py-2 px-6 outline-none text-sm font-light"
            type="text"
            placeholder="Sexo"
            ref={sexoRef}
            required
          />
          <input
            className="bg-gray-200 border rounded-xs py-2 px-6 outline-none text-sm font-light"
            type="text"
            placeholder="CUIL"
            ref={cuilRef}
            required
          />
          <button
            type="submit"
            className="bg-button text-white py-2 px-8 rounded-sm hover:bg-active"
          >
            Registrar
          </button>
        </form>

        <form className="w-60 flex flex-col mb-6" onSubmit={handleCitaSubmit}>
          <label htmlFor="deptos">Departamento</label>
          <select
            name="deptos"
            id="deptos"
            className="bg-gray-200 border rounded-xs py-2 px-6 outline-none text-sm font-light"
            disabled={isDisabled}
            ref={departamentoRef}
            onChange={() => departamentoRef.current.value && setSelectDepto(departamentoRef.current.value)}
          >
            {
              departamentos && departamentos.map((departamento) => (
                <option key={departamento.id_departamento} value={departamento.nombre}>{departamento.nombre}</option>
              ))
            }
          </select>
          <label htmlFor="doctores" className="mt-4">
            Doctor
          </label>
          <select
            name="doctores"
            id="doctores"
            className="bg-gray-200 border rounded-xs py-2 px-6 outline-none text-sm font-light"
            disabled={isDisabled}
            ref={doctorRef}
            onChange={() => doctorRef.current.value && setSelectDoctor(doctorRef.current.value)}
          >
            {
              (selectDepto && doctoresDepto) && doctoresDepto.map((doctor) => (
                <option key={doctor.id_doctor} value={parseInt(doctor.id_doctor)}>{doctor.nombre}</option>
              ))
            }
          </select>
          <div className="my-6 flex flex-col ">
            <input
              className="bg-gray-200 border rounded-xs py-2 px-6 outline-none text-sm font-bold"
              type="text"
              disabled
              placeholder={"Fecha: " + new Date().toLocaleDateString()}
            />
            <input
              className="bg-gray-200 border rounded-xs py-2 px-6 outline-none text-sm font-bold"
              type="text"
              disabled
              placeholder={"Hora: " + new Date().toLocaleTimeString()}
            />
          </div>

          <button
            type="submit"
            className="bg-button text-white py-2 px-8 rounded-sm hover:bg-active"
            disabled={isDisabled}
          >
            Crear cita
          </button>
        </form>
      </div>
    </>
  );
}

export default RegistroCitaForm;
