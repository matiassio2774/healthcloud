import { getConnection } from '../../../database/database';

  export default async function handler(req, res) {

    if (req.method === 'POST') {
  
      try {
        const { id_cama, fecha_alta, hora_alta, id_cita } = req.body
        const connection = await getConnection()
        const query = `
        UPDATE citas 
        SET 
            id_cama = ${id_cama},
            fecha_alta = "${fecha_alta}",
            hora_alta = "${hora_alta}"
        WHERE
            id_cita = ${id_cita};
        `
        const query2 = `
        UPDATE camas
        SET
          disponible = false
        WHERE id_cama = ${id_cama};
        `
        await connection.query(query)
        await connection.query(query2)
        return res.status(404).json({message: 'Cita dada de alta con éxito!'})

      } catch (error) {
        return res.status(500).json({message: error.message})
      }
    }
  }
