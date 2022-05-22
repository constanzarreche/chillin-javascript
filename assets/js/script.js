// Disclaimer inicial
alert("Le presentamos las opciones disponibles dentro de Chillin'")

// Defino la variable de tipo de café
let coffeeType; 

// Listado de cafés disponibles
const coffees = [
    {
        id: 1,
        image: "",
        name: "Iced Vanilla Latte",
        description: "Bebida a base de espresso y jarabe de vainilla con hielo.",
        price: "$550"
    },
    {
        id: 2,
        image: "",
        name: "Caramel Toffee Latte",
        description: "Bebida a base de café, salsa de caramelo, toffee y canela.",
        price: "$600"

    },
    {
        id: 3,
        image: "",
        name: "Flat White",
        description: "Bebida a base de espresso que contiene leche cremada.",
        price: "$610"
    },
    {
        id: 4,
        image: "",
        name: "Capuccino",
        description: "Bebida preparada con café espreso y leche montada con vapor.",
        price: "$400"
    }
];

// Listado de eventos
const events = [
    {
        id: 1,
        image: "",
        name: "Coffee Night",
        description: "Vení a degustar lo mejor del café y conocer las sorpresas que tenemos para vos.",
        date: "Día y horario: 10 de Agosto 2022 - 21:00hs",
        address: "Dirección: Cuyo 1590, Martínez, Provincia de Buenos Aires"
    },
    {
        id: 2,
        image: "",
        name: "Beer & Friends",
        description: "Noche de cerveza de gran variedad, en conjunto con las mejores hamburguesas para todos los gustos.",
        date: "Día y horario: 4 de Septiembre 2022 - 21:30hs",
        address: "Dirección: Cuyo 1590, Martínez, Provincia de Buenos Aires"
    },
    {
        id: 3,
        image: "",
        name: "Show Night",
        description: "Junto a un espectáculo secreto que tenemos para vos, te ofrecemos platos de gran calidad, bebida de variedad y pasar un momento inolvidable.",
        date: "Día y horario: 17 de Septiembre 2022 - 22:00hs",
        address: "Dirección: Cuyo 1590, Martínez, Provincia de Buenos Aires"
    },
    {
        id: 4,
        image: "",
        name: "Wine & Dine",
        description: "Te invitamos a probar los mejores vinos y platos gourmet que tenemos para vos.",
        date: "Día y horario: 6 de Octubre 2022 - 21:30hs",
        address: "Dirección: Cuyo 1590, Martínez, Provincia de Buenos Aires"
    }
]

// Función para hacer la selección por prompts y alerts
function selectOption() {
    
    let optionSelected = '';
    
    while(optionSelected !== 'Ninguna') {
        optionSelected = prompt('Listado de acciones, escriba la que desea: \n\nListado de cafés\nComprar café\nListado de eventos\nNinguna');
    
        switch(optionSelected) {
            case 'Listado de cafés':
            {
                listCoffee();
                break;
            }
            case 'Comprar café': 
            {
                listCoffee();
                coffeeType = prompt("Ingrese el nombre del café que quiera llevar");
                coffeeQuantity = Number(prompt("¿Cuántos desea llevar?"));
                totalCoffee(coffeeQuantity);
                break;
            }
            case 'Listado de eventos':
            {
                listEvents();
                break;
            }
            default:{
                alert("¿No desea realizar ninguna acción? ¡Lo esperamos la próxima vez!");
                break;
            }
        }
    }
}


// Función para listar cafés
function listCoffee() {
    alert ("Te presentamos el listado de cafés:");

    coffees.forEach(
        (coffee)=>{
            alert(coffee.name + "\n" + coffee.description + "\n" + coffee.price);
        }
    );
}

// Función para comprar café
function totalCoffee(quantity){
    while (quantity != 0){
        if (coffeeType == 'Iced Vanilla Latte') {
            let coffeeTotal = quantity * 550;
            alert('Debe abonar $' + coffeeTotal + '\nMuchas gracias por su compra');
            break;
        }
        
        if (coffeeType == 'Caramel Toffee Latte') {
            let coffeeTotal = quantity * 600;
            return('Debe abonar $' + coffeeTotal + '\nMuchas gracias por su compra');
            break;
        }
    
        if (coffeeType == 'Flat White') {
            let coffeeTotal = quantity * 610;
            alert('Debe abonar $' + coffeeTotal + '\nMuchas gracias por su compra');
            break;
        }

        if (coffeeType == 'Capuccino') {
            let coffeeTotal = quantity * 400;
            alert('Debe abonar $' + coffeeTotal + '\nMuchas gracias por su compra');
            break;
        }
    }
}

// Función para listar eventos
function listEvents() {
    alert ("Te presentamos el listado de eventos:");

    events.forEach(
        (event)=>{
            alert(event.name + "\n" + event.description + "\n" + event.date + "\n" + event.address);
        }
    );
}

// Opciones a seleccionar por el usuario
selectOption();