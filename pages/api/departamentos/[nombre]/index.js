import { getConnection } from '../../../../database/database';

export default async function handler(req, res) {

  if (req.method === 'GET') {

    try {
      const { nombre } = req.query
    
      const connection = await getConnection()
      const query = `
      SELECT * FROM doctores WHERE id_departamento = (SELECT id_departamento FROM departamentos WHERE departamentos.nombre = ?);
      `
      const user = await connection.query(query,[nombre])
      //Si no existe el usuario mandamos 404
      if (user.length < 1) return res.status(404).json({message: 'No existe'})
  
      res.json(user)
    } catch (error) {
      return res.status(500).json({message: error.message})
    }
  }
}