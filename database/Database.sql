-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: mysql.metropolia.fia
-- Generation Time: Dec 12, 2020 at 10:03 PM
-- Server version: 10.1.48-MariaDB
-- PHP Version: 7.4.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `darshils`
--

-- --------------------------------------------------------

--
-- Table structure for table `Likes`
--

CREATE TABLE `Likes` (
  `like_id` int(11) NOT NULL,
  `owner_id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Likes`
--

INSERT INTO `Likes` (`like_id`, `owner_id`, `post_id`) VALUES
(1, 5, 40),
(3, 5, 40),
(4, 5, 41),
(5, 5, 43),
(6, 5, 56),
(7, 5, 43),
(8, 5, 41),
(9, 5, 56),
(10, 5, 50),
(11, 5, 41),
(12, 5, 43),
(13, 5, 58),
(14, 5, 41),
(15, 5, 41),
(16, 5, 40),
(17, 5, 41),
(18, 5, 42),
(19, 5, 41),
(20, 5, 54),
(21, 5, 41),
(22, 5, 40),
(23, 5, 40),
(24, 5, 40),
(25, 5, 40),
(26, 5, 42),
(27, 5, 50),
(28, 5, 41),
(29, 5, 48),
(30, 5, 40),
(31, 5, 41),
(32, 5, 48);

-- --------------------------------------------------------

--
-- Table structure for table `User`
--

CREATE TABLE `User` (
  `user_id` int(11) NOT NULL,
  `name` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `User`
--

INSERT INTO `User` (`user_id`, `name`, `email`, `password`) VALUES
(1, 'John Doe', 'john@metropolia.fi', '1234'),
(2, 'Jane Doez', 'jane@metropolia.fi', 'qwer'),
(3, 'Darshil Shah', 'darshil@gmail.com', 'Darsh@123'),
(4, 'Arsalan Shakil', 'arsalan@gmail.com', 'Arsalan@123'),
(5, 'Max', 'max@gmail.com', 'Max@1234'),
(6, 'ali', 'ali@gmail.com', 'Abc@1234'),
(30, 'ilkka', 'ilkka@test.fi', 'Q!W\"E#R€'),
(31, 'Tester', 'testuser123@gmail.com', 'Testi123!'),
(32, 'Test4', 'test4@gmail.com', 'Test@1234'),
(33, 'tbtester', 'tbtester@metropolia.fi', 'Testxb12'),
(34, 'IFFA', 'iffa@gmail.com', 'Abc@!234'),
(35, 'Testing', 'testing@gmail.com', 'Test@12345'),
(18, 'anni', 'anni@gmail.com', 'Anni@1234'),
(20, 'anni', 'anni1@gmail.com', 'Anni@1234'),
(21, 'ziang zhao', 'ziang@gmail.com', 'Ziang@1234'),
(26, 'Jasu Honkanen', 'jasu.honkanen2@gmail.com', 'Testi123!'),
(25, 'Testuser123', 'testuser123@gmail.com', 'Testi123!'),
(24, 'Mahmudul', 'alam.mmahamudul@gmail.com', 'Maha@123'),
(27, 'test111', 'test1@test.fi', 'Test1234'),
(28, 'qwert', 'qw@ert.com', 'Asdf7890'),
(29, 'qwert', 'qwer@t.com', 'Asdf890+');

-- --------------------------------------------------------

--
-- Table structure for table `User_posts`
--

CREATE TABLE `User_posts` (
  `post_id` int(11) NOT NULL,
  `owner_id` int(11) NOT NULL,
  `image_url` text,
  `caption` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `User_posts`
--

INSERT INTO `User_posts` (`post_id`, `owner_id`, `image_url`, `caption`) VALUES
(41, 3, 'https://surface-met.s3.eu-north-1.amazonaws.com/3_41', 'New Design for Men'),
(40, 24, 'https://surface-met.s3.eu-north-1.amazonaws.com/24_40', 'Office clothes for Men'),
(42, 4, 'https://surface-met.s3.eu-north-1.amazonaws.com/4_42', 'New Design for Girl'),
(43, 4, 'https://surface-met.s3.eu-north-1.amazonaws.com/4_43', 'Funky Clothes for Boys'),
(48, 30, 'https://surface-met.s3.eu-north-1.amazonaws.com/30_48', 'Latest fashion'),
(46, 26, 'https://surface-met.s3.eu-north-1.amazonaws.com/26_46', 'TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest'),
(49, 31, 'https://surface-met.s3.eu-north-1.amazonaws.com/31_49', 'Testtt'),
(50, 30, 'https://surface-met.s3.eu-north-1.amazonaws.com/30_50', 'Where\'s aws'),
(51, 32, 'https://surface-met.s3.eu-north-1.amazonaws.com/32_51', ''),
(52, 31, 'https://surface-met.s3.eu-north-1.amazonaws.com/31_52', 'Nothin'),
(53, 33, 'https://surface-met.s3.eu-north-1.amazonaws.com/33_53', 'fashion food'),
(54, 3, 'https://surface-met.s3.eu-north-1.amazonaws.com/3_54', 'Test1'),
(55, 3, 'https://surface-met.s3.eu-north-1.amazonaws.com/3_55', 'Test23'),
(56, 3, 'https://surface-met.s3.eu-north-1.amazonaws.com/3_56', 'Test1234'),
(57, 3, 'https://surface-met.s3.eu-north-1.amazonaws.com/3_57', 'Hi'),
(58, 35, 'https://surface-met.s3.eu-north-1.amazonaws.com/35_58', 'Testing12');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Likes`
--
ALTER TABLE `Likes`
  ADD PRIMARY KEY (`like_id`);

--
-- Indexes for table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `User_posts`
--
ALTER TABLE `User_posts`
  ADD PRIMARY KEY (`post_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Likes`
--
ALTER TABLE `Likes`
  MODIFY `like_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `User`
--
ALTER TABLE `User`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `User_posts`
--
ALTER TABLE `User_posts`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
