import { getConnection } from '../../../../../database/database';

export default async function handler(req, res) {

  if (req.method === 'GET') {

    try {
      const { nombre, apellido, matricula } = req.query
    
      const connection = await getConnection()
      const query = `
      SELECT nombre, apellido, matricula FROM doctores WHERE doctores.nombre = ? AND doctores.apellido = ? AND doctores.matricula = ?;
      `
      const user = await connection.query(query,[nombre, apellido, matricula])
      //Si no existe el usuario mandamos 404
      if (user.length < 1) return res.status(404).json({message: 'Datos incorrectos'})
  
      res.json(user)
    } catch (error) {
      return res.status(500).json({message: error.message})
    }
  }
}