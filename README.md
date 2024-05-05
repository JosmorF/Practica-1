Cuando se carga el index, se carga la data de la pagina del ejercicio en el Array dataProductos.
Luego, hay que abrir la consola y ejectuar displayProducts(dataProductos); Cuando hace esto, se muestra el datagrid en la pagina.
Cuando le da click a algun elemento, se muestra 3 datos del elemento seleccionado.
Cuando le da al boton regresar vuelve al datagrid del inicio.

Consultas:
Yo lo hice unicamente mostrando y ocultando las sections de la pagina, esta bien hacerlo asi?.
El id del producto que se selecciona lo hice al agregar al div de cada elemento esta propiedad, luego mando el ID por el metodo que recibe el ID y genera el filtro para ese elemento:
<a id="1" onclick="cargarProducto(this.id)">
cada elemento del grid tiene esa propiedad, entonces envia a la funcion cargarProdcto el id del elemento seleccionado
