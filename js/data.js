let datas = [

    {
        id : "1",
        Nomnre : "Mesa",
        Categoria : "Comedor",
        estado: true
    },
    {
        id : "2",
        Nomnre : "Bancos",
        Categoria : "Comedor",
        estado: true
    },
    {
        id : "3",
        Nomnre : "Tinas",
        Categoria : "Baño",
        estado: true
    },
    {
        id : "4",
        Nomnre : "llaves",
        Categoria : "Baño",
        estado: true
    },
    {
        id : "5",
        Nomnre : "Fluxometro",
        Categoria : "Baño",
        estado: true
    },
    {
        id : "6",
        Nomnre : "asiento",
        Categoria : "Baño",
        estado: true
    },
    {
        id : "7",
        Nomnre : "tarjetas",
        Categoria : "Baño",
        estado: true
    },
    {
        id : "8",
        Nomnre : "regadera",
        Categoria : "Baño",
        estado: true
    },
    {
        id : "9",
        Nomnre : "Inodoro",
        Categoria : "Baño",
        estado: true
    },
    {
        id : "10",
        Nomnre : "Mesa de centro",
        Categoria : "Sala",
        estado: true
    },
    {
        id : "11",
        Nomnre : "Sofá",
        Categoria : "Sala",
        estado: true
    },
 
 ];

 for (let i = 0; i < data.length; i++) {
    let item = data[i];
    console.log("ID:", item.id);
    console.log("Nombre:", item.Nombre);
    console.log("Categoría:", item.Categoria);
    console.log("Estado:", item.estado);
    console.log("---------------------------");
}