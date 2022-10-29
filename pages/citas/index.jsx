import Citas from "../../components/Citas/Citas";
import { useEffect } from 'react'
import { useAuthContext } from "../../context/authContext";
import { useRouter } from 'next/router'

function CitasPage() {
  const router = useRouter()
  const { userRol } = useAuthContext();

  useEffect(() => {
    !userRol || userRol !== 'doctor' ? router.push('/') : null 
  }, [])

  return (
    <>
      <p className="text-2xl font-bold">Citas</p>
      <Citas />
    </>
  );
}

export default CitasPage;
