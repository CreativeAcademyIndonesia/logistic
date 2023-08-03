-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 03, 2023 at 05:51 PM
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
(9, 'A', '2', '3', '4', '5', '6', '7', '2023-07-18', '2023-07-27', '2023-07-23', '2023-07-25 07:54:04', 'a'),
(10, 'Et repellendus Moll', 'Assumenda mollitia e', 'Quod eiusmod dolorem', 'Fugit tenetur place', 'Nesciunt in et mole', 'Eos exercitation nem', 'Laudantium ut odio ', '1984-04-18', '2002-05-02', '1997-05-10', '2023-07-30 09:54:54', 'Cumque consequatur '),
(11, 'Aut et eos eiusmod m', 'Alias maiores offici', 'Velit quidem in min', 'Sunt id suscipit sit', 'Nisi est voluptas a ', 'Irure aut obcaecati ', 'Ea explicabo Et sin', '1980-05-26', '2017-04-17', '1978-10-20', '2023-08-02 13:03:20', 'Necessitatibus bland'),
(12, 'Asep', 'Earum adipisicing ve', 'Dignissimos omnis la', 'A voluptatum qui id', 'Ex qui quam dolore a', 'Recusandae Dolorem ', 'Ea voluptate omnis e', '1995-04-17', '2005-11-10', '2006-06-13', '2023-08-02 13:07:07', 'Consectetur reprehe'),
(13, 'Delina', 'Est dolor consequat', 'Sit numquam magnam ', 'Aspernatur mollitia ', 'Dolor eos et sunt ', 'Non aut in molestiae', 'Labore fugiat inven', '1991-09-07', '1992-02-14', '1986-12-16', '2023-08-02 13:08:34', 'Minima Nam minim dol'),
(14, 'June', 'Iste dolore id duis ', 'Dolor sunt dolor pro', 'Lorem vitae commodi ', 'Qui ut reiciendis se', 'Ut irure fugiat off', 'Magnam aperiam modi ', '1993-01-14', '2017-02-02', '1991-05-07', '2023-08-02 13:10:19', 'Dolores et laborum '),
(15, 'Omen Ucok', 'Ipsum commodo odit ', 'Nisi ullamco asperio', 'Veritatis quam est s', 'Veritatis possimus ', 'Qui quisquam occaeca', 'Aliquip aliquip omni', '1970-07-19', '2018-06-26', '1984-11-20', '2023-08-02 13:12:40', 'Fugiat voluptatibus'),
(16, 'Jhon LBF', 'Fugit eum omnis bea', 'Beatae enim autem na', 'Odio qui est sed vel', 'Deserunt et in volup', 'Ipsa tempore assum', 'Nisi sit quia dolore', '2012-04-12', '2002-05-01', '1992-10-17', '2023-08-02 13:15:03', 'Perspiciatis labore'),
(17, 'Facilis fugit excep', 'Fugiat libero quia ', 'Commodo reiciendis c', 'Ut iste dolorem saep', 'Consectetur et provi', 'Ut dolores ea necess', 'Animi explicabo Ob', '2019-08-23', '2003-02-19', '1987-12-04', '2023-08-03 12:41:47', 'Corrupti accusantiu'),
(18, 'Itaque cupidatat et ', 'Est eiusmod ad verit', 'Vel culpa aut ipsa ', 'Voluptates nesciunt', 'Numquam pariatur Ha', 'Qui ut ipsum cupida', 'Dolore et consequatu', '1979-04-28', '2000-10-27', '1995-02-06', '2023-08-03 12:42:01', 'Omnis vel do qui des'),
(19, 'Ullamco quo cupidata', 'Inventore aut et qui', 'Qui sint nulla quis ', 'Qui reprehenderit l', 'Voluptatem vel ea m', 'Et non sed doloremqu', 'Esse odit non volup', '1980-03-07', '1995-07-13', '1978-12-18', '2023-08-03 12:44:23', 'Fugiat aut dolore a'),
(20, 'Esse obcaecati moll', 'Ut sunt similique fu', 'Quis quos reiciendis', 'Et id aut laborum C', 'Culpa necessitatibus', 'Commodo expedita ten', 'Doloremque sed ea fu', '1995-03-01', '2018-01-23', '1989-12-14', '2023-08-03 12:44:39', 'Quia error non est i'),
(21, 'Sapiente eius numqua', 'Qui enim enim necess', 'Iusto reprehenderit', 'Magni necessitatibus', 'Esse dolorum ex cup', 'Reprehenderit simili', 'Veniam do ea quo ap', '2015-03-21', '2009-05-07', '1975-03-15', '2023-08-03 12:46:22', 'Est in ullam nemo in'),
(22, 'Aut est aut aliquam ', 'Sint nostrum blandi', 'Non odio neque repre', 'Libero nihil minima ', 'Labore quaerat adipi', 'Velit maiores nihil ', 'Quibusdam Nam et pos', '2012-10-26', '1991-01-19', '1979-11-19', '2023-08-03 12:46:33', 'Incididunt at assume'),
(23, 'Temporibus mollit de', 'Veniam vel qui quae', 'Optio corrupti adi', 'Totam anim eum volup', 'Ipsa asperiores qui', 'Enim est sed sunt ve', 'Asperiores non ipsam', '1986-05-08', '2012-07-14', '2006-03-24', '2023-08-03 12:46:40', 'Aut optio aut magni'),
(24, 'Et iure ipsa ex seq', 'Totam amet blanditi', 'Nihil ut error aut q', 'Placeat dolorum ali', 'Sit voluptate iure ', 'In est ratione enim ', 'Harum hic at nemo of', '1990-02-23', '2022-09-19', '1997-11-25', '2023-08-03 12:47:16', 'Dignissimos vero eve'),
(25, 'Mollit consequatur ', 'Necessitatibus conse', 'Ea accusamus est ve', 'Laudantium ea moles', 'Odio in consequatur', 'Quasi itaque quia am', 'Voluptatum vitae cum', '2001-08-11', '2007-07-19', '1975-01-21', '2023-08-03 12:47:32', 'In non laboris ab fu'),
(26, 'Inventore quae recus', 'Est hic quos dolores', 'Enim tempore volupt', 'Nulla deleniti alias', 'Reiciendis distincti', 'Provident autem des', 'Dolore asperiores ad', '1984-04-03', '2022-11-14', '1981-07-07', '2023-08-03 12:47:49', 'Ut lorem nisi conseq'),
(27, 'Sed eveniet illo id', 'Qui numquam aliqua ', 'Praesentium temporib', 'Deserunt aut natus l', 'Nisi beatae ad do du', 'Aut dolore nisi cons', 'Suscipit omnis volup', '1979-02-21', '1977-01-27', '2022-06-27', '2023-08-03 12:47:54', 'Libero nostrud ut mo'),
(28, 'Alias fugit aut dol', 'Autem ipsum rem magn', 'Culpa distinctio Qu', 'Error quia soluta ex', 'Non fugiat adipisci ', 'Laboris quae sed dol', 'Ea dolores quo eum v', '2016-07-16', '1977-10-27', '1986-01-18', '2023-08-03 12:48:09', 'Facilis ut doloremqu'),
(29, 'Voluptatum omnis ven', 'Culpa nemo cumque f', 'Tempore cupidatat c', 'Qui qui ea minus vel', 'Eius enim aspernatur', 'Quam et aute molesti', 'Aspernatur eius proi', '1974-11-09', '2013-04-12', '1972-08-24', '2023-08-03 12:48:59', 'Rerum magnam non dol'),
(30, 'Et obcaecati iusto u', 'Ut eum et officia in', 'Sunt illum repudian', 'Ab in ullamco fugiat', 'Et sint et laudanti', 'Assumenda eum deleni', 'Magni voluptate nece', '1978-08-07', '1987-08-11', '1972-08-27', '2023-08-03 12:49:13', 'Sequi adipisicing ut'),
(31, 'Sit earum et et aspe', 'Reprehenderit offici', 'Quod quidem totam fu', 'Voluptas cumque cons', 'Cupidatat voluptate ', 'Ea aspernatur aut vo', 'Excepturi magnam qui', '1994-04-06', '1990-08-01', '1984-10-02', '2023-08-03 12:51:06', 'Cum ut perferendis p'),
(32, 'Eligendi sint cum s', 'Aliqua Ea aperiam c', 'Est sunt ad porro ', 'Sint sapiente omnis ', 'Maxime veritatis ut ', 'Sunt eligendi quis ', 'Voluptatem vitae au', '2013-02-20', '1997-08-14', '1997-12-12', '2023-08-03 12:51:11', 'Odio dolore repudian'),
(33, 'Commodo officia dist', 'Dolor omnis neque qu', 'Enim est qui conseq', 'Debitis tempor dolor', 'Culpa nemo officia u', 'Id aut dolore dolore', 'Esse officia possimu', '1994-08-17', '1987-08-16', '1980-07-21', '2023-08-03 12:51:21', 'Quae sint neque rep'),
(34, 'Aperiam sunt est un', 'Sit est sint et iure', 'Elit et quod vel id', 'Omnis et excepturi e', 'Adipisci rerum ea al', 'Mollit id quia ex re', 'Eum animi cillum si', '2000-11-01', '1982-06-01', '2000-06-24', '2023-08-03 12:51:30', 'Assumenda sit perfer'),
(35, 'Facilis in aut labor', 'Fuga Vel error inci', 'Ab quam expedita pro', 'Velit non mollit ut ', 'Quam sint dolorem v', 'Ea sed non itaque te', 'Et aut ut aute modi ', '2014-06-27', '2023-11-07', '1976-01-28', '2023-08-03 12:51:34', 'Incidunt eius volup'),
(36, 'Architecto et unde l', 'Odio accusantium off', 'Sit sunt eum ab ul', 'Mollitia rerum labor', 'Quia quis at porro s', 'Officia quidem est e', 'Eos non velit adipi', '1971-02-22', '2007-05-03', '2002-05-05', '2023-08-03 12:51:43', 'Dolor molestiae comm'),
(37, 'Excepturi atque aper', 'Officia inventore la', 'Quos occaecat explic', 'Cupiditate iste quib', 'Nesciunt dolor itaq', 'Perspiciatis et ali', 'Corrupti nostrum se', '1976-06-11', '1973-04-02', '1974-07-27', '2023-08-03 12:52:18', 'Dolorem Nam in ratio'),
(38, 'Eos rerum maxime te', 'Ea sequi rerum volup', 'Quasi consectetur ex', 'Quaerat praesentium ', 'Debitis rerum maiore', 'Ipsa dolores nisi s', 'Tempora fuga Dignis', '1979-11-23', '1980-07-23', '1983-01-07', '2023-08-03 12:52:23', 'Labore quis totam al'),
(39, 'Nam quia aut ullam n', 'Dolor nulla ex moles', 'Officia sit quibusda', 'Fuga Porro omnis ex', 'Quia et ad corporis ', 'Voluptas eius ipsum', 'Amet sit autem ear', '2000-06-21', '1992-10-25', '1987-06-28', '2023-08-03 12:53:00', 'Animi sit illo vol'),
(40, 'Eos occaecat tenetur', 'Error consectetur a', 'Est cupiditate aute', 'Molestiae commodo ut', 'Qui voluptatum praes', 'Sit magnam odit offi', 'Omnis voluptas offic', '1984-04-02', '1996-08-09', '1983-05-05', '2023-08-03 12:54:02', 'Maxime est ea eiusmo'),
(41, 'Eos occaecat tenetur', 'Error consectetur a', 'Est cupiditate aute', 'Molestiae commodo ut', 'Qui voluptatum praes', 'Sit magnam odit offi', 'Omnis voluptas offic', '1984-04-02', '1996-08-09', '1983-05-05', '2023-08-03 12:54:02', 'Maxime est ea eiusmo'),
(42, 'Enim dolorem perfere', 'Possimus et facilis', 'Minima consequuntur ', 'Porro consectetur q', 'Eveniet quis volupt', 'In quam harum id con', 'Temporibus inventore', '2014-11-01', '1995-07-19', '2010-10-05', '2023-08-03 12:55:35', 'Ab qui harum similiq'),
(43, 'Error iste ea nisi n', 'Ipsum doloribus mole', 'Voluptate minima exe', 'Deleniti commodi ius', 'Natus porro aspernat', 'Atque sit odit possi', 'Occaecat dolor minim', '2021-04-27', '1972-01-17', '1993-08-02', '2023-08-03 12:55:42', 'Modi non exercitatio'),
(44, 'Minima repellendus ', 'Ut voluptate quis ea', 'Temporibus adipisici', 'Enim alias dignissim', 'Itaque deleniti solu', 'Elit id magnam ist', 'Totam blanditiis sed', '1979-01-19', '1991-10-20', '2021-01-08', '2023-08-03 12:56:05', 'Suscipit non aliquam'),
(45, 'Eligendi do et dolor', 'Ut commodo aut dolor', 'Lorem in at iusto ip', 'Et ratione Nam assum', 'Doloremque consequat', 'Nihil anim ratione a', 'Error obcaecati quia', '1981-10-06', '1981-10-19', '1981-01-01', '2023-08-03 12:56:24', 'Voluptatum sed cum d'),
(46, 'Est molestias fugiat', 'Ut iste voluptatem ', 'Porro nulla omnis am', 'Et delectus omnis h', 'Aut et et id do pers', 'Id consequatur Iust', 'Tenetur qui quis et ', '2014-09-21', '2016-03-09', '1974-09-21', '2023-08-03 12:56:36', 'Esse est itaque qui'),
(47, 'Blanditiis reiciendi', 'Laborum eligendi sun', 'Minus voluptatem non', 'Deserunt non quisqua', 'Velit vel ipsa mole', 'Nobis dolor incidunt', 'Vitae magnam sed a s', '2021-09-28', '1982-11-28', '1994-12-06', '2023-08-03 13:01:53', 'Recusandae Quis sun'),
(48, 'Aliqua Repellendus', 'Nemo deserunt sunt t', 'Sed sunt aliquam fug', 'Quia eos deserunt n', 'Alias laborum qui te', 'Est vero consequatu', 'Voluptate id enim s', '1994-10-18', '1993-12-17', '1977-04-04', '2023-08-03 13:02:26', 'Enim temporibus omni'),
(49, 'Voluptas enim ut inc', 'Nostrum natus minim ', 'Et et ut saepe hic q', 'Do vero recusandae ', 'Non aperiam sed dolo', 'Non aut dolor commod', 'Quis eum labore volu', '1974-01-27', '1987-07-19', '1988-08-12', '2023-08-03 13:02:46', 'Laborum voluptate in'),
(50, 'Harum consequatur A', 'In atque eu est opt', 'Velit est commodi v', 'Iusto facilis magni ', 'Quasi aut tempor et ', 'Tempore enim dolore', 'Omnis ut nostrum ani', '1975-02-27', '2001-04-02', '1980-09-16', '2023-08-03 13:03:37', 'Incidunt id eum dol'),
(51, 'Proident autem ex d', 'Aut esse quae vel et', 'Voluptatem quis duis', 'Enim corrupti obcae', 'Tempor nostrud eum v', 'Molestiae laboris ni', 'Fugit adipisci et a', '1989-01-10', '2010-02-02', '1994-03-22', '2023-08-03 13:06:48', 'Illo culpa aut ut es'),
(52, 'Exercitation explica', 'A incidunt cum ea v', 'Aliquip tenetur quae', 'Aut adipisci perspic', 'Quod eum quisquam of', 'Totam maiores maiore', 'Quia nisi alias nihi', '1973-07-05', '1989-05-11', '1991-09-21', '2023-08-03 13:08:47', 'Perferendis et offic'),
(53, 'Ad sit tempore ame', 'Sunt numquam esse q', 'Labore error veniam', 'Est accusantium dolo', 'Est soluta neque mag', 'Tempore ratione vol', 'Ea sit est et maxim', '1977-11-24', '1980-02-13', '1994-01-20', '2023-08-03 13:13:29', 'Et tenetur laudantiu'),
(54, 'Tempora a eos itaque', 'Sit dolore dicta no', 'Ut lorem molestias i', 'Nesciunt fugiat qui', 'Provident incidunt', 'Minim repudiandae vo', 'Fuga Eu nihil dolor', '1972-06-12', '2015-06-02', '1971-06-27', '2023-08-03 13:14:49', 'Excepteur exercitati'),
(55, 'Amet et porro venia', 'Do at sapiente ipsam', 'Voluptate rerum minu', 'Amet sit qui reici', 'Qui cupiditate qui a', 'Dolores perspiciatis', 'Est sit eiusmod co', '2010-09-01', '2011-12-21', '2003-12-14', '2023-08-03 13:14:53', 'Voluptas proident a'),
(56, 'Minus velit quis fac', 'Quisquam ad voluptas', 'Sunt sapiente est al', 'Quia at nemo ex labo', 'Soluta modi cumque q', 'Ea aperiam similique', 'Hic corrupti vel la', '2001-10-15', '1981-06-22', '1978-07-03', '2023-08-03 13:15:00', 'Maxime dicta maiores'),
(57, 'Ea rerum enim in fac', 'Nobis ullamco vel ab', 'Labore necessitatibu', 'Sunt quia doloremque', 'Veniam expedita sun', 'Esse cillum velit no', 'In voluptatem dolore', '1986-02-09', '1993-06-26', '1978-12-27', '2023-08-03 13:15:17', 'Dolor id enim qui fa'),
(63, 'Alias omnis voluptas', 'Necessitatibus volup', 'Sit dolor minima qu', 'Sit ratione aliquip', 'Occaecat similique d', 'Aut perspiciatis eo', 'Dolor voluptatem cor', '1996-10-08', '1998-06-17', '1986-08-22', '2023-08-03 14:05:42', 'Exercitation incidun'),
(64, 'Ut modi incididunt n', 'Occaecat non dolore ', 'Id minima et ut enim', 'Sit quisquam nihil n', 'Nobis alias soluta e', 'Ut unde explicabo Q', 'Aut tempore irure v', '1981-07-12', '2017-12-10', '2023-09-26', '2023-08-03 14:06:54', 'Dolores libero dolor'),
(67, 'Corrupti sapiente i', 'In voluptatem minim ', 'Sunt hic earum dolo', 'Aut velit do facili', 'Aut dolorum quia ips', 'Voluptate natus quis', 'Optio vero neque ni', '1971-04-07', '1993-08-26', '2012-04-28', '2023-08-03 14:09:07', 'Labore ullamco sunt '),
(68, 'Voluptas et error no', 'Dolor recusandae Qu', 'Sed in odio omnis se', 'Proident minima opt', 'Aspernatur recusanda', 'Explicabo Laborum ', 'Aut ad minima delect', '1981-05-12', '2005-06-12', '2019-10-09', '2023-08-03 14:13:07', 'Voluptates sunt ab d'),
(69, 'Ut architecto exerci', 'Mollitia molestiae e', 'In soluta eum deseru', 'Dolore aut accusanti', 'Quis ex amet nulla ', 'Ipsum fugiat modi ', 'Debitis deserunt tem', '2003-06-07', '1972-11-21', '2009-11-18', '2023-08-03 14:13:13', 'Recusandae Impedit'),
(70, 'Quia voluptatum rem ', 'Consectetur tempore', 'Debitis iure quia at', 'Aspernatur dolorem d', 'Inventore dolores ve', 'Qui elit temporibus', 'Sed nostrud nobis at', '2015-04-19', '1980-06-15', '2007-03-22', '2023-08-03 14:13:34', 'Deserunt quidem non '),
(71, 'Adipisci quam id con', 'Minima voluptatem do', 'Adipisci qui cumque ', 'Pariatur Praesentiu', 'Molestias voluptatem', 'Eius omnis repellend', 'Similique mollit ali', '1972-02-17', '2014-10-13', '2017-12-27', '2023-08-03 14:13:44', 'Iure voluptatem dict'),
(72, 'Id maiores saepe mol', 'Non consectetur exce', 'Sit ut aute sunt q', 'Molestias incidunt ', 'Esse et ut sunt re', 'Animi quis ea volup', 'Asperiores eos culp', '1994-01-20', '2004-04-18', '1997-04-27', '2023-08-03 14:14:05', 'In aliquid autem cor'),
(73, 'Laboris mollit vitae', 'Nihil elit dolor fa', 'Unde non anim id tot', 'Fuga Quibusdam mini', 'Qui quam id assumend', 'In atque aperiam ape', 'Ipsa minus aliquam ', '1970-08-26', '2003-12-11', '2023-01-22', '2023-08-03 14:14:42', 'Excepturi sed minus '),
(74, 'Quia modi laboriosam', 'Adipisci obcaecati c', 'Consequatur Eiusmod', 'Quia dolore eiusmod ', 'Inventore qui dolore', 'Autem adipisci enim ', 'Aut amet praesentiu', '2010-12-03', '2005-09-07', '2007-04-02', '2023-08-03 14:25:41', 'Eligendi voluptate f'),
(75, 'Proident asperiores', 'Ullam illum eius nu', 'Iusto rem deserunt v', 'Quis est laboriosam', 'Voluptas et ut ea ev', 'Autem porro culpa na', 'Est sed anim sunt c', '2004-10-27', '1996-03-28', '1998-11-13', '2023-08-03 14:26:32', 'Molestiae lorem volu'),
(76, 'Fugiat possimus al', 'Nemo est ullamco vol', 'Enim duis quis repre', 'Magna possimus numq', 'Maiores rerum dolore', 'Quia nisi ex praesen', 'Ut error ipsum dolor', '2015-05-03', '2009-06-09', '2022-06-09', '2023-08-03 14:26:57', 'A est quis tempore'),
(77, 'Rerum cillum repelle', 'Eius similique Nam a', 'Consequatur sunt do ', 'Iure voluptate proid', 'Nesciunt nulla cons', 'Iure maxime in deser', 'Et inventore ullam a', '2008-02-06', '2016-09-08', '1981-04-15', '2023-08-03 14:27:47', 'Ab officia ullamco e'),
(78, 'Voluptas possimus t', 'Enim incididunt et e', 'Et architecto in pro', 'Nostrum qui aliquip ', 'Aut quos totam quo e', 'Quia ullamco sit fug', 'Maiores sunt obcaec', '2007-09-06', '1986-02-18', '1996-06-11', '2023-08-03 14:28:06', 'Eius non et dolor re'),
(79, 'Tempor nihil nostrum', 'Aliquid enim ea qui ', 'Impedit cillum quod', 'Nam dolorem accusant', 'Voluptatem Aut dese', 'Voluptate qui dolor ', 'Expedita qui volupta', '2006-06-21', '2020-01-27', '1993-08-17', '2023-08-03 14:33:11', 'Eaque non quis et ma'),
(80, 'Nisi nihil sed nisi ', 'Fugiat ea illo esse', 'Excepteur soluta mag', 'Atque dicta corporis', 'Nostrud odio labore ', 'Et illum nobis face', 'Nam aut et adipisci ', '2017-07-20', '1990-02-15', '2009-03-19', '2023-08-03 14:33:22', 'Rerum facilis maiore'),
(81, 'Culpa quis harum eni', 'Dignissimos nesciunt', 'Voluptas mollitia ni', 'Non quis sit ex lor', 'Et voluptatibus mole', 'Fuga Occaecat amet', 'Neque ex molestias d', '1973-11-09', '2009-09-08', '1991-03-26', '2023-08-03 14:34:11', 'Vel rerum quia assum'),
(83, 'Debitis eum qui rati', 'Id debitis tempore ', 'Commodo Nam quod vol', 'Id delectus quia vo', 'Nihil autem quod inv', 'Delectus in sit ma', 'Et est laborum Ipsu', '1975-12-10', '1994-08-06', '1993-05-13', '2023-08-03 14:35:11', 'Dolores molestiae in'),
(84, 'Explicabo Pariatur', 'Omnis laboriosam in', 'Cupidatat saepe veni', 'Error voluptas do in', 'Qui ut quaerat rerum', 'Eaque et exercitatio', 'Neque distinctio Co', '1999-01-21', '1973-03-27', '1972-06-07', '2023-08-03 14:35:21', 'Velit in eveniet r'),
(85, 'Labore officia dolor', 'Culpa culpa consequ', 'Sequi perspiciatis ', 'Nulla do incididunt ', 'Sed obcaecati quia e', 'Dolores eos quod ad', 'Quis qui repellendus', '1986-12-04', '2017-10-06', '2023-09-04', '2023-08-03 14:36:35', 'Non culpa beatae nih'),
(86, 'Molestiae aliquid no', 'Voluptas blanditiis ', 'Magni distinctio Cu', 'Enim vero sunt null', 'Dolores dolore itaqu', 'Quo praesentium mini', 'Reprehenderit dolori', '1976-11-02', '1977-09-17', '2023-12-04', '2023-08-03 14:37:03', 'Consectetur in magni'),
(87, 'Ea aut numquam ex ex', 'Reiciendis similique', 'Fuga Nulla nostrud ', 'Quo necessitatibus r', 'Proident sed labore', 'Neque placeat eu pl', 'Sunt culpa repudian', '2021-05-10', '1973-10-25', '2011-04-24', '2023-08-03 14:37:23', 'Consequat A tempor '),
(88, 'Fugit labore volupt', 'Quis ut voluptatem ', 'Magnam exercitatione', 'Soluta eveniet duis', 'Cumque est Nam ipsu', 'Recusandae Aute non', 'Ullamco esse quaera', '2002-02-10', '1986-05-14', '1983-01-07', '2023-08-03 14:42:20', 'Similique commodo es'),
(89, 'Qui aliquam sunt eum', 'Eiusmod minus dolore', 'Nam fuga Dolor earu', 'Deserunt aperiam exp', 'Rerum ut et velit vo', 'Facilis tenetur sit ', 'Commodo labore tempo', '2007-11-18', '1982-02-12', '1978-06-13', '2023-08-03 14:44:29', 'In ullam quaerat inc'),
(90, 'Quibusdam quia quis ', 'Ea ea ratione et exe', 'Soluta facere aliqui', 'Consequuntur labore ', 'Excepteur enim imped', 'Ea odio sunt incidun', 'Aliqua Soluta sit i', '1980-11-10', '1993-05-07', '2004-12-06', '2023-08-03 14:45:05', 'Temporibus voluptate'),
(91, 'Iure voluptas qui iu', 'Aut omnis possimus ', 'Ex non perferendis v', 'Assumenda eaque aut ', 'Quia sapiente do vol', 'Mollitia porro conse', 'Fugiat suscipit sin', '1989-01-15', '1996-06-10', '2023-08-02', '2023-08-03 14:45:39', 'Aut ex nostrum volup'),
(92, 'Agus', 'In asperiores a cons', 'Iste voluptatum nobi', 'Facilis qui sequi fu', 'Recusandae Numquam ', 'Veritatis tempore l', 'Voluptas non ipsum ', '2006-09-11', '2001-02-23', '2018-04-23', '2023-08-03 14:45:44', 'Cum officia voluptat'),
(94, 'Id sed laboriosam a', 'Vel omnis voluptate ', 'Aperiam ab maiores d', 'Alias sed qui anim e', 'Molestiae adipisci e', 'Ullam iste ipsum rep', 'Voluptas culpa est ', '1975-11-06', '2000-03-12', '1993-06-18', '2023-08-03 14:55:19', 'Dolore est consecte'),
(95, 'Cupidatat distinctio', 'Beatae ea tempor est', 'Quia doloribus est ', 'Culpa reiciendis ut ', 'Laborum Repellendus', 'Est sit officia dict', 'Aliquip perspiciatis', '2014-03-04', '1985-02-18', '1980-10-11', '2023-08-03 15:14:25', 'Ad esse sint veniam');

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
  `tanggal` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jadwal`
--

INSERT INTO `jadwal` (`Id`, `Nama_Kapal`, `No_Voyage`, `Tanggal_Clossing`, `Rute_dan_Tujuan`, `Rute_Panjang`, `Date_RangeETD`, `Date_RangeETA`, `tanggal`) VALUES
(9, 'A', 'Voyage', '2023-07-01', 'Bandung', 'Jakarta', '2023-07-02', '2023-07-03', '2023-08-03'),
(10, 'Jadwal 1', 'Eum ut irure sunt si', '1981-03-23', 'At sit architecto q', 'Laboris dolores amet', '2015-06-11', '2021-09-23', '2023-08-03'),
(11, 'Jadwal2', 'Sint hic ipsum esse', '2007-05-16', 'Et sed praesentium s', 'Quae libero similiqu', '1983-04-14', '2023-07-14', '2023-08-03');

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
(6, 'A', 'B', 'C', 'D', 'E', 'F', '2023-06-22 11:57:00'),
(7, '1', '2', '3', '4', '5', '6', '2023-07-22 12:36:26'),
(9, 'Irure ut totam sint', 'Voluptas sapiente qu', 'Expedita exercitatio', 'Sed qui minus commod', 'Est delectus incid', 'Cum id sapiente reru', '2023-06-02 12:55:09'),
(10, 'Cupidatat esse aliqu', 'Quisquam amet et de', 'Cillum suscipit pari', 'Modi tempore illum', 'Error in sunt volup', 'Excepteur nisi et lo', '2023-08-02 12:56:47'),
(11, 'Agus', 'Quisquam amet et de', 'Cillum suscipit pari', 'Modi tempore illum', 'Error in sunt volups', 'Excepteur nisi et lo', '2023-06-02 12:57:01');

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
  `Pdf` varchar(255) NOT NULL,
  `Petugas_Stripping` varchar(100) NOT NULL,
  `Keterangan` varchar(100) NOT NULL,
  `Tgl_Stripping` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `penerimaan`
--

INSERT INTO `penerimaan` (`ID_Penerimaan`, `Nama_Pengirim`, `No_Hp_Pengirim`, `No_Ktp_Pengirim`, `No_Npwp_Pengirim`, `Jenis_Barang`, `Layanan`, `Alamat_Pengirim`, `dari`, `ke`, `Alamat_Tujuan`, `Nama_Penerima`, `No_Hp_Penerima`, `No_Ktp_Penerima`, `Shipping_Line`, `Nama_Kapal`, `No_Container`, `No_Bl`, `tanggal`, `Image`, `Pdf`, `Petugas_Stripping`, `Keterangan`, `Tgl_Stripping`) VALUES
(25, 'Porro est sit irure ', 'Sequi iste commodi o', 'Laborum Quia quaera', 'Tempora iure nostrud', 'Modi tempor at sapie', 'Sint quasi voluptas ', 'Obcaecati rerum dolo', 'Deserunt iusto illo ', 'Itaque quo dolorem q', 'Expedita consectetur', 'Vel maiores architec', 'Sit aliquam provide', 'Sit cupidatat labori', 'Minus libero id adip', 'Odio cillum voluptat', 'Corrupti ex minim e', 'Praesentium in quas ', '2023-07-27 14:17:12', 'cb3860f1-505d-4698-8757-599e7203bc8e.png', 'bfff1d94-8f52-4e2d-acdf-df567abf490c.pdf', 'Asep', 'New', '2023-08-23'),
(26, 'Agus Sugandi', 'Ut minus deserunt et', 'Dolor elit reprehen', 'Nemo ab sunt proiden', 'Dolore quis mollit l', 'Aut labore impedit ', 'Totam reprehenderit ', 'Eius aliquip aperiam', 'Qui rerum fuga Nemo', 'Aut animi quia volu', 'Temporibus praesenti', 'Commodo dolore dolor', 'Laborum Nisi dolori', 'Reprehenderit nesci', 'Velit distinctio At', 'Dignissimos dolore e', 'Magni vitae dolor ve', '2023-08-02 12:19:13', 'bb4c6f5a-6526-43f5-a8c7-d66b291a362e.png', '34a93db8-1e60-4493-bbc9-478fb75c8150.pdf', 'Ucok Baba Ubah', 'Ini keterangan Ubah', '2023-01-01'),
(27, 'In aliquam unde et a', 'Ea aut consequatur ', 'Aut maxime dolor qui', 'Fugiat nesciunt per', 'Odio sapiente est i', 'Sapiente a ad quibus', 'Non impedit nostrud', 'Vitae similique odit', 'Quis necessitatibus ', 'Beatae quasi qui aut', 'Corporis rerum persp', 'Debitis ipsam do adi', 'Sint minima blanditi', 'Ipsam ad placeat qu', 'Illum et sit tenetu', 'Sunt laboriosam su', 'Et sunt aliqua Magn', '2023-08-02 12:37:38', '', '', 'In et corrupti enim', 'Velit nobis et ad qu', '1970-07-24'),
(28, 'Ea omnis autem unde ', 'Adipisci consequatur', 'Consequuntur commodi', 'Similique eos eligen', 'Qui voluptate dolore', 'Possimus ut eligend', 'Fugiat quidem commod', 'Sunt sit repudiand', 'Similique in id et c', 'Voluptatibus in iste', 'Id suscipit ex sint ', 'Officiis sunt corru', 'Deleniti deleniti do', 'Quaerat expedita qua', 'Irure ex cupidatat d', 'Dolor molestiae aute', 'Quas ad ab optio et', '2023-08-02 12:38:02', 'f405a28f-889c-4c94-bdc7-82aef17e20aa.png', '113b04cc-39ee-4103-9e57-1c821986e502.pdf', 'Sequi animi molliti', 'Ea qui aut iure omni', '1994-07-10'),
(29, '651', '311', '313', '21', '3213', '123', '123', '13', '1', '31', '213', '1', '23', '31', '231', '31', '12', '2023-08-02 13:50:17', '32606518-5bca-422d-acdf-3eb0c940a027.jpg', '0d5609d5-c27b-44b8-97b6-fb0bb1c50c80.pdf', '23', '3123', '2023-08-25');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pengiriman`
--

INSERT INTO `pengiriman` (`ID_Pengiriman`, `Nama_Pengirim`, `No_Hp_Pengirim`, `No_Ktp_Pengirim`, `No_Npwp_Pengirim`, `Jenis_Barang`, `Layanan`, `Alamat_Pengirim`, `dari`, `ke`, `Alamat_Tujuan`, `Nama_Penerima`, `No_Hp_Penerima`, `No_Ktp_Penerima`, `Shipping_Line`, `Nama_Kapal`, `No_Container`, `No_Bl`, `tanggal`, `Image`, `Pdf`) VALUES
(64, 'Dolor vitae quisquam', 'Dolor dolore blandit', 'Consequatur Ut tene', 'Dolor eum quas deser', 'Suscipit cupiditate ', 'Suscipit esse et sit', 'Dolor obcaecati exer', 'Exercitation saepe p', 'Irure consequatur pr', 'Enim minim qui sit v', 'Sit quis tempore i', 'Qui est reprehenderi', 'Vel rerum voluptas i', 'Aut laborum qui quis', 'Consequatur reprehe', 'Ipsum earum volupta', 'Veniam id nihil inv', '2023-07-27 14:45:29', 'd0ceaae6-0ddf-41c7-aa1d-319760ee02a3.JPG', '77f141c0-4c7c-4f85-8a81-f69da2b99e48.pdf'),
(67, 'Praesentium illo ame', 'Dolor quia porro fug', 'Earum eveniet conse', 'Debitis dolor reicie', 'Eum corporis ullamco', 'Delectus temporibus', 'Doloribus ut natus t', 'Eligendi dolor anim ', 'Quia modi velit odit', 'Architecto nulla et ', 'Est nihil in magna a', 'Suscipit sint volupt', 'Exercitation quae ve', 'Est velit eaque et ', 'Pariatur Repudianda', 'Eum error ea qui lab', 'Amet dolorum est co', '2023-08-02 12:47:48', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `simulasi`
--

CREATE TABLE `simulasi` (
  `id` int(11) NOT NULL,
  `Kota_Asal` varchar(100) NOT NULL,
  `Kota_Tujuan` varchar(100) NOT NULL,
  `Harga` int(100) NOT NULL,
  `tanggal` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `simulasi`
--

INSERT INTO `simulasi` (`id`, `Kota_Asal`, `Kota_Tujuan`, `Harga`, `tanggal`) VALUES
(4, 'Bandung', 'Jakarta', 50000, '2023-08-03'),
(6, 'Bandung', 'Surabaya', 60000, '2023-08-03'),
(7, 'Malang', 'Mojokerto', 60000, '2023-08-03'),
(8, 'asdf', 'asdf', 20, '2023-08-03'),
(9, 'Subang 2', 'Majalengka', 500000, '2023-08-03');

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
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `jadwal`
--
ALTER TABLE `jadwal`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `mitra`
--
ALTER TABLE `mitra`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `penerimaan`
--
ALTER TABLE `penerimaan`
  MODIFY `ID_Penerimaan` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `pengiriman`
--
ALTER TABLE `pengiriman`
  MODIFY `ID_Pengiriman` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT for table `simulasi`
--
ALTER TABLE `simulasi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

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
