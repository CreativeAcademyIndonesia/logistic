-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 08, 2023 at 07:45 AM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
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
  `tanggal` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `historypenerimaan`
--

CREATE TABLE `historypenerimaan` (
  `id` int(11) NOT NULL,
  `ID_Penerimaan` int(50) NOT NULL,
  `tanggal` date NOT NULL,
  `status` varchar(255) NOT NULL,
  `deskripsi` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `Date_RangeETA` date DEFAULT NULL,
  `tanggal` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `Jangka_Waktu_Kerja_Sama` date NOT NULL,
  `tanggal` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `penerimaan`
--

CREATE TABLE `penerimaan` (
  `ID_Penerimaan` int(50) NOT NULL,
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
  `No_Bl` varchar(50) NOT NULL,
  `tanggal` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Image` varchar(255) NOT NULL,
  `Pdf` varchar(255) NOT NULL,
  `Petugas_Stripping` varchar(100) NOT NULL,
  `Keterangan` varchar(100) NOT NULL,
  `Tgl_Stripping` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `No_Bl` varchar(50) NOT NULL,
  `tanggal` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Image` varchar(255) NOT NULL,
  `Pdf` varchar(255) NOT NULL,
  `Tgl_Stuffing` date NOT NULL,
  `Petugas_Stuffing` varchar(100) NOT NULL,
  `Keterangan` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `simulasi`
--

CREATE TABLE `simulasi` (
  `id` int(11) NOT NULL,
  `Kota_Asal` varchar(100) NOT NULL,
  `Kota_Tujuan` varchar(100) NOT NULL,
  `Harga` int(100) NOT NULL,
  `tanggal` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
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
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ID_Pengiriman` (`ID_Pengiriman`);

--
-- Indexes for table `historypenerimaan`
--
ALTER TABLE `historypenerimaan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ID_Penerimaan` (`ID_Penerimaan`);

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
  ADD PRIMARY KEY (`ID_Penerimaan`);

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
-- AUTO_INCREMENT for table `historypenerimaan`
--
ALTER TABLE `historypenerimaan`
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
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `penerimaan`
--
ALTER TABLE `penerimaan`
  MODIFY `ID_Penerimaan` int(50) NOT NULL AUTO_INCREMENT;

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
  ADD CONSTRAINT `history_ibfk_1` FOREIGN KEY (`ID_Pengiriman`) REFERENCES `pengiriman` (`ID_Pengiriman`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `historypenerimaan`
--
ALTER TABLE `historypenerimaan`
  ADD CONSTRAINT `historypenerimaan_ibfk_1` FOREIGN KEY (`ID_Penerimaan`) REFERENCES `penerimaan` (`ID_Penerimaan`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
