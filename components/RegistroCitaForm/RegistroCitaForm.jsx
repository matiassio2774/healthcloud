function RegistroCitaForm() {
  return (
    <>
      <div className="flex justify-center items-center h-4/5 mt-10 gap-40">
        <form className="w-60 flex flex-col gap-6">
          <input
            className="bg-gray-200 border rounded-xs py-2 px-6 outline-none text-sm font-light"
            type="text"
            placeholder="Nombre"
          />
          <input
            className="bg-gray-200 border rounded-xs py-2 px-6 outline-none text-sm font-light"
            type="text"
            placeholder="Dirección"
          />
          <input
            className="bg-gray-200 border rounded-xs py-2 px-6 outline-none text-sm font-light"
            type="text"
            placeholder="Sexo"
          />
          <input
            className="bg-gray-200 border rounded-xs py-2 px-6 outline-none text-sm font-light"
            type="text"
            placeholder="CUIL"
          />
          <button
            type="submit"
            className="bg-button text-white py-2 px-8 rounded-sm hover:bg-active"
          >
            Registrar
          </button>
        </form>

        <form className="w-60 flex flex-col mb-6">
          <label htmlFor="deptos">Departamento</label>
          <select
            name="deptos"
            id="deptos"
            className="bg-gray-200 border rounded-xs py-2 px-6 outline-none text-sm font-light"
          >
            <option value="0">Guardia</option>
            <option value="1">Internación</option>
          </select>
          <label htmlFor="doctores" className="mt-4">
            Doctor
          </label>
          <select
            name="doctores"
            id="doctores"
            className="bg-gray-200 border rounded-xs py-2 px-6 outline-none text-sm font-light"
          >
            <option value="0">Lucas Roman</option>
            <option value="1">Roberto Gomez</option>
          </select>
          <div className="my-6 flex flex-col ">
            <input
              className="bg-gray-200 border rounded-xs py-2 px-6 outline-none text-sm font-bold"
              type="text"
              disabled
              placeholder="Fecha: "
            />
            <input
              className="bg-gray-200 border rounded-xs py-2 px-6 outline-none text-sm font-bold"
              type="text"
              disabled
              placeholder="Hora: "
            />
          </div>

          <button
            type="submit"
            className="bg-button text-white py-2 px-8 rounded-sm hover:bg-active"
          >
            Crear cita
          </button>
        </form>
      </div>
    </>
  );
}

export default RegistroCitaForm;
