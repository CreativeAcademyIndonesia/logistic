-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 20, 2023 at 04:29 PM
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
-- Table structure for table `pengiriman`
--

CREATE TABLE `pengiriman` (
  `ID Pengiriman` varchar(50) NOT NULL,
  `Nama Pengirim` varchar(50) NOT NULL,
  `No Hp Pengirim` varchar(50) NOT NULL,
  `No Ktp Pengirim` varchar(50) NOT NULL,
  `No Npwp Pengirim` varchar(50) NOT NULL,
  `Jenis Barang` varchar(100) NOT NULL,
  `Layanan` varchar(50) NOT NULL,
  `Alamat Pengirim` varchar(100) NOT NULL,
  `From_` varchar(50) NOT NULL,
  `To_` varchar(50) NOT NULL,
  `Alamat Tujuan` varchar(100) NOT NULL,
  `Nama Penerima` varchar(50) NOT NULL,
  `No Hp Penerima` varchar(50) NOT NULL,
  `No Ktp Penerima` varchar(50) NOT NULL,
  `Shipping Line` varchar(50) NOT NULL,
  `Nama Kapal` varchar(50) NOT NULL,
  `No Container` varchar(50) NOT NULL,
  `No Bl` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pengiriman`
--

INSERT INTO `pengiriman` (`ID Pengiriman`, `Nama Pengirim`, `No Hp Pengirim`, `No Ktp Pengirim`, `No Npwp Pengirim`, `Jenis Barang`, `Layanan`, `Alamat Pengirim`, `From_`, `To_`, `Alamat Tujuan`, `Nama Penerima`, `No Hp Penerima`, `No Ktp Penerima`, `Shipping Line`, `Nama Kapal`, `No Container`, `No Bl`) VALUES
('3321Lap1', 'Jhon Doe', '081115454', '31535468454', '61351654356', 'Jenialksd', 'Shipment', 'Bojong Becik', 'Bandung', 'Jakarta', 'alksdjfhl', 'Usep', '031268435654', '31264643546', '2', 'Ucok', 'Container', '654645');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pengiriman`
--
ALTER TABLE `pengiriman`
  ADD PRIMARY KEY (`ID Pengiriman`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
