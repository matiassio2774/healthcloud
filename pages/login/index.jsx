import { useState, useEffect } from "react";
import RecepcionistaForm from "../../components/RecepcionistaForm/RecepcionistaForm";
import DoctorForm from './../../components/DoctorForm/DoctorForm';
import { useRouter } from 'next/router'

function LoginPage() {
  const [toggleR, setToggleR] = useState(1);
  const [toggleD, setToggleD] = useState(0);

  const router = useRouter()

  function handleClickR() {
    setToggleR(1);
    setToggleD(0);
  }

  function handleClickD() {
    setToggleD(1);
    setToggleR(0);
  }

  useEffect(() => {
    if (sessionStorage.getItem('rol')) {
      router.push('/')
    }
  }, [])
  

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
