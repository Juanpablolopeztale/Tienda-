// Función para mostrar la lista del carrito en la página
const renderTaskList = (taskList) => {
    taskList.innerHTML = ""; // Limpiamos la lista antes de volver a mostrarla
  
    const carritoJSON = localStorage.getItem("carrito");
    const carrito = carritoJSON ? JSON.parse(carritoJSON) : [];
  
    carrito.forEach((producto) => {
      const li = document.createElement("li");
      li.textContent = producto.Nombre;
      taskList.appendChild(li);
    });
  };
  
  // Llamar a la función para mostrar la lista inicialmente al cargar la página
  const taskList = document.getElementById("taskList");
  renderTaskList(taskList);  