create database graphQlTutorial;

CREATE TABLE `graphQlTutorial`.`User` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `status` VARCHAR(45) NULL,
  `posts` INT NULL,
  PRIMARY KEY (`id`));

  CREATE TABLE `graphQlTutorial`.`Post` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NULL,
  `content` VARCHAR(450) NULL,
  `imageUrl` VARCHAR(45) NULL,
  `creator` INT NULL,
  `createdAt` DATETIME NULL,
  `updatedAt` DATETIME NULL,
  PRIMARY KEY (`id`));

