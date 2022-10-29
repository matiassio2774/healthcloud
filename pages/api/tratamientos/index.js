import { getConnection } from '../../../database/database'

export default async function handler(req, res) {

  if (req.method === 'GET') {

    try {

      const connection = await getConnection()
      const query = `
      SELECT T.id_tratamiento, T.nombre AS "tratamiento", T.duracion, T.reacciones, GROUP_CONCAT(M.nombre) AS "medicamentos", P.cuil AS "paciente", D.nombre AS "doctor"
      FROM medicamentos M 
      INNER JOIN rel_med_trat RMT ON RMT.id_medicamento = M.id_medicamento
      INNER JOIN tratamientos T ON T.id_tratamiento = RMT.id_tratamiento
      INNER JOIN citas C ON C.id_cita = T.id_cita
      INNER JOIN pacientes P ON P.id_paciente = C.id_paciente
      INNER JOIN doctores D ON D.id_doctor = C.id_doctor
      GROUP BY T.id_tratamiento;
      `
      const tratamientos = await connection.query(query)
      
      if (tratamientos.length < 1) return res.status(404).json({message: 'no existen'})
  
      res.json(tratamientos)
    } catch (error) {
      return res.status(500).json({message: error.message})
    }
  }
}