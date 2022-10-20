import { useState } from "react";
import DoctorForm from './../../components/DoctorForm/DoctorForm';

function LoginPage() {
  const [toggleR, setToggleR] = useState(1);
  const [toggleD, setToggleD] = useState(0);

  function handleClickR() {
    setToggleR(1);
    setToggleD(0);
  }

  function handleClickD() {
    setToggleD(1);
    setToggleR(0);
  }

  return (
    <>
      <div className="w-full border-b border-active flex justify-evenly font-semibold">
        <button className={"hover:text-active " + (toggleR ? "text-active" : "text-black") } onClick={handleClickR}>Recepcionista</button>
        <button className={"hover:text-active " + (toggleD ? "text-active" : "text-black") } onClick={handleClickD}>Doctor</button>
      </div>
      {toggleD ? <DoctorForm />
      : 
      <div className="flex justify-center items-center h-4/5 mt-10">
        <form className="w-60 flex flex-col gap-6">
          <input
            className="bg-gray-200 border rounded-xs py-2 px-6 outline-none text-sm font-light"
            type="text"
            placeholder="Usuario"
          />
          <input
            className="bg-gray-200 border rounded-xs py-2 px-6 outline-none text-sm font-light"
            type="text"
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
      }
    </>
  );
}

export default LoginPage;
