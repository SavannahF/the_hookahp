DROP DATABASE IF EXISTS the_hookahpDB;

CREATE DATABASE the_hookahpDB;

USE the_hookahpDB;

CREATE TABLE hoses (
    customer_id INT (5) NOT NULL,
    hose_qty INT(3) NOT NULL,
    hose_color CHAR(10) NOT NULL,
    hose_length CHAR (6),
    PRIMARY KEY (customer_id)
);

CREATE TABLE lights (
    customer_id INT (5) NOT NULL,
    lt_flag INT (1), --If 0 then no, if 1 then yes
    lt_color CHAR (6),
    PRIMARY KEY (customer_id)
);
CREATE TABLE bottles (
    customer_id INT (5) NOT NULL,
    --Bottle type can be a number or an input depending on how we want to do the HTML element and javascript functionality
    bottle_type VARCHAR (50) NOT NULL,
    name_on_bottle VARCHAR (75),
    PRIMARY KEY (customer_id)
);
CREATE TABLE customers (
    customer_id INT (5) NOT NULL AUTO_INCREMENT,
    customer_first_name VARCHAR(30) NOT NULL,
    customer_last_name VARCHAR(40) NOT NULL,
    customer_password VARCHAR (20) NOT NULL,
    customer_nbr INT (10),
    customer_email VARCHAR (75) NOT NULL,
    PRIMARY KEY (customer_id)
);

