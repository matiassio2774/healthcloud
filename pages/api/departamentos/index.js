import { getConnection } from '../../../database/database'

export default async function handler(req, res) {

  if (req.method === 'GET') {

    try {

      const connection = await getConnection()
      const query = `
      SELECT id_departamento, nombre FROM departamentos;
      `
      const depto = await connection.query(query)
      
      if (depto.length < 1) return res.status(404).json({message: 'no existen'})
  
      res.json(depto)
    } catch (error) {
      return res.status(500).json({message: error.message})
    }
  }
}