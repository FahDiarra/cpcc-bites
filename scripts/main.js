

//footer full year
const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;


//menu
const open = document.getElementById("openBtn");
const close = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobileMenu");

open.onclick = () => {
    mobileMenu.classList.add("open");
};

close.onclick = () => {
    mobileMenu.classList.remove("open");
};




// Cart 


const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");

let cart = JSON.parse(localStorage.getItem("cart")) || [];


function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}


function updateProductButtons() {
    document.querySelectorAll(".add-to-cart").forEach(button => {
        const id = button.dataset.id;
        const productInCart = cart.some(
            item => item.id === id
        );

        if (productInCart) {

            button.textContent = "Remove";
            button.classList.add("remove");

        } else {

            button.textContent = "Add to Cart";
            button.classList.remove("remove");

        }

    });

}


function updateCartCount() {
    cartCount.textContent = cart.length;

    const subtotal = cart.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);

    const taxRate = 0.0825;
    const tax = subtotal * taxRate;
    const total = subtotal + tax;
    
    cartTotal.textContent = total.toFixed(2);
}


        document.querySelectorAll(".add-to-cart").forEach(button => {

            button.addEventListener("click", () => {

                const id = button.dataset.id;
                const name = button.dataset.name;
                const price = Number(button.dataset.price);

                const existingProduct = cart.find(
                    item => item.id === id
                );

                if (existingProduct) {

                    cart = cart.filter(
                        item => item.id !== id
                    );

                } else {

                    cart.push({
                        id: id,
                        name: name,
                        price: price,
                        quantity: 1
                    });

                }

                saveCart();
                updateCartCount();
                updateProductButtons();

            });

        });

       
        updateCartCount();
        updateProductButtons();
