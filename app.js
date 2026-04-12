const STORAGE_KEY = "plantescapes_orders_v1";
const REVIEWS_KEY = "plantescapes_reviews_v1";
const ACCOUNT_KEY = "plantescapes_account_v1";

const PLANTS = [
  {
    id: "bird-of-paradise",
    name: "Bird of Paradise",
    category: "Indoor Favorite",
    price: "$95",
    definition: "A big tropical statement plant with broad leaves and strong Charlotte living-room energy.",
    features: ["Bright room hero", "Tropical statement", "Perfect for patios and foyers"],
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32a8de5?auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "monstera-deliciosa",
    name: "Monstera Deliciosa",
    category: "Tropical",
    price: "$78",
    definition: "A lush split-leaf plant that makes apartments, offices, and content corners feel alive fast.",
    features: ["Easy modern look", "Popular Charlotte choice", "Great for gifts"],
    image: "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "fiddle-leaf-fig",
    name: "Fiddle Leaf Fig",
    category: "Statement Plant",
    price: "$120",
    definition: "Tall, polished, and bold. The plant you order when you want one clean showpiece in the room.",
    features: ["Statement silhouette", "Office ready", "Luxury room feel"],
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1400&q=80"
  }
];

let currentIndex = 0;

function getReviews() {
  try {
    return JSON.parse(localStorage.getItem(REVIEWS_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveReviews(reviews) {
  localStorage.setItem(REVIEWS_KEY, JSON.stringify(reviews));
}

function getAccount() {
  try {
    return JSON.parse(localStorage.getItem(ACCOUNT_KEY) || "{\"provider\":\"Guest\",\"history\":[]}");
  } catch {
    return { provider: "Guest", history: [] };
  }
}

function saveAccount(account) {
  localStorage.setItem(ACCOUNT_KEY, JSON.stringify(account));
}

function getOrders() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveOrders(orders) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
}

function currentPlant() {
  return PLANTS[currentIndex];
}

function renderPlantMenu() {
  const menu = document.getElementById("plantMenu");
  if (!menu) return;
  menu.innerHTML = PLANTS.map((plant, index) => `
    <button class="${index === currentIndex ? "active" : ""}" data-plant-index="${index}">
      ${plant.category}
    </button>
  `).join("");
  menu.querySelectorAll("[data-plant-index]").forEach((button) => {
    button.addEventListener("click", () => {
      currentIndex = Number(button.dataset.plantIndex);
      renderPlant();
    });
  });
}

function renderPlant() {
  const plant = currentPlant();
  const image = document.getElementById("plantImage");
  const category = document.getElementById("plantCategory");
  const name = document.getElementById("plantName");
  const price = document.getElementById("plantPrice");
  const definition = document.getElementById("plantDefinition");
  const featurePoints = document.getElementById("featurePoints");
  const orderPlant = document.getElementById("orderPlant");
  if (!image || !category || !name || !price || !definition || !featurePoints || !orderPlant) return;

  image.src = plant.image;
  image.alt = plant.name;
  category.textContent = plant.category;
  name.textContent = plant.name;
  price.textContent = plant.price;
  definition.textContent = plant.definition;
  orderPlant.value = `${plant.name} - ${plant.price}`;
  featurePoints.innerHTML = plant.features.map((feature) => `<div class="feature-pill">${feature}</div>`).join("");
  renderPlantMenu();
}

function changePlant(direction) {
  currentIndex = (currentIndex + direction + PLANTS.length) % PLANTS.length;
  renderPlant();
}

function submitOrder(event) {
  event.preventDefault();
  const plant = currentPlant();
  const quantity = document.getElementById("orderQuantity").value;
  const contact = document.getElementById("orderContact").value.trim();
  const notes = document.getElementById("orderNotes").value.trim();
  const status = document.getElementById("orderStatus");
  const account = getAccount();

  if (!contact) {
    status.textContent = "Please enter an email or text number so we can confirm your custom order.";
    return;
  }

  const orders = getOrders();
  orders.unshift({
    id: `PEIP-${Date.now()}`,
    plant: plant.name,
    category: plant.category,
    price: plant.price,
    quantity,
    contact,
    notes,
    location: "Charlotte, NC",
    routeType: "charlotte-custom",
    status: "new",
    createdAt: new Date().toLocaleString()
  });
  saveOrders(orders);
  if (account.provider && account.provider !== "Guest") {
    account.history = [
      { plant: plant.name, price: plant.price, quantity, createdAt: new Date().toLocaleString() },
      ...(account.history || [])
    ].slice(0, 3);
    saveAccount(account);
    renderRememberedOrders();
  }

  status.textContent = `Custom order saved for ${plant.name}. We will follow up with the payment credit-card page when the order is ready to send.`;
  event.target.reset();
  document.getElementById("orderPlant").value = `${plant.name} - ${plant.price}`;
  document.getElementById("orderQuantity").value = 1;
}

function saveFloridaBulkRequest() {
  const plant = currentPlant();
  const orders = getOrders();
  orders.unshift({
    id: `PEIP-FL-${Date.now()}`,
    plant: plant.name,
    category: plant.category,
    price: plant.price,
    quantity: "Coming soon",
    contact: "Route through Berry 704-533-5163",
    notes: "Florida bulk direct order lane requested from the homepage.",
    location: "Florida Bulk",
    routeType: "florida-bulk-coming-soon",
    status: "coming-soon",
    createdAt: new Date().toLocaleString()
  });
  saveOrders(orders);
  const status = document.getElementById("orderStatus");
  if (status) {
    status.textContent = `${plant.name} has been marked for the Florida Bulk direct-order lane. We will add the direct supplier information next.`;
  }
}

function toggleContactModal(show) {
  const modal = document.getElementById("contactModal");
  if (!modal) return;
  modal.hidden = !show;
}

function renderAdminPage() {
  const ordersList = document.getElementById("ordersList");
  const adminSummary = document.getElementById("adminSummary");
  if (!ordersList || !adminSummary) return;

  const orders = getOrders();
  const totalOrders = orders.length;
  const totalPlants = orders.reduce((sum, order) => sum + Number(order.quantity || 0), 0);
  const openOrders = orders.filter((order) => order.status === "new").length;

  adminSummary.innerHTML = `
    <div class="summary-pill">Total Orders: ${totalOrders}</div>
    <div class="summary-pill">Plants Requested: ${totalPlants}</div>
    <div class="summary-pill">Open Orders: ${openOrders}</div>
    <div class="summary-pill">Market: Charlotte, NC</div>
  `;

  if (!orders.length) {
    ordersList.innerHTML = `<div class="order-item"><h3>No orders yet</h3><p>Custom plant orders confirmed on the homepage will appear here.</p></div>`;
    return;
  }

  ordersList.innerHTML = orders.map((order) => `
    <article class="order-item">
      <h3>${order.plant}</h3>
      <p><strong>Quantity:</strong> ${order.quantity}</p>
      <p><strong>Contact:</strong> ${order.contact}</p>
      <p><strong>Price:</strong> ${order.price}</p>
      <p><strong>Location:</strong> ${order.location}</p>
      <p><strong>Route Type:</strong> ${order.routeType || "charlotte-custom"}</p>
      <p><strong>Placed:</strong> ${order.createdAt}</p>
      <p><strong>Notes:</strong> ${order.notes || "No extra notes."}</p>
      <p><strong>Status:</strong> ${order.status}</p>
    </article>
  `).join("");
}

function renderReviews() {
  const reviewsList = document.getElementById("reviewsList");
  if (!reviewsList) return;
  const reviews = getReviews();
  if (!reviews.length) {
    reviewsList.innerHTML = `<div class="review-item"><h3>No reviews yet</h3><p>After a custom order or purchase, the email flow can ask for a review and show it here.</p></div>`;
    return;
  }
  reviewsList.innerHTML = reviews.map((review) => `
    <article class="review-item">
      <h3>${review.name}</h3>
      <p><strong>${review.rating}</strong></p>
      <p>${review.text}</p>
    </article>
  `).join("");
}

function renderRememberedOrders() {
  const remembered = document.getElementById("rememberedOrders");
  if (!remembered) return;
  const account = getAccount();
  const history = account.history || [];
  remembered.innerHTML = `
    <div class="summary-pill">Mode: ${account.provider || "Guest"}</div>
    <div class="summary-pill">Saved purchase memory: ${account.provider === "Guest" ? "Guest mode does not remember purchases." : "Last 2-3 plants stay here."}</div>
    <div class="summary-pill">Card memory: handled later by secure payment processor only.</div>
    ${history.length ? history.map((item) => `<div class="summary-pill">${item.plant} · ${item.price} · Qty ${item.quantity}</div>`).join("") : `<div class="summary-pill">No remembered plant history yet.</div>`}
  `;
}

function openModal(id, show) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.hidden = !show;
}

function bindLoginButtons() {
  document.querySelectorAll("[data-login-provider]").forEach((button) => {
    button.addEventListener("click", () => {
      const provider = button.dataset.loginProvider;
      const account = getAccount();
      account.provider = provider;
      account.history = account.history || [];
      saveAccount(account);
      renderRememberedOrders();
    });
  });
}

function submitReview(event) {
  event.preventDefault();
  const reviews = getReviews();
  reviews.unshift({
    name: document.getElementById("reviewName").value.trim(),
    rating: document.getElementById("reviewRating").value,
    text: document.getElementById("reviewText").value.trim()
  });
  saveReviews(reviews);
  renderReviews();
  event.target.reset();
  openModal("reviewModal", false);
}

function initHomePage() {
  renderPlant();
  renderReviews();
  renderRememberedOrders();
  bindLoginButtons();
  document.getElementById("prevPlant")?.addEventListener("click", () => changePlant(-1));
  document.getElementById("nextPlant")?.addEventListener("click", () => changePlant(1));
  document.getElementById("orderForm")?.addEventListener("submit", submitOrder);
  document.getElementById("contactButton")?.addEventListener("click", () => toggleContactModal(true));
  document.querySelector("[data-close-modal]")?.addEventListener("click", () => toggleContactModal(false));
  document.getElementById("contactModal")?.addEventListener("click", (event) => {
    if (event.target.id === "contactModal") toggleContactModal(false);
  });
  document.getElementById("locationButton")?.addEventListener("click", () => {
    window.open("https://www.google.com/maps/search/?api=1&query=Charlotte%2C%20NC", "_blank", "noopener");
  });
  document.getElementById("settingsButton")?.addEventListener("click", () => openModal("settingsModal", true));
  document.querySelector("[data-close-settings]")?.addEventListener("click", () => openModal("settingsModal", false));
  document.getElementById("settingsModal")?.addEventListener("click", (event) => {
    if (event.target.id === "settingsModal") openModal("settingsModal", false);
  });
  document.getElementById("leaveReviewButton")?.addEventListener("click", () => openModal("reviewModal", true));
  document.querySelector("[data-close-review]")?.addEventListener("click", () => openModal("reviewModal", false));
  document.getElementById("reviewModal")?.addEventListener("click", (event) => {
    if (event.target.id === "reviewModal") openModal("reviewModal", false);
  });
  document.getElementById("reviewForm")?.addEventListener("submit", submitReview);
  document.getElementById("showCustomOrderButton")?.addEventListener("click", () => {
    document.getElementById("orderForm")?.scrollIntoView({ behavior: "smooth", block: "center" });
    document.getElementById("orderQuantity")?.focus();
  });
  document.getElementById("floridaBulkButton")?.addEventListener("click", saveFloridaBulkRequest);
  document.getElementById("adminOpenButton")?.addEventListener("click", () => {
    window.location.href = "./admin.html";
  });
}

if (document.getElementById("orderForm")) initHomePage();
if (document.getElementById("ordersList")) renderAdminPage();
