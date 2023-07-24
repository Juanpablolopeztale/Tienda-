// Tu data
let data_comedor = [
    {
      Nombre: "Cama grande",
      img: "",
      Categoria: "",
    },
    {
      Nombre: "Cama individual",
      img: "",
      Categoria: "",
    },
    {
        Nombre : "Cama Litera",
        img: "",
        Categoria : "",
      },
      {
        Nombre : "Armario Grande",
        img: "",
        Categoria : "",
      },
      {
        Nombre : "Armario pequeño",
        img: "",
        Categoria : "",
      },
      {
        Nombre : "Armario mediano",
        img: "",
        Categoria : "",
      },
      {
        Nombre : "Amplio Escritorio",
        img: "",
        Categoria : "",
      },
      {
        Nombre : "Escritorio flotante",
        img: "",
        Categoria : "",
      },
      {
        Nombre : "Escritorio minimalista",
        img: "",
        Categoria : "",
      },
      {
        Nombre : "Repisas de madera rústica",
        img: "",
        Categoria : "",
      },
      {
        Nombre : "Repisas de madera rústica",
        img: "",
        Categoria : "",
      },
      {
        Nombre : "Repisas de madera rústica",
        img: "",
        Categoria : "",
      },
      {
        Nombre : "Repisas de madera rústica",
        img: "",
        Categoria : "",
      },
      {
        Nombre : "Repisas de madera rústica",
        img: "",
        Categoria : "",
      },
      {
        Nombre : "Repisas de madera rústica",
        img: "",
        Categoria : "",
      },
      {
        Nombre : "Repisas de madera rústica",
        img: "",
        Categoria : "",
      },
      {
        Nombre : "Repisas de madera rústica",
        img: "",
        Categoria : "",
      },
      {
        Nombre : "Repisas de madera rústica",
        img: "",
        Categoria : "",
      },
      {
        Nombre : "Repisas de madera rústica",
        img: "",
        Categoria : "",
      },
    // Agrega más elementos según sea necesario...
  ];
  
  // Función para crear elementos HTML con el diseño específico
  function createGridItem(item) {
    // Crea un elemento <div> para representar un item en el grid
    const gridItem = document.createElement("div");
    gridItem.className = "grid-item";
  
    // Agrega el contenido del item (imagen, nombre, etc.)
    gridItem.innerHTML = `
      <img src="${item.img}" alt="${item.Nombre}">
      <div class="grid-item-content">
        <h3>${item.Nombre}</h3>
        <p>Categoría: ${item.Categoria}</p>
      </div>
    `;
  
    return gridItem;
  }
  
  // Función para mostrar los elementos en el grid
  function renderDataItems(data) {
    const gridContainer = document.getElementById("contenedor_comedor");
  
    // Limpiar el contenedor antes de mostrar los elementos (opcional)
    gridContainer.innerHTML = "";
  
    // Recorre los elementos de data_comedor y agrega cada uno al contenedor
    data.forEach((item) => {
      const gridItem = createGridItem(item);
      gridContainer.appendChild(gridItem);
    });
  }
  
  // Llama a la función para mostrar los elementos en el grid
  renderDataItems(data_comedor);
  