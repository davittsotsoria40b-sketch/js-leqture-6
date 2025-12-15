let cart = [
  { name: "Laptop", price: 2200, quantity: 1 },
  { name: "Mouse", price: 50, quantity: 2 },
];

function getTotalPrice() {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function addProduct(product) {
  cart = [...cart, product];
  renderCart();
}

function updateQuantity(productName, newQty) {
  cart = cart.map((item) => {
    const { name, quantity, price } = item;
    if (name === productName) {
      return { ...item, quantity: newQty };
    }
    return item;
  });
  renderCart();
}

function renderCart() {
  const cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "";

  cart.forEach((item) => {
    const p = document.createElement("p");
    p.textContent = `${item.name} - ${item.price}$ x ${item.quantity}`;
    cartDiv.appendChild(p);
  });

  const totalP = document.createElement("p");
  totalP.textContent = `Total: ${getTotalPrice()}$`;
  cartDiv.appendChild(totalP);
}

renderCart();
