// Tu data
let data_comedor = [
    {
      Nombre: "Mesa de comedor",
      img: "https://static.wixstatic.com/media/a6a7fb_dfe29a381e354d3cb5a537ae30ee6a3b~mv2.jpg/v1/fill/w_640,h_388,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a6a7fb_dfe29a381e354d3cb5a537ae30ee6a3b~mv2.jpg",
      Categoria: "Comedor",
    },
    {
      Nombre: "Silla de comedor",
      img: "https://cdn.pacifiko.com/image/cache/catalog/p/MDI0MzE2ZD-484x484.jpg",
      Categoria: "Comedor",
    },
    {
        Nombre : "Mesa de comedor con tapa de cristal",
        img: "Cómoda ",
        Categoria : "",
      },
      {
        Nombre : "Sillas de comedor tapizadas",
        img: "",
        Categoria : "",
      },
      {
        Nombre : "Vitrina de cristal ",
        img: "",
        Categoria : "",
      },
      {
        Nombre : "Sillones de comedor tapizados",
        img: "",
        Categoria : "",
      },
      {
        Nombre : "Cómoda ",
        img: "",
        Categoria : "",
      },
      {
        Nombre : "",
        img: "",
        Categoria : "",
      },
      {
        Nombre : "",
        img: "",
        Categoria : "",
      },
      {
        Nombre : "",
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
  