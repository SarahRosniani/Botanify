-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 17, 2024 at 09:05 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `botanifyweb`
--

-- --------------------------------------------------------

--
-- Table structure for table `informasi`
--

CREATE TABLE `informasi` (
  `id_informasi` int(10) NOT NULL,
  `judul` varchar(250) NOT NULL,
  `isi_artikel` text NOT NULL,
  `kategori` varchar(100) NOT NULL,
  `penerbit` text NOT NULL,
  `tanggal` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `url` text NOT NULL,
  `foto_informasi` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `informasi`
--

INSERT INTO `informasi` (`id_informasi`, `judul`, `isi_artikel`, `kategori`, `penerbit`, `tanggal`, `url`, `foto_informasi`) VALUES
(1, '5 Cara Mudah Rawat Tanaman Indoor, Biar Nggak Layu', '1. Disiram agar tanaman herbal tumbuh subur adalah mencukupi kebutuhan air sesuai jenis tanah, cuaca, hingga jenis tumbuhan yang kamu tanam 2. Nutrisi  memberikan nutrisi pada tanaman, kamu bisa menggunakan pupuk buatan pabrik maupun pupuk alami 3. Pangkas Teratur bertujuan agar bagian tanaman yang layu itu tidak menjalar ke bagian tanaman yang lain 4. Stek dan Mulsa Tanaman yang kurang berkayu ini akan lebih mudah berakar dengan cara stek.', 'pengetahuan', 'Ari Monawati, Desi Rhomadhoni, Nur Rokhimah Hanik', '2024-06-03 10:00:00', 'http://linkkita.com', 'http://foto.com/'),
(6, 'Cara mudah untuk merawat tanaman', 'Sangat dipastikan, kita ingin melihat taman yang ada dirumah kita bersih dan indah. Factor keindahan dari sebuah taman adalah dari tanaman atau tumbuhanya. Maka dari itu kita harus memperhatikan kondisi tanaman tersebut agar tidak mati dan bisa tetap tumbuh. Dengan matinya tanaman pada taman rumah, membuat rumah menjadi tidak indah lagi. Biasanya tanaman yang mati itu karena perawatanya tidak tepat. Sehingga membuat tanaman menjadi mati dan layu. Sinar matahari sangat berguna dan wajib bagi tanaman pada taman, karena dengan adanya matahari membuat tanaman bisa melakukan fotosintetis. Dengan adanya proses fotosintetis, maka tanaman dapat menghasilkan oksigen yang banyak dan baik. Maka dari itu kita harus mencukupi kebutuhan sinar matahari pada taman. Pemberian sinar matahari pun akan berbeda tiap jenis tanamanya, untuk tanaman hias memerlukan 4-6 jam setiap harinya dan untuk sayur dan buah-buahan minimal 6 jam perharinya. Pemilihan tanaman pada taman juga harus memperhatikan kondisi cuaca dan kelembaban area tersebut, maka dari itu dengan menjaga cuaca dan kelembaban yang pas, maka membuat tanaman menjadi lebih susah layu. Kita harus menanam tanaman dengan memperhatikan daerah kita, jika daerah kita berada di dataran rendah maka jangan menanam tanaman yang beriklim subtropics atau tanaman dataran tinggi. Pada umumnya, setiap jenis tanaman membutuhkan air untuk kelangsungan hidupnya. Dengan adanya air juga membuat tanaman menjadi lebih sehat dan tidak kering. Tetapi kebutuhan air pada setiap jenis tanaman itu berbeda-beda. rawatlah tanaman kalian mulai sekarang, agar selalu sehat', 'TipsTrick', 'Redaksi', '2024-06-03 10:00:00', 'http://linkkita.com', 'http://foto.com/');

-- --------------------------------------------------------

--
-- Table structure for table `penanganan`
--

CREATE TABLE `penanganan` (
  `id_penanganan` int(10) NOT NULL,
  `id_tanaman` int(10) NOT NULL,
  `nama_penyakit` varchar(100) NOT NULL,
  `nama_hama` varchar(100) NOT NULL,
  `penanganan` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `penanganan`
--

INSERT INTO `penanganan` (`id_penanganan`, `id_tanaman`, `nama_penyakit`, `nama_hama`, `penanganan`) VALUES
(1, 1, 'powdery mildew', 'kutu daun', 'Memastikan sirkulasi udara yang baik di sekitar tanaman, menghindari kelembaban berlebih, dan menggunakan fungisida berbahan dasar sulfur dapat membantu mengendalikan penyakit ini.'),
(2, 2, 'black spot', 'caterpillar', 'Pastikan tanaman tidak terlalu lembab, siram bagian bawah tanaman untuk menjaga daun tetap kering, dan gunakan fungisida berbahan dasar tembaga untuk mengendalikan penyakit ini.'),
(3, 3, 'black spot', 'aphids', 'Meningkatkan sirkulasi udara di sekitar tanaman, menghindari penyiraman di atas daun, dan menggunakan campuran air dan baking soda dapat membantu mengendalikan penyakit ini.'),
(4, 4, 'powdery mildew', 'caterpillar', 'Menjaga daun tetap kering dengan menyiram pada pangkal tanaman, meningkatkan sirkulasi udara, dan menggunakan fungisida berbahan dasar kalium bikarbonat.\r\n'),
(5, 5, 'powdery mildew', 'thrips', 'Mengurangi kelembaban di sekitar tanaman, meningkatkan sirkulasi udara, dan menggunakan fungisida berbahan dasar kalium bikarbonat.'),
(6, 6, 'powdery mildew', 'whitefly', 'Menghindari penyiraman berlebihan, memberikan jarak antar tanaman untuk sirkulasi udara yang baik, dan menggunakan campuran air dan susu encer.'),
(7, 7, 'powdery mildew', 'caterpillar', 'Meningkatkan sirkulasi udara dengan memberi jarak antar tanaman, menghindari penyiraman di atas daun, dan menggunakan fungisida organik.\r\n'),
(8, 8, 'powdery mildew', 'thrips', 'Menjaga agar tanaman tidak terlalu lembab, meningkatkan sirkulasi udara, dan menggunakan campuran air dan cuka sari apel untuk mengendalikan penyakit ini.\r\n'),
(9, 9, 'powdery mildew', 'aphids', 'Mengurangi kelembaban di sekitar tanaman, menyiram pada pangkal tanaman, dan menggunakan campuran air dan susu encer untuk mengendalikan penyakit ini.\r\n'),
(10, 10, 'powdery mildew', 'caterpillar', 'Memastikan sirkulasi udara yang baik, menghindari penyiraman di atas daun, dan menggunakan campuran air dan baking soda untuk mengendalikan penyakit ini.\r\n'),
(11, 11, 'powdery mildew', 'aphids', 'Memastikan sirkulasi udara yang baik di sekitar tanaman, menghindari kelembaban berlebih, dan menggunakan fungisida berbahan dasar sulfur dapat membantu mengendalikan penyakit ini.\r\n'),
(12, 12, 'powdery mildew', 'thrips', 'Mengurangi kelembaban di sekitar tanaman, menyiram pada pangkal tanaman, dan menggunakan fungisida berbahan dasar kalium bikarbonat.\r\n'),
(13, 13, 'black spot', 'whitefly', 'Menghindari penyiraman di atas daun, memastikan sirkulasi udara yang baik, dan menggunakan fungisida berbahan dasar kalium bikarbonat.\r\n'),
(14, 14, 'black spot', 'thrips', 'Menjaga tanaman tetap kering dengan menyiram pada pangkal tanaman, meningkatkan sirkulasi udara, dan menggunakan campuran air dan baking soda.\r\n'),
(15, 15, 'powdery mildew', 'aphids', 'Mengurangi kelembaban di sekitar tanaman, memastikan sirkulasi udara yang baik, dan menggunakan fungisida organik.\r\n'),
(16, 16, 'powdery mildew', 'thrips', 'Menjaga agar tanaman tetap kering dengan menyiram pada pangkal tanaman, mengurangi kelembaban, dan menggunakan campuran air dan cuka sari apel.\r\n'),
(17, 17, 'black spot', 'caterpillar', 'Menyiram tanaman pada pangkalnya, menghindari penyiraman di atas daun, dan menggunakan fungisida berbahan dasar tembaga.\r\n'),
(18, 18, 'black spot', 'kudu daun', 'Mengurangi kelembaban di sekitar tanaman, menyiram pada pangkal tanaman, dan menggunakan campuran air dan baking soda.'),
(19, 19, 'powdery mildew', 'kutu daun', 'Memastikan sirkulasi udara yang baik di sekitar tanaman, menghindari kelembaban berlebih, dan menggunakan sabun insektisida.\r\n'),
(20, 20, 'powdery mildew', 'caterpillar', 'Menjaga daun tetap kering, memastikan sirkulasi udara yang baik, dan menggunakan fungisida berbahan dasar kalium bikarbonat.\r\n'),
(21, 21, 'black spot', 'thrips', 'Mengurangi kelembaban, meningkatkan sirkulasi udara, dan menggunakan campuran air dan cuka sari apel.\r\n'),
(22, 22, 'black spot\r\n', 'kutu daun', 'Menjaga daun tetap kering, memastikan sirkulasi udara yang baik, dan menggunakan fungisida berbahan dasar tembaga.\r\n'),
(23, 23, 'powdery mildew', 'kutu daun', 'Menghindari penyiraman di atas daun, memastikan sirkulasi udara yang baik, dan menggunakan campuran air dan baking soda. \r\n'),
(24, 24, 'powdery mildew', 'aphids', 'Menyiram tanaman pada pangkalnya, menghindari kelembaban berlebih, dan menggunakan fungisida organik.\r\n'),
(25, 25, 'black spot', 'thrips', 'Menghindari penyiraman di atas daun, meningkatkan sirkulasi udara, dan menggunakan campuran air dan cuka sari apel.\r\n'),
(26, 26, 'powdery mildew', 'thrips', 'Memastikan sirkulasi udara yang baik, menghindari penyiraman di atas daun, dan menggunakan campuran air dan baking soda.\r\n'),
(27, 27, 'black spot', 'aphids', 'Menghindari penyiraman di atas daun, memastikan sirkulasi udara yang baik, dan menggunakan campuran air dan cuka sari apel.\r\n'),
(28, 28, 'black spot', 'kutu daun', 'Memastikan sirkulasi udara yang baik di sekitar tanaman, menghindari kelembaban berlebih, dan menggunakan fungisida yang sesuai.\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `tanaman`
--

CREATE TABLE `tanaman` (
  `id_tanaman` int(10) NOT NULL,
  `id_penanganan` int(10) NOT NULL,
  `nama_tanaman` varchar(100) NOT NULL,
  `deskripsi_tanaman` text NOT NULL,
  `foto_tanaman` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tanaman`
--

INSERT INTO `tanaman` (`id_tanaman`, `id_penanganan`, `nama_tanaman`, `deskripsi_tanaman`, `foto_tanaman`) VALUES
(1, 1, 'Alyssum', 'Alyssum adalah tanaman hias rendah yang dikenal dengan bunga-bunganya yang kecil dan harum. Bunga-bunganya tumbuh dalam kelompok yang padat dan tersedia dalam berbagai warna seperti putih, merah muda, ungu, dan kuning. Alyssum biasanya ditanam sebagai penutup tanah atau untuk mengisi pot dan bebatuan dengan warna yang cerah dan aroma yang menyegarkan.', 'https://firebasestorage.googleapis.com/v0/b/botanify-ecd46.appspot.com/o/Img_List%20AAI_Plants%2FAlyssum.jpg?alt=media&token=5bbe0abf-2768-4169-a1c8-82222584dc2d'),
(2, 2, 'Anggrek', 'Anggrek adalah tanaman hias yang terkenal akan kecantikan dan keberagaman bunganya. Ada ribuan spesies anggrek yang memiliki berbagai warna dan bentuk bunga. Beberapa anggrek membutuhkan perawatan khusus dan lingkungan tumbuh yang terkontrol, sementara yang lain lebih tahan terhadap kondisi yang berbeda. Anggrek sering dianggap sebagai simbol keindahan dan keanggunan.', 'https://firebasestorage.googleapis.com/v0/b/botanify-ecd46.appspot.com/o/Img_List%20AAI_Plants%2Faglaonema.jpeg.jpg?alt=media&token=87cedfb3-49ae-4fcf-b283-3710aebbc6e5'),
(3, 3, 'Aster', 'Aster adalah tanaman berbunga yang tumbuh subur di musim gugur. Bunganya muncul dalam berbagai warna seperti putih, merah muda, ungu, biru, dan merah. Aster adalah tanaman yang tahan terhadap dingin dan sering kali digunakan sebagai tambahan warna yang indah dalam taman musim gugur. Tanaman ini menarik kupu-kupu dan lebah, menjadikannya tambahan yang baik untuk taman berpolinator.', 'https://firebasestorage.googleapis.com/v0/b/botanify-ecd46.appspot.com/o/Img_List%20AAI_Plants%2FAster.jpg?alt=media&token=21f62672-a457-4acb-8c11-cebe9367ceb0'),
(4, 4, 'Azalea', 'Azalea adalah semak berbunga yang indah yang terkenal dengan bunga-bunga yang mencolok. Bunga-bunganya hadir dalam berbagai warna seperti putih, merah muda, ungu, oranye, dan merah. Azalea sering kali ditanam dalam pot atau di taman sebagai tanaman hias yang menarik perhatian. Beberapa varietas azalea juga memiliki aroma yang harum.\r\n\r\n', 'https://firebasestorage.googleapis.com/v0/b/botanify-ecd46.appspot.com/o/Img_List%20AAI_Plants%2FAzalea.jpg?alt=media&token=91da43b7-0e2d-4c8e-a1e8-5f418bdd96d8'),
(5, 5, 'Balanceng', 'Balanceng, juga dikenal sebagai Dieffenbachia, adalah tanaman indoor yang populer karena daunnya yang besar dan menarik. Daunnya biasanya berwarna hijau dengan pola berbintik atau bergaris putih atau kuning. Balanceng cocok untuk ditempatkan di dalam ruangan dengan cahaya sedang hingga rendah dan membutuhkan sedikit perawatan. Namun, perlu diingat bahwa daunnya mengandung zat beracun, jadi perlu dijauhkan dari hewan peliharaan dan anak-anak.', 'https://firebasestorage.googleapis.com/v0/b/botanify-ecd46.appspot.com/o/Img_List%20AAI_Plants%2FBalanceng_Dieffenbachia.jpg?alt=media&token=68eedc14-f614-4b3e-b57e-e021ffa4eb58'),
(6, 6, 'Cosmos', 'Cosmos adalah tanaman berbunga yang indah dan mudah tumbuh. Bunga-bunganya muncul dalam berbagai warna seperti putih, merah muda, ungu, oranye, dan merah. Cosmos adalah tanaman yang tahan terhadap cuaca panas dan kering, sehingga cocok untuk ditanam di taman atau di pot. Bunga-bunga cosmos juga menarik kupu-kupu dan lebah, menjadikannya tambahan yang baik untuk taman berpolinator.', 'https://firebasestorage.googleapis.com/v0/b/botanify-ecd46.appspot.com/o/Img_List%20AAI_Plants%2FCosmos.jpg?alt=media&token=4ebd64a5-e86d-4fd5-a231-e22a665fe919'),
(7, 7, 'Dahlia', 'Dahlia adalah tanaman berbunga yang terkenal akan bunga-bunga yang besar dan beragam. Bunga-bunganya hadir dalam berbagai bentuk, warna, dan ukuran, mulai dari putih murni hingga merah menyala dan ungu gelap. Dahlia adalah tanaman musim panas yang memerlukan sinar matahari penuh dan tanah yang subur. Mereka sering kali digunakan sebagai bunga potong yang indah atau sebagai tambahan menarik dalam taman berbunga.', 'https://firebasestorage.googleapis.com/v0/b/botanify-ecd46.appspot.com/o/Img_List%20AAI_Plants%2FDahlia.jpg?alt=media&token=630c61a1-1981-401e-8446-e454ddcaecf5'),
(8, 8, 'Daisy', 'Daisy adalah tanaman berbunga yang dikenal dengan bunga-bunganya yang sederhana dan menawan. Bunga-bunganya memiliki daun berbentuk bunga yang putih dengan pusat kuning. Daisy tumbuh subur di musim panas dan merupakan tambahan yang indah untuk taman berbunga atau pot. Tanaman ini tahan terhadap cuaca panas dan kering, membuatnya mudah untuk dirawat.', 'https://firebasestorage.googleapis.com/v0/b/botanify-ecd46.appspot.com/o/Img_List%20AAI_Plants%2FDaisy.jpg?alt=media&token=c36634d4-d9b7-4f3d-b4fa-435b1b40c8f6'),
(9, 9, 'Dandelion', 'Dandelion adalah tanaman herba yang dikenal dengan bunga kuningnya yang khas dan biji-bijian yang berbentuk bulu. Meskipun sering kali dianggap sebagai gulma, beberapa orang menanamnya karena daunnya yang dapat dimakan yang kaya akan nutrisi. Dandelion juga digunakan dalam pengobatan herbal untuk berbagai kondisi kesehatan. Tanaman ini tumbuh subur di berbagai jenis tanah dan kondisi cuaca.\r\n\r\n', 'https://firebasestorage.googleapis.com/v0/b/botanify-ecd46.appspot.com/o/Img_List%20AAI_Plants%2FDandelion.jpg?alt=media&token=02eee974-9dea-4a95-85e7-9510a73b002e'),
(10, 10, 'Euphorbia', 'Euphorbia adalah kelompok tanaman yang beragam, termasuk varietas yang tumbuh sebagai semak, tanaman hias, atau tanaman kaktus. Bunga-bunga euphorbia biasanya kecil dan tidak mencolok, tetapi daun-daunnya sering kali menarik dengan warna-warna yang cerah. Beberapa varietas euphorbia menghasilkan getah beracun, jadi perlu dihindari kontak langsung dengan kulit dan mata.', 'https://firebasestorage.googleapis.com/v0/b/botanify-ecd46.appspot.com/o/Img_List%20AAI_Plants%2FEuphorbia.jpg?alt=media&token=538b27d6-b945-46f7-9e00-249dda42ea71'),
(11, 11, 'Eustoma', 'Eustoma, juga dikenal sebagai Lisianthus, adalah tanaman berbunga yang indah yang dikenal akan bunga-bunganya yang mirip mawar. Bunga-bunganya hadir dalam berbagai warna seperti putih, merah muda, biru, ungu, dan kuning. Eustoma sering digunakan sebagai bunga potong karena tahan lama dan memiliki aroma yang harum. Tanaman ini membutuhkan sinar matahari penuh dan tanah yang baik drainasenya.\r\n\r\n', 'https://firebasestorage.googleapis.com/v0/b/botanify-ecd46.appspot.com/o/Img_List%20AAI_Plants%2FEustoma.jpg?alt=media&token=246ea793-6799-402f-83c9-87c02f0b7bc5'),
(12, 12, 'Herbras/Gerbera', 'Gerbera, atau sering juga disebut sebagai Herbras, adalah tanaman berbunga yang cantik dan populer dalam industri bunga potong. Bunga-bunganya hadir dalam berbagai warna cerah seperti putih, merah muda, oranye, dan kuning. Gerbera membutuhkan sinar matahari penuh atau setengah hari dan tanah yang baik drainasenya. Tanaman ini tahan terhadap cuaca panas dan kering, membuatnya cocok untuk ditanam di taman atau dalam pot.\r\n\r\n', 'https://firebasestorage.googleapis.com/v0/b/botanify-ecd46.appspot.com/o/Img_List%20AAI_Plants%2FHerbras%20(Gerbera).jpg?alt=media&token=0520cf88-3981-4309-a361-f98a10e14e92'),
(13, 13, 'Iris', 'Iris adalah tanaman berbunga yang elegan dan beragam. Bunga-bunganya hadir dalam berbagai warna seperti biru, ungu, kuning, merah muda, dan putih. Iris sering digunakan sebagai tambahan yang indah untuk taman berbunga atau kolam, karena daunnya yang tinggi dan tegak serta bunganya yang mencolok. Tanaman ini membutuhkan sinar matahari penuh atau setengah hari dan tanah yang baik drainasenya.\r\n', 'https://firebasestorage.googleapis.com/v0/b/botanify-ecd46.appspot.com/o/Img_List%20AAI_Plants%2FIris.jpg?alt=media&token=8e038ecc-593f-4a70-a0c2-5ffcdc49b65a'),
(14, 14, 'Lavender', 'Lavender adalah tanaman herba yang terkenal akan aroma harumnya yang menenangkan. Tanaman ini memiliki daun hijau-abu-abu yang sempit dan bunga kecil yang muncul dalam batang yang panjang. Lavender sering digunakan untuk membuat minyak esensial, parfum, dan produk perawatan kulit. Tanaman ini membutuhkan sinar matahari penuh dan tanah yang baik drainasenya.\r\n\r\n\r\n', 'https://firebasestorage.googleapis.com/v0/b/botanify-ecd46.appspot.com/o/Img_List%20AAI_Plants%2FLavender.jpg?alt=media&token=d8747a97-b85d-4830-ab57-d2cd5b7896de'),
(15, 15, 'Lily', 'Lily adalah tanaman berbunga yang elegan dan harum. Bunga-bunganya hadir dalam berbagai bentuk dan warna, mulai dari putih murni hingga merah menyala dan ungu gelap. Lily sering digunakan dalam rangkaian bunga potong atau sebagai tambahan yang menarik dalam taman berbunga. Tanaman ini membutuhkan sinar matahari penuh atau setengah hari dan tanah yang subur.\r\n', 'https://firebasestorage.googleapis.com/v0/b/botanify-ecd46.appspot.com/o/Img_List%20AAI_Plants%2FLily.jpeg.jpg?alt=media&token=d9028661-7ad3-4f9a-86a2-a8337e11b30f'),
(16, 16, 'Melati', 'Melati adalah semak yang terkenal akan bunga-bunganya yang harum dan indah. Bunga-bunganya muncul dalam kelompok yang padat dan tersedia dalam berbagai warna seperti putih, merah muda, kuning, dan oranye. Melati sering digunakan sebagai tanaman penutup pagar, penghias taman, atau dalam rangkaian bunga potong. Tanaman ini membutuhkan sinar matahari penuh atau setengah hari dan tanah yang subur.\r\n', 'https://firebasestorage.googleapis.com/v0/b/botanify-ecd46.appspot.com/o/Img_List%20AAI_Plants%2FJasmine.jpeg.jpg?alt=media&token=bac22aa9-cf65-4e69-b435-2a4dd5a94846'),
(17, 17, 'Palm', 'Palm adalah kelompok tanaman yang luas yang termasuk berbagai spesies palem, mulai dari yang kecil hingga yang besar. Palm sering digunakan sebagai tanaman hias dalam ruangan atau di luar ruangan karena daun-daunnya yang indah dan bentuknya yang menarik. Beberapa varietas palm juga dikenal karena kelembapan udara yang tinggi dan kemampuannya untuk membersihkan udara.\r\n', 'https://firebasestorage.googleapis.com/v0/b/botanify-ecd46.appspot.com/o/Img_List%20AAI_Plants%2Fpalm.jpeg.jpg?alt=media&token=38ae3eb7-d8b8-49d1-914b-3cc735e34efe'),
(18, 18, 'Mawar', 'Mawar adalah tanaman berbunga yang klasik dan romantik yang terkenal akan bunga-bunganya yang indah dan harum. Bunga-bunganya hadir dalam berbagai warna dan aroma, mulai dari putih hingga merah muda, oranye, kuning, dan merah. Mawar sering digunakan sebagai bunga potong, dalam rangkaian bunga, atau sebagai tambahan indah dalam taman berbunga. Tanaman ini membutuhkan sinar matahari penuh dan tanah yang subur.\r\n', 'https://firebasestorage.googleapis.com/v0/b/botanify-ecd46.appspot.com/o/Img_List%20AAI_Plants%2Frose.jpeg.jpg?alt=media&token=9e46a847-a149-431c-acb9-b1d2e1dea6cf'),
(19, 19, 'Pansy', 'Pansy adalah tanaman berbunga yang cerah dan indah yang tumbuh subur di musim semi dan musim gugur. Bunga-bunganya hadir dalam berbagai warna seperti ungu, kuning, biru, merah, dan putih, sering kali dengan pola wajah yang menarik. Pansy sering digunakan untuk menanam di pot, di taman berbunga, atau sebagai tambahan dalam taman berbunga. Tanaman ini tahan terhadap cuaca dingin dan sering kali mekar lebih baik saat suhu sedang.\r\n', 'https://firebasestorage.googleapis.com/v0/b/botanify-ecd46.appspot.com/o/Img_List%20AAI_Plants%2Fpansy.jpeg.jpg?alt=media&token=51969dba-7f8f-48fc-b895-06597e893207'),
(20, 20, 'Peony', 'Peony adalah tanaman berbunga yang indah dan populer dalam taman berbunga. Bunga-bunganya besar dan mewah, seringkali berwarna merah muda, putih, atau merah. Peony merupakan tanaman musim semi hingga awal musim panas dan membutuhkan sinar matahari penuh atau setengah hari. Mereka sering digunakan dalam rangkaian bunga potong karena ketahanan bunganya yang baik.\r\n', 'https://firebasestorage.googleapis.com/v0/b/botanify-ecd46.appspot.com/o/Img_List%20AAI_Plants%2Fpeony.jpeg.jpg?alt=media&token=6a764135-590b-49d2-a40c-c5f959dfb034'),
(21, 21, 'Polyanthus', 'Polyanthus adalah tanaman berbunga musim semi yang tumbuh subur di musim dingin hingga awal musim panas. Bunga-bunganya muncul dalam kelompok yang padat dan tersedia dalam berbagai warna cerah seperti merah, kuning, oranye, dan ungu. Polyanthus merupakan tambahan yang indah untuk taman berbunga atau pot, dan tahan terhadap cuaca dingin.\r\n', 'https://firebasestorage.googleapis.com/v0/b/botanify-ecd46.appspot.com/o/Img_List%20AAI_Plants%2FPolyanthus.jpeg.jpg?alt=media&token=87d8f99c-3618-477e-81b9-e3d55ee53b76'),
(22, 22, 'Sage', 'Sage adalah tanaman herba yang terkenal akan daunnya yang aromatik dan digunakan dalam masakan dan pengobatan herbal. Daunnya sering digunakan sebagai bumbu untuk memberi rasa pada hidangan, serta memiliki sifat anti-inflamasi dan antioksidan. Sage dapat tumbuh subur di tempat yang cerah dengan tanah yang baik drainasenya.\r\n', 'https://firebasestorage.googleapis.com/v0/b/botanify-ecd46.appspot.com/o/Img_List%20AAI_Plants%2Fsage.jpeg.jpg?alt=media&token=3568a627-d012-410d-b336-737895f897e2'),
(23, 23, 'Tuberose', 'Tuberose adalah tanaman berbunga yang terkenal akan aroma harumnya yang kuat dan manis. Bunga-bunganya hadir dalam kelompok yang padat dan berwarna putih atau krim. Tuberose sering digunakan dalam pembuatan parfum dan minyak esensial, serta sebagai tambahan indah dalam rangkaian bunga potong. Tanaman ini membutuhkan sinar matahari penuh dan tanah yang subur.\r\n', 'https://firebasestorage.googleapis.com/v0/b/botanify-ecd46.appspot.com/o/Img_List%20AAI_Plants%2FTuberose.jpeg.jpg?alt=media&token=4667d4c7-edd2-4ba9-98cc-d835fd7f3e53'),
(24, 24, 'Snapdragon', 'Snapdragon adalah tanaman berbunga musim panas yang dikenal dengan bunga-bunganya yang unik dan menarik. Bunga-bunganya muncul dalam berbagai warna seperti merah, merah muda, kuning, putih, dan ungu, seringkali dengan bentuk yang menyerupai mulut naga. Snapdragon tumbuh subur di tempat yang cerah dengan tanah yang subur dan baik drainasenya.\r\n', 'https://firebasestorage.googleapis.com/v0/b/botanify-ecd46.appspot.com/o/Img_List%20AAI_Plants%2FSnapdragons.jpeg.jpg?alt=media&token=a8e5a150-844e-42ad-9903-7c509eaae816'),
(25, 25, 'Soka', 'Soka adalah tanaman berbunga yang indah dan elegan yang tumbuh subur di musim panas hingga awal musim gugur. Bunga-bunganya hadir dalam berbagai warna seperti merah, merah muda, putih, dan kuning, dengan tangkai yang panjang dan ramping. Soka sering digunakan dalam rangkaian bunga potong karena ketahanan bunganya yang baik dan warna yang mencolok.\r\n', 'https://firebasestorage.googleapis.com/v0/b/botanify-ecd46.appspot.com/o/Img_List%20AAI_Plants%2Fasoka.jpeg.jpg?alt=media&token=497cf14e-db03-4be3-b678-85f58f843482'),
(26, 26, 'Aglonema', 'Aglaonema, atau lebih dikenal sebagai Chinese Evergreen, adalah tanaman hias populer yang tumbuh di dalam ruangan karena kemudahan perawatannya dan kemampuannya bertahan dalam cahaya rendah. Daunnya lebar dan berwarna-warni, seringkali dengan pola berbintik atau berbercak putih, merah muda, atau merah. Aglaonema juga berfungsi sebagai pembersih udara yang efektif, menyerap berbagai polutan udara. Tanaman ini ideal untuk pemula karena tahan terhadap kesalahan perawatan.\r\n', 'https://firebasestorage.googleapis.com/v0/b/botanify-ecd46.appspot.com/o/Img_List%20AAI_Plants%2Faglaonema.jpeg.jpg?alt=media&token=87cedfb3-49ae-4fcf-b283-3710aebbc6e5'),
(27, 27, 'Sunflower', 'Sunflower atau bunga matahari adalah tanaman yang terkenal akan bunganya yang besar dan berwarna kuning cerah. Bunga-bunganya mengikuti matahari dan biasanya menghadap ke arah matahari. Sunflower merupakan tambahan indah dalam taman berbunga dan sering digunakan dalam rangkaian bunga potong. Tanaman ini membutuhkan sinar matahari penuh dan tanah yang subur.\r\n', 'https://firebasestorage.googleapis.com/v0/b/botanify-ecd46.appspot.com/o/Img_List%20AAI_Plants%2Fsunflower.jpeg.jpg?alt=media&token=2b5c5dfe-876b-4404-9001-08e54f8bbb84'),
(28, 28, 'Tulip', 'Tulip adalah tanaman berbunga musim semi yang terkenal akan bunganya yang elegan dan beraneka warna. Bunga-bunganya hadir dalam berbagai warna seperti merah, merah muda, oranye, kuning, dan ungu. Tulip sering digunakan dalam taman berbunga, pot, atau sebagai tambahan dalam rangkaian bunga potong. Tanaman ini membutuhkan sinar matahari penuh atau setengah hari dan tanah yang baik drainasenya.\r\n', 'https://firebasestorage.googleapis.com/v0/b/botanify-ecd46.appspot.com/o/Img_List%20AAI_Plants%2Ftulip.jpeg.jpg?alt=media&token=c10566c3-af9d-442a-becb-9fa47d99be35'),
(29, 29, 'Viola', 'Viola adalah tanaman berbunga musim dingin hingga musim semi yang terkenal akan bunga-bunganya yang kecil dan menawan. Bunga-bunganya hadir dalam berbagai warna cerah seperti ungu, kuning, merah muda, dan putih. Viola tumbuh subur di tempat yang cerah hingga setengah teduh dengan tanah yang subur dan baik drainasenya. Tanaman ini sering digunakan dalam taman berbunga atau pot sebagai tambahan warna yang menyegarkan.\r\n', 'https://firebasestorage.googleapis.com/v0/b/botanify-ecd46.appspot.com/o/Img_List%20AAI_Plants%2Fviola.jpeg.jpg?alt=media&token=2c29fc38-d712-4bb0-9be9-971c44f33fd5');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `informasi`
--
ALTER TABLE `informasi`
  ADD PRIMARY KEY (`id_informasi`);

--
-- Indexes for table `penanganan`
--
ALTER TABLE `penanganan`
  ADD PRIMARY KEY (`id_penanganan`),
  ADD KEY `id_tanaman` (`id_tanaman`);

--
-- Indexes for table `tanaman`
--
ALTER TABLE `tanaman`
  ADD PRIMARY KEY (`id_tanaman`),
  ADD KEY `id_penanganan` (`id_penanganan`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `informasi`
--
ALTER TABLE `informasi`
  MODIFY `id_informasi` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `penanganan`
--
ALTER TABLE `penanganan`
  MODIFY `id_penanganan` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `tanaman`
--
ALTER TABLE `tanaman`
  MODIFY `id_tanaman` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
