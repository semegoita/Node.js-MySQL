DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;
USE bamazon_DB;
CREATE TABLE products(
  item_id INTEGER NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(30) NOT NULL,
  department_name INT default 0,
  price INT default 0,
  stock_quantity INTEGER (10)
  PRIMARY KEY (item_id)
);
INSERT INTO products (product_name, department_name,price,stock_quantity) 
VALUES ("oranges", "fruits",5,27);
INSERT INTO products (product_name, department_name,price,stock_quantity) 
VALUES ("bananas", "fruits",3,30);
INSERT INTO products (product_name, department_name,price,stock_quantity) 
VALUES ("grapes", "fruits",2,70);
INSERT INTO products (product_name, department_name,price,stock_quantity) 
VALUES ("pen", "stationary",2,100);
INSERT INTO products (product_name, department_name,price,stock_quantity) 
VALUES ("pencil", "stationary",1,150);
INSERT INTO products (product_name, department_name,price,stock_quantity) 
VALUES ("papers", "stationary",10,90);
INSERT INTO products (product_name, department_name,price,stock_quantity) 
VALUES ("earphone", "accessories",15,25);
INSERT INTO products (product_name, department_name,price,stock_quantity) 
VALUES ("charger", "accessories",12,22);
INSERT INTO products (product_name, department_name,price,stock_quantity) 
VALUES ("headphone", "accessories",25,18);
INSERT INTO products (product_name, department_name,price,stock_quantity) 
VALUES ("camera", "accessories",55,7);

