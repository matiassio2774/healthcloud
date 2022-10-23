import RegistroCitaForm from './../../components/RegistroCitaForm/RegistroCitaForm';
import { useEffect } from 'react'
import { useAuthContext } from "../../context/authContext";
import { useRouter } from 'next/router'

function RegisterPage() {
  
  const router = useRouter()
  const { userRol } = useAuthContext();

  useEffect(() => {
    !userRol || userRol !== 'recepcionista' ? router.push('/') : null 
  }, [])
  

  return (
    <>
      <p className="font-bold text-2xl">Registrar paciente - Crear cita</p>
      <RegistroCitaForm />
    </>
  );
}

export default RegisterPage;
