// Carrito de compras

const cart = {
    //counter : document.querySelector('#counter'),
    
    // Guardar
    saveCart : () => {
        localStorage.setItem("cart", JSON.stringify(cart.items));
    },

    // Traer productos
    loadCart : () => {
        cart.items = localStorage.getItem("cart");
        if (cart.items == null) { 
            cart.items = {}; 
        } else { 
            cart.items = JSON.parse(cart.items);
        }
    },

    // Vaciar carrito
    emptyCart : () => { 
        cart.items = {};
        localStorage.removeItem("cart");
        cart.listCart();
    },

    // Elementos y propiedades iniciales
    items : {},
    productImage : "../assets/img/",
    cartElements : '', 
    cartItems : '',
    

    // Inicializo
    initShop : () => {

        cart.cartElements = document.getElementById("cart-products");
        cart.cartItems = document.getElementById("cart-items");
        
        if(cart.cartElements && cart.cartItems){
        // Productos
        cart.cartElements.innerHTML = "";
        let template = document.getElementById("products").content, p, item, part;

        for (let id in products) {
            p = products[id];
            item = template.cloneNode(true);
            item.querySelector(".product-img").src = cart.productImage + p.img;
            item.querySelector(".product-name").innerHTML = p.name;
            item.querySelector(".product-description").innerHTML = p.description;
            item.querySelector(".product-price").innerHTML = "$" + p.price;
            item.querySelector(".product-add").onclick = () => { cart.add(id); };
            cart.cartElements.appendChild(item);
        }
        
        cart.loadCart();
        cart.listCart();
    }
    },

    // Listo los elementos del carrito
    listCart : () => {

        // Borrar
        cart.cartItems.innerHTML = "";
        let item, part, pdt, empty = true;
        for (let key in cart.items) {
            if (cart.items.hasOwnProperty(key)) { 
                empty = false; break; 
            }
        }

      // Carrito vacío - Carrito lleno
        if (empty) {
            item = document.getElementById("empty-cart");
            item.style.display = "block";
            document.querySelector('#counter').textContent = 0;
        } else {
            item = document.getElementById("empty-cart");
            item.style.display = "none";
            let template = document.getElementById("cart").content, p, total = 0, subtotal = 0, counter = 0;
            
            for (let id in cart.items) {
                p = products[id];
                item = template.cloneNode(true);
                item.querySelector(".delete-product").onclick = () => { cart.remove(id); };
                item.querySelector(".product-name").textContent = p.name;
                item.querySelector(".quantity-product").value = cart.items[id];
                item.querySelector(".quantity-product").onchange = function () { cart.change(id, this.value); };
                cart.cartItems.appendChild(item);
            
                // Subtotal
                subtotal = cart.items[id] * p.price;
                total += subtotal;

                // Counter
                counter ++;
            }

        // Total
        item = document.createElement("div");
        item.className = "total";
        item.id = "total";
        item.innerHTML ="TOTAL: $" + total;
        cart.cartItems.appendChild(item);

        document.querySelector('#counter').textContent = counter;
        

        // Vaciar carrito - checkout
        item = document.getElementById("cart-checkout").content.cloneNode(true);
        cart.cartItems.appendChild(item);
        }
    },

    // Agregar producto al carrito
    add : (id) => {
        if (cart.items[id] == undefined) { 
            cart.items[id] = 1; 
        } else { 
            cart.items[id]++;
        }
        cart.saveCart(); 
        cart.listCart();
        openModal();
    },

    // Cambiar cantidad de productos
    change : (productId, quantity) => {
        if (quantity <= 0) {
            delete cart.items[productId];
            cart.saveCart(); cart.listCart();
        } else {
            // Actualizo el total
            cart.items[productId] = quantity;
            var total = 0;
            for (let id in cart.items) {
                total += cart.items[id] * products[id].price;
                document.getElementById("total").innerHTML ="TOTAL: $" + total;
            }
        }
    },

    // Borrar producto del carrito
    remove : (id) => {
        delete cart.items[id];
        cart.saveCart();
        cart.listCart();
    },
};

window.addEventListener("DOMContentLoaded", cart.initShop);
openCart();
