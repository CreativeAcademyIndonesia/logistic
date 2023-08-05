-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 05, 2023 at 09:09 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_logistic`
--

-- --------------------------------------------------------

--
-- Table structure for table `armada`
--

CREATE TABLE `armada` (
  `Id` int(11) NOT NULL,
  `Nama_Pemilik_Truck` varchar(255) DEFAULT NULL,
  `Sopir_Truck` varchar(255) DEFAULT NULL,
  `DG_Truck` varchar(255) DEFAULT NULL,
  `No_STNK` varchar(255) DEFAULT NULL,
  `Alamat_STNK` varchar(255) DEFAULT NULL,
  `No_HP_Pemilik_Truck` varchar(255) DEFAULT NULL,
  `No_HP_Sopir_Truck` varchar(255) DEFAULT NULL,
  `Masa_Berlaku_STNK` date DEFAULT NULL,
  `Tanggal_PAS_Masuk` date DEFAULT NULL,
  `Tanggal_PAS_Akhir` date DEFAULT NULL,
  `tanggal` date NOT NULL DEFAULT current_timestamp(),
  `Status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `armada`
--
ALTER TABLE `armada`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `armada`
--
ALTER TABLE `armada`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
