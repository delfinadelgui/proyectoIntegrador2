-- MySQL dump 10.13  Distrib 8.0.29, for macos12 (x86_64)
--
-- Host: 127.0.0.1    Database: proyectointegrador
-- ------------------------------------------------------
-- Server version	5.7.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `player_id` int(10) unsigned NOT NULL,
  `user_id` int(10) unsigned NOT NULL,
  `comment` varchar(300) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,12,3,'hola q bien','2022-06-18 12:20:46','2022-06-18 12:20:46'),(2,12,2,'hoooo','2022-06-18 12:20:46','2022-06-18 12:20:46'),(3,12,9,'oli ','2022-06-18 12:20:46','2022-06-18 12:20:46'),(4,1,9,'Holaaaa','2022-06-18 22:17:05','2022-06-18 22:17:05');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `followers`
--

DROP TABLE IF EXISTS `followers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `followers` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `seguido_id` int(11) NOT NULL,
  `seguidor_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `followers`
--

LOCK TABLES `followers` WRITE;
/*!40000 ALTER TABLE `followers` DISABLE KEYS */;
INSERT INTO `followers` VALUES (1,9,1),(11,1,9);
/*!40000 ALTER TABLE `followers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `players`
--

DROP TABLE IF EXISTS `players`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `players` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `nacionalidad` varchar(100) NOT NULL,
  `club` varchar(100) NOT NULL,
  `posicion` varchar(100) NOT NULL,
  `trayectoria` varchar(300) DEFAULT NULL,
  `fisico` varchar(100) NOT NULL,
  `valor_mercado` varchar(100) NOT NULL,
  `user_id` int(10) unsigned NOT NULL,
  `descripcion` varchar(300) DEFAULT NULL,
  `imagen` varchar(300) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `players_FK` (`user_id`),
  CONSTRAINT `players_FK` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `players`
--

LOCK TABLES `players` WRITE;
/*!40000 ALTER TABLE `players` DISABLE KEYS */;
INSERT INTO `players` VALUES (1,'Paulo Bruno Exequiel','Dybala','1993-11-15','Argentina','Juventus','Mediapunta','Instituo Central de Cordoba(2011-2012); Palermo(2012-2015); Juventus(2015-2022)','Mide 1,77m y pesa 77kg','40 millones de euros',9,'Jugador de futbol profesional','1655571610646.jpg','2022-06-17 16:07:45','2022-06-18 22:20:00'),(2,'Lionel Andres','Messi','1987-06-24','Argentina','PSG','Delantero-Extremo Derecho','Newells(1995-2000); FC Barcelona(2004-2021); PSG(2021-actualmente)\"','Mide 1,69m y pesa 67kg','60 millones de euros',9,'Jugador de futbol','1655571621214.jpg','2022-06-17 19:08:57','2022-06-18 17:00:21'),(3,'Robert','Lewandoski','2022-06-18','Polania','Bayern Munich','Delantero centro','Legia de Varsovia II(2005-2006); Znicz Pruszkow(2006-2008); Lech Poznan(2008-2010); B.V Borussia(2010-2014); FC Bayern Munich(2014-actualmente)','Mide 1,85 m y pesa 81 kg','50 millones de euros',9,'Jugador de futbol','1655571635414.jpg','2022-06-17 19:42:25','2022-06-18 17:00:35'),(4,'Zlatan','Ibrahimovic','1981-10-03','Suecia','AC Milan','Delantero centro','Malmo(1999-2001); Ajax(2001-2004); Juventus(2004-2006); Internazionale(2006-2009); FC Barcelona(2009-2010); A.C Milan(2010-2012); PSG(2012-2016); Manchester United(2016-2018); L.A Galaxy(2018-2019); A.C Milan(2020-actualmente)','Mide 1,95m y pesa 95kg','4 millones de euros',9,'Jugador de futbol','1655571694773.jpg','2022-06-17 19:42:25','2022-06-18 17:01:34'),(5,'N\'Golo','Kante','1991-03-29','Francia','Chelsea FC','Mediocampista','U.S Boulogne(2012-2013); S.M Caen(2013-2015); Leicester City (2015-2016); Chelsea FC(2016-actualmente)','Mide 1,68m y pesa 68kg','50 millones de euros',9,'Jugador de futbol','1655571721321.jpg','2022-06-17 19:42:25','2022-06-18 17:02:01'),(6,'Julian','Alvarez','2000-01-31','Argetnina','River Plate','Delantero centro','River Plate(2018-2021); Manchester City F.C(2022-presente); prestamo de River Plate (2022-presente)','Mide 1,70m y pesa 71kg','23 millones de euros',9,'Jugador de futbol','1655571734173.jpg','2022-06-17 19:42:25','2022-06-18 17:02:14'),(7,'Phil','Foden','2000-05-28','Inglaterra','Manchester City','Mediocentro','Manchester City(2017-actualmente)','Mide 1,71m y pesa 61kg','90 millones de euros',9,'Jugador de futbol','1655571748402.jpg','2022-06-17 19:56:31','2022-06-18 17:02:28'),(8,'Angel Fabian','Di Maria','1988-02-14','Argentina','PSG','Extremo derecho','Rosario Central (2005-2007); Benfica(2007-2010); Real Madrid(2010-2014); Manchester United(2014-2015); PSG(2015-Act.)','Mide 1,80m y pesa 75kg','15 millones de euros',9,'Jugador de futbol','1655571763203.jpg','2022-06-17 19:56:31','2022-06-18 17:02:43'),(9,'Juan Fernando','Quintero','1993-01-18','Colombia','River Plate','Mediocentro ofensivo','Envigado(2009-1011); Atlético Nacional(2012); Delfino Pescara(2012-2013); F.C Porto(2013-2018); Stade Rennes(2015-2016); Independiente Medellín(2017); River Plate(2018); River Plate(2019-20); Shenzhen FC(2021); River Plate(2022-actualmente)','Mide 1,68m y pesa 65kg','6 millones de euros',9,'Jugador de futbol','1655571782520.jpg','2022-06-17 19:56:31','2022-06-18 17:03:02'),(10,'Antoine','Griezman','1991-03-21','Francia','Atletico de Madrid','Mediapunta','Real Sociedad(2009-2014); Atlético de Madrid(2014-2019); F. C. Barcelona(2019-2021); Atlético de Madrid(2021-presente)','Mide 1,76m y pesa 70kg','50 millones de euros',9,'Jugador de futbol','1655571794570.jpg','2022-06-17 19:56:31','2022-06-18 17:03:14'),(11,'Juan Guillermo','Cuadrado Bello','1988-05-26','Colombia','Juventus','Lateral Derecho','Independiente Medellín(2008-2009); Udinese(2009-2011); Lecce(2011-2012); Fiorentina(2012-2015); Chelsea(2015-2017); Juventus(2017-act.)','Mide 1,76m y pesa 77kg','10 millones de euros',1,'Jugador de futbol','cuadrado.jpg','2022-06-17 19:56:31','2022-06-18 16:50:09'),(12,'Mason','Mount','1991-01-10','Inglaterra','Chelsea','Mediocentro ofensivo','Chelsea(2017-presente)','Mide 1,80m y pesa 77kg','75 millones de euros',9,'Jugador de futbol','mason.jpg','2022-06-17 19:56:31','2022-06-18 17:03:36');
/*!40000 ALTER TABLE `players` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `apellido` varchar(200) NOT NULL,
  `usuario` varchar(200) NOT NULL,
  `contrasena` varchar(200) NOT NULL,
  `fecha_nacimiento` varchar(200) NOT NULL,
  `dni` varchar(200) NOT NULL,
  `imagen` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mail_UNIQUE` (`email`),
  UNIQUE KEY `usuario_UNIQUE` (`usuario`),
  UNIQUE KEY `dni_UNIQUE` (`dni`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'oli','fodrini','oliviaa','1234','16/02/2003','44444444','jnjdn.jpg','oli@hotmsil.com','2022-06-09 20:24:14','2022-06-09 20:24:14'),(2,'so','ooooo','sofia','1234','2022-06-14 00:00:00','333333','imagen','sofi@hotmsil.com','2022-06-09 23:54:23','2022-06-09 23:54:23'),(3,'fff','ffff','kkkk','1234','2022-06-08 00:00:00','4444444','imagen','oli@hot.com','2022-06-10 00:00:25','2022-06-10 00:00:25'),(4,'delfina','delgui','delfina13','$2a$12$gKG0H98rZra.LRZo5V.i/egl23YdIMNTIv3j0RFfbqypf.LQfDk8.','2022-07-08 00:00:00','4423','imagen','delfidelgui@gmail.com','2022-06-13 18:52:22','2022-06-13 18:52:22'),(5,'julia','gimenez','hola123','$2a$12$UvkLb6NTMtHFx/o19qq3tOsecRI.qDDTd34C6C3XnNyZU.qJxJxPi','2022-06-08 00:00:00','4456','imagen','dolore@gmai','2022-06-13 18:53:44','2022-06-13 18:53:44'),(6,'olivia','fodrini','oli123','$2a$12$OU72LGRkwqDx2hiLCjjejuEG3Qb2dlyol2R2f1O.qbVCuvOYEcibO','2022-06-02 00:00:00','2256','imagen','oli@gmial.com','2022-06-13 19:06:21','2022-06-13 19:06:21'),(7,'delfina','dddd','jo23','$2a$12$cio9SyliQN7dxikLrDDok.OVodLxOTP25yLCaVmlbiFtxXvGta5/C','2022-06-09 00:00:00','3334','1655147316740.jpeg','dolore@gmailk','2022-06-13 19:08:37','2022-06-13 19:08:37'),(8,'delfina','gimenez','hola','$2a$12$7To70T9in98SG8LM3Viy0ukohsUOLOPAdQZtg7w3E6UbSzLVOTvUa','2022-06-16 00:00:00','4472892','1655148845088.jpeg','dolore@gmailk.com','2022-06-13 19:34:05','2022-06-13 19:34:05'),(9,'maria','rodriguez','ddola12','$2a$12$M9NnQKr790toyDxD9z/jXepLD8T2wQkYQtSGW/Mqnu1SubIBB/j6S','2022-06-08 00:00:00','4487394','1655571610646.jpg','del@gmail.com','2022-06-13 20:03:02','2022-06-13 20:03:02');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-19 18:14:09
