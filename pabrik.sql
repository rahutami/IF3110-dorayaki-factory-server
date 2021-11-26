-- MySQL dump 10.13  Distrib 8.0.27, for macos11.6 (arm64)
--
-- Host: localhost    Database: pabriknew
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `pabriknew`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `pabriknew` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `pabriknew`;

--
-- Table structure for table `bahanbaku`
--

DROP TABLE IF EXISTS `bahanbaku`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bahanbaku` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama_bahanbaku` varchar(255) NOT NULL,
  `satuan` varchar(255) NOT NULL,
  `stok` int NOT NULL,
  `timestamp` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bahanbaku`
--

LOCK TABLES `bahanbaku` WRITE;
/*!40000 ALTER TABLE `bahanbaku` DISABLE KEYS */;
INSERT INTO `bahanbaku` (`id`, `nama_bahanbaku`, `satuan`, `stok`, `timestamp`) VALUES (1,'coklat bubuk','bungkus',-222,'2021-11-19 23:12:03'),(2,'telur','butir',35,'2021-11-19 23:14:57'),(3,'tepung terigu','gram',900,'2021-11-19 23:15:43');
/*!40000 ALTER TABLE `bahanbaku` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dorayaki`
--

DROP TABLE IF EXISTS `dorayaki`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dorayaki` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) DEFAULT NULL,
  `deskripsi` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dorayaki`
--

LOCK TABLES `dorayaki` WRITE;
/*!40000 ALTER TABLE `dorayaki` DISABLE KEYS */;
INSERT INTO `dorayaki` (`id`, `nama`, `deskripsi`) VALUES (1,'coklat',''),(2,'stroberi','ini rasanya stroberi'),(3,'testt','ini test plis bisa'),(4,'nanas','ini rasa nanas');
/*!40000 ALTER TABLE `dorayaki` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `log_request`
--

DROP TABLE IF EXISTS `log_request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `log_request` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ip` varchar(15) DEFAULT NULL,
  `endpoint` varchar(255) DEFAULT NULL,
  `timestamp` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=185 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `log_request`
--

LOCK TABLES `log_request` WRITE;
/*!40000 ALTER TABLE `log_request` DISABLE KEYS */;
INSERT INTO `log_request` (`id`, `ip`, `endpoint`, `timestamp`) VALUES (1,'127.1.0.1','test','2021-11-24 12:11:39'),(2,'127.1.0.1','test','2021-11-24 12:12:03'),(3,'127.1.0.1','test','2021-11-25 11:09:38'),(4,'127.1.0.1','test','2021-11-25 12:09:15'),(5,NULL,'/request-dorayaki','2021-11-25 14:27:57'),(6,'127.0.0.1','/request-dorayaki','2021-11-25 14:29:59'),(7,NULL,'/request-dorayaki','2021-11-25 14:33:50'),(8,NULL,'/request-dorayaki','2021-11-25 14:37:18'),(9,NULL,'/request-dorayaki','2021-11-25 14:37:22'),(10,NULL,'/request-dorayaki','2021-11-25 14:37:24'),(11,NULL,'/request-dorayaki','2021-11-25 14:37:25'),(12,NULL,'/request-dorayaki','2021-11-25 14:37:26'),(13,NULL,'/request-dorayaki','2021-11-25 14:37:26'),(14,NULL,'/request-dorayaki','2021-11-25 14:37:27'),(15,NULL,'/request-dorayaki','2021-11-25 14:37:28'),(16,NULL,'/request-dorayaki','2021-11-25 14:37:29'),(17,NULL,'/request-dorayaki','2021-11-25 14:37:30'),(18,NULL,'/request-dorayaki','2021-11-25 14:37:30'),(19,NULL,'/request-dorayaki','2021-11-25 14:37:31'),(20,NULL,'/request-dorayaki','2021-11-25 14:37:31'),(21,NULL,'/request-dorayaki','2021-11-25 14:37:31'),(22,NULL,'/request-dorayaki','2021-11-25 14:37:32'),(23,NULL,'/request-dorayaki','2021-11-25 14:37:33'),(24,NULL,'/request-dorayaki','2021-11-25 14:37:33'),(25,NULL,'/request-dorayaki','2021-11-25 14:37:34'),(26,NULL,'/request-dorayaki','2021-11-25 14:38:18'),(27,NULL,'/request-dorayaki','2021-11-25 14:38:26'),(28,'127.0.0.1','/request-dorayaki','2021-11-25 14:44:49'),(29,'127.0.0.1','/variant','2021-11-25 14:46:53'),(30,'::1','/request-dorayaki','2021-11-25 15:03:54'),(31,'::1','/variant','2021-11-25 15:04:59'),(32,'::1','/variant','2021-11-25 15:05:47'),(33,'::1','/variant','2021-11-25 15:06:05'),(34,'::1','/variant','2021-11-25 15:07:09'),(35,'::1','/variant','2021-11-25 15:07:10'),(36,'::1','/variant','2021-11-25 15:07:13'),(37,'::1','/variant','2021-11-25 15:11:21'),(38,'::1','/variant','2021-11-25 15:13:27'),(39,'::1','/variant','2021-11-25 15:14:45'),(40,'::1','/variant','2021-11-25 15:23:01'),(41,'::1','/variant','2021-11-25 15:23:15'),(42,'::1','/variant','2021-11-25 15:23:15'),(43,'::1','/variant','2021-11-25 15:25:19'),(44,'::1','/variant','2021-11-25 15:33:02'),(45,'::1','/variant','2021-11-25 15:33:22'),(46,'::1','/variant','2021-11-25 15:33:33'),(47,'::1','/variant','2021-11-25 15:33:46'),(48,'::1','/variant','2021-11-25 15:34:00'),(49,'::1','/variant','2021-11-25 15:37:11'),(50,'::1','/request-dorayaki','2021-11-25 15:37:13'),(51,'::1','/request-dorayaki','2021-11-25 15:37:41'),(52,'::1','/variant','2021-11-25 15:37:44'),(53,'::1','/variant','2021-11-25 15:39:30'),(54,'::1','/variant','2021-11-25 15:40:06'),(55,'::1','/variant','2021-11-25 15:47:40'),(56,'::1','/variant','2021-11-25 15:47:41'),(57,'::1','/variant','2021-11-25 15:47:53'),(58,'::1','/variant','2021-11-25 15:51:40'),(59,'::1','/variant','2021-11-25 15:53:16'),(60,'::1','/variant','2021-11-25 15:53:33'),(61,'::1','/variant','2021-11-25 15:53:47'),(62,'::1','/variant','2021-11-25 15:55:03'),(63,'::1','/variant','2021-11-25 15:55:33'),(64,'::1','/variant','2021-11-25 15:56:02'),(65,'::1','/variant','2021-11-25 15:56:09'),(66,'::1','/variant','2021-11-25 15:56:30'),(67,'::1','/variant','2021-11-25 15:56:36'),(68,'::1','/variant','2021-11-25 15:57:25'),(69,'::1','/variant','2021-11-25 15:57:43'),(70,'::1','/variant','2021-11-25 15:57:57'),(71,'::1','/variant','2021-11-25 15:58:07'),(72,'::1','/variant','2021-11-25 15:58:45'),(73,'::1','/variant','2021-11-25 16:06:21'),(74,'::1','/variant','2021-11-25 16:06:24'),(75,'::1','/variant','2021-11-25 16:06:48'),(76,'::1','/variant','2021-11-25 16:06:58'),(77,'::1','/variant','2021-11-25 16:07:08'),(78,'::1','/variant','2021-11-25 16:07:09'),(79,'::1','/variant','2021-11-25 16:08:22'),(80,'::1','/variant','2021-11-25 16:08:51'),(81,'::1','/variant','2021-11-25 16:09:20'),(82,'::1','/variant','2021-11-25 16:10:05'),(83,'::1','/variant','2021-11-25 16:10:06'),(84,'::1','/variant','2021-11-25 16:10:24'),(85,'::1','/variant','2021-11-25 16:10:25'),(86,'::1','/variant','2021-11-25 16:11:01'),(87,'::1','/variant','2021-11-25 16:11:08'),(88,'::1','/variant','2021-11-25 16:11:12'),(89,'::1','/variant','2021-11-25 16:15:41'),(90,'::1','/variant','2021-11-25 16:15:43'),(91,'::1','/variant','2021-11-25 16:16:20'),(92,'::1','/variant','2021-11-25 16:16:39'),(93,'::1','/variant','2021-11-25 16:16:40'),(94,'::1','/variant','2021-11-25 16:16:41'),(95,'::1','/variant','2021-11-25 16:16:42'),(96,'::1','/variant','2021-11-25 16:22:05'),(97,'::1','/variant','2021-11-25 16:22:19'),(98,'::1','/variant','2021-11-25 16:22:55'),(99,'::1','/variant','2021-11-25 16:23:25'),(100,'::1','/variant','2021-11-25 16:24:09'),(101,'::1','/variant','2021-11-25 16:24:36'),(102,'::1','/variant','2021-11-25 16:24:39'),(103,'::1','/variant','2021-11-25 16:30:39'),(104,'::1','/variant','2021-11-25 16:34:15'),(105,'::1','/variant','2021-11-25 16:34:52'),(106,'::1','/variant','2021-11-25 16:35:18'),(107,'::1','/variant','2021-11-25 16:35:46'),(108,'::1','/variant','2021-11-25 16:35:47'),(109,'::1','/variant','2021-11-25 16:38:11'),(110,'::1','/variant','2021-11-25 16:42:26'),(111,'::1','/variant','2021-11-25 16:43:14'),(112,'::1','/variant','2021-11-25 16:53:47'),(113,'::1','/variant','2021-11-25 16:54:12'),(114,'::1','/variant','2021-11-25 16:55:55'),(115,'::1','/variant','2021-11-25 16:56:07'),(116,'::1','/variant','2021-11-25 16:59:32'),(117,'::1','/variant','2021-11-25 17:02:38'),(118,'::1','/variant','2021-11-25 17:02:46'),(119,'::1','/variant','2021-11-25 17:03:32'),(120,'::1','/variant','2021-11-25 17:04:04'),(121,'::1','/variant','2021-11-25 17:04:18'),(122,'::1','/variant','2021-11-25 17:04:20'),(123,'::1','/variant','2021-11-25 17:04:20'),(124,'::1','/variant','2021-11-25 17:04:21'),(125,'::1','/variant','2021-11-25 17:04:21'),(126,'::1','/variant','2021-11-25 17:04:26'),(127,'::1','/variant','2021-11-25 17:04:26'),(128,'::1','/variant','2021-11-25 17:04:29'),(129,'::1','/variant','2021-11-25 17:04:29'),(130,'::1','/variant','2021-11-25 17:05:02'),(131,'::1','/variant','2021-11-25 17:05:55'),(132,'::1','/variant','2021-11-25 17:05:56'),(133,'::1','/variant','2021-11-25 17:06:39'),(134,'::1','/variant','2021-11-25 17:06:46'),(135,'::1','/variant','2021-11-25 17:06:58'),(136,'::1','/variant','2021-11-25 17:07:12'),(137,'::1','/variant','2021-11-25 17:09:16'),(138,'::1','/variant','2021-11-25 17:09:16'),(139,'::1','/variant','2021-11-25 17:09:16'),(140,'::1','/variant','2021-11-25 17:09:16'),(141,'::1','/variant','2021-11-25 17:09:16'),(142,'::1','/variant','2021-11-25 17:09:16'),(143,'::1','/variant','2021-11-25 17:09:16'),(144,'::1','/variant','2021-11-25 17:09:16'),(145,'::1','/variant','2021-11-25 17:09:16'),(146,'::1','/variant','2021-11-25 17:09:16'),(147,'::1','/variant','2021-11-25 17:09:16'),(148,'::1','/variant','2021-11-25 17:10:21'),(149,'::1','/variant','2021-11-25 17:10:21'),(150,'::1','/variant','2021-11-25 17:10:21'),(151,'::1','/variant','2021-11-25 17:10:21'),(152,'::1','/variant','2021-11-25 17:10:21'),(153,'::1','/variant','2021-11-25 17:10:21'),(154,'::1','/variant','2021-11-25 17:10:21'),(155,'::1','/variant','2021-11-25 17:10:21'),(156,'::1','/variant','2021-11-25 17:10:21'),(157,'::1','/variant','2021-11-25 17:10:21'),(158,'::1','/variant','2021-11-25 17:10:21'),(159,'::1','/variant','2021-11-25 17:11:54'),(160,'::1','/variant','2021-11-25 17:12:27'),(161,'::1','/variant','2021-11-25 17:12:41'),(162,'::1','/variant','2021-11-25 17:12:41'),(163,'::1','/variant','2021-11-25 17:12:57'),(164,'::1','/variant','2021-11-25 17:13:00'),(165,'::1','/variant','2021-11-25 17:13:00'),(166,'::1','/variant','2021-11-25 17:13:00'),(167,'::1','/variant','2021-11-25 17:13:00'),(168,'::1','/variant','2021-11-25 17:13:00'),(169,'::1','/variant','2021-11-25 17:13:00'),(170,'::1','/variant','2021-11-25 17:13:00'),(171,'::1','/variant','2021-11-25 17:13:30'),(172,'::1','/variant','2021-11-25 17:13:50'),(173,'::1','/variant','2021-11-25 17:13:52'),(174,'::1','/variant','2021-11-25 17:22:49'),(175,'::1','/variant','2021-11-25 17:22:52'),(176,'::1','/variant','2021-11-25 17:22:55'),(177,'::1','/variant','2021-11-25 17:23:08'),(178,'::1','/variant','2021-11-25 17:24:04'),(179,'::1','/variant','2021-11-25 17:24:10'),(180,'::1','/variant','2021-11-25 17:24:37'),(181,'::1','/variant','2021-11-25 17:24:39'),(182,'::1','/variant','2021-11-25 17:24:52'),(183,'::1','/variant','2021-11-25 17:31:00'),(184,'::1','/variant','2021-11-25 17:31:11');
/*!40000 ALTER TABLE `log_request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `request`
--

DROP TABLE IF EXISTS `request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `request` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_dorayaki` int NOT NULL,
  `jumlah` int NOT NULL,
  `status` varchar(25) NOT NULL DEFAULT 'waiting',
  `timestamp` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_dorayaki` (`id_dorayaki`),
  CONSTRAINT `request_ibfk_1` FOREIGN KEY (`id_dorayaki`) REFERENCES `dorayaki` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `request`
--

LOCK TABLES `request` WRITE;
/*!40000 ALTER TABLE `request` DISABLE KEYS */;
INSERT INTO `request` (`id`, `id_dorayaki`, `jumlah`, `status`, `timestamp`) VALUES (1,1,5,'accepted','2021-11-18 19:49:28'),(2,1,3,'declined','2021-11-24 15:16:01'),(3,1,10,'declined','2021-11-24 15:16:36'),(4,1,3,'accepted','2021-11-25 14:29:59'),(5,1,12,'waiting','2021-11-25 15:03:54'),(6,1,12,'waiting','2021-11-25 15:37:13'),(7,1,12,'waiting','2021-11-25 15:37:41');
/*!40000 ALTER TABLE `request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resep`
--

DROP TABLE IF EXISTS `resep`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `resep` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_dorayaki` int NOT NULL,
  `id_bahanbaku` int NOT NULL,
  `jumlah` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_dorayaki` (`id_dorayaki`),
  KEY `id_bahanbaku` (`id_bahanbaku`),
  CONSTRAINT `resep_ibfk_1` FOREIGN KEY (`id_dorayaki`) REFERENCES `dorayaki` (`id`),
  CONSTRAINT `resep_ibfk_2` FOREIGN KEY (`id_bahanbaku`) REFERENCES `bahanbaku` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resep`
--

LOCK TABLES `resep` WRITE;
/*!40000 ALTER TABLE `resep` DISABLE KEYS */;
INSERT INTO `resep` (`id`, `id_dorayaki`, `id_bahanbaku`, `jumlah`) VALUES (1,1,1,4),(2,1,2,5),(3,2,2,3),(5,2,3,1),(6,3,2,10);
/*!40000 ALTER TABLE `resep` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(75) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-26 13:03:55
