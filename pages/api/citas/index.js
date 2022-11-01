import { getConnection } from "../../../database/database";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { matricula } = req.query;
      const connection = await getConnection();
      const query = `
      select C.id_cita, D.nombre As departamento, P.nombre, P.cuil, C.id_cama,  C.fecha_registro, C.hora_registro, C.fecha_alta, C.hora_alta, C.fecha_baja, C.hora_baja FROM citas C INNER JOIN pacientes P ON C.id_paciente = P.id_paciente INNER JOIN departamentos D ON C.id_departamento = D.id_departamento WHERE C.id_doctor = (SELECT id_doctor FROM doctores WHERE doctores.matricula = ${parseInt(matricula)});
      `;
      const citas = await connection.query(query);

      if (citas.length < 1)
        return res.status(404).json({ message: "no existen" });

      res.json(citas);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
