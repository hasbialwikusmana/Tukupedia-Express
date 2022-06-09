//PRODUCTS

INSERT INTO products (products_name, products_description,products_images, category_id)VALUES('mie goreng', 'rasa kari ayam',#, 1),('mie rebus', 'rasa soto',#, 1),('jus mangga', 'dingin',#, 2),('jus apel', 'dingin',#, 2),('jus jeruk', 'dingin',#, 2),('bakso bakar', 'pedas',#, 3);

//CATEGORY

CREATE TABLE category(
    category_id INT PRIMARY KEY NOT NULL GENERATED ALWAYS AS IDENTITY,
    category_name VARCHAR(64) NOT NULL,
    category_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    category_updated_at TIMESTAMP
);


INSERT INTO category(category_name)VALUES('makan'),('minuman'),('snack'),('permen');

\\DETAILS PRODUCTS
SELECT products.*, category.category_name AS category FROM products INNER JOIN category ON products.id_category = category.id;

CREATE TABLE orders (
  orders_id INT PRIMARY KEY NOT NULL GENERATED ALWAYS AS IDENTITY,
  products_id int NOT NULL,
  orders_qty int NOT NULL,
  orders_subtotal int NOT NULL,
  orders_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  orders_updated_at TIMESTAMP
);


//USER

CREATE TABLE users(
users_id VARCHAR(64) PRIMARY KEY NOT NULL,
users_name VARCHAR(64) NOT NULL,
users_image VARCHAR (255),
users_email VARCHAR (64) NOT NULL,
users_password VARCHAR (100) NOT NULL,
users_phone VARCHAR (20),
users_storeName VARCHAR (64),
users_role INT,
users_status INT,
users_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
users_updated_at TIMESTAMP );