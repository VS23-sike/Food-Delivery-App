let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;

    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cart.forEach((item) => {
        const itemElement = document.createElement("p");
        itemElement.textContent = `${item.name} - ₹${item.price}`;
        cartItems.appendChild(itemElement);
    });

    totalElement.textContent = total;
}

function placeOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    alert("Order placed successfully!");
    cart = [];
    total = 0;
    updateCart();
}

function showLogin() {
    const username = prompt("Enter your name:");

    if (username) {
        alert(`Welcome, ${username}!`);
    }
}