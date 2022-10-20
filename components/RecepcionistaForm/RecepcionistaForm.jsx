function RecepcionistaForm() {
  return (
    <>
      <div className="flex justify-center items-center h-4/5 mt-10">
        <form className="w-60 flex flex-col gap-6">
          <input
            className="bg-gray-200 border rounded-xs py-2 px-6 outline-none text-sm font-light"
            type="text"
            placeholder="Usuario"
          />
          <input
            className="bg-gray-200 border rounded-xs py-2 px-6 outline-none text-sm font-light"
            type="password"
            placeholder="Contraseña"
          />
          <button
            type="submit"
            className="bg-button text-white py-2 px-8 rounded-sm hover:bg-active"
          >
            Ingresar
          </button>
        </form>
      </div>
    </>
  );
}

export default RecepcionistaForm;
