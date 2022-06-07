function openModal() {
    const modalTienda = document.getElementById("modal_tienda");
    const modalProductName = document.getElementById("product-name");
    const modalProductTotal = document.getElementById("product-price");
    const modalProductMore = document.getElementById("product-add-more");

    document.body.appendChild(modalTienda);
    modalTienda.style.display = "block";

    modalProductMore.addEventListener("click", (e)=>{  
        e.preventDefault();
        modalTienda.style.display = "none";
    });

    const closeModal = document.getElementById("close_modal");
    if(closeModal) {
        const modalTienda = document.getElementById("modal_tienda");
        closeModal.addEventListener("click", (e)=>{  
            e.preventDefault();
            modalTienda.style.display = "none";
        });
    }
}

// Abrir carrito
function openCart() {
    const cartIcon = document.getElementById("icon_cart");
    const cartContainer = document.getElementById("carrito_container");

    cartIcon.addEventListener("click", (e)=>{  
        e.preventDefault();
        cartContainer.classList.toggle('show_cart');

        cart.loadCart();
        cart.listCart();
    });

    cartContainer.addEventListener("click", (e)=>{  
        e.preventDefault();
        e.stopPropagation();    
    });
}

