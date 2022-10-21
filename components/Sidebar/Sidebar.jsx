import {
  AiOutlineUserAdd,
  AiOutlineSearch,
  AiOutlineMedicineBox,
} from "react-icons/ai";
import { RiHospitalLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { GiMedicines, GiHealthNormal } from "react-icons/gi";
import { FaBookMedical } from "react-icons/fa";
import { useRouter } from 'next/router'

function Sidebar() {
  const router = useRouter()
  return (
    <>
      <div className="h-screen bg-secondary">
        <div className="flex items-center justify-center h-16 gap-2 text-xl font-semibold w-60 text-light">
          <GiHealthNormal />
          <p>HealthCloud </p>
        </div>
        <div className="z-10 text-gray-300 sidebar w-60 h-max">
          <button className="flex items-center justify-center w-full h-20 gap-2 border-t border-primary hover:bg-active " onClick={()=>router.push('/registro')}>
            <AiOutlineUserAdd />
            <span>Registro</span>
          </button>
          <button className="flex items-center justify-center w-full h-20 gap-2 border-t border-primary hover:bg-active " onClick={()=>router.push('/busqueda')}>
            <AiOutlineSearch />
            <span>Búsqueda</span>
          </button>
          <button className="flex items-center justify-center w-full h-20 gap-2 border-t border-primary hover:bg-active " onClick={()=>router.push('/departamentos')}>
            <RiHospitalLine />
            <span>Departamentos</span>
          </button>
          <button className="flex items-center justify-center w-full h-20 gap-2 border-t border-primary hover:bg-active " onClick={()=>router.push('/citas')}>
            <FiUsers />
            <span>Citas</span>
          </button>
          <button className="flex items-center justify-center w-full h-20 gap-2 border-t border-primary hover:bg-active " onClick={()=>router.push('/doctores')}>
            <AiOutlineMedicineBox />
            <span>Doctores</span>
          </button>
          <button className="flex items-center justify-center w-full h-20 gap-2 border-t border-primary hover:bg-active " onClick={()=>router.push('/medicamentos')}>
            <GiMedicines />
            <span>Medicamentos</span>
          </button>
          <button className="flex items-center justify-center w-full h-20 gap-2 border-y border-primary hover:bg-active " onClick={()=>router.push('/tratamientos')}>
            <FaBookMedical />
            <span>Tratamientos</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
