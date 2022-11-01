-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-10-2022 a las 19:05:57
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `healthcloud`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `camas`
--

CREATE TABLE `camas` (
  `id_cama` int(11) NOT NULL,
  `disponible` tinyint(1) NOT NULL,
  `id_departamento` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `camas`
--

INSERT INTO `camas` (`id_cama`, `disponible`, `id_departamento`) VALUES
(1, 1, 1),
(2, 1, 1),
(3, 1, 1),
(4, 1, 1),
(5, 1, 1),
(6, 1, 1),
(7, 1, 1),
(8, 1, 1),
(9, 1, 1),
(10, 1, 1),
(11, 1, 1),
(12, 1, 1),
(13, 1, 1),
(14, 1, 1),
(15, 1, 1),
(16, 1, 1),
(17, 1, 1),
(18, 1, 1),
(19, 1, 1),
(20, 1, 1),
(21, 1, 2),
(22, 1, 2),
(23, 1, 2),
(24, 1, 2),
(25, 1, 2),
(26, 1, 2),
(27, 1, 2),
(28, 1, 2),
(29, 1, 2),
(30, 1, 2),
(31, 1, 2),
(32, 1, 2),
(33, 1, 2),
(34, 1, 2),
(35, 1, 2),
(36, 1, 2),
(37, 1, 2),
(38, 1, 2),
(39, 1, 2),
(40, 1, 2),
(41, 1, 3),
(42, 1, 3),
(43, 1, 3),
(44, 1, 3),
(45, 1, 3),
(46, 1, 3),
(47, 1, 3),
(48, 1, 3),
(49, 1, 3),
(50, 1, 3),
(51, 1, 3),
(52, 1, 3),
(53, 1, 3),
(54, 1, 3),
(55, 1, 3),
(56, 1, 3),
(57, 1, 3),
(58, 1, 3),
(59, 1, 3),
(60, 1, 3),
(61, 1, 4),
(62, 1, 4),
(63, 1, 4),
(64, 1, 4),
(65, 1, 4),
(66, 1, 4),
(67, 1, 4),
(68, 1, 4),
(69, 1, 4),
(70, 1, 4),
(71, 1, 4),
(72, 1, 4),
(73, 1, 4),
(74, 1, 4),
(75, 1, 4),
(76, 1, 4),
(77, 1, 4),
(78, 1, 4),
(79, 1, 4),
(80, 1, 4),
(81, 1, 5),
(82, 1, 5),
(83, 1, 5),
(84, 1, 5),
(85, 1, 5),
(86, 1, 5),
(87, 1, 5),
(88, 1, 5),
(89, 1, 5),
(90, 1, 5),
(91, 1, 5),
(92, 1, 5),
(93, 1, 5),
(94, 1, 5),
(95, 1, 5),
(96, 1, 5),
(97, 1, 5),
(98, 1, 5),
(99, 1, 5),
(100, 1, 5),
(101, 1, 6),
(102, 1, 6),
(103, 1, 6),
(104, 1, 6),
(105, 1, 6),
(106, 1, 6),
(107, 1, 6),
(108, 1, 6),
(109, 1, 6),
(110, 1, 6),
(111, 1, 6),
(112, 1, 6),
(113, 1, 6),
(114, 1, 6),
(115, 1, 6),
(116, 1, 6),
(117, 1, 6),
(118, 1, 6),
(119, 1, 6),
(120, 1, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `citas`
--

CREATE TABLE `citas` (
  `id_cita` int(11) NOT NULL,
  `id_paciente` int(11) NOT NULL,
  `id_doctor` int(11) NOT NULL,
  `id_departamento` int(11) NOT NULL,
  `id_cama` int(11) NOT NULL,
  `fecha_registro` varchar(20) NOT NULL,
  `hora_registro` varchar(20) NOT NULL,
  `fecha_alta` varchar(20) NOT NULL,
  `hora_alta` varchar(20) NOT NULL,
  `fecha_baja` varchar(20) NOT NULL,
  `hora_baja` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamentos`
--

CREATE TABLE `departamentos` (
  `id_departamento` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `ubicacion` varchar(40) NOT NULL,
  `jefe` varchar(20) NOT NULL,
  `camas_disponibles` int(11) NOT NULL,
  `camas_ocupadas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `departamentos`
--

INSERT INTO `departamentos` (`id_departamento`, `nombre`, `ubicacion`, `jefe`, `camas_disponibles`, `camas_ocupadas`) VALUES
(1, 'Guardia', 'Piso 1 pasillo derecho', 'Geronimo rodriguez', 20, 0),
(2, 'Internación', 'Piso 2 fondo', 'Sandra Arce', 20, 0),
(3, 'Medicina', 'Piso 3 pasillo izquierdo', 'António Guzman', 20, 0),
(4, 'Pediatría', 'Piso 3 pasillo derecho', 'Juana Falcon', 20, 0),
(5, 'Clínica', 'Piso 4 fondo', 'Emiliano Arribas', 20, 0),
(6, 'Cirugía', 'Piso 4 escaleras zona izquierda', 'Adrian Borja', 20, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `doctores`
--

CREATE TABLE `doctores` (
  `id_doctor` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `apellido` varchar(20) NOT NULL,
  `matricula` varchar(50) NOT NULL,
  `id_departamento` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `doctores`
--

INSERT INTO `doctores` (`id_doctor`, `nombre`, `apellido`, `matricula`, `id_departamento`) VALUES
(1, 'Mariana', 'Arcos', '92835', 1),
(2, 'Lucía', 'Alonso', '87396', 1),
(3, 'Carlos', 'Gomez', '90523', 1),
(4, 'Juana', 'Lopez', '87293', 2),
(5, 'Alex', 'Giménez', '41782', 2),
(6, 'Nicolas', 'Duran', '29485', 2),
(7, 'Lucas', 'Vargas', '48295', 3),
(8, 'Javier', 'Arévalo', '92873', 3),
(9, 'Carmen', 'Navarro', '87345', 3),
(10, 'Roman', 'Baena', '20293', 4),
(11, 'Maximiliano', 'Velasco', '67482', 4),
(12, 'Ludmila', 'Márquez', '99234', 4),
(13, 'Geronimo', 'Méndez', '84782', 5),
(14, 'Francisco', 'Iglesias', '55823', 5),
(15, 'Roberto', 'Ledesma', '18235', 5),
(16, 'Franco', 'Solana', '93811', 6),
(17, 'Gisela', 'Fuentes', '18267', 6),
(18, 'Oscar', 'Prado', '63826', 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medicamentos`
--

CREATE TABLE `medicamentos` (
  `id_medicamento` int(11) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `fabricacion` varchar(40) NOT NULL,
  `vencimiento` varchar(20) NOT NULL,
  `tipo` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `medicamentos`
--

INSERT INTO `medicamentos` (`id_medicamento`, `nombre`, `fabricacion`, `vencimiento`, `tipo`) VALUES
(1, 'Paracetamol', '2022', '2030', 'Analgésico'),
(2, 'Aspirina', '2022', '2030', 'Analgésico'),
(3, 'Ibuproféno', '2022', '2030', 'Antiinflamatorio'),
(4, 'Naproxeno', '2022', '2030', 'Antiinflamatorio'),
(5, 'Zyrtec', '2022', '2030', 'Antialérgico'),
(6, 'Loratadina', '2022', '2030', 'Antialérgico'),
(7, 'Moxifloxacina', '2022', '2030', 'Antiinfeccioso'),
(8, 'Norfloxacina', '2022', '2030', 'Antiinfeccioso'),
(9, 'Dipirona', '2022', '2030', 'Antipirético'),
(10, 'Nefopam', '2022', '2030', 'Antipirético');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pacientes`
--

CREATE TABLE `pacientes` (
  `id_paciente` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `direccion` varchar(40) NOT NULL,
  `sexo` varchar(20) NOT NULL,
  `cuil` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recepcionistas`
--

CREATE TABLE `recepcionistas` (
  `id_recepcionista` int(11) NOT NULL,
  `usuario` varchar(20) NOT NULL,
  `contraseña` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `recepcionistas`
--

INSERT INTO `recepcionistas` (`id_recepcionista`, `usuario`, `contraseña`) VALUES
(1, 'eliassilva1', 'elias123'),
(2, 'mariacampos17', 'maria123');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rel_med_trat`
--

CREATE TABLE `rel_med_trat` (
  `id_rel_med_trat` int(11) NOT NULL,
  `id_medicamento` int(11) NOT NULL,
  `id_tratamiento` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tratamientos`
--

CREATE TABLE `tratamientos` (
  `id_tratamiento` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `duracion` int(11) NOT NULL,
  `reacciones` varchar(40) NOT NULL,
  `id_cita` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `camas`
--
ALTER TABLE `camas`
  ADD PRIMARY KEY (`id_cama`),
  ADD KEY `id_departamento` (`id_departamento`);

--
-- Indices de la tabla `citas`
--
ALTER TABLE `citas`
  ADD PRIMARY KEY (`id_cita`),
  ADD KEY `id_paciente` (`id_paciente`),
  ADD KEY `id_doctor` (`id_doctor`),
  ADD KEY `id_departamento` (`id_departamento`),
  ADD KEY `id_cama` (`id_cama`);

--
-- Indices de la tabla `departamentos`
--
ALTER TABLE `departamentos`
  ADD PRIMARY KEY (`id_departamento`);

--
-- Indices de la tabla `doctores`
--
ALTER TABLE `doctores`
  ADD PRIMARY KEY (`id_doctor`),
  ADD KEY `id_departamento` (`id_departamento`);

--
-- Indices de la tabla `medicamentos`
--
ALTER TABLE `medicamentos`
  ADD PRIMARY KEY (`id_medicamento`);

--
-- Indices de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  ADD PRIMARY KEY (`id_paciente`);

--
-- Indices de la tabla `recepcionistas`
--
ALTER TABLE `recepcionistas`
  ADD PRIMARY KEY (`id_recepcionista`);

--
-- Indices de la tabla `rel_med_trat`
--
ALTER TABLE `rel_med_trat`
  ADD PRIMARY KEY (`id_rel_med_trat`),
  ADD KEY `id_medicamento` (`id_medicamento`),
  ADD KEY `id_tratamiento` (`id_tratamiento`);

--
-- Indices de la tabla `tratamientos`
--
ALTER TABLE `tratamientos`
  ADD PRIMARY KEY (`id_tratamiento`),
  ADD KEY `id_cita` (`id_cita`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `camas`
--
ALTER TABLE `camas`
  MODIFY `id_cama` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=121;

--
-- AUTO_INCREMENT de la tabla `citas`
--
ALTER TABLE `citas`
  MODIFY `id_cita` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `departamentos`
--
ALTER TABLE `departamentos`
  MODIFY `id_departamento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `doctores`
--
ALTER TABLE `doctores`
  MODIFY `id_doctor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `medicamentos`
--
ALTER TABLE `medicamentos`
  MODIFY `id_medicamento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  MODIFY `id_paciente` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `recepcionistas`
--
ALTER TABLE `recepcionistas`
  MODIFY `id_recepcionista` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `rel_med_trat`
--
ALTER TABLE `rel_med_trat`
  MODIFY `id_rel_med_trat` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tratamientos`
--
ALTER TABLE `tratamientos`
  MODIFY `id_tratamiento` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `camas`
--
ALTER TABLE `camas`
  ADD CONSTRAINT `camas_ibfk_1` FOREIGN KEY (`id_departamento`) REFERENCES `departamentos` (`id_departamento`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `citas`
--
ALTER TABLE `citas`
  ADD CONSTRAINT `citas_ibfk_1` FOREIGN KEY (`id_paciente`) REFERENCES `pacientes` (`id_paciente`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `citas_ibfk_3` FOREIGN KEY (`id_departamento`) REFERENCES `departamentos` (`id_departamento`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `citas_ibfk_4` FOREIGN KEY (`id_doctor`) REFERENCES `doctores` (`id_doctor`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `doctores`
--
ALTER TABLE `doctores`
  ADD CONSTRAINT `doctores_ibfk_1` FOREIGN KEY (`id_departamento`) REFERENCES `departamentos` (`id_departamento`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `rel_med_trat`
--
ALTER TABLE `rel_med_trat`
  ADD CONSTRAINT `rel_med_trat_ibfk_1` FOREIGN KEY (`id_medicamento`) REFERENCES `medicamentos` (`id_medicamento`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `rel_med_trat_ibfk_2` FOREIGN KEY (`id_tratamiento`) REFERENCES `tratamientos` (`id_tratamiento`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `tratamientos`
--
ALTER TABLE `tratamientos`
  ADD CONSTRAINT `tratamientos_ibfk_1` FOREIGN KEY (`id_cita`) REFERENCES `citas` (`id_cita`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
