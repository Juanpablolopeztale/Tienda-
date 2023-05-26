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
      "https://photos.encuentra24.com/t_or_fh_m/f_auto/v1/gt/23/92/50/70/23925070_831971"
    ];
  
    var imagenActual = 0;
    var elementoImagen = document.getElementById("miImagen"); // Reemplaza "miImagen" con el ID de tu elemento de imagen
  
    setInterval(function() {
      imagenActual = (imagenActual + 1) % imagenes.length;
      elementoImagen.src = imagenes[imagenActual];
    }, 5000); // 5000 milisegundos = 5 segundos
  }
  
  window.onload = function() {
    cambiarImagen();
  };