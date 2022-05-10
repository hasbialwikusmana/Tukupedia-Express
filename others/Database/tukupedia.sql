//PRODUCTS

CREATE TABLE products(
    products_id INT NOT NULL GENERATED ALWAYS AS IDENTITY,
    products_name VARCHAR(64) NOT NULL,
    products_description VARCHAR(255) NULL,
    -- products_images VARCHAR(50) NULL,
    products_stock INT DEFAULT 0,
    products_price INT DEFAULT 0,
    category_id INT,
    products_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    products_updated_at TIMESTAMP,
    PRIMARY KEY(products_id)
);

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
--   history_id int NOT NULL,
  products_id int NOT NULL,
  orders_qty int NOT NULL,
  orders_subtotal int NOT NULL
  orders_created_at timestamp DEFAULT current_timestamp,
  orders_updated_at timestamp
)

history orders

CREATE TABLE history ( history_id INT PRIMARY KEY NOT NULL GENERATED ALWAYS AS IDENTITY,
history_invoice INT NOT NULL,
orders_id INT,
history_subtotal INT NOT NULL,
history_created_at timestamp DEFAULT current_timestamp,
history_updated_at timestamp
)

//USER

CREATE TABLE users(
users_id INT PRIMARY KEY NOT NULL GENERATED ALWAYS AS IDENTITY,
users_name VARCHAR(64) NOT NULL,
users_image VARCHAR (255) NOT NULL,
users_email VARCHAR (64) NOT NULL,
users_password VARCHAR (20) NOT NULL,
users_phone VARCHAR (20) NOT NULL,
users_storeName VARCHAR (64) NULL,
users_role INT NOT NULL,
users_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
users_updated_at TIMESTAMP )