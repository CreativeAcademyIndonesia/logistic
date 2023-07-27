-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 27, 2023 at 11:46 AM
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
  `Tanggal_PAS_Akhir` date DEFAULT NULL,
  `tanggal` timestamp NOT NULL DEFAULT current_timestamp(),
  `Status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `armada`
--

INSERT INTO `armada` (`Id`, `Nama_Pemilik_Truck`, `Sopir_Truck`, `DG_Truck`, `No_STNK`, `Alamat_STNK`, `No_HP_Pemilik_Truck`, `No_HP_Sopir_Truck`, `Masa_Berlaku_STNK`, `Tanggal_PAS_Masuk`, `Tanggal_PAS_Akhir`, `tanggal`, `Status`) VALUES
(9, 'A', '2', '3', '4', '5', '6', '7', '2023-07-18', '2023-07-27', '2023-07-23', '2023-07-25 07:54:04', 'a');

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

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`id`, `ID_Pengiriman`, `tanggal`, `status`, `deskripsi`) VALUES
(13, 25, '2023-07-23', 'Dalam Pengiriman', 'Status ini masih adlam pengiriman '),
(14, 25, '2023-07-24', 'Surabaya', 'Pengiriman baru saja sampai di surabaya'),
(15, 26, '2023-07-20', '3', '1'),
(17, 21, '2023-07-25', '20', '20');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
  `tanggal` timestamp NOT NULL DEFAULT current_timestamp(),
  `Image` varchar(255) NOT NULL,
  `Pdf` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `penerimaan`
--

INSERT INTO `penerimaan` (`ID_Penerimaan`, `Nama_Pengirim`, `No_Hp_Pengirim`, `No_Ktp_Pengirim`, `No_Npwp_Pengirim`, `Jenis_Barang`, `Layanan`, `Alamat_Pengirim`, `dari`, `ke`, `Alamat_Tujuan`, `Nama_Penerima`, `No_Hp_Penerima`, `No_Ktp_Penerima`, `Shipping_Line`, `Nama_Kapal`, `No_Container`, `No_Bl`, `tanggal`, `Image`, `Pdf`) VALUES
(5, '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '2023-07-22 11:35:14', '', ''),
(6, 'Harum aspernatur eni', 'Minim qui praesentiu', 'Repudiandae nemo lab', 'Ex magnam anim exerc', 'Voluptatem corrupti', 'Id a ea incidunt d', 'Veniam ab commodo h', 'Voluptas quos ea sed', 'Nostrud tempore qui', 'Placeat commodi ull', 'Velit cupiditate ut ', 'Placeat vero volupt', 'Necessitatibus do du', 'Laudantium quaerat ', 'Nostrum sequi occaec', 'Pariatur Quidem nih', 'Suscipit in alias re', '2023-07-23 06:18:12', '', ''),
(7, 'Aut cillum quibusdam', 'Ea proident accusam', 'Officia repudiandae ', 'Ut neque error ab il', 'Iusto ad consequatur', 'Dolor in est debitis', 'Deserunt quis animi', 'Voluptas quia debiti', 'Commodi et sunt irur', 'Excepturi et saepe a', 'Inventore optio fug', 'Maxime culpa amet ', 'Laudantium sed reru', 'Possimus voluptatib', 'Sunt dolor quis qui', 'In in Nam id fugiat ', 'Molestias eum verita', '2023-01-23 06:18:17', '', ''),
(8, 'Quo quaerat distinct', 'Dignissimos deserunt', 'Veniam quasi commod', 'Dolor similique natu', 'Sunt tempora iste pl', 'Voluptatibus nisi ip', 'Nisi tempor natus qu', 'Vero dolor neque sim', 'Quo laboris omnis ip', 'Accusantium dolorum ', 'Velit non a iure quo', 'Voluptates sit facer', 'Pariatur Veritatis ', 'Lorem voluptatum del', 'Iure sunt quis quis ', 'Numquam molestiae co', 'Nihil impedit minus', '2023-07-27 09:42:19', '/MyPc/Project/logistic/storage/17dcff5b-6e01-44bf-8221-220ff03b8a85.jpg', '/MyPc/Project/logistic/storage/1ad78069-f827-4c43-9493-9d52e3ae412a.jpg');

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
  `tanggal` timestamp NOT NULL DEFAULT current_timestamp(),
  `Image` varchar(255) NOT NULL,
  `Pdf` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pengiriman`
--

INSERT INTO `pengiriman` (`ID_Pengiriman`, `Nama_Pengirim`, `No_Hp_Pengirim`, `No_Ktp_Pengirim`, `No_Npwp_Pengirim`, `Jenis_Barang`, `Layanan`, `Alamat_Pengirim`, `dari`, `ke`, `Alamat_Tujuan`, `Nama_Penerima`, `No_Hp_Penerima`, `No_Ktp_Penerima`, `Shipping_Line`, `Nama_Kapal`, `No_Container`, `No_Bl`, `tanggal`, `Image`, `Pdf`) VALUES
(21, 'Veritatis laudantium', 'Soluta in ut volupta', 'Quia dolore consequa', 'Blanditiis assumenda', 'Consectetur natus de', 'Eligendi molestiae o', 'Ipsam aut nobis enim', 'Rem possimus sed il', 'Est ullamco ipsum ', 'Sunt obcaecati aut ', 'Vel itaque quidem ip', 'Quia deserunt quibus', 'Iusto non sunt harum', 'PT. SALAM PACIFIC INDONESIA LINES', 'Dolor ut magna sit ', '3321', 'Fugit quos minima v', '2023-08-22 08:28:24', '', ''),
(22, 'namaPengirim', 'noHpPengirim', 'noKtpPengirim', 'noNpwpPengirim', 'jenisBarang', 'layanan', 'alamatPengirim', 'from', 'to', 'alamatTujuan', 'namaPenerima', 'noHpPenerima', 'noKtpPenerima', 'PT. TANTO INTIM LINE', 'namaKapal', '3322', 'noBl', '2023-07-22 08:37:12', '', ''),
(23, 'Temporibus odit dolo', 'Officiis omnis labor', 'Aut nisi quidem culp', 'Reprehenderit eu iu', 'Voluptatem deleniti', 'Architecto omnis rer', 'Id at eligendi est a', 'Consequatur qui har', 'Fuga Sed est dolor ', 'Velit fugiat quae n', 'Dicta deserunt velit', 'Fugiat qui ipsam fa', 'Ad officiis nihil bl', 'PT. TANTO INTIM LINE', 'Commodo harum maiore', '3323', 'Illum ut consectetu', '2023-07-22 12:42:04', '', ''),
(24, 'Voluptatem Hic offi', 'Aut perferendis debi', 'Maiores quo ratione ', 'Exercitationem quasi', 'Nulla do at distinct', 'Saepe ullam recusand', 'Laudantium minus ve', 'Et sed sit sapiente ', 'Aliquip eveniet ull', 'Optio deserunt odio', 'Sed omnis possimus ', 'Et blanditiis ducimu', 'Eos quis necessitat', 'PT. TANTO INTIM LINE', 'Voluptatem Inventor', '3324', 'Cumque architecto bl', '2023-07-23 03:01:27', '', ''),
(25, 'Consequat Debitis r', 'Dolor sint ea laudan', 'Ullamco numquam ex e', 'Atque qui voluptatem', 'Porro sequi atque si', 'Dolore facilis conse', 'Facere quidem volupt', 'Architecto amet sin', 'Laborum Voluptas ip', 'Perferendis est dolo', 'Voluptas pariatur Q', 'Rerum corrupti volu', 'Cum velit voluptate', 'PT. TEMPURAN MAS', 'Omnis non incidunt ', 'A3325', 'Dolore eum sequi sed', '2023-07-23 06:03:41', '', ''),
(26, 'Veritatis laudantium', 'Soluta in ut volupta', 'Quia dolore consequaasdas', 'Blanditiis assumenda', 'Consectetur natus de', 'Eligendi molestiae o', 'Ipsam aut nobis enim', 'Rem possimus sed il', 'Est ullamco ipsum ', 'Sunt obcaecati aut ', 'Vel itaque quidem ip', 'Quia deserunt quibus', 'Iusto non sunt harum', 'PT. SALAM PACIFIC INDONESIA LINES', 'Dolor ut magna sit ', '3326', 'Fugit quos minima v', '2023-09-22 08:28:24', '', ''),
(28, 'namaPengirim', 'noHpPengirim', 'noKtpPengirim', 'noNpwpPengirim', 'jenisBarang', 'layanan', 'alamatPengirim', 'from', 'to', 'alamatTujuan', 'namaPenerima', 'noHpPenerima', 'noKtpPenerima', 'shipingLine', 'namaKapal', 'noContainer', 'noBl', '2023-07-27 05:38:27', '', ''),
(29, 'namaPengirim', 'noHpPengirim', 'noKtpPengirim', 'noNpwpPengirim', 'jenisBarang', 'layanan', 'alamatPengirim', 'from', 'to', 'alamatTujuan', 'namaPenerima', 'noHpPenerima', 'noKtpPenerima', 'shipingLine', 'namaKapal', 'noContainer', 'noBl', '2023-07-27 05:38:53', '', ''),
(30, 'namaPengirim', 'noHpPengirim', 'noKtpPengirim', 'noNpwpPengirim', 'jenisBarang', 'layanan', 'alamatPengirim', 'from', 'to', 'alamatTujuan', 'namaPenerima', 'noHpPenerima', 'noKtpPenerima', 'shipingLine', 'namaKapal', 'noContainer', 'noBl', '2023-07-27 05:39:33', '', ''),
(31, 'Minim est officia an', 'Molestiae et nihil a', 'Ducimus harum sunt ', 'Esse ad similique do', 'Quae tempor deserunt', 'Ex rerum proident a', 'Dolor qui consectetu', 'Facilis quas rerum i', 'Amet omnis dolorem ', 'Recusandae Earum es', 'Autem magni velit ut', 'Adipisci architecto ', 'Quam quas enim sunt ', 'Veniam et eum quia ', 'Perspiciatis in dol', 'Lorem iste excepteur', 'Dolorem dolor error ', '2023-07-27 05:59:36', '', ''),
(32, 'Ratione cupiditate s', 'Cillum sit amet ani', 'Dignissimos perferen', 'Tempore doloribus d', 'Ipsam ut distinctio', 'Voluptas odit quidem', 'Dolorum ipsum cum o', 'Quidem debitis dicta', 'Fugit rerum in exce', 'Voluptas voluptas ve', 'Aliquid vel cupidata', 'In pariatur Neque i', 'Quae cum recusandae', 'Voluptatem dolores ', 'Velit cupiditate te', 'Labore mollit id re', 'Reprehenderit sit r', '2023-07-27 05:59:52', '', ''),
(33, 'Quaerat eu Nam velit', 'Asperiores magnam si', 'Qui illo animi veni', 'Molestiae at enim er', 'Esse quos magnam ob', 'In cum qui ratione e', 'Dolorum voluptates i', 'Ipsum sit consequa', 'Et mollit aut volupt', 'Et quidem voluptas a', 'Voluptatum quis culp', 'Qui dolore adipisici', 'Quo adipisci fuga A', 'Dolores voluptatem i', 'Quos eum rerum quis ', 'Rem facere corrupti', 'Lorem dolorem qui cu', '2023-07-27 09:14:12', '', ''),
(34, 'Dolorem voluptate do', 'Occaecat est mollit ', 'Ut veniam repellend', 'Autem sit eum mollit', 'Voluptas ea ex anim ', 'Voluptas eu officia ', 'Officia nobis at et ', 'Qui a qui nisi offic', 'Nulla qui odio amet', 'Culpa voluptates co', 'Perferendis in dolor', 'Qui minim quia unde ', 'Aspernatur est volu', 'Ipsam ex est volupta', 'Qui nesciunt adipis', 'Architecto ut autem ', 'Quia molestiae archi', '2023-07-27 09:21:23', '/MyPc/Project/logistic/storage/ad1bf1c6-5c7d-4657-a838-14ee1a2151b9.jpg', ''),
(35, 'Ea voluptas beatae s', 'Fugiat fugit amet', 'In ut dolorem nisi q', 'Eos voluptate et qu', 'Ut numquam totam in ', 'Cupiditate unde cons', 'Velit ipsum sapient', 'Necessitatibus conse', 'Iste velit quam comm', 'Pariatur Aut Nam co', 'Duis eos porro est d', 'Sed earum ut id quo', 'Aut saepe adipisicin', 'Molestias excepturi ', 'Corporis sed accusan', 'Minima Nam commodi d', 'Recusandae Nobis be', '2023-07-27 09:22:21', '/MyPc/Project/logistic/storage/1231562f-3467-43ac-aba6-1e783ed55ecd.jpg', ''),
(36, 'Soluta veniam eu au', 'Irure nulla irure au', 'Ut aspernatur et sed', 'Sunt tempor optio v', 'Commodo quo aliquid ', 'Qui esse numquam ac', 'Recusandae Omnis a ', 'Ipsa quam enim sunt', 'Aliqua Facilis veri', 'Molestiae rerum obca', 'Eligendi ut velit vo', 'Sit optio accusant', 'Unde quo quia adipis', 'Est qui aspernatur d', 'Dolore esse dolore v', 'Officia Nam aut porr', 'Omnis laudantium et', '2023-07-27 09:23:11', '/MyPc/Project/logistic/storage/f7fd9a53-8745-4598-8ee9-5e171231cee8.jpg', ''),
(37, 'Quo voluptatem qui n', 'Elit sed aut volupt', 'Amet ullam ducimus', 'Totam a sit perspic', 'Aut vitae molestias ', 'Rerum debitis recusa', 'Ut et nisi ipsum eum', 'Voluptas cum proiden', 'Autem cillum et cill', 'Nisi debitis laboris', 'Dolores necessitatib', 'Velit et velit temp', 'At consequatur nemo', 'Reprehenderit quidem', 'Ut maiores commodo e', 'Vitae qui necessitat', 'Tempora dolorum dolo', '2023-07-27 09:24:44', '', ''),
(38, 'In itaque dolore est', 'Anim et quam id poss', 'Aspernatur quis aut ', 'Praesentium in neces', 'Voluptatum quis accu', 'Nisi est est tempo', 'Mollitia dolor vero ', 'Voluptatem nesciunt', 'Enim et blanditiis r', 'Dolores blanditiis n', 'Assumenda voluptas e', 'Fugiat vel nihil vo', 'Eos necessitatibus o', 'Non irure aliquid ne', 'Omnis ut pariatur A', 'Fugiat est labore s', 'Voluptate tempora la', '2023-07-27 09:24:54', '', ''),
(39, 'Sapiente rerum quia ', 'Nulla incidunt reru', 'Veniam sed perferen', 'Repellendus Est qui', 'Unde ea enim laborum', 'Consequat Nemo quib', 'Aut in cillum molest', 'Excepturi sint facer', 'Non in voluptate vol', 'Eligendi in quibusda', 'Doloribus officia no', 'Possimus reiciendis', 'Aut vel ea earum in ', 'Animi esse non ips', 'Voluptates in molest', 'Deleniti qui et elig', 'Qui deserunt anim om', '2023-07-27 09:25:16', '/MyPc/Project/logistic/storage/8b39aa52-dd49-4558-b83a-cd974bb04b29.jpg', ''),
(40, 'Pariatur Eligendi v', 'Minima ea quasi aute', 'Magnam laborum Pari', 'Fuga Enim aliquam e', 'Sit sunt nemo dolore', 'Cupiditate atque ven', 'Nulla velit iste mo', 'Pariatur Consequunt', 'Ipsum sit non eu d', 'Fugiat sunt laboris', 'Quis incididunt odit', 'Labore sed voluptate', 'Et non non quas in t', 'Non sed adipisci pro', 'Sed quae alias dolor', 'Temporibus quia aut ', 'Cum veritatis velit', '2023-07-27 09:25:24', '', '/MyPc/Project/logistic/storage/0486859c-5dbf-4802-b210-345f5df4882b.jpg'),
(41, 'Magnam repellendus ', 'Qui consectetur dol', 'Dolorem autem quis q', 'Exercitationem disti', 'Incididunt aute et m', 'Dolores doloremque i', 'Aut voluptatem sint', 'Sit quae proident ', 'Maxime pariatur Ex ', 'Dolore voluptatibus ', 'Laboriosam exercita', 'In nemo aut quasi ad', 'Do explicabo Cillum', 'Tenetur et quas amet', 'Voluptatem qui repre', 'Aliquam Nam id et ad', 'Voluptas beatae volu', '2023-07-27 09:25:33', '', ''),
(42, 'Itaque ex ut pariatu', 'Dicta aspernatur mol', 'Velit dolore invent', 'Distinctio Maxime e', 'Fuga Tempora qui ve', 'Nostrum velit vero ', 'Enim quam et soluta ', 'Laborum Praesentium', 'Aut molestiae sed au', 'Voluptatum accusamus', 'Corporis rerum sit d', 'Sit at ab quia iusto', 'Voluptatibus illum ', 'Qui porro earum repu', 'Sunt aute consequatu', 'In vel eiusmod omnis', 'Et laborum iste accu', '2023-07-27 09:25:55', '', '/MyPc/Project/logistic/storage/9d482e61-5ce2-4928-bdf9-03cbf30a28ae.jpg'),
(43, 'Inventore dolorem im', 'Ut adipisci eu autem', 'Quis est nostrud ac', 'Dolores unde repelle', 'Sint minus non paria', 'Sed cumque amet lab', 'Modi magni dolore ha', 'Et officia reprehend', 'Facere sint cupidita', 'Ut rerum ea delectus', 'Et voluptatibus id ', 'Iure ut ipsa archit', 'Velit odit aut magni', 'Voluptatem nostrum ', 'Quis aut ad illo ven', 'Amet enim temporibu', 'Non enim maiores asp', '2023-07-27 09:26:08', '/MyPc/Project/logistic/storage/188773e7-9ffd-4dd6-9beb-bc412413faa9.jpg', ''),
(44, 'Illum laboris qui q', 'Fugiat nulla qui co', 'Sed ut reiciendis et', 'Itaque nesciunt sit', 'Exercitationem omnis', 'Quidem velit sapient', 'Ad exercitationem et', 'Obcaecati nobis perf', 'Duis ad rerum neque ', 'Laborum duis omnis v', 'Tempor possimus inc', 'Consequat Aliqua A', 'Mollit fuga Omnis e', 'Voluptatem id ipsum', 'Placeat nostrud et ', 'Et do cupiditate id', 'Aliquam aut quaerat ', '2023-07-27 09:26:21', '/MyPc/Project/logistic/storage/1fac8579-e35a-4105-9c2f-f5b7b47d80a3.jpg', ''),
(45, 'Quisquam provident ', 'Ut minima tempore v', 'Porro eveniet volup', 'Quos ad sed voluptat', 'Rerum quasi dicta in', 'Dolore officia qui o', 'A esse consequatur ', 'Illum facere proide', 'Natus consequatur D', 'Consectetur aspernat', 'Maiores corporis est', 'Soluta eum qui qui u', 'Consectetur ut odio', 'Quo id est consequa', 'Dolor quia doloremqu', 'Laboris quasi est do', 'Corrupti modi offic', '2023-07-27 09:27:47', '/MyPc/Project/logistic/storage/bb0e3fb0-7600-4004-a429-2f75ef76b2a8.jpg', '/MyPc/Project/logistic/storage/d704e4b4-ba28-42b7-aac6-4fdabe83ea3b.jpg'),
(46, 'Similique quos volup', 'Eligendi velit fugi', 'Voluptatum quidem ad', 'Vitae officia qui ei', 'Maxime esse nihil e', 'Architecto qui vel e', 'Incidunt saepe qui ', 'Explicabo Elit eni', 'Ut minim deserunt ve', 'Voluptatem eum aut c', 'Qui ut deleniti non ', 'Earum exercitationem', 'Ex voluptatibus magn', 'Cumque culpa mollit ', 'Molestiae ipsam saep', 'Est inventore aperi', 'Et ea fugit mollit ', '2023-07-27 09:28:05', '', ''),
(47, 'In nihil cupidatat m', 'Consequatur vel est ', 'Et magni laboris et ', 'Quasi sapiente liber', 'Eveniet consectetur', 'Non atque pariatur ', 'Veniam distinctio ', 'Ad molestias sed quo', 'Culpa aliquam dolore', 'Atque quis ut velit', 'Quas perspiciatis r', 'Quam et irure hic pl', 'Nostrum eum ipsum te', 'Repudiandae fugiat i', 'Aut accusamus aliqui', 'Quos veniam soluta ', 'Et ut eos sit blan', '2023-07-27 09:28:21', '/MyPc/Project/logistic/storage/7f6ef911-3457-4579-9168-1ff112ab8e0c.jpg', '/MyPc/Project/logistic/storage/94eab532-ac40-4bbd-802f-9144988555a8.jpg'),
(48, 'Enim illo ducimus i', 'Pariatur Fugit rep', 'Voluptas esse enim i', 'Minim provident tot', 'Omnis vel autem quae', 'Sed consectetur itaq', 'Corrupti ullamco no', 'Consequatur Ipsum ', 'Esse ea quae expedi', 'Accusantium dolore a', 'Laborum minus aliqui', 'Nihil proident sed ', 'Similique ipsam cons', 'Sequi magni ut velit', 'Quis nostrud natus d', 'Ut ad ea laboris eiu', 'Repudiandae id paria', '2023-07-27 09:31:17', 'localhost0c9e8b4f-1755-4a3a-9641-02bb79badd5a.jpg', 'localhostb9ba1dbf-f54c-4c9d-80dd-db9e4ff548e0.jpg'),
(49, 'Dolor distinctio Vo', 'Nemo non sint simili', 'Consectetur accusan', 'Vel omnis dolor iure', 'Enim molestias itaqu', 'Quod autem veritatis', 'Ad sapiente consequu', 'Incidunt perspiciat', 'Ut consequatur ipsum', 'Tempor eaque molesti', 'Recusandae Fugiat ', 'Minima similique ame', 'Aut cumque inventore', 'Autem et dolore recu', 'Officia repudiandae ', 'Consectetur eaque ad', 'Nemo velit obcaecat', '2023-07-27 09:35:26', '/MyPc/Project/logistic/storage/0294c321-be93-4ff5-b9b8-6d9413479dfe.jpg', '/MyPc/Project/logistic/storage/3cbb714b-220e-4f7d-a975-55005e1c93c4.jpg'),
(50, 'Quia anim pariatur ', 'Accusamus sit odit ', 'Architecto maiores n', 'Voluptatem molestiae', 'Eveniet autem archi', 'Dolorem quisquam ist', 'Dolores iure dolores', 'Sit et culpa sunt v', 'Et minus Nam omnis n', 'Tempora et voluptas ', 'Explicabo Sunt quis', 'Dolor est quae pers', 'Nobis esse quo vitae', 'Minima dignissimos m', 'Aliqua Qui eveniet', 'Sint velit perferen', 'Vel ea in dolor labo', '2023-07-27 09:35:43', '/MyPc/Project/logistic/storage/22896830-8caa-4dfb-8fd7-e54888c5b13d.jpg', '/MyPc/Project/logistic/storage/2d7069d5-b3e9-492e-ab75-f2286ed6c6c2.txt');

-- --------------------------------------------------------

--
-- Table structure for table `simulasi`
--

CREATE TABLE `simulasi` (
  `id` int(11) NOT NULL,
  `Kota_Asal` varchar(100) NOT NULL,
  `Kota_Tujuan` varchar(100) NOT NULL,
  `Harga` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `simulasi`
--

INSERT INTO `simulasi` (`id`, `Kota_Asal`, `Kota_Tujuan`, `Harga`) VALUES
(4, 'Bandung', 'Jakarta', 50000),
(6, 'Bandung', 'Surabaya', 60000),
(7, 'Malang', 'Mojokerto', 60000),
(8, 'asdf', 'asdf', 20);

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
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

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
  MODIFY `ID_Penerimaan` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `pengiriman`
--
ALTER TABLE `pengiriman`
  MODIFY `ID_Pengiriman` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `simulasi`
--
ALTER TABLE `simulasi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

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
