
function BusquedaMedicamentos() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="flex items-center justify-center w-full">
        <input
          className="w-2/4 h-10 px-6 py-2 text-sm font-light bg-gray-200 border outline-none rounded-l-xl"
          type="text"
          placeholder="Búsqueda por nombre de medicamento..."
      />
        </div>

      <div className="my-6">
      <p>No se encontró un medicamento...</p>
      </div>
      
      <div>
        
      </div>
      
      </div>
    </>
  )
}

export default BusquedaMedicamentos