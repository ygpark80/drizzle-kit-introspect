CREATE DATABASE IF NOT EXISTS mydb;
USE mydb;

CREATE TABLE `sample` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `width` smallint unsigned DEFAULT NULL,
  `duration` decimal(10,5) unsigned DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
