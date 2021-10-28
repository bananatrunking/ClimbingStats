USE climbing;

DROP TABLE IF EXISTS `climbing`;
CREATE TABLE `climbing` (
  `id` mediumint(9) NOT NULL AUTO_INCREMENT,
  `grade` varchar(5) NOT NULL,
  `color` varchar(15) DEFAULT NULL,
  `setter` varchar(20) DEFAULT NULL,
  `type` enum('toprope','sport','boulder','trad') NOT NULL,
  `location` varchar(50) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `climber` enum('Bart','Lisa') NOT NULL,
  `send` enum('redpoint','flash','onsight') DEFAULT NULL,
  `date` datetime NOT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `grades`;
CREATE TABLE `grades` (
  `grade` varchar(10) DEFAULT NULL,
  `score` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `grades` WRITE;
INSERT INTO `grades` VALUES ('5.5',5),('5.6',6),('5.7',7),('5.8',8),('5.9',9),('5.10',10.33),('5.10-',10),('5.10+',10.66),('5.10a',10),('5.10b',10.25),('5.10c',10.5),('5.10d',10.75),('5.11',11.33),('5.11-',11),('5.11+',11.66),('5.11a',11),('5.11b',11.25),('5.11c',11.5),('5.11d',11.75),('5.12-',12),('5.12',12.33),('5.12+',12.66),('5.12a',12),('5.12b',12.25),('5.12c',12.5),('5.12d',12.75),('v0',0),('v1',1),('v2',2),('v3',3),('v4',4),('v5',5),('v6',6),('v7',7),('v8',8),('v9',9),('v10',10);
UNLOCK TABLES;
