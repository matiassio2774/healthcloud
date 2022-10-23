import { getConnection } from '../../../database/database'

export default async function handler(req, res) {

  if (req.method === 'GET') {

    try {

      const connection = await getConnection()
      const query = `
      SELECT * FROM pacientes;
      `
      const pacientes = await connection.query(query)
      
      if (pacientes.length < 1) return res.status(404).json({message: 'no existen'})
  
      res.json(pacientes)
    } catch (error) {
      return res.status(500).json({message: error.message})
    }
  }
}