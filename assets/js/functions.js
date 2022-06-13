/*function openModal() {
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
}*/

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

// Modal compra
function openModal()
{
    const btn = document.getElementById("btnSweet4");

        Swal.fire({
            title:'¡AGREGASTE UN PRODUCTO!',
            color: '#2a352e',
            fontWeight: 900,
            icon: 'success',
            confirmButtonText: 'SEGUIR COMPRANDO',
            cancelButtonText: 'PAGAR',
            showCancelButton: true,
            buttonsStyling: false,
        }).then((result)=>{
            if(result.isConfirmed) {
            }
            else
            {
                Swal.fire({
                    title:'Checkout en progreso',
                    color: '#2a352e',
                    fontWeight: 900,
                    icon: 'info',
                    confirmButtonText: 'Ok',
                    buttonsStyling: false,
                })
            }
        })
}