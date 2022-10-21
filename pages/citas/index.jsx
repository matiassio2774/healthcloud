const citas = [
  {
    id: 1,
    departamento: "Guardia",
    paciente: "Agustin Lopez",
    cama: 1,
    fecha_reg: "20-10-2022",
    hora_reg: "14:02",
    fecha_alta: "23-10-2022",
    hora_alta: "16:27",
    fecha_baja: null,
    hora_baja: null,
  },
  {
    id: 2,
    departamento: "Guardia",
    paciente: "Federico Degleue",
    cama: 2,
    fecha_reg: "23-10-2022",
    hora_reg: "10:15",
    fecha_alta: "26-10-2022",
    hora_alta: "19:15",
    fecha_baja: "07-11-2022",
    hora_baja: "15:18",
  },
  {
    id: 3,
    departamento: "Guardia",
    paciente: "Lucas Gernia",
    cama: 3,
    fecha_reg: "12-10-2022",
    hora_reg: "16:27",
    fecha_alta: null,
    hora_alta: null,
    fecha_baja: null,
    hora_baja: null,
  },
  {
    id: 1,
    departamento: "Guardia",
    paciente: "Agustin Lopez",
    cama: 1,
    fecha_reg: "20-10-2022",
    hora_reg: "14:02",
    fecha_alta: "23-10-2022",
    hora_alta: "16:27",
    fecha_baja: null,
    hora_baja: null,
  },
  {
    id: 2,
    departamento: "Guardia",
    paciente: "Federico Degleue",
    cama: 2,
    fecha_reg: "23-10-2022",
    hora_reg: "10:15",
    fecha_alta: "26-10-2022",
    hora_alta: "19:15",
    fecha_baja: "07-11-2022",
    hora_baja: "15:18",
  },
  {
    id: 3,
    departamento: "Guardia",
    paciente: "Lucas Gernia",
    cama: 3,
    fecha_reg: "12-10-2022",
    hora_reg: "16:27",
    fecha_alta: null,
    hora_alta: null,
    fecha_baja: null,
    hora_baja: null,
  },
  {
    id: 1,
    departamento: "Guardia",
    paciente: "Agustin Lopez",
    cama: 1,
    fecha_reg: "20-10-2022",
    hora_reg: "14:02",
    fecha_alta: "23-10-2022",
    hora_alta: "16:27",
    fecha_baja: null,
    hora_baja: null,
  },
  {
    id: 2,
    departamento: "Guardia",
    paciente: "Federico Degleue",
    cama: 2,
    fecha_reg: "23-10-2022",
    hora_reg: "10:15",
    fecha_alta: "26-10-2022",
    hora_alta: "19:15",
    fecha_baja: "07-11-2022",
    hora_baja: "15:18",
  },
  {
    id: 3,
    departamento: "Guardia",
    paciente: "Lucas Gernia",
    cama: 3,
    fecha_reg: "12-10-2022",
    hora_reg: "16:27",
    fecha_alta: null,
    hora_alta: null,
    fecha_baja: null,
    hora_baja: null,
  },
  {
    id: 1,
    departamento: "Guardia",
    paciente: "Agustin Lopez",
    cama: 1,
    fecha_reg: "20-10-2022",
    hora_reg: "14:02",
    fecha_alta: "23-10-2022",
    hora_alta: "16:27",
    fecha_baja: null,
    hora_baja: null,
  },
  {
    id: 2,
    departamento: "Guardia",
    paciente: "Federico Degleue",
    cama: 2,
    fecha_reg: "23-10-2022",
    hora_reg: "10:15",
    fecha_alta: "26-10-2022",
    hora_alta: "19:15",
    fecha_baja: "07-11-2022",
    hora_baja: "15:18",
  },
  {
    id: 3,
    departamento: "Guardia",
    paciente: "Lucas Gernia",
    cama: 3,
    fecha_reg: "12-10-2022",
    hora_reg: "16:27",
    fecha_alta: null,
    hora_alta: null,
    fecha_baja: null,
    hora_baja: null,
  },
  {
    id: 1,
    departamento: "Guardia",
    paciente: "Agustin Lopez",
    cama: 1,
    fecha_reg: "20-10-2022",
    hora_reg: "14:02",
    fecha_alta: "23-10-2022",
    hora_alta: "16:27",
    fecha_baja: null,
    hora_baja: null,
  },
  {
    id: 2,
    departamento: "Guardia",
    paciente: "Federico Degleue",
    cama: 2,
    fecha_reg: "23-10-2022",
    hora_reg: "10:15",
    fecha_alta: "26-10-2022",
    hora_alta: "19:15",
    fecha_baja: "07-11-2022",
    hora_baja: "15:18",
  },
  {
    id: 3,
    departamento: "Guardia",
    paciente: "Lucas Gernia",
    cama: 3,
    fecha_reg: "12-10-2022",
    hora_reg: "16:27",
    fecha_alta: null,
    hora_alta: null,
    fecha_baja: null,
    hora_baja: null,
  },
  {
    id: 1,
    departamento: "Guardia",
    paciente: "Agustin Lopez",
    cama: 1,
    fecha_reg: "20-10-2022",
    hora_reg: "14:02",
    fecha_alta: "23-10-2022",
    hora_alta: "16:27",
    fecha_baja: null,
    hora_baja: null,
  },
  {
    id: 2,
    departamento: "Guardia",
    paciente: "Federico Degleue",
    cama: 2,
    fecha_reg: "23-10-2022",
    hora_reg: "10:15",
    fecha_alta: "26-10-2022",
    hora_alta: "19:15",
    fecha_baja: "07-11-2022",
    hora_baja: "15:18",
  },
  {
    id: 3,
    departamento: "Guardia",
    paciente: "Lucas Gernia",
    cama: 3,
    fecha_reg: "12-10-2022",
    hora_reg: "16:27",
    fecha_alta: null,
    hora_alta: null,
    fecha_baja: null,
    hora_baja: null,
  },
  
];

function CitasPage() {
  return (
    <>
      <p className="text-2xl font-bold">Citas</p>
      <div className="flex items-center justify-center w-full">
          <input
            className="w-2/4 h-10 px-6 py-2 text-sm font-light bg-gray-200 border outline-none rounded-l-xl"
            type="text"
            placeholder="Búsqueda por nombre de paciente..."
          />
          <button
              type="submit"
              className="px-8 py-2 text-white bg-button rounded-r-xl hover:bg-active"
          >
            Buscar
          </button>
        </div>
      <div className="w-full mt-10 overflow-scroll max-h-80">
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th>Cita</th>
              <th>Departamento</th>
              <th>Paciente</th>
              <th>Cama</th>
              <th>Registro</th>
              <th>Alta</th>
              <th>Baja</th>
            </tr>
          </thead>
          <tbody>
            {citas.map((cita) => (
              <tr key={cita.id} className="h-11">
                <td>{cita.id}</td>
                <td>{cita.departamento}</td>
                <td>{cita.paciente}</td>
                <td>{cita.cama}</td>
                <td>{cita.fecha_reg} | {cita.hora_reg}</td>
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
    </>
  );
}

export default CitasPage;
