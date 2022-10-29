import { getConnection } from '../../../database/database';

  export default async function handler(req, res) {

    if (req.method === 'POST') {
  
      try {
        const { medicamentos, nombre_trat, duracion_trat, reacciones_trat, id_cita } = req.body
        const connection = await getConnection()

        const query1 = `
          INSERT INTO tratamientos (nombre, duracion, reacciones, id_cita)
            VALUES ("${nombre_trat}", ${parseInt(duracion_trat)}, "${reacciones_trat}", ${parseInt(id_cita)});
        `
        await connection.query(query1)

        const queryExec = async(id) => {
          let query2 = `
          INSERT INTO rel_med_trat (id_medicamento, id_tratamiento)
            VALUES (${parseInt(id)},(SELECT id_tratamiento FROM tratamientos WHERE id_cita = ${parseInt(id_cita)}));
          `
          await connection.query(query2)
        }

        medicamentos.map(async (medicamento) => (
          await queryExec(medicamento.value)
        ))
        return res.status(200).json({message: 'Tratamiento registrado!'})
      } catch (error) {
        return res.status(500).json({message: error.message})
      }
    }
  }