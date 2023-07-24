// carrito.js
// Obtenemos el carrito desde localStorage al cargar la página
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const renderTaskList = () => {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Limpiamos la lista antes de volver a mostrarla
  
    carrito.forEach((producto, index) => {
        const li = document.createElement("li");
        li.style.display = "flex"; // Usar flexbox para mantener los elementos en la misma línea
        li.style.alignItems = "center"; // Alinear elementos verticalmente al centro

        const taskName = document.createElement("span");
        taskName.textContent = producto.Nombre;
        taskName.style.flex = "1"; // La tarea ocupará todo el espacio disponible

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Cancelar";
        deleteButton.style.backgroundColor = "#e74c3c";
        deleteButton.style.color = "#fff";
        deleteButton.style.border = "none";
        deleteButton.style.borderRadius = "4px";
        deleteButton.style.padding = "8px 12px";
        deleteButton.style.cursor = "pointer";
        deleteButton.addEventListener("click", () => borrarTarea(index));

        li.appendChild(taskName);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
};

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        carrito.push({ Nombre: taskText });
        taskInput.value = "";
        localStorage.setItem("carrito", JSON.stringify(carrito));
        renderTaskList();
    }
}

function borrarTarea(index) {
    if (index >= 0 && index < carrito.length) {
        carrito.splice(index, 1);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        renderTaskList();
    }
}

// Llamar a la función para mostrar la lista inicialmente al cargar la página
renderTaskList();