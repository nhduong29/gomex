-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 18, 2015 at 04:26 AM
-- Server version: 5.6.24
-- PHP Version: 5.5.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `nhduong_extension`
--

-- --------------------------------------------------------

--
-- Table structure for table `extension_setting`
--
CREATE DATABASE nhduong_extension;

CREATE TABLE IF NOT EXISTS `extension_setting` (
  `id` int(11) NOT NULL,
  `url` varchar(255) DEFAULT NULL,
  `time` int(11) NOT NULL,
  `popup_type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `extension_setting`
--

INSERT INTO `extension_setting` (`id`, `url`, `time`, `popup_type`) VALUES
(1, 'http://localhost/HoangTaiExtension/url.php?id=1', 20, 'new_tab'),
(2, 'http://localhost/HoangTaiExtension/url.php?id=2', 10, 'new_tab'),
(3, 'http://localhost/HoangTaiExtension/url.php?id=3', 10, 'new_tab_active'),
(4, 'http://localhost/HoangTaiExtension/url.php?id=4', 13, 'new_tab_active'),
(5, 'http://localhost/HoangTaiExtension/url.php?id=5', 15, 'new_window'),
(6, 'http://localhost/HoangTaiExtension/url.php?id=6', 16, 'new_window'),
(7, 'http://localhost/HoangTaiExtension/url.php?id=7', 17, 'new_window_active'),
(8, 'http://localhost/HoangTaiExtension/url.php?id=8', 18, 'new_window_active'),
(9, '', 19, 'new_tab'),
(10, '', 20, 'new_tab');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `extension_setting`
--
ALTER TABLE `extension_setting`
  ADD PRIMARY KEY (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
