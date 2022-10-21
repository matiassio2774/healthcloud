
function BusquedaTratamientos() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="flex w-full justify-center items-center">
        <input
          className="bg-gray-200 w-2/4 h-10 border rounded-l-xl py-2 px-6 outline-none text-sm font-light"
          type="text"
          placeholder="Búsqueda por CUIL de paciente..."
      />
                <button
            type="submit"
            className="bg-button text-white py-2 px-8 rounded-r-xl hover:bg-active"
          >
            Buscar
          </button>
        </div>

      <div className="my-6">
      <p>No se encontró un tratamiento...</p>
      </div>
      
      <div>
        
      </div>
      
      </div>
    </>
  )
}

export default BusquedaTratamientos