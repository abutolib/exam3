CREATE DATABASE exam3;
DROP TABLE categories CASCADE;
CREATE TABLE categories(
  category_id SERIAL PRIMARY KEY,
  category_name varchar(32) NOT NULL,
  category_image varchar(100) NOT NULL
);

CREATE TYPE gearbook AS ENUM('mexanika','Avtomat karobka');
drop table cars;
CREATE TABLE cars(
  car_id SERIAL PRIMARY KEY,
  category_id integer REFERENCES categories(category_id),
  car_name VARCHAR(32) NOT NULL,
  car_price INT NOT NULL,
  marka VARCHAR(32) NOT NULL,
  tanirovka boolean NOT NULL,
  motor numeric(2,1) NOT NULL,
  color varchar(32)not null,
  distance integer not null,
  gearbook gearbook not null,
  destcription varchar(150) not null,
  ichki_rasm varchar(200) not null,
  tashqi_rasm varchar(200) not null
);

INSERT INTO categories(category_name,category_image) VALUES('CHEVROLET','adsadsad'),('LADA','adasds'),('LAMBORGHINI','adsa'),('FERRARI','adsasdasd');

INSERT INTO cars(category_id,car_name,car_price,marka,tanirovka,motor,color,distance,gearbook,destcription,ichki_rasm,tashqi_rasm) VALUES(1,'CHEVROLET TAHOE',329900000,'CHEVROLET',false,1.6,'oq',3000,'mexanika','daisduihasiudhasiuhdaushdusai','dads','adsasd');

CREATE TABLE admin(
  admin_id SERIAL PRIMARY KEY,
  admin_name varchar(32) NOT NULL,
  admin_password varchar(32) NOT NULL
)

INSERT INTO admin(admin_name,admin_password) VALUES('admin','admin')