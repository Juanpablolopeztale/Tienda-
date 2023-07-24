let datas = [

  {
      Nombre : "Mesa",
      img: "https://i.ytimg.com/vi/gmVQGIeWUs0/maxresdefault.jpg",
      Categoria : "Comedor",
      OtraCategoria: "Q: 200.00",  
      
  },
  {
      Nombre : "Bancos",
      img: "https://cemacogt.vtexassets.com/arquivos/ids/453897-800-800?v=638233006614600000&width=800&height=800&aspect=true",
      Categoria : "Comedor",
     
      
  },
  {
    
      Nombre : "Tinas",
      img: "https://www.mndelgolfo.com/blog/wp-content/uploads/2019/08/6.jpg",
      Categoria : "Baño",
      
  },
  {
     
      Nombre : "llaves",
      img: "https://cr.epaenlinea.com/media/catalog/product/0/3/037e6a3a-b621-4a72-be38-03ce0de67aff.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=300&width=300&canvas=300:300",
      Categoria : "Baño",
      
  },
  {
      Nombre : "Fluxometro",
      img: "https://vainsainnova.com.pe/358-large_default/fluxometro-mecanico-urinario-palanca-indirecto-vainsa.jpg",
      Categoria : "Baño",
      precio: ""
  },
  {
      Nombre : "asiento",
      img: "https://walmartgt.vtexassets.com/arquivos/ids/214891/Asiento-Yarden-Abierto-Para-Ba-o-1-37257.jpg?v=637710759164770000",
      Categoria : "Baño",
      precio: ""
  },
  {
      Nombre : "tarjetas",
      img: "",
      Categoria : "Baño",
      precio: ""
  },
  {
      Nombre : "regadera",
      img: "https://seir.com.gt/wp-content/uploads/2022/06/R-007.jpg",
      Categoria : "Baño",
      precio: ""
  },
  {
      Nombre : "Inodoro",
      img: "https://ferreteriavidri.com/images/items/large/88472.jpg",
      Categoria : "Baño",
      precio: ""
  },
  {
      Nombre : "Mesa de centro",
      img: "https://blog.mueblesfiesta.com/hubfs/1-2.png",
      Categoria : "Sala",
      precio: ""
  },
  {
      Nombre : "Sofá",
      img: "https://www.shopper.com.gt/wp-content/uploads/2022/09/BA1605_1_1024x.jpg",
      Categoria : "Sala",
  },

  {
      Nombre : "Armario alto de cocina",
      img: "https://promart.vteximg.com.br/arquivos/ids/6558688-1000-1000/image-47662e8070b84620b003be8bdfe30ec4.jpg?v=638007675295600000",
      Categoria : "Cocina",
  },

  {
      Nombre : "Módulo base de cajones",
      img: "https://cdn.shopify.com/s/files/1/0571/3546/4491/products/Modulo_600_Cajones.jpg?v=1678214885",
      Categoria : "Cocina",
  },

  {
      Nombre : "Encimera de granito",
      img: "https://reformasintegrales10.com/wp-content/uploads/2017/02/encimeras-de-cocina-precios.jpg",
      Categoria : "Cocina",
  },

  {
      Nombre : "Fregadero de acero inoxidable",
      img: "https://i.ebayimg.com/thumbs/images/g/cRAAAOSwN1xkiu~1/s-l640.jpg",
      Categoria : "Cocina",
  },

  {
      Nombre : "Organizador de sartenes y tapas",
      img: "https://i.ebayimg.com/thumbs/images/g/cRAAAOSwN1xkiu~1/s-l640.jpg",
      Categoria : "Cocina",
  },

  {
      Nombre : "Estantería para especias",
      img: "https://imagenes.elpais.com/resizer/I9wiX7pjHGPMEOI-qkHiqa3eHC4=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/FGCC4JHX2FHZHLIN26T7ZTE5QY.jpg",
      Categoria : "Cocina",
  },

  {
    Nombre : "Lavabo",
    img: "https://gt.epaenlinea.com/media/catalog/product/cache/3f8a07f91ed96197ac7613a4e8859f2d/a/0/a0388a79-74e8-447e-99a3-a8541e90fb77.jpg",
    Categoria : "Baño",
  },

  {
    Nombre : "Estantes",
    img: "https://cdn.pacifiko.com/image/cache/catalog/p/MjM2NmQyNj-484x484.jpg",
    Categoria : "Baño",
  },

  {
    Nombre : "Portarrollos de papel higiénico",
    img: "https://lopezparra.es/1030288/portarrollos-papel-higienico-simple-wenko.jpg",
    Categoria : "Baño",
  },

  {
    Nombre : "",
    img: "",
    Categoria : "",
  },
];

// Archivo main.js
// Asegúrate de que data.js esté incluido antes de este script

// Suponemos que el archivo main.js está en la misma carpeta que el archivo data.js


// Iterar sobre el array datas y mostrar los productos en la página
datas.forEach((producto) => {
    // Crear un elemento div para representar cada producto
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
  
    // Agregar la imagen del producto
    const imgProducto = document.createElement("img");
    imgProducto.src = producto.img;
    imgProducto.alt = producto.Nombre;
    gridItem.appendChild(imgProducto);
    
    // Agregar la imagen pequeña en la parte inferior derecha del producto
    const imgPequena = document.createElement("img");
    imgPequena.src =
      "https://img.freepik.com/vector-premium/icono-carrito-compras-rapido_414847-513.jpg?w=2000"; // Ruta de la imagen del carrito
    imgPequena.classList.add("img-pequena");
    gridItem.appendChild(imgPequena);
  
  
    // Agregar el nombre del producto
    const nombreProducto = document.createElement("h3");
    nombreProducto.textContent = producto.Nombre;
    gridItem.appendChild(nombreProducto);
  
    // Agregar la categoría del producto
    const categoriaProducto = document.createElement("p");
    categoriaProducto.textContent = `Categoría: ${producto.Categoria}`;
    gridItem.appendChild(categoriaProducto);
    
    // Agregar la nueva categoría "OtraCategoria" si está disponible
  if (producto.OtraCategoria) {
    const otraCategoriaProducto = document.createElement("p");
    otraCategoriaProducto.textContent = `Precio: ${producto.OtraCategoria}`;
    gridItem.appendChild(otraCategoriaProducto);
  }
  
    // Agregar el producto al contenedor principal
    const gridContainer = document.getElementById("grid-container");
    gridContainer.appendChild(gridItem);
  
    // Creamos una función para agregar productos al carrito
    const agregarAlCarrito = () => {
      const carritoJSON = localStorage.getItem("carrito");
      const carrito = carritoJSON ? JSON.parse(carritoJSON) : [];
      carrito.push(producto);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      console.log("Producto agregado al carrito:", producto.Nombre);
      // Redirigir a la página de carrito.html
      window.location.href = "./carrito.html";
    };
  
    // Agregamos un evento de clic a la imagen pequeña para llamar a la función agregarAlCarrito
    imgPequena.addEventListener("click", agregarAlCarrito);
  });
  
  // Función para buscar producto y mostrar solo los que coincidan con el término de búsqueda
  function buscar() {
    const inputBusqueda = document.querySelector(".buscartx");
    const terminoBusqueda = inputBusqueda.value.trim().toLowerCase();
  
    const productosFiltrados = datas.filter(
      (producto) => producto.Nombre.toLowerCase().includes(terminoBusqueda)
    );
  
    // Si hay resultados, mostrar la pantalla emergente con los resultados
    if (productosFiltrados.length > 0) {
      mostrarResultadosModal(productosFiltrados);
    } else {
      // Si no hay resultados, ocultar la pantalla emergente
      ocultarModal();
    }
  }
  
  // Evento de búsqueda cuando el usuario escriba en el input
  document.querySelector(".buscartx").addEventListener("input", buscar);
  
  // Evento de búsqueda cuando el usuario presione la tecla Enter
  document.querySelector(".buscartx").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      buscar();
    }
  });
  
  // Función para mostrar los productos en la página
  function renderizarProductos(productos) {
    const gridContainer = document.getElementById("grid-container");
    gridContainer.innerHTML = ""; // Limpiamos el contenido antes de mostrar los nuevos productos
  
    productos.forEach((producto) => {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
  
      const imgProducto = document.createElement("img");
      imgProducto.src = producto.img;
      imgProducto.alt = producto.Nombre;
      gridItem.appendChild(imgProducto);
  
      const nombreProducto = document.createElement("h3");
      nombreProducto.textContent = producto.Nombre;
      gridItem.appendChild(nombreProducto);
  
      const categoriaProducto = document.createElement("p");
      categoriaProducto.textContent = `Categoría: ${producto.Categoria}`;
      gridItem.appendChild(categoriaProducto);
  
      // Agregar la nueva categoría "OtraCategoria" si está disponible
      if (producto.OtraCategoria) {
        const otraCategoriaProducto = document.createElement("p");
        otraCategoriaProducto.textContent = `Otra Categoría: ${producto.OtraCategoria}`;
        gridItem.appendChild(otraCategoriaProducto);
      }
  
      // Agregar el precio del producto si está disponible
      if (producto.precio) {
        const precioProducto = document.createElement("p");
        precioProducto.textContent = `Precio: ${producto.precio}`;
        gridItem.appendChild(precioProducto);
      }
  
      gridContainer.appendChild(gridItem);
    });
  }
  // Función para mostrar la pantalla emergente con los resultados
  function mostrarResultadosModal(resultados) {
    const modal = document.getElementById("modal");
    const modalResults = document.getElementById("modal-results");
  
    // Limpiamos los resultados anteriores
    modalResults.innerHTML = "";
  
    // Mostramos los nuevos resultados en una lista con un diseño atractivo
    resultados.forEach((producto) => {
      const productoDiv = document.createElement("div");
      productoDiv.classList.add("producto");
  
      const imagenProducto = document.createElement("img");
      imagenProducto.src = producto.img;
      imagenProducto.alt = producto.Nombre;
      productoDiv.appendChild(imagenProducto);
  
      const nombreProducto = document.createElement("h3");
      nombreProducto.textContent = producto.Nombre;
      productoDiv.appendChild(nombreProducto);
  
      const categoriaProducto = document.createElement("p");
      categoriaProducto.textContent = `Categoría: ${producto.Categoria}`;
      productoDiv.appendChild(categoriaProducto);
  
      modalResults.appendChild(productoDiv);
    });
  
    // Mostramos la pantalla emergente
    modal.style.display = "block";
  }
  
  // Función para ocultar la pantalla emergente
  function ocultarModal() {
    const modal = document.getElementById("modal");
  
    // Ocultamos la pantalla emergente
    modal.style.display = "none";
  }
  
  // Evento para cerrar la pantalla emergente cuando se haga clic en la 'x' (botón de cerrar)
  document.querySelector(".close-btn").addEventListener("click", ocultarModal);
  
  // Evento para cerrar la pantalla emergente cuando se haga clic fuera de ella
  window.addEventListener("click", (event) => {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
      ocultarModal();
    }
  });

  // Función para mostrar/ocultar el contenido del acordeón
function toggleAccordion(accordionHeader) {
  accordionHeader.classList.toggle("active");
  var content = accordionHeader.nextElementSibling;
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}