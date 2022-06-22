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

function modalPay() {
    const modalTienda = document.getElementById("modal_tienda");
    const modalConfirm = document.getElementById("modal_confirm");

    document.body.appendChild(modalTienda);
    modalTienda.style.display = "block";

    const closeModal = document.getElementById("close_modal");
    if(closeModal) {
        const modalTienda = document.getElementById("modal_tienda");
        closeModal.addEventListener("click", (e)=>{  
            e.preventDefault();
            modalTienda.style.display = "none";
        });
    }

    const closeModalConfirm = document.getElementById("close_modal_confirm");
    if(closeModal) {
        const modalTiendaConfirm = document.getElementById("modal_confirm");
        closeModalConfirm.addEventListener("click", (e)=>{  
            e.preventDefault();
            modalTiendaConfirm.style.display = "none";
        });
    }

    document.querySelector('#formulario').addEventListener('submit', (e) => {

        e.preventDefault()
    
        fetch(`https://formsubmit.co/ajax/175b35b74dc4a7bbc0f03b760da321c4`, {
            method: "POST",
            body: new FormData(e.target)
        })
        .then(res => res.ok? res.json : Promise.reject(res))
        .then(json => { 
            modalTienda.style.display = "none";
            modalConfirm.style.display = "block";
            cart.emptyCart();
        })
        
    })
}

function cartPay() {
    const cartPay = document.getElementById("product-pay-cart");
    cartPay.addEventListener("click", (e)=>{  
        e.preventDefault();
        modalPay();   
    });
}


// Modal compra
function openModal()
{
    const btn = document.getElementById("btnSweet4");

        Swal.fire({
            title:'¡AGREGASTE UN PRODUCTO!',
            color: '#2a352e',
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
                modalPay();
            }
        })
}