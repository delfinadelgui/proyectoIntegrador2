-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: proyectointegrador
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `followers`
--

DROP TABLE IF EXISTS `followers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `followers` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_seguidor` int(10) unsigned NOT NULL,
  `id_seguido` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_seguidor_fk_idx` (`id_seguidor`),
  KEY `id_seguido_fk_idx` (`id_seguido`),
  CONSTRAINT `id_seguido_fk` FOREIGN KEY (`id_seguido`) REFERENCES `followers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `id_seguidor_fk` FOREIGN KEY (`id_seguidor`) REFERENCES `followers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `followers`
--

LOCK TABLES `followers` WRITE;
/*!40000 ALTER TABLE `followers` DISABLE KEYS */;
/*!40000 ALTER TABLE `followers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
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
INSERT INTO `users` VALUES (1,'oli','fodrini','oliviaa','1234','16/02/2003','44444444','jnjdn.jpg','oli@hotmsil.com','2022-06-09 20:24:14','2022-06-09 20:24:14'),(12,'olivia','ooooo','sam','1234','2022-06-14 00:00:00','333333','imagen','sam@hotmsil.com','2022-06-09 23:54:23','2022-06-09 23:54:23'),(13,'fff','ffff','kkkk','1234','2022-06-08 00:00:00','4444444','imagen','oli@hot.com','2022-06-10 00:00:25','2022-06-10 00:00:25'),(14,'delfina','delgui','delfina13','$2a$12$gKG0H98rZra.LRZo5V.i/egl23YdIMNTIv3j0RFfbqypf.LQfDk8.','2022-07-08 00:00:00','4423','imagen','delfidelgui@gmail.com','2022-06-13 18:52:22','2022-06-13 18:52:22'),(17,'julia','gimenez','hola123','$2a$12$UvkLb6NTMtHFx/o19qq3tOsecRI.qDDTd34C6C3XnNyZU.qJxJxPi','2022-06-08 00:00:00','4456','imagen','dolore@gmai','2022-06-13 18:53:44','2022-06-13 18:53:44'),(22,'olivia','fodrini','oli123','$2a$12$OU72LGRkwqDx2hiLCjjejuEG3Qb2dlyol2R2f1O.qbVCuvOYEcibO','2022-06-02 00:00:00','2256','imagen','oli@gmial.com','2022-06-13 19:06:21','2022-06-13 19:06:21'),(23,'delfina','dddd','jo23','$2a$12$cio9SyliQN7dxikLrDDok.OVodLxOTP25yLCaVmlbiFtxXvGta5/C','2022-06-09 00:00:00','3334','1655147316740.jpeg','dolore@gmailk','2022-06-13 19:08:37','2022-06-13 19:08:37'),(24,'delfina','gimenez','hola','$2a$12$7To70T9in98SG8LM3Viy0ukohsUOLOPAdQZtg7w3E6UbSzLVOTvUa','2022-06-16 00:00:00','4472892','1655148845088.jpeg','dolore@gmailk.com','2022-06-13 19:34:05','2022-06-13 19:34:05'),(26,'maria','dddd','ddola12','$2a$12$M9NnQKr790toyDxD9z/jXepLD8T2wQkYQtSGW/Mqnu1SubIBB/j6S','2022-06-08 00:00:00','4487394','1655150581657.jpeg','sam@gmail.com','2022-06-13 20:03:02','2022-06-13 20:03:02');
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

-- Dump completed on 2022-06-15 14:45:52
