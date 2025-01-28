// Back to Top Button Logic
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Dark Mode Toggle Logic
const darkModeToggle = document.createElement("button");
darkModeToggle.textContent = "Toggle Dark Mode";
darkModeToggle.id = "darkModeToggle";
darkModeToggle.className = "dark-mode-btn";
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.querySelector("nav").classList.toggle("dark-mode");
  document.querySelector(".hero").classList.toggle("dark-mode");
});
// Display Upload Section for Custom Design
const coverDesign = document.getElementById("coverDesign");
const uploadSection = document.getElementById("uploadSection");

coverDesign.addEventListener("change", function () {
  if (this.value === "Custom") {
    uploadSection.style.display = "block";
  } else {
    uploadSection.style.display = "none";
  }
});

// Handle Form Submission
const notebookForm = document.getElementById("notebookForm");

notebookForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const selectedDesign = coverDesign.value;
  const notebookSize = document.getElementById("notebookSize").value;
  const coverText = document.getElementById("coverText").value;

  alert(`Notebook Customized!\nDesign: ${selectedDesign}\nSize: ${notebookSize}\nText: ${coverText}`);
});
// Display Upload Section for Custom Design
const coverDesign = document.getElementById("coverDesign");
const uploadSection = document.getElementById("uploadSection");

coverDesign.addEventListener("change", function () {
  if (this.value === "Custom") {
    uploadSection.style.display = "block";
  } else {
    uploadSection.style.display = "none";
  }
});

// Handle Form Submission
const notebookForm = document.getElementById("notebookForm");

notebookForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const selectedDesign = coverDesign.value;
  const notebookSize = document.getElementById("notebookSize").value;
  const coverText = document.getElementById("coverText").value;

  alert(`Notebook Customized!\nDesign: ${selectedDesign}\nSize: ${notebookSize}\nText: ${coverText}`);
});
// Product data
const products = [
  { id: 1, name: "Notebook", price: 100, image: "notebook.jpg" },
  { id: 2, name: "Pen", price: 20, image: "pen.jpg" },
  { id: 3, name: "Pencil", price: 10, image: "pencil.jpg" },
];

// Initialize cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Render products
function renderProducts() {
  const productContainer = document.getElementById("productContainer");
  products.forEach(product => {
    const productCard = `
      <div class="col-md-4">
        <div class="card">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">Price: ₹${product.price}</p>
            <button class="btn btn-primary w-100" onclick="addToCart(${product.id})">Add to Cart</button>
          </div>
        </div>
      </div>
    `;
    productContainer.innerHTML += productCard;
  });
}

// Add to cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const existingProduct = cart.find(item => item.id === productId);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCart();
  alert(`${product.name} has been added to your cart!`);
}

// Update cart display
function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const totalPrice = document.getElementById("totalPrice");

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
    const cartItem = `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        ${item.name} (₹${item.price} x ${item.quantity})
        <button class="btn btn-sm btn-danger" onclick="removeFromCart(${item.id})">Remove</button>
      </li>
    `;
    cartItems.innerHTML += cartItem;
  });

  totalPrice.textContent = `Total: ₹${total}`;
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Remove from cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCart();
}

// Clear cart
function clearCart() {
  cart = [];
  updateCart();
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  updateCart();
});
// Display Upload Section for Custom Design
const coverDesign = document.getElementById("coverDesign");
const uploadSection = document.getElementById("uploadSection");

coverDesign.addEventListener("change", function () {
  if (this.value === "Custom") {
    uploadSection.style.display = "block";
  } else {
    uploadSection.style.display = "none";
  }
});

// Handle Form Submission
const notebookForm = document.getElementById("notebookForm");

notebookForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const selectedDesign = coverDesign.value;
  const notebookSize = document.getElementById("notebookSize").value;
  const coverText = document.getElementById("coverText").value || "No text";
  const quantity = document.getElementById("quantity").value;

  alert(`Notebook Customized!\nDesign: ${selectedDesign}\nSize: ${notebookSize}\nText: ${coverText}\nQuantity: ${quantity}`);
});
// Product Data
const products = [
    { id: 1, name: "Notebook", price: 100, img: "notebook.jpg" },
    { id: 2, name: "Pen", price: 20, img: "pen.jpeg" },
    { id: 3, name: "Pencil", price: 10, img: "Pencil.jpg" }
];

// Load products dynamically
const productList = document.getElementById("product-list");
if (productList) {
    products.forEach(product => {
        productList.innerHTML += `
            <div class="col-md-4">
                <div class="card">
                    <img src="${product.img}" class="card-img-top">
                    <div class="card-body">
                        <h5>${product.name}</h5>
                        <p>₹${product.price}</p>
                        <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                    </div>
                </div>
            </div>`;
    });
}

// Add to Cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];
function addToCart(id) {
    let item = cart.find(product => product.id === id);
    if (item) {
        item.qty++;
    } else {
        let product = products.find(p => p.id === id);
        cart.push({ ...product, qty: 1 });
    }
    updateCart();
}

// Update Cart UI
function updateCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    document.getElementById("cart-count").innerText = cart.reduce((sum, p) => sum + p.qty, 0);
}

// Render Cart Items
const cartItems = document.getElementById("cart-items");
if (cartItems) {
    cart.forEach(item => {
        cartItems.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                ${item.name} - ₹${item.price} x ${item.qty}
                <button class="btn btn-danger btn-sm" onclick="removeFromCart(${item.id})">Remove</button>
            </li>`;
    });

    document.getElementById("cart-total").innerText = cart.reduce((sum, p) => sum + (p.price * p.qty), 0);
}

// Remove from Cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
    location.reload();
}

// Initial Update
updateCart();


