import {
  AiOutlineUserAdd,
  AiOutlineSearch,
  AiOutlineMedicineBox,
} from "react-icons/ai";
import { CiHospital1 } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { GiMedicines, GiHealthNormal } from "react-icons/gi";
import { FaBookMedical } from "react-icons/fa";

function Sidebar() {
  return (
    <>
      <div className="bg-secondary h-screen">
        <div className="w-60 h-16 text-light flex justify-center items-center gap-2 font-semibold text-xl">
          <GiHealthNormal />
          <p>HealthCloud </p>
        </div>
        <div className="sidebar w-60 h-max z-10 text-gray-300">
          <button className="w-full h-20 border-t border-primary flex gap-2 items-center justify-center hover:bg-active transition-all">
            <AiOutlineUserAdd />
            <span>Registro</span>
          </button>
          <button className="w-full h-20 border-t border-primary flex gap-2 items-center justify-center hover:bg-active transition-all">
            <AiOutlineSearch />
            <span>Búsqueda</span>
          </button>
          <button className="w-full h-20 border-t border-primary flex gap-2 items-center justify-center hover:bg-active transition-all">
            <CiHospital1 />
            <span>Departamentos</span>
          </button>
          <button className="w-full h-20 border-t border-primary flex gap-2 items-center justify-center hover:bg-active transition-all">
            <FiUsers />
            <span>Pacientes</span>
          </button>
          <button className="w-full h-20 border-t border-primary flex gap-2 items-center justify-center hover:bg-active transition-all">
            <AiOutlineMedicineBox />
            <span>Doctores</span>
          </button>
          <button className="w-full h-20 border-t border-primary flex gap-2 items-center justify-center hover:bg-active transition-all">
            <GiMedicines />
            <span>Medicamentos</span>
          </button>
          <button className="w-full h-20 border-y border-primary flex gap-2 items-center justify-center hover:bg-active transition-all">
            <FaBookMedical />
            <span>Tratamientos</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
