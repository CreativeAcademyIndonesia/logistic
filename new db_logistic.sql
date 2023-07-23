-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 23, 2023 at 03:53 PM
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
  `tanggal` timestamp NOT NULL DEFAULT current_timestamp(),
  `Status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `armada`
--

INSERT INTO `armada` (`Id`, `Nama_Pemilik_Truck`, `Sopir_Truck`, `DG_Truck`, `No_STNK`, `Alamat_STNK`, `No_HP_Pemilik_Truck`, `No_HP_Sopir_Truck`, `Masa_Berlaku_STNK`, `Tanggal_PAS_Masuk`, `Tanggal_PAS_Akhir`, `tanggal`, `Status`) VALUES
(6, 'ASD', 'Nisi quia dicta ut a', 'Lorem quo animi exp', 'Excepturi sunt ea e', 'Occaecat velit aut ', 'Eveniet obcaecati a', 'Aliquam id soluta i', '2007-11-18', '1983-07-11', '1972-08-31', '2023-07-22 13:24:36', 'Nisi quidem sit tot'),
(7, '1', '2', '3', '4', '5', '6', '8', '1991-07-09', '1974-09-06', '2007-03-13', '2023-07-22 13:24:45', 'Velit cumque pariatu');

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

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`id`, `ID_Pengiriman`, `tanggal`, `status`, `deskripsi`) VALUES
(13, 25, '2023-07-23', 'Dalam Pengiriman', 'Status ini masih adlam pengiriman '),
(14, 25, '2023-07-24', 'Surabaya', 'Pengiriman baru saja sampai di surabaya');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jadwal`
--

INSERT INTO `jadwal` (`Id`, `Nama_Kapal`, `No_Voyage`, `Tanggal_Clossing`, `Rute_dan_Tujuan`, `Rute_Panjang`, `Date_RangeETD`, `Date_RangeETA`) VALUES
(5, 'A', '3321', '2023-07-23', 'Bandung', 'Jakarta', '2020-11-01', '2021-10-22'),
(6, 'B', '3322', '2023-07-24', 'Surabaya', 'Jakarta', '2020-11-01', '2021-10-22'),
(7, 'C', '3322', '2023-07-24', 'Majalaya', 'Tasikmalaya', '2020-11-01', '2021-10-22');

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
  `Jangka_Waktu_Kerja_Sama` varchar(50) NOT NULL,
  `tanggal` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mitra`
--

INSERT INTO `mitra` (`Id`, `Nama_Mitra`, `Alamat_Mitra`, `Pemilik_Owner`, `NPWP_Mitra`, `Contac_Person`, `Jangka_Waktu_Kerja_Sama`, `tanggal`) VALUES
(6, 'A', 'B', 'C', 'D', 'E', 'F', '2023-07-22 11:57:00'),
(7, '1', '2', '3', '4', '5', '6', '2023-07-22 12:36:26');

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
  `tanggal` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `penerimaan`
--

INSERT INTO `penerimaan` (`ID_Penerimaan`, `Nama_Pengirim`, `No_Hp_Pengirim`, `No_Ktp_Pengirim`, `No_Npwp_Pengirim`, `Jenis_Barang`, `Layanan`, `Alamat_Pengirim`, `dari`, `ke`, `Alamat_Tujuan`, `Nama_Penerima`, `No_Hp_Penerima`, `No_Ktp_Penerima`, `Shipping_Line`, `Nama_Kapal`, `No_Container`, `No_Bl`, `tanggal`) VALUES
(5, '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '2023-07-22 11:35:14'),
(6, 'Harum aspernatur eni', 'Minim qui praesentiu', 'Repudiandae nemo lab', 'Ex magnam anim exerc', 'Voluptatem corrupti', 'Id a ea incidunt d', 'Veniam ab commodo h', 'Voluptas quos ea sed', 'Nostrud tempore qui', 'Placeat commodi ull', 'Velit cupiditate ut ', 'Placeat vero volupt', 'Necessitatibus do du', 'Laudantium quaerat ', 'Nostrum sequi occaec', 'Pariatur Quidem nih', 'Suscipit in alias re', '2023-07-23 06:18:12'),
(7, 'Aut cillum quibusdam', 'Ea proident accusam', 'Officia repudiandae ', 'Ut neque error ab il', 'Iusto ad consequatur', 'Dolor in est debitis', 'Deserunt quis animi', 'Voluptas quia debiti', 'Commodi et sunt irur', 'Excepturi et saepe a', 'Inventore optio fug', 'Maxime culpa amet ', 'Laudantium sed reru', 'Possimus voluptatib', 'Sunt dolor quis qui', 'In in Nam id fugiat ', 'Molestias eum verita', '2023-01-23 06:18:17');

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
  `tanggal` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pengiriman`
--

INSERT INTO `pengiriman` (`ID_Pengiriman`, `Nama_Pengirim`, `No_Hp_Pengirim`, `No_Ktp_Pengirim`, `No_Npwp_Pengirim`, `Jenis_Barang`, `Layanan`, `Alamat_Pengirim`, `dari`, `ke`, `Alamat_Tujuan`, `Nama_Penerima`, `No_Hp_Penerima`, `No_Ktp_Penerima`, `Shipping_Line`, `Nama_Kapal`, `No_Container`, `No_Bl`, `tanggal`) VALUES
(21, 'Veritatis laudantium', 'Soluta in ut volupta', 'Quia dolore consequa', 'Blanditiis assumenda', 'Consectetur natus de', 'Eligendi molestiae o', 'Ipsam aut nobis enim', 'Rem possimus sed il', 'Est ullamco ipsum ', 'Sunt obcaecati aut ', 'Vel itaque quidem ip', 'Quia deserunt quibus', 'Iusto non sunt harum', 'PT. SALAM PACIFIC INDONESIA LINES', 'Dolor ut magna sit ', '3321', 'Fugit quos minima v', '2023-08-22 08:28:24'),
(22, 'namaPengirim', 'noHpPengirim', 'noKtpPengirim', 'noNpwpPengirim', 'jenisBarang', 'layanan', 'alamatPengirim', 'from', 'to', 'alamatTujuan', 'namaPenerima', 'noHpPenerima', 'noKtpPenerima', 'PT. TANTO INTIM LINE', 'namaKapal', '3322', 'noBl', '2023-07-22 08:37:12'),
(23, 'Temporibus odit dolo', 'Officiis omnis labor', 'Aut nisi quidem culp', 'Reprehenderit eu iu', 'Voluptatem deleniti', 'Architecto omnis rer', 'Id at eligendi est a', 'Consequatur qui har', 'Fuga Sed est dolor ', 'Velit fugiat quae n', 'Dicta deserunt velit', 'Fugiat qui ipsam fa', 'Ad officiis nihil bl', 'PT. TANTO INTIM LINE', 'Commodo harum maiore', '3323', 'Illum ut consectetu', '2023-07-22 12:42:04'),
(24, 'Voluptatem Hic offi', 'Aut perferendis debi', 'Maiores quo ratione ', 'Exercitationem quasi', 'Nulla do at distinct', 'Saepe ullam recusand', 'Laudantium minus ve', 'Et sed sit sapiente ', 'Aliquip eveniet ull', 'Optio deserunt odio', 'Sed omnis possimus ', 'Et blanditiis ducimu', 'Eos quis necessitat', 'PT. TANTO INTIM LINE', 'Voluptatem Inventor', '3324', 'Cumque architecto bl', '2023-07-23 03:01:27'),
(25, 'Consequat Debitis r', 'Dolor sint ea laudan', 'Ullamco numquam ex e', 'Atque qui voluptatem', 'Porro sequi atque si', 'Dolore facilis conse', 'Facere quidem volupt', 'Architecto amet sin', 'Laborum Voluptas ip', 'Perferendis est dolo', 'Voluptas pariatur Q', 'Rerum corrupti volu', 'Cum velit voluptate', 'PT. TEMPURAN MAS', 'Omnis non incidunt ', 'A3325', 'Dolore eum sequi sed', '2023-07-23 06:03:41'),
(26, 'Veritatis laudantium', 'Soluta in ut volupta', 'Quia dolore consequa', 'Blanditiis assumenda', 'Consectetur natus de', 'Eligendi molestiae o', 'Ipsam aut nobis enim', 'Rem possimus sed il', 'Est ullamco ipsum ', 'Sunt obcaecati aut ', 'Vel itaque quidem ip', 'Quia deserunt quibus', 'Iusto non sunt harum', 'PT. SALAM PACIFIC INDONESIA LINES', 'Dolor ut magna sit ', '3326', 'Fugit quos minima v', '2023-09-22 08:28:24');

-- --------------------------------------------------------

--
-- Table structure for table `simulasi`
--

CREATE TABLE `simulasi` (
  `id` int(11) NOT NULL,
  `Kota_Asal` varchar(100) NOT NULL,
  `Kota_Tujuan` varchar(100) NOT NULL,
  `Harga` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `simulasi`
--

INSERT INTO `simulasi` (`id`, `Kota_Asal`, `Kota_Tujuan`, `Harga`) VALUES
(4, 'Bandung', 'Jakarta', 50000),
(6, 'Bandung', 'Surabaya', 60000),
(7, 'Malang', 'Mojokerto', 60000);

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
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `jadwal`
--
ALTER TABLE `jadwal`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `mitra`
--
ALTER TABLE `mitra`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `penerimaan`
--
ALTER TABLE `penerimaan`
  MODIFY `ID_Penerimaan` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `pengiriman`
--
ALTER TABLE `pengiriman`
  MODIFY `ID_Pengiriman` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `simulasi`
--
ALTER TABLE `simulasi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `history`
--
ALTER TABLE `history`
  ADD CONSTRAINT `history_ibfk_1` FOREIGN KEY (`ID_Pengiriman`) REFERENCES `pengiriman` (`ID_Pengiriman`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
