import { getConnection } from '../../../database/database'

export default async function handler(req, res) {

  if (req.method === 'GET') {

    try {

      const connection = await getConnection()
      const query = `
      SELECT * FROM medicamentos;
      `
      const medicamentos = await connection.query(query)
      
      if (medicamentos.length < 1) return res.status(404).json({message: 'no existen'})
  
      res.json(medicamentos)
    } catch (error) {
      return res.status(500).json({message: error.message})
    }
  }
}