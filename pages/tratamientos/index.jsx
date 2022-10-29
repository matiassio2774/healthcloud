import BusquedaTratamientos from './../../components/BusquedaTratamientos/BusquedaTratamientos';
import { useEffect } from 'react'
import { useAuthContext } from "../../context/authContext";
import { useRouter } from 'next/router'

function TratamientosPage() {
  const router = useRouter()
  const { userRol } = useAuthContext();

  useEffect(() => {
    !userRol || userRol !== 'doctor' ? router.push('/') : null 
  }, [])

  return (
    <>
      <p className="font-bold text-2xl">Tratamientos de pacientes</p>
      <BusquedaTratamientos />
    </>
  )
}

export default TratamientosPage