-- phpMyAdmin SQL Dump
-- version 3.4.10.1deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 22, 2013 at 02:54 PM
-- Server version: 5.5.29
-- PHP Version: 5.3.10-1ubuntu3.5



--
-- Database: `restaurant`
--

CREATE DATABASE `restaurant`;

USE `restaurant`;

-- --------------------------------------------------------

--
-- Table structure for table `reservationTimes`
--

CREATE TABLE IF NOT EXISTS `reservationTimes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `time` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `reservationTimes`
--

INSERT INTO `reservationTimes` (`id`, `time`) VALUES
(1, '12:00'),
(2, '13:00'),
(3, '14:00'),
(4, '15:00'),
(5, '20:00'),
(6, '21:00'),
(7, '22:00'),
(8, '23:00');

--
-- Table structure for table `tablePreferences`
--

CREATE TABLE IF NOT EXISTS `tablePreferences` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `preference` varchar(150) NOT NULL,
  `price`  dec(6,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `tablePreferences`
--

INSERT INTO `tablePreferences` (`id`, `preference`, `price`) VALUES
(1, 'Next to the wiondow', 1.25),
(2, 'At the Terrace', 3.26),
(3, 'Private room', 5.28);

--
-- Table structure for table `specialRequests`
--

CREATE TABLE IF NOT EXISTS `specialRequests` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `request` varchar(150) NOT NULL,
  `price`  dec(6,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `specialRequests`
--

INSERT INTO `specialRequests` (`id`, `request`, `price`) VALUES
(1, 'Vegetarian Menu', 3.25),
(2, 'Menu for celiacs', 6.28),
(3, 'Lactose alergic', 4.23);

-- --------------------------------------------------------

-- --------------------------------------------------------

-- --------------------------------------------------------

--
-- Table structure for table `reservations`
--

CREATE TABLE IF NOT EXISTS `reservations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `surname` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `reservationDate` varchar(150) NOT NULL,
  `reservationTimeId` int(11) NOT NULL,
  `totalPrice`  dec(6,2) NOT NULL,
  `tablePreferenceId` int(11) NOT NULL,
   `telephone` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `reservationTimeId` (`reservationTimeId`),
  KEY `tablePreferenceId` (`tablePreferenceId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Table structure for table `users`
--
CREATE TABLE IF NOT EXISTS `reservationsSpecialRequests` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `reservationId` int(11) NOT NULL,
  `specialRequestId`  int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `reservationId` (`reservationId`),
  KEY `specialRequestId` (`specialRequestId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;


--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `surname1` varchar(150) NOT NULL,
  `nick` varchar(150) NOT NULL,
  `password` varchar(150) NOT NULL,
  `address` varchar(150) NOT NULL,
  `telephone` int(11),
  `mail` varchar(150) NOT NULL,
  `birthDate` varchar(150) NOT NULL,
  `entryDate` varchar(150) NOT NULL,
  `dropOutDate` varchar(150) NOT NULL,
  `active` boolean NOT NULL,
  `image` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `users`
--
INSERT INTO `users` (`id`, `name`, `surname1`, `nick`, `password`, `address`, `telephone`, `mail`, `birthDate`, `entryDate`, `dropOutDate`, `active`, `image`) VALUES
(1, 'Jhon', 'Peterson', 'user1', '123456', 'Address1', 933333333, 'r1@r.com', '1975-01-01', '2014-01-01', '0000-00-00', true, 'images/usersImages/user1.jpeg'),
(2, 'Jhon1', 'Peterson1', 'user2', '123456', 'Address2', 933333333, 'r2@r.com', '1975-01-01', '2014-01-01', '0000-00-00', true, 'images/usersImages/user2.jpeg'),
(3, 'Jhon2', 'Peterson2', 'user3', '123456', 'Address3', 933333333, 'r3@r.com', '1975-01-01', '2014-01-01', '0000-00-00', true, 'images/usersImages/user3.jpeg');


--
-- Constraints for table `reservations`
--
ALTER TABLE `reservations`
	ADD CONSTRAINT `FK_reservationTimeId` FOREIGN KEY (`reservationTimeId`) REFERENCES `reservationTimes` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_tablePreferenceId` FOREIGN KEY (`tablePreferenceId`) REFERENCES `tablePreferences` (`id`) ON DELETE CASCADE;

  ALTER TABLE `reservationsSpecialRequests`
    ADD CONSTRAINT `FK_reservationId` FOREIGN KEY (`reservationId`) REFERENCES `reservations` (`id`) ON DELETE CASCADE,
    ADD CONSTRAINT `FK_specialRequestId` FOREIGN KEY (`specialRequestId`) REFERENCES `specialRequests` (`id`) ON DELETE CASCADE;
