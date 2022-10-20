function Departamentos() {
  return (
    <>
      <div className="w-full flex justify-center items-center mt-6">
        <div className="grid grid-cols-3 w-5/6 gap-10">
          <div className=" p-4 text-center rounded depto-card">
            <p className="pb-2 text-xl font-bold">Guardia</p>
            <p>Jefe dpto.: {"Juan Perez"}</p>
            <p>Ubicación: {"XXXXXXXX"}</p>
            <p>Camas disponibles: {"24"}</p>
            <p>Camas ocupadas: {"16"}</p>
          </div>
          <div className=" p-4 text-center rounded depto-card">
            <p className="pb-2 text-xl font-bold">Internación</p>
            <p>Jefe dpto.: {"Juan Perez"}</p>
            <p>Ubicación: {"XXXXXXXX"}</p>
            <p>Camas disponibles: {"24"}</p>
            <p>Camas ocupadas: {"16"}</p>
          </div>
          <div className=" p-4 text-center rounded depto-card">
            <p className="pb-2 text-xl font-bold">Medicina</p>
            <p>Jefe dpto.: {"Juan Perez"}</p>
            <p>Ubicación: {"XXXXXXXX"}</p>
            <p>Camas disponibles: {"24"}</p>
            <p>Camas ocupadas: {"16"}</p>
          </div>
          <div className=" p-4 text-center rounded depto-card">
            <p className="pb-2 text-xl font-bold">Pediatría</p>
            <p>Jefe dpto.: {"Juan Perez"}</p>
            <p>Ubicación: {"XXXXXXXX"}</p>
            <p>Camas disponibles: {"24"}</p>
            <p>Camas ocupadas: {"16"}</p>
          </div>
          <div className=" p-4 text-center rounded depto-card">
            <p className="pb-2 text-xl font-bold">Clínica</p>
            <p>Jefe dpto.: {"Juan Perez"}</p>
            <p>Ubicación: {"XXXXXXXX"}</p>
            <p>Camas disponibles: {"24"}</p>
            <p>Camas ocupadas: {"16"}</p>
          </div>
          <div className=" p-4 text-center rounded depto-card">
            <p className="pb-2 text-xl font-bold">Cirugía</p>
            <p>Jefe dpto.: {"Juan Perez"}</p>
            <p>Ubicación: {"XXXXXXXX"}</p>
            <p>Camas disponibles: {"24"}</p>
            <p>Camas ocupadas: {"16"}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Departamentos;
