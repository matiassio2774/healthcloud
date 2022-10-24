import { getConnection } from '../../../database/database';

export default async function handler(req, res) {

  if (req.method === 'GET') {

    try {
      const { departamento } = req.query
    
      const connection = await getConnection()
      const query = `
      SELECT C.id_cama, D.nombre FROM camas C INNER JOIN departamentos D ON C.id_departamento = D.id_departamento AND D.nombre = "${departamento}" WHERE C.disponible = true
      `
      const camasDisponibles = await connection.query(query)
      //Si no existe el usuario mandamos 404
      if (camasDisponibles.length < 1) return res.status(404).json({message: 'No existe'})
  
      res.json(camasDisponibles)
    } catch (error) {
      return res.status(500).json({message: error.message})
    }
  }
}