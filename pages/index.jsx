import illus from '../assets/undraw.svg'
import pacientes from '../assets/pacientes.png'
import citas from '../assets/citas.png'
import tratamientos from '../assets/tratamientos.png'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="flex justify-center items-center w-full">
      <div className='w-2/4 text-center flex flex-col justify-center items-center'>
        <p className='text-3xl font-semibold'>Empezá a administrar tu hospital con <span className='font-bold text-active'>HealthCloud</span></p>
        <div className='flex items-center gap-10 mt-10 m'>
          <div>
            <Image
              src={pacientes}
              alt="Picture of the author"
              width="40px"
              height="40px"
            />
            <p>Pacientes</p>
          </div>
          <div>
            <Image
                src={citas}
                alt="Picture of the author"
                width="40px"
                height="40px"
            />
            <p>Citas</p>
          </div>
          <div>
            <Image
              src={tratamientos}
              alt="Picture of the author"
              width="40px"
              height="40px"
            />
            <p>Tratamientos</p>
          </div>
          <div>
            <p>y más...</p>
          </div>
        </div>
      </div>
      
      <div className='w-2/4'>
        <Image
        src={illus}
        alt="Picture of the author"
        width="450px"
        height="450px"
        />
      </div>
    </div>
  )
}
