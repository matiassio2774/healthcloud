
function BusquedaTratamientos() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="flex items-center justify-center w-full">
        <input
          className="w-2/4 h-10 px-6 py-2 text-sm font-light bg-gray-200 border outline-none rounded-l-xl"
          type="text"
          placeholder="Búsqueda por CUIL de paciente..."
      />

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