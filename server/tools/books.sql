DROP TABLE IF EXISTS `books`;
CREATE TABLE `books`(
   `id` INT UNSIGNED AUTO_INCREMENT,
   `isbn` VARCHAR(100),
   `openId` VARCHAR(100),
   `bookId` VARCHAR(100),
   `title` VARCHAR(100),
   `image` VARCHAR(1000),
   `price` VARCHAR(100),
   `summary` VARCHAR(1000),
   `publisher` VARCHAR(100),
   `pubdate` VARCHAR(100),
   `rating` VARCHAR(100),
   `author` VARCHAR(100),
   `translator` VARCHAR(100),
   `nickName` VARCHAR(100),
   `avatarUrl` VARCHAR(1000),
   `visit` INT DEFAULT 0,
   `tags` VARCHAR(1000),
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
