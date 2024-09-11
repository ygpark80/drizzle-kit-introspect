CREATE DATABASE IF NOT EXISTS mydb;
USE mydb;

CREATE TABLE `media_result` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `duration` decimal(10,5) unsigned DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
