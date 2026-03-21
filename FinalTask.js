let allProducts = [];
let cart = [];
 
// DOM
const productContainer = document.getElementById("products");
const cartContainer = document.getElementById("cart");
const cartCount = document.getElementById("cartCount");
const totalEl = document.getElementById("total");
const loader = document.getElementById("loader");
const errorEl = document.getElementById("error");
 
// Fetch API
fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => {
    loader.style.display = "none";
    allProducts = data;
    displayProducts(allProducts);
  })
  .catch(() => {
    loader.style.display = "none";
    errorEl.innerText = "❌ Failed to load data";
  });
 
// Display Products
function displayProducts(products) {
  productContainer.innerHTML = "";
 
  products.map(product => {
    const div = document.createElement("div");
    div.className = "card";
 
    div.innerHTML = `
      <img src="${product.image}">
      <h4>${product.title.substring(0,50)}</h4>
      <p>$${product.price}</p>
      <p>${product.category}</p>
      <p>⭐ ${product.rating.rate}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
 
    productContainer.appendChild(div);
  });
}
 
// Search
document.getElementById("search").addEventListener("input", (e) => {
  let value = e.target.value.toLowerCase();
 
  let filtered = allProducts.filter(p =>
    p.title.toLowerCase().includes(value) ||
    p.category.toLowerCase().includes(value)
  );
 
  displayProducts(filtered);
});
 
// Category Filter
document.getElementById("category").addEventListener("change", (e) => {
  let value = e.target.value;
 
  if (value === "all") {
    displayProducts(allProducts);
  } else {
    let filtered = allProducts.filter(p => p.category === value);
    displayProducts(filtered);
  }
});
 
// Sorting
document.getElementById("lowHigh").addEventListener("click", () => {
  let sorted = [...allProducts].sort((a, b) => a.price - b.price);
  displayProducts(sorted);
});
 
document.getElementById("highLow").addEventListener("click", () => {
  let sorted = [...allProducts].sort((a, b) => b.price - a.price);
  displayProducts(sorted);
});
 
// Add to Cart
function addToCart(id) {
  let product = allProducts.find(p => p.id === id);
 
  let item = cart.find(p => p.id === id);
 
  if (item) {
    item.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
 
  updateCart();
}
 
// Update Cart UI
function updateCart() {
  cartContainer.innerHTML = "";
 
  cart.map(item => {
    const div = document.createElement("div");
 
    div.innerHTML = `
      ${item.title} - $${item.price} x ${item.quantity}
      <button onclick="removeItem(${item.id})">❌</button>
    `;
 
    cartContainer.appendChild(div);
  });
 
  // Cart count
  cartCount.innerText = cart.reduce((acc, item) => acc + item.quantity, 0);
 
  // Total price
  let total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  totalEl.innerText = total.toFixed(2);
}
 
// Remove from Cart
function removeItem(id) {
  cart = cart.filter(item => item.id !== id);
  updateCart();
}