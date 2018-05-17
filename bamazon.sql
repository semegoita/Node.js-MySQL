DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;
USE bamazon_DB;
CREATE TABLE products
(
  item_Id INT AUTO_INCREMENT NOT NULL ,
  product_name VARCHAR(30) NOT NULL,
  department_name VARCHAR(30),
  price INT default 0,1
  stock_quantity INTEGER(10),
  PRIMARY KEY (item_Id)
);
  INSERT INTO products
    (product_name, department_name,price,stock_quantity)
  VALUES
    ("oranges", "fruits", 5, 27),
    ("bananas", "fruits", 3, 30),
    ("grapes", "fruits", 2, 70),
    ("pen", "stationary", 2, 100),
    ("pencil", "stationary", 1, 150),
    ("papers", "stationary", 10, 90),
    ("earphone", "accessories", 15, 25),
    ("charger", "accessories", 12, 22),
    ("headphone", "accessories", 25, 18),
    ("camera", "accessories", 55, 7);

