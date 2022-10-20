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
      <div className="bg-secondary h-screen">
        <div className="w-60 h-16 text-light flex justify-center items-center gap-2 font-semibold text-xl">
          <GiHealthNormal />
          <p>HealthCloud </p>
        </div>
        <div className="sidebar w-60 h-max z-10 text-gray-300">
          <button className="w-full h-20 border-t border-primary flex gap-2 items-center justify-center hover:bg-active " onClick={()=>router.push('/registro')}>
            <AiOutlineUserAdd />
            <span>Registro</span>
          </button>
          <button className="w-full h-20 border-t border-primary flex gap-2 items-center justify-center hover:bg-active " onClick={()=>router.push('/busqueda')}>
            <AiOutlineSearch />
            <span>Búsqueda</span>
          </button>
          <button className="w-full h-20 border-t border-primary flex gap-2 items-center justify-center hover:bg-active " onClick={()=>router.push('/departamentos')}>
            <RiHospitalLine />
            <span>Departamentos</span>
          </button>
          <button className="w-full h-20 border-t border-primary flex gap-2 items-center justify-center hover:bg-active ">
            <FiUsers />
            <span>Pacientes</span>
          </button>
          <button className="w-full h-20 border-t border-primary flex gap-2 items-center justify-center hover:bg-active ">
            <AiOutlineMedicineBox />
            <span>Doctores</span>
          </button>
          <button className="w-full h-20 border-t border-primary flex gap-2 items-center justify-center hover:bg-active ">
            <GiMedicines />
            <span>Medicamentos</span>
          </button>
          <button className="w-full h-20 border-y border-primary flex gap-2 items-center justify-center hover:bg-active ">
            <FaBookMedical />
            <span>Tratamientos</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
