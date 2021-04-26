# Erikson Romero - Prueba técnica - Enmedio

Realización de prueba técnica, en donde se pide la implementación de un API Rest para lograr automatizar los procesos de la compañía.

## Herramientas
[Swagger](http://swagger.io)

[NodeJS](https://nodejs.org/es/)

## Instalación

Usar la instalación de librerías de Node para el correcto funcionamiento del proyecto.

```bash
npm i
```

## Uso

Para lograr correr el proyecto se debe

```bash
npm start
```

Para lograr ver el Swagger de manera local

```bash
http://localhost:8080/docs/
```

## Problema
La empresa xyz encargada de la compra y venta de productos industriales busca digitalizar sus procesos, 
por tal razon requiere el desarrollo de un administrador en el que puedan:

- Crear productos, actualizar y eliminar los mismos
- Llevar el inventario de cuantos productos tienen en stock y cuantos se han vendido.
- Conocer cuales son los clientes que más compran
- Manejar los tiempos de entrega de sus productos por sus operarios
- Conocer la puntuación de sus productos según sus clientes.
- Ver las estadísticas de sus productos.

## Ejercicio
- Diseñe la base de datos para dicho proyecto: [Base de datos](https://drive.google.com/file/d/1MJ_4atHlTwaiVzZix_n8xega-TEnVmEf/view?usp=sharing)
- Justifique porqué uso el modelo de bd usado: El manejo que se le dio a la base de datos, está basado en una implementación en **MongoDb**, en el cual se hace un manejo atomizado de cada colección, donde se permite la creación de **Compañías** en caso de tener más de una, ciertos **Clientes** vinculados a dicha compañía apartir del **ID** de referencia a la misma, los cuales podrán hacer compras de los diferentes **Productos**, que junto a ellos tienen la cantidad de compras que se han realizado para ellos, y los que se encuentran en existencia, asi mismo del puntaje que cada **Cliente** le otorga.

Junto al apartado de **Compras**, las cuales van referenciadas a cada **Cliente**, y que cuenta con un inventario de los **Productos** que se compraron.

Por último, al momento de realizar puntuación de un **Producto** o una **Compra**, estas variables se guardan de manera numérica en los modelos, para evitar hacer un exceso de consultas. Esto se puede ver referenciado en el modelo de **Productos**, donde el número de sold incrementa de acuerdo a la cantidad de compras que hagan del mismo, o en **Clientes**, que se suma cada que realiza una compra.

## Ejercicio Hackerrank Array Manipulation
Starting with a 1-indexed array of zeros and a list of operations, for each operation add a value to each of the array
element between two given indices, inclusive. Once all operations have been performed, return the maximum value in
your array.
For example, the length of your array of zeros . Your list of queries is as follows:

a b k

1 5 3

4 8 7

6 9 1

Add the values of between the indices and inclusive:

index-> 1 2 3 4 5 6 7 8 9 10

[0,0,0, 0, 0,0,0,0,0, 0]

[3,3,3, 3, 3,0,0,0,0, 0]

[3,3,3,10,10,7,7,7,0, 0]

[3,3,3,10,10,8,8,8,1, 0]

The largest value is **10** after all operations are performed.

## License
[MIT](https://choosealicense.com/licenses/mit/)
