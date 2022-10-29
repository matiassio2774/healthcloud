import BusquedaMedicamentos from './../../components/BusquedaMedicamentos/BusquedaMedicamentos';
import { useEffect } from 'react'
import { useAuthContext } from "../../context/authContext";
import { useRouter } from 'next/router'

function MedicamentosPage() {
  const router = useRouter()
  const { userRol } = useAuthContext();

  useEffect(() => {
    !userRol || userRol !== 'doctor' ? router.push('/') : null 
  }, [])

  return (
    <>
      <p className="font-bold text-2xl">Medicamentos</p>
      <BusquedaMedicamentos />
    </>
  )
}

export default MedicamentosPage