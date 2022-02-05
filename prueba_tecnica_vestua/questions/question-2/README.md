# Enunciado 2

> En la carpeta [question-2](https://bitbucket.org/vestua-com/questions/src/main/question-2/) se ha exportado eventos de navegación de usuarios anonimizados de la plataforma Vestuá. Se le pide al equipo de Ingeniería que hagan un análisis sobre los datos de navegación. En particular se solicita:
>
> - Calcular la cantidad de visitas únicas por cada producto.
> - Calcular la cantidad de clicks únicos por cada producto.
> - Calular el CTR (*Clickthrough Rate*) de cada producto.
> 
> El set de datos contiene la siguiente estructura:
> 
> - `user`: id del usuario que ejecutó el evento.
> - `entityId`: id de la entidad al que el usuario ejecutó el evento.
> - `entityType`: tipo de entidad al que se ejecutó el evento.
> - `eventType`: tipo de evento. Puede ser `impression` o `click`.
> 
> Como miembro del equipo de ingeniería, te solicitan modificar el archivo [script.js](https://bitbucket.org/vestua-com/questions/src/main/question-2/script.js) para que pueda leer el set de datos y generar un archivo `output.csv` con las siguientes columnas:
> 
> - `productId`: id del producto.
> - `clicks`: cantidad de *clicks* únicos que tiene el producto
> - `impressions`: cantidad de impresiones únicas que tiene el producto.
> - `ctr`: métrica CTR del producto.

# Razonamiento

Primero incluí la librería de fs para manejar archivos. Luego implementé un array para ser llenado con los 
datos correspondientes al nuevo csv.

Leí los datos del csv de tal forma que llenara el array de esta forma (asumiendo que los ID no se repiten) y he llenado el array "output" mediante un bucle que recorre los elementos del .csv. Al llenar el array, he incluido un subarray por cada elemento, de modo que llene el ID del producto, el número de clicks, impresiones y la tasa de clicks (ctr) por producto, basándome en la ID de cada producto:

- El primer elemento (ID) corresponde al elemento que NO esté presente en el array, para evitar repeticiones
- En cuanto al número de clicks e impresiones (2do y 3er elemento), los he contado desde el archivo .csv mediante una función de filtro. Esta función toma los elementos que coincidan con ciertas condiciones, y en este caso he filtrado (por cada producto) la coincidencia de su ID con los tipo de evento (click o impresión).
Es decir, cada vez que se repite ese ID en el archivo .csv, junto a su respectivo evento.
- Finalmente, el último elemento es la división entre el elemento click e impresión.

Debo decir que, asumiendo que cada producto se diferencia por su ID. i.e un vestido tiene de ID 455784, estos presentas contradicciones entre sus clicks e impresiones, ya que algunos se presentan como eventos de clickeo cuando no se han impreso en la pantalla del usuario.