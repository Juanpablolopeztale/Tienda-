function toggleDropdown() {
    var dropdownContent = document.getElementById("myDropdown");
    if (dropdownContent.style.display === "none") {
      dropdownContent.style.display = "block";
    } else {
      dropdownContent.style.display = "none";
    }
  }

//Slider 
function cambiarImagen() {
    var imagenes = [
      "https://www.tuco.com.gt/uploadimg/productos/1019263.jpg",
      "https://www.tuco.com.gt/uploadimg/productos/1014953.jpg",
      "https://photos.encuentra24.com/t_or_fh_m/f_auto/v1/gt/23/92/50/70/23925070_831971",
      "https://www.julajups.gt/resources/uploads/julajups_img/nery_monroy_e3459a9dc221f30360dcd93142a32dca.jpeg",
      "https://guateplast.com/wp-content/uploads/2022/08/mesa-fuerte-familiar-color-vino-guateplast-mesas-de-plastico-mesas-largas-tableros-productos-plasticos-para-el-hogar-guatemala-venta-al-detalle-y-por-mayor-300x300.jpg",          
      "https://image.made-in-china.com/155f0j00WFblyVAarGqh/Hot-Selling-Modern-Popular-Home-Black-Sofa-Furniture-Living-Room-Leisure-Luxury-Velvet-Fabric-Sofa-Set-with-Metal-Frame.jpg",
      "https://www.tuexperto.com/wp-content/uploads/2022/03/comprar-muebles-usados.jpg.webp",
      "https://www.depto9.com/wp-content/uploads/2020/07/mueble-hogar-1.jpg",
      "https://www.ferco.com.gt/on/demandware.static/-/Sites-ferco_master_catalog/default/dw753ff2e3/hi-res/large/029801-1.webp"
    ];
  
    var imagenActual = 0;
    var elementoImagen = document.getElementById("miImagen"); 
    setInterval(function() {
      imagenActual = (imagenActual + 1) % imagenes.length;
      elementoImagen.src = imagenes[imagenActual];
    }, 5000); 
  }
  
  window.onload = function() {
    cambiarImagen();
  };

  const gridContainer = document.getElementById("grid-container");

const data = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9"
];

data.forEach((item) => {
  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");
  gridItem.textContent = item;
  gridContainer.appendChild(gridItem);
});
