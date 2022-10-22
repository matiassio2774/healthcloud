import { getConnection } from '../../../../database/database';

  export default async function handler(req, res) {

    if (req.method === 'POST') {
  
      try {
        const { nombre, direccion, sexo, cuil } = req.body
        const connection = await getConnection()
        const query = `
        SELECT COUNT(*) AS pacientes FROM pacientes WHERE pacientes.nombre = "${nombre}" AND pacientes.direccion = "${direccion}" AND pacientes.sexo = "${sexo}" AND pacientes.cuil = "${cuil}";
        `
        const query2 = `
          INSERT INTO pacientes (nombre, direccion, sexo, cuil)
          VALUES (?, ?, ?, ?)
        `
        const existePaciente = await connection.query(query)
        console.log(existePaciente[0].pacientes)
        if (existePaciente[0].pacientes > 0) {
          console.log("YA EXISTE")
          return res.status(404).json({message: 'El paciente ya está registrado'})
        }
        if (existePaciente[0].pacientes < 1) {
          console.log("REGISTRE PACIENTE")
          const registroPaciente = await connection.query(query2,[nombre, direccion, sexo, cuil])
          return res.status(200).json('El paciente ha sido registrado con éxito')
        }
      } catch (error) {
        return res.status(500).json({message: error.message})
      }
    }
  }