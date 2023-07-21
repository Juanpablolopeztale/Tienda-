let data_cocina = [
    {
        Nombre : "Islas de cocina",
        img: "https://i.blogs.es/4ab595/isla-central-2-taburetes-de-hevea-gris-l-120-cm-1000-10-1-121730_4/1366_2000.jpg",
        Categoria : "",
    },
    {
        Nombre : "Armarios de cocina",
        img: "https://www.almacenestropigas.com/media/catalog/product/4/6/460072700015-_1_.png?width=700&height=700&store=guatemala_kiosco_espanol&image-type=image",
        Categoria : "",
    },
    {
        Nombre : "Estanterías o repisas",
        img: "https://media.admagazine.com/photos/62fd7a66fb331739724e097b/master/w_1600%2Cc_limit/dane-deaner-l2eTNVrendQ-unsplash.jpg",
        Categoria : "",
    },
    {
        Nombre : "Carrito de cocina",
        img: "https://ferreteriavidri.com/images/items/large/423379.jpg",
        Categoria : "",
    },
    {
        Nombre : "Vinoteca",
        img: "https://images.hola.com/imagenes/decoracion/20210924196081/vinotecas-para-casa-instalacion-modelos-precios-decoracion-cocinas-am/0-994-698/vinoteca-8a-a.jpg?tx=w_360",
        Categoria : "",
    },
    {
        Nombre : "Mueble despensero",
        img: "https://www.maderasfecan.com/wp-content/uploads/2020/08/columnas-Despensero-5-.jpg",
        Categoria : "",
      },
      {
        Nombre : "Escurridor de platos:",
        img: "https://walmartgt.vtexassets.com/arquivos/ids/180300/Escurridor-De-Platos-1-41919.jpg?v=637607559477370000",
        Categoria : "",
      },
      {
        Nombre : "Basurero de cocina",
        img: "https://saxs.com.gt/wp-content/uploads/2019/04/basurero.jpg",
        Categoria : "",
      },
      {
        Nombre : "Campana extractora",
        img: "https://electronicapanamericana.com/wp-content/uploads/981351.png",
        Categoria : "",
      },
      {
        Nombre : "Mesa plegable de cocina",
        img: "https://m.media-amazon.com/images/I/61f-7QxE41L._AC_UF894,1000_QL80_.jpg",
        Categoria : "",
      },
      {
        Nombre : "Torre de especias giratoria:",
        img: "https://m.media-amazon.com/images/I/61pEhrGTx8S.jpg",
        Categoria : "",
      },
      {
        Nombre : "Gabinete organizador",
        img: "https://m.media-amazon.com/images/I/71HnZCOU2ML.jpg",
        Categoria : "",
      },

      
]
// Reemplazamos la variable datas por data_cocina para que corresponda con el array de productos
data_cocina.forEach((producto) => {
    // Crear un elemento div para representar cada producto
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
  
    // Agregar la imagen del producto
    const imgProducto = document.createElement("img");
    imgProducto.src = producto.img;
    imgProducto.alt = producto.Nombre;
    gridItem.appendChild(imgProducto);
  
    // Agregar el contenido del producto en un div para darle un estilo específico
    const contenidoProducto = document.createElement("div");
    contenidoProducto.classList.add("grid-item-content");
  
    // Agregar el nombre del producto
    const nombreProducto = document.createElement("h3");
    nombreProducto.textContent = producto.Nombre;
    contenidoProducto.appendChild(nombreProducto);
  
    // Agregar la categoría del producto
    const categoriaProducto = document.createElement("p");
    categoriaProducto.textContent = ` ${producto.Categoria}`;
    contenidoProducto.appendChild(categoriaProducto);
  
    gridItem.appendChild(contenidoProducto);
  
    // Agregar el producto al contenedor principal
    const gridContainer = document.getElementById("contenedor_cocina");
    gridContainer.appendChild(gridItem);
  });
  