import BusquedaPacientes from "../../components/BusquedaPacientes/BusquedaPacientes"
import { useEffect } from 'react'
import { useAuthContext } from "../../context/authContext";
import { useRouter } from 'next/router'

function SearchPage() {

  const router = useRouter()
  const { userRol } = useAuthContext();

  useEffect(() => {
    !userRol || userRol !== 'recepcionista' ? router.push('/') : null 
  }, [])

  return (
    <>
      <p className="font-bold text-2xl">Búsqueda de pacientes</p>
      <BusquedaPacientes />
    </>
  )
}

export default SearchPage