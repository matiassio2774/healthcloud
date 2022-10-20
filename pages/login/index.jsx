import { useState } from "react";
import RecepcionistaForm from "../../components/RecepcionistaForm/RecepcionistaForm";
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
        <RecepcionistaForm />
      }
    </>
  );
}

export default LoginPage;
