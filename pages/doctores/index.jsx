import BusquedaDoctores from "../../components/BusquedaDoctores/BusquedaDoctores"
import { useEffect } from 'react'
import { useAuthContext } from "../../context/authContext";
import { useRouter } from 'next/router'

function DoctoresPage() {

  const router = useRouter()
  const { userRol } = useAuthContext();

  useEffect(() => {
    !userRol || userRol !== 'recepcionista' ? router.push('/') : null 
  }, [])

  return (
    <>
      <p className="font-bold text-2xl">Doctores</p>
      <BusquedaDoctores />
    </>
  )
}

export default DoctoresPage