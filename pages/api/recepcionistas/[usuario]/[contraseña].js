import { getConnection } from '../../../../database/database';

export default async function handler(req, res) {

  if (req.method === 'GET') {

    try {
      const { usuario, contraseña } = req.query
    
      const connection = await getConnection()
      const query = `
      SELECT usuario, contraseña FROM recepcionistas WHERE recepcionistas.usuario = ? AND recepcionistas.contraseña = ?;
      `
      const user = await connection.query(query,[usuario, contraseña])
      //Si no existe el usuario mandamos 404
      if (user.length < 1) return res.status(404).json({message: 'Usuario o contraseña incorrecta'})
  
      res.json(user)
    } catch (error) {
      return res.status(500).json({message: error.message})
    }
  }
}