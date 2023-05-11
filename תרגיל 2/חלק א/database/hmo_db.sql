-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: hmo_db
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Table structure for table `patients`
--

DROP TABLE IF EXISTS `patients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patients` (
  `PersonID` int NOT NULL,
  `positiveDate` date DEFAULT NULL,
  `recoveryDate` date DEFAULT NULL,
  PRIMARY KEY (`PersonID`),
  CONSTRAINT `patients_ibfk_1` FOREIGN KEY (`PersonID`) REFERENCES `users` (`PersonID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patients`
--

LOCK TABLES `patients` WRITE;
/*!40000 ALTER TABLE `patients` DISABLE KEYS */;
INSERT INTO `patients` VALUES (2,'2023-05-29','2023-05-31'),(22,'2023-05-01','2023-05-06'),(224,'2001-01-20','2002-02-20'),(234,'2005-04-20','2005-04-25'),(323,'2005-04-20','2005-04-28'),(444,'2022-05-01','2022-05-09'),(8888,'2005-04-20','2005-04-23'),(3456765,'2005-04-20',NULL),(111111111,'2002-02-20',NULL),(325265726,'2023-05-05','2023-05-09');
/*!40000 ALTER TABLE `patients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producers`
--

DROP TABLE IF EXISTS `producers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `producerName` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `producerName_UNIQUE` (`producerName`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producers`
--

LOCK TABLES `producers` WRITE;
/*!40000 ALTER TABLE `producers` DISABLE KEYS */;
INSERT INTO `producers` VALUES (1,'a'),(2,'b'),(8,'d');
/*!40000 ALTER TABLE `producers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `FirstName` varchar(50) NOT NULL,
  `LastName` varchar(50) NOT NULL,
  `PersonID` int NOT NULL,
  `Address` varchar(50) NOT NULL,
  `BirthDade` date NOT NULL,
  `Phone` int DEFAULT NULL,
  `cellphone` int NOT NULL,
  PRIMARY KEY (`PersonID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('b','n',0,'jdvsja','2003-03-20',123456789,4),('b','n',2,'jdvsja','2003-03-20',123456789,1111),('b','n',22,'jdvsja','2003-03-20',123456789,1111),('b','n',224,'jdvsja','2003-03-20',3,3),('b','n',234,'jdvsja','2003-03-20',123456789,57483),('b','n',323,'jdvsja','2003-03-20',123456789,4),('b','n',444,'jdvsja','2003-03-20',123456789,123456789),('b','n',8888,'jdvsja','2003-03-20',123456789,7),('b','n',3456765,'jdvsja','2003-03-20',123456789,7),('ayala','n',111111111,'jdvsja','2003-03-20',123456789,1111),('tamar','cohen',325265726,'bait shemesh','2009-01-20',527193975,549902572);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vaccinations`
--

DROP TABLE IF EXISTS `vaccinations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vaccinations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `PersonID` int DEFAULT NULL,
  `producer` int DEFAULT NULL,
  `vaccinationDate` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `PersonID` (`PersonID`),
  KEY `producer` (`producer`),
  CONSTRAINT `vaccinations_ibfk_1` FOREIGN KEY (`PersonID`) REFERENCES `users` (`PersonID`),
  CONSTRAINT `vaccinations_ibfk_2` FOREIGN KEY (`producer`) REFERENCES `producers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vaccinations`
--

LOCK TABLES `vaccinations` WRITE;
/*!40000 ALTER TABLE `vaccinations` DISABLE KEYS */;
INSERT INTO `vaccinations` VALUES (1,22,1,'2001-01-20'),(2,22,2,'2020-03-04'),(3,22,2,'2001-01-20'),(4,22,2,'2001-06-20'),(7,2,8,'2007-01-20');
/*!40000 ALTER TABLE `vaccinations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-11 21:50:39
