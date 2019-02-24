DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
	-- Columns
	ItemID INT NOT NULL AUTO_INCREMENT,
	ProductName VARCHAR(200) NULL,
	DepartmentName VARCHAR(200) NULL,
	Price INT(6) DEFAULT 0,
	StockQuantity INT (6) NOT NULL,
  
  PRIMARY KEY (ItemID)
);

select * from products;

-- 10 sample products
INSERT INTO products (ProductName, departmentName, price, stockQuantity) values ("Rosewill ATX Mid Tower", "Rosewill", 100, 15);
INSERT INTO products (ProductName, departmentName, price, stockQuantity) values ("MSI Gaming Laptop", "MSI", 200, 10);
INSERT INTO products (ProductName, departmentName, price, stockQuantity) values ("Acer SB220Q bi 21.5", "Acer", 500, 5);
INSERT INTO products (ProductName, departmentName, price, stockQuantity) values ("Overlord the Movie", "Movies", 5, 200);
INSERT INTO products (ProductName, departmentName, price, stockQuantity) values ("Into the Spider-Verse", "Movies", 20, 70);
INSERT INTO products (ProductName, departmentName, price, stockQuantity) values ("Runtime SOAR Server", "Databases", 300, 5);
INSERT INTO products (ProductName, departmentName, price, stockQuantity) values ("Workout Gloves GYM", "Workout", 13, 100);
INSERT INTO products (ProductName, departmentName, price, stockQuantity) values ("Featurestop Overcoat", "Clothing", 70, 200);
INSERT INTO products (ProductName, departmentName, price, stockQuantity) values ("Creamdog Luxury Watches", "outer wear", 300, 445);
INSERT INTO products (ProductName, departmentName, price, stockQuantity) values ("Clubmaster Sunglasses", "Outer wear", 60, 30);

SELECT * FROM products;