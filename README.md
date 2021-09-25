



# Surface

Surface is a web service that enables the fashion industry professional and fashion lovers to connect and stay updated with the latest happenings, events, collections and campaigns in the industry.
<br>
# Features

- Mobile first responsive design.

- Animations and Interactions.

- Create user accounts and upload posts.

- Access as guest or a user.

- Registered users can like other users posts.
<br>

# App Overview

## Mobile
![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/40695548/117309710-597d4080-ae8b-11eb-8f9a-461b1bb8d9b7.gif)
![ezgif com-gif-maker (2)](https://github.com/ArsalanShakil/Surface/blob/main/ezgif.com-gif-maker%20(2).gif)

## PC
![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/40695548/117312574-d01b3d80-ae8d-11eb-99c4-b6b8389ed4d6.gif)
![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/40695548/117313108-46b83b00-ae8e-11eb-8aed-6efdd235a623.gif)



# Quick Setup
-------
### - Checkout the main branch
### - Database Setup

#### - Database.sql :- https://github.com/ArsalanShakil/Surface/blob/main/database/Database.sql
#### - Database ERD :- 
   <img  height="300px" width="500px" src="https://github.com/ArsalanShakil/Surface/blob/main/database/Surface%20Entity%20Relationship%20Diagram.jpg" />

We use PHPMyAdmin(maria DB) to create databases

```

##Table structure for table `User`
--

CREATE TABLE `User` (
  `user_id` int(11) NOT NULL,
  `name` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

##Table structure for table `User_posts`
--

CREATE TABLE `User_posts` (
  `post_id` int(11) NOT NULL,
  `owner_id` int(11) NOT NULL,
  `image_url` text,
  `caption` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

##Table structure for table 'Likes'

CREATE TABLE `Likes` (
  `like_id` int(11) NOT NULL,
  `owner_id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

```
### - Dependencies
```
## Dependencies needed
   "aws-sdk": "^2.807.0",
    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "express-validator": "^6.7.0",
    "multer": "^1.4.2",
    "mysql2": "^2.2.5",
    "nodemon": "^2.0.6",
    "passport": "^0.4.1",
    "passport-local": "^1.0.0",
    "sharp": "^0.26.3"
    "jsonwebtoken": "^8.5.1",
    "passport-jwt": "^4.0.0"

## use
 npm i ##dependency name
## for example
 npm i aws-sdk
## to install the corresponding dependency and follow this trend 
## to install all of them or use 
 npm i 
## this will install most of the dependencies, but you might have to 
## install some of them manually as mentioned above.

```
### - Generate keys and certificate
```
openssl genrsa -out ssl-key.pem 2048
openssl req -new -key ssl-key.pem -out certrequest.csr
openssl x509 -req -in certrequest.csr -signkey ssl-key.pem -out ssl-cert.pem
```
### - Running the Website locally

##### - connect to the Metropolia UAS vpn
##### - Run nodemon in the terminal




#### Please make sure that all the files are setup properly before you start.

# License
[MIT](https://choosealicense.com/licenses/mit/)
