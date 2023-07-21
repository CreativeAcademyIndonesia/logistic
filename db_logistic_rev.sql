-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 21, 2023 at 11:43 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

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
  `Tanggal_PAS_Akhir` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `id` int(11) NOT NULL,
  `ID_Pengiriman` int(50) NOT NULL,
  `tanggal` date NOT NULL,
  `status` varchar(100) NOT NULL,
  `deskripsi` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jadwal`
--

CREATE TABLE `jadwal` (
  `Id` int(11) NOT NULL,
  `Nama_Kapal` varchar(255) DEFAULT NULL,
  `No_Voyage` varchar(255) DEFAULT NULL,
  `Tanggal_Clossing` date DEFAULT NULL,
  `Rute_dan_Tujuan` varchar(255) DEFAULT NULL,
  `Rute_Panjang` varchar(255) DEFAULT NULL,
  `Date_RangeETD` date DEFAULT NULL,
  `Date_RangeETA` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `mitra`
--

CREATE TABLE `mitra` (
  `Id` int(11) NOT NULL,
  `Nama_Mitra` varchar(50) NOT NULL,
  `Alamat_Mitra` varchar(50) NOT NULL,
  `Pemilik_Owner` varchar(50) NOT NULL,
  `NPWP_Mitra` varchar(50) NOT NULL,
  `Contac_Person` varchar(50) NOT NULL,
  `Jangka_Waktu_Kerja_Sama` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `penerimaan`
--

CREATE TABLE `penerimaan` (
  `Id` int(11) NOT NULL,
  `Nama_Pengirim` varchar(255) DEFAULT NULL,
  `No_HP_Pengirim` varchar(255) DEFAULT NULL,
  `Nomor_KTP_Pengirim` varchar(255) DEFAULT NULL,
  `Nomor_NPWP_Pengirim` varchar(255) DEFAULT NULL,
  `Jenis_Barang` varchar(255) DEFAULT NULL,
  `Layanan` varchar(255) DEFAULT NULL,
  `Alamat_Pengirim` varchar(255) DEFAULT NULL,
  `Dooring_From` varchar(255) DEFAULT NULL,
  `Dooring_To` varchar(255) DEFAULT NULL,
  `Alamat_Doorng` varchar(255) DEFAULT NULL,
  `Nama_Penerima` varchar(255) DEFAULT NULL,
  `No_HP_Penerima` varchar(255) DEFAULT NULL,
  `No_KTP_Penerima` varchar(255) DEFAULT NULL,
  `Shipping_Line` varchar(255) DEFAULT NULL,
  `Nama_Kapal` varchar(255) DEFAULT NULL,
  `No_Container` varchar(255) DEFAULT NULL,
  `No_BL` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pengiriman`
--

CREATE TABLE `pengiriman` (
  `ID_Pengiriman` int(50) NOT NULL,
  `Nama_Pengirim` varchar(50) NOT NULL,
  `No_Hp_Pengirim` varchar(50) NOT NULL,
  `No_Ktp_Pengirim` varchar(50) NOT NULL,
  `No_Npwp_Pengirim` varchar(50) NOT NULL,
  `Jenis_Barang` varchar(100) NOT NULL,
  `Layanan` varchar(50) NOT NULL,
  `Alamat_Pengirim` varchar(100) NOT NULL,
  `dari` varchar(50) NOT NULL,
  `ke` varchar(50) NOT NULL,
  `Alamat_Tujuan` varchar(100) NOT NULL,
  `Nama_Penerima` varchar(50) NOT NULL,
  `No_Hp_Penerima` varchar(50) NOT NULL,
  `No_Ktp_Penerima` varchar(50) NOT NULL,
  `Shipping_Line` varchar(50) NOT NULL,
  `Nama_Kapal` varchar(50) NOT NULL,
  `No_Container` varchar(50) NOT NULL,
  `No_Bl` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pengiriman`
--

INSERT INTO `pengiriman` (`ID_Pengiriman`, `Nama_Pengirim`, `No_Hp_Pengirim`, `No_Ktp_Pengirim`, `No_Npwp_Pengirim`, `Jenis_Barang`, `Layanan`, `Alamat_Pengirim`, `dari`, `ke`, `Alamat_Tujuan`, `Nama_Penerima`, `No_Hp_Penerima`, `No_Ktp_Penerima`, `Shipping_Line`, `Nama_Kapal`, `No_Container`, `No_Bl`) VALUES
(4, 'asd', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `simulasi`
--

CREATE TABLE `simulasi` (
  `id` int(11) NOT NULL,
  `Kota_Asal` varchar(100) NOT NULL,
  `Kota_Tujuan` varchar(100) NOT NULL,
  `Harga` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `armada`
--
ALTER TABLE `armada`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ID_Pengiriman` (`ID_Pengiriman`);

--
-- Indexes for table `jadwal`
--
ALTER TABLE `jadwal`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `mitra`
--
ALTER TABLE `mitra`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `penerimaan`
--
ALTER TABLE `penerimaan`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `pengiriman`
--
ALTER TABLE `pengiriman`
  ADD PRIMARY KEY (`ID_Pengiriman`);

--
-- Indexes for table `simulasi`
--
ALTER TABLE `simulasi`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `armada`
--
ALTER TABLE `armada`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jadwal`
--
ALTER TABLE `jadwal`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `mitra`
--
ALTER TABLE `mitra`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `penerimaan`
--
ALTER TABLE `penerimaan`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pengiriman`
--
ALTER TABLE `pengiriman`
  MODIFY `ID_Pengiriman` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `simulasi`
--
ALTER TABLE `simulasi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `history`
--
ALTER TABLE `history`
  ADD CONSTRAINT `history_ibfk_1` FOREIGN KEY (`ID_Pengiriman`) REFERENCES `pengiriman` (`ID_Pengiriman`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
