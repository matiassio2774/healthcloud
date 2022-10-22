import { getConnection } from '../../../../database/database';

  export default async function handler(req, res) {

    if (req.method === 'POST') {
  
      try {
        const { cuil_paciente, id_doctor, id_departamento, fecha, hora } = req.body
        const connection = await getConnection()

        const query = `
          INSERT INTO citas (id_paciente, id_doctor, id_departamento, fecha_registro, hora_registro)
          VALUES ((SELECT id_paciente FROM pacientes WHERE pacientes.cuil = "${cuil_paciente}"), ${parseInt(id_doctor)}, ${parseInt(id_departamento)}, "${fecha.toString()}", "${hora.toString()}");
        `
        const citaNueva = await connection.query(query)
        console.log(citaNueva)
        return res.status(404).json({message: 'Cita registrada con éxito!'})

      } catch (error) {
        return res.status(500).json({message: error.message})
      }
    }
  }