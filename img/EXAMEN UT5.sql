/* Base de Datos EMPRESA_II */
CREATE DATABASE empresa_II;
USE empresa_II;
CREATE TABLE clientes (
id_cliente INT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(50),
ciudad VARCHAR(50),
comentario VARCHAR(100)
);
CREATE TABLE productos (
id_producto INT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(50),
precio DECIMAL(10,2),
comentario VARCHAR(100)
);
CREATE TABLE pedidos (
id_pedido INT PRIMARY KEY AUTO_INCREMENT,
id_cliente INT,
id_producto INT,
cantidad INT,
FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente),
FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);
CREATE TABLE productos_anteriores (
id_producto_ant INT PRIMARY KEY,
nombre VARCHAR(50),
precio DECIMAL(10,2)
);
/*Insertamos los datos en las tablas */
/* CLIENTES*/
INSERT INTO clientes (nombre, ciudad) VALUES
('Ana', 'Madrid'),
('Luis', 'Barcelona'),
('María', 'Valencia');
/* PRODUCTOS*/
INSERT INTO productos (nombre, precio) VALUES
('Teclado', 20.50),
('Mouse', 10.00),
('Mesa', 80.00),
('Monitor', 150.00);
/* PRODUCTOS ANTERIORES*/
INSERT INTO productos_anteriores (Id_producto_ant, nombre, precio) VALUES
(1,'Teclado', 19),
(2, 'Mouse', 9),
(7, 'impresora', 200),
(9, 'Cableado', 7);
/* PEDIDOS*/
INSERT INTO pedidos (id_cliente, id_producto, cantidad) VALUES
(1, 1, 2),
(1, 2, 1),
(2, 3, 1),
(2, 1, 4),
(2, 4, 4),
(3, 2, 3);

insert into clientes (nombre, ciudad) values
('Pedro', 'Canarias');

DELIMITER //
CREATE PROCEDURE muestra_clientes()
BEGIN
SELECT nombre, id_cliente from clientes
where id_cliente not in (select id_cliente from pedidos
where id_cliente is not null);
END //
DELIMITER ;

CALL muestra_clientes();

delimiter //
create procedure si_no_pedido(in nombre_cliente varchar(50))
begin
declare puede int;
select nombre, id_cliente into puede from clientes
where nombre = nombre_cliente and id_cliente in (select id_cliente from pedidos);
if puede is null then
	select concat(nombre_cliente, ' ', 'No Tiene pedidos') as CLIENTE;
		else
			select concat(nombre_cliente, ' ', 'Tiene pedidos') as CLIENTE;
end if;
end //
delimiter ;

call si_no_pedido('Pedro');
call si_no_pedido('Ana');

DELIMITER //
CREATE PROCEDURE libros_autor_info(IN p_Autor VARCHAR(30))
BEGIN
 DECLARE total INT;
SELECT COUNT(Titulo) into total
 from Libro
 WHERE cod_autor=(SELECT cod_autor from Autor where nombre = p_autor);
 IF total = 0 THEN
 SELECT CONCAT(p_Autor,' - Sin libros') As Autor_y_Libros;
 ELSE
 SELECT CONCAT(p_Autor,' ',total) As Autor_y_Libros;
 END IF;
END //
DELIMITER ;

-- mostrar solo el nombre de los clientes y el nombre de los productos sin la cantidad

delimiter //
create procedure mostrar_client_product()
begin
select id_cliente, id_producto from pedidos
where id_cliente = (select id_cliente from clientes
where )
 

