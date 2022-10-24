import { getConnection } from '../../../database/database';

  export default async function handler(req, res) {

    if (req.method === 'POST') {
  
      try {
        const { id_cama, fecha_alta, hora_alta, id_cita, departamento } = req.body
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
        const query3 = `
        UPDATE departamentos 
        SET 
            camas_disponibles = (SELECT COUNT(*) FROM camas WHERE camas.disponible = true AND camas.id_departamento = (SELECT id_departamento from departamentos WHERE departamentos.nombre = "${departamento}"))
        WHERE
            departamentos.nombre = "${departamento}"
        `

        await connection.query(query)
        await connection.query(query2)
        await connection.query(query3)
        return res.status(404).json({message: 'Cita dada de alta con éxito!'})

      } catch (error) {
        return res.status(500).json({message: error.message})
      }
    }
  }
