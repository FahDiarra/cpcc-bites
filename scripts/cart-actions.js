



let cartOrder = JSON.parse(localStorage.getItem("cart")) || [];
const cartItems = document.getElementById("cartItems");
const cartCountOrder = document.getElementById("cartCountOrder");
const subTodalOrder = document.getElementById("cartSubtotal");
const taxAmountOrder = document.getElementById("cartTax");
const cartTotalOrder = document.getElementById("cartTotalOrder");

const orderName = document.getElementById("orderName");
const checkoutButton = document.querySelector(".checkout-btn");

let selectedTipValue = null;

const tipSelected = document.getElementById("tipSelected");

document.querySelectorAll('input[name="tip"]').forEach((tip) => {
    tip.addEventListener("change", () => {
        const amount = Number(tip.value) ;
        selectedTipValue = amount ;
        tipSelected.textContent = `$${amount}`;
        updateCartTotal();
        updateCheckoutButton();

    });

});

orderName.addEventListener("input", () => {
  updateCheckoutButton();
});



function updateCheckoutButton() {
    const orderNameTrim = orderName.value.trim();
    checkoutButton.disabled = orderNameTrim .length < 2 || selectedTipValue === null || cartOrder.length ===0;

}


function saveCartOrder() {
    localStorage.setItem("cart", JSON.stringify(cartOrder));
}


function saveCartOrderDone() {
    cartOrder = [];
    localStorage.setItem("cart", JSON.stringify(cartOrder));
    selectedTipValue = null;
  
       if (tipSelected) {
           tipSelected.textContent = "$0";
         }

       document.querySelectorAll('input[name="tip"]').forEach((tip) => {
        tip.checked = false;
     });
  
  updateCart();
  checkoutButton.disabled = true;
  orderName.value = "";
}


function updateCartTotal() {
   const subTotal = cartOrder.reduce((sum , item)=>{
      return sum + item.price * item.quantity;
     }, 0);

    
    const istip = selectedTipValue ? selectedTipValue : 0 ;
    const taxRate = 0.0825;
    const tax = subTotal * taxRate ;
    const total = subTotal + tax + istip ;
   
    
   subTodalOrder.textContent= `$${subTotal.toFixed(2)}`;
   taxAmountOrder.textContent= `$${tax.toFixed(2)}`;
   cartTotalOrder.textContent= `$${total.toFixed(2)}`;
}


// Update cart
function updateCart() {
 
   updateCartTotal();

    cartItems.innerHTML = "";

    if (cartOrder.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                Your cart is empty.
            </div>
        `;

    } else {

        cartOrder.forEach(product => {
            
            const item = document.createElement("div");
             const exactPrice = product.price * product.quantity;
            item.classList.add("cart-item");
  
            item.innerHTML = `

          ${product.image ? `
             <img class="cartItemImage" 
             
             src="${product.image}" alt="${product.name}" > ` : `<img class="cartItemImage" 
             
             src="../images/drink1.png" alt="Drink" >`}
           

           <div class="cartItemProduct"> 
                <div class="cart-item-info">
                    <h4>${product.name} - $${product.price.toFixed(2)}</h4>    
                    
                    <span>
                        $${exactPrice.toFixed(2)}
                    </span>

                </div>

                <div class="cart-item-bottom">

                    <div class="quantity">

                        <button
                            type="button"
                            class="quantity-btn decrease"
                            data-id="${product.id}">
                            -
                        </button>

                        <span>
                            ${product.quantity}
                        </span>

                        <button
                            type="button"
                            class="quantity-btn increase"
                            data-id="${product.id}">
                            +
                        </button>

                    </div>

                    <button
                        type="button"
                        class="remove-btn"
                        data-id="${product.id}">
                        Remove
                    </button>

                  </div>
          <div > 
 

            `;

            cartItems.appendChild(item);

        });

    }

    updateCartCountOrder();
    addCartButtonsEvents();
}



// Quantity + / - / Remove
function addCartButtonsEvents() {

    document.querySelectorAll(".increase").forEach(button => {

        button.addEventListener("click", () => {

            const product = cartOrder.find(
                item => item.id === button.dataset.id
            );

            if (product) {
                product.quantity++;
                updateCart();
                saveCartOrder();
            }

        });

    });

    document.querySelectorAll(".decrease").forEach(button => {
        button.addEventListener("click", () => {
            const product = cartOrder.find(item => item.id === button.dataset.id);

            if (product) {
                 product.quantity--;

                if (product.quantity <= 0) {
                    cartOrder = cartOrder.filter(item => item.id !== product.id);
                }

                saveCartOrder();
                updateCart();

            }

        });

    });


 //Empty

    document.querySelectorAll(".remove-btn").forEach(button => {
        button.addEventListener("click", () => {

            cartOrder = cartOrder.filter( item => item.id !== button.dataset.id);
            updateCart();
            saveCartOrder();

        });

    });

}

// Cart count
function updateCartCountOrder() {
    cartCountOrder.textContent = cartOrder.length;
}


const checkoutModal = document.getElementById("checkoutModal");
const checkoutModalClose = document.getElementById("checkoutModalClose");
const checkoutDoneButton = document.getElementById("checkoutDoneButton");
const confirmationOrderNumber =document.getElementById("confirmationOrderNumber");
const confirmationOrderName = document.getElementById("confirmationOrderName");
const confirmationOrderTime =document.getElementById("confirmationOrderTime");
const confirmationSubtotal = document.getElementById("confirmationSubtotal");
const confirmationTax = document.getElementById("confirmationTax");
const confirmationTip =document.getElementById("confirmationTip");
const confirmationTotal =document.getElementById("confirmationTotal");




checkoutButton.addEventListener("click", () => {

 const subTotalf = cartOrder.reduce((sum , item)=>{
      return sum + item.price * item.quantity;
     }, 0);

    
    const istipf = selectedTipValue ? selectedTipValue : 0 ;
    const taxRatef = 0.0825;
    const taxf = subTotalf * taxRatef ;
    const totalf = subTotalf + taxf + istipf ;


    const order = {
        orderNumber: Math.floor(100000 + Math.random() * 900000),
        name: orderName.value.trim(),
        time: new Date(),
        items: [...cartOrder],
        subtotal: subTotalf,
        tax: taxf ,
        tip: istipf,
        total: totalf,
    };



    checkoutButton.disabled = true;

    checkoutButton.innerHTML = `
        <span class="checkout-spinner"></span>
        Processing...
    `;

    // 5 seconds
    setTimeout(() => {
         showOrderConfirmation(order);
         saveCartOrderDone();
    }, 500);
});




function showOrderConfirmation(order) {
      const formattedDate = order.time.toLocaleDateString([], {
        month: "short",
        day: "2-digit",
        year: "numeric"
    });

    const formattedTime = order.time.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });

    confirmationOrderNumber.textContent =`#${order.orderNumber}`;
    confirmationOrderName.textContent =order.name;
    confirmationOrderTime.textContent =  `${formattedDate} at ${formattedTime}`;
    confirmationSubtotal.textContent = `$${order.subtotal.toFixed(2)}`;
    confirmationTax.textContent =`$${order.tax.toFixed(2)}`;
    confirmationTip.textContent =`$${order.tip.toFixed(2)}`;
    confirmationTotal.textContent = `$${order.total.toFixed(2)}`;


    checkoutModal.classList.add("active");
    checkoutButton.disabled = false;
    checkoutButton.innerHTML = "Checkout";
}


function closeCheckoutModal() {
    checkoutModal.classList.remove("active");
}

checkoutModalClose.addEventListener("click", ()=>{
    saveCartOrderDone();
    closeCheckoutModal(); 

});

checkoutDoneButton.addEventListener("click", () => {
    saveCartOrderDone();
    closeCheckoutModal(); 
});



updateCart();
updateCartCountOrder() 
updateCheckoutButton();