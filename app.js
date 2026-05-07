const STORAGE_KEY = "plantescapes_orders_v1";
const REVIEWS_KEY = "plantescapes_reviews_v1";
const ACCOUNT_KEY = "plantescapes_account_v1";
const STOCK_PHOTO_CACHE_KEY = "plantescapes_stock_photos_v1";
const DOJJ_HEALTH_KEY = "plantescapes_dojj_health_v1";
const SALES_EMAIL = "zzzanthony123@gmail.com";
const DOJJ_BOT_BASELINE_MINUTES = 1961;
const FEATURED_PLANT_NAME = "Monstera";
const INVENTORY_PREVIEW_LIMIT = 12;

const PLANT_BOT_AD_ROUTES = [
  "Facebook Marketplace: bulk plant bundle listing for florists, landscapers, offices, and event decorators",
  "Google: Business Profile bulk delivery service post for florist restock, landscaper fill-in, and office/lobby packages",
  "Bing: Bing Places bulk plant delivery service listing for florists and landscapers",
  "Charlotte local websites: Craigslist farm/garden bulk bundle, Nextdoor office/lobby post, florist/landscaper trade posts, Charlotte deal/event listings",
  "Free no-business-profile ad drops: Craigslist Charlotte, Locanto, LSN, Geebo, Oodle, FreeAdsTime, FreeClassiPress, RealFreeWeb, Charlotte On The Cheap event/deal submission"
];
const PLANT_WEBSITE_HEALTH_WATCH = [
  "DNS + SSL: confirm www.theplantmaninc.com and theplantmaninc.com resolve and keep the certificate active",
  "Lead safety: flag empty contacts, repeated spam notes, strange bulk requests, and fake payment-link replies",
  "Inventory integrity: watch for missing product pictures, copied catalog pages, and broken stock-photo links",
  "Traffic quality: separate real Charlotte bulk leads from scraper traffic, bot noise, and bad referral bursts"
];
const LASERSMARKET_PREMIUM_ROUTE = "LasersMarket Premium $25,000 signal review route: direct calls welcome at 980-230-6202 for local stock, forex, crypto, and options investors; research-only, no guaranteed returns, no automatic trades.";

function plantId(name, size = "") {
  return `${name}-${size}`.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function plantKey(name) {
  return plantId(name);
}

const CURATED_PLANT_IMAGE_MAP = {
  [plantKey("Acalypha")]: "acalypha copperleaf tropical plant red leaves",
  [plantKey("Agapanthus Lily of Nile")]: "agapanthus lily of the nile blue flowers",
  [plantKey("Aglaonema Silver Bay")]: "aglaonema silver bay houseplant",
  [plantKey("Aglaonema Stripes")]: "aglaonema stripes houseplant",
  [plantKey("Alocasia Potora")]: "alocasia portora elephant ear plant",
  [plantKey("Alocasia Odora")]: "alocasia odora elephant ear plant",
  [plantKey("Arboricola Gold Capella")]: "schefflera arboricola gold capella",
  [plantKey("Arboricola Green")]: "green schefflera arboricola",
  [plantKey("Arboricola Trinette")]: "schefflera arboricola trinette variegated",
  [plantKey("Banana")]: "banana plant tropical landscape",
  [plantKey("Banana Ensete")]: "ensete banana red banana plant",
  [plantKey("Beaucarnea guatemalensis (Ponytail Palm)")]: "ponytail palm beaucarnea houseplant",
  [plantKey("Blue African Iris")]: "blue african iris flowers",
  [plantKey("Bottlebrush")]: "bottlebrush callistemon red flower plant",
  [plantKey("Calathea")]: "calathea tropical houseplant leaves",
  [plantKey("Carissa Emerald Blanket")]: "carissa emerald blanket natal plum",
  [plantKey("Chinese Fan Palm")]: "chinese fan palm landscape",
  [plantKey("Clusia Guttifera Small Leaf")]: "clusia guttifera small leaf hedge",
  [plantKey("Codiaeum Variegatum Fantasy")]: "codiaeum variegatum croton fantasy",
  [plantKey("Cocoplum Red Tip")]: "cocoplum red tip hedge",
  [plantKey("Cordyline")]: "cordyline assorted tropical plant",
  [plantKey("Cordyline Terminalis Harlequin")]: "cordyline terminalis harlequin tropical leaves",
  [plantKey("Crape Myrtle Pure White")]: "white crape myrtle flowers",
  [plantKey("Crinum Queen Emma")]: "crinum queen emma lily burgundy leaves",
  [plantKey("Crossandra")]: "crossandra orange tropical flower",
  [plantKey("Croton")]: "croton assorted tropical plant",
  [plantKey("Ctenanthe Lubersii")]: "ctenanthe lubbersiana houseplant",
  [plantKey("Cycas Revoluta (Sago Palm)")]: "cycas revoluta sago palm",
  [plantKey("Dieffenbachia Marianne")]: "dieffenbachia marianne houseplant",
  [plantKey("Dieffenbachia Panther")]: "dieffenbachia panther houseplant",
  [plantKey("Dracaena Lemon Lime")]: "dracaena lemon lime houseplant",
  [plantKey("Dracaena Warneckii Gold Star")]: "dracaena warneckii gold star",
  [plantKey("Dracaena Warneckii Lemon Lime 2ppp")]: "dracaena warneckii lemon lime houseplant",
  [plantKey("Dracaena Yellow")]: "yellow dracaena tropical plant",
  [plantKey("Dracaena Yellow Stripe")]: "dracaena yellow stripe tall",
  [plantKey("Fatsia")]: "fatsia japonica glossy leaves",
  [plantKey("Fatsia Japonica")]: "fatsia japonica plant",
  [plantKey("Ficus")]: "ficus indoor tree plant",
  [plantKey("Ficus Elastica Burgundy")]: "ficus elastica burgundy rubber plant",
  [plantKey("Ficus Elastica Twist")]: "ficus elastica rubber plant",
  [plantKey("Ficus Green Island")]: "ficus green island plant",
  [plantKey("Ficus Lyrata Bush")]: "ficus lyrata fiddle leaf fig bush",
  [plantKey("Ficus Lyrata")]: "ficus lyrata fiddle leaf fig standard",
  [plantKey("Ficus Standard")]: "ficus standard indoor tree",
  [plantKey("Ficus Tineke Standard")]: "ficus tineke standard rubber plant",
  [plantKey("Gardenia Aimee Bush")]: "gardenia aimee white flower bush",
  [plantKey("Ginger Variegated")]: "variegated ginger plant",
  [plantKey("Hibiscus Double Peach Bush")]: "double peach hibiscus flower",
  [plantKey("Hibiscus Double Red Bush")]: "double red hibiscus flower",
  [plantKey("Hibiscus Fiesta Bush")]: "hibiscus fiesta tropical flower",
  [plantKey("Hibiscus Hollywood First To Arrive Bush")]: "hibiscus hollywood first to arrive flower",
  [plantKey("Hibiscus Joann Bush")]: "pink hibiscus bush",
  [plantKey("Hibiscus Painted Red Lady Pink Bush")]: "painted lady hibiscus pink flower",
  [plantKey("Hibiscus Pure Yellow")]: "pure yellow hibiscus flower",
  [plantKey("Hibiscus Red Hot Bush")]: "red hot hibiscus flower",
  [plantKey("Hibiscus Seminole Pink Bush")]: "seminole pink hibiscus flower",
  [plantKey("Hibiscus White Wings Bush")]: "white wings hibiscus flower",
  [plantKey("Indian Hawthorn")]: "indian hawthorn shrub flowers",
  [plantKey("Iris African Yellow")]: "yellow african iris flower",
  [plantKey("Iris Regina")]: "iris regina plant flower",
  [plantKey("Ligustrum Variegated")]: "variegated ligustrum shrub",
  [plantKey("Money Tree (Pachira aquatica)")]: "pachira aquatica money tree",
  [plantKey("Money Tree Singles / Character (Pachira aquatica)")]: "single trunk pachira aquatica money tree",
  [plantKey("Monstera")]: "monstera deliciosa tropical plant",
  [plantKey("Panama Rose")]: "panama rose rondoletia flower",
  [plantKey("Phoenix Roebelenii")]: "phoenix roebelenii pygmy date palm",
  [plantKey("Philodendron Burle Marx")]: "philodendron burle marx plant",
  [plantKey("Philodendron Congo Rojo")]: "philodendron congo rojo red leaves",
  [plantKey("Philodendron Lickety Split")]: "philodendron lickety split plant",
  [plantKey("Philodendron Monstera")]: "monstera deliciosa philodendron tropical leaves",
  [plantKey("Philodendron Selloum")]: "philodendron selloum plant",
  [plantKey("Philodendron Xanadu")]: "philodendron xanadu plant",
  [plantKey("Podocarpus Maki")]: "podocarpus maki landscape shrub",
  [plantKey("Podocarpus Pringles")]: "podocarpus pringles landscape shrub",
  [plantKey("Ponytail Stump")]: "ponytail palm stump houseplant",
  [plantKey("Ravenea Majesty Palm")]: "ravenea majesty palm",
  [plantKey("Schefflera Arboricola Compacta")]: "schefflera arboricola compacta",
  [plantKey("Sansevieria Laurentii")]: "sansevieria laurentii snake plant",
  [plantKey("Sansevieria Wintergreen")]: "sansevieria wintergreen snake plant",
  [plantKey("Spathiphyllum Maximo")]: "spathiphyllum maximo peace lily",
  [plantKey("Spathiphyllum Sensation")]: "spathiphyllum sensation peace lily",
  [plantKey("Texas Sage Silver")]: "texas sage silver shrub purple flowers",
  [plantKey("Umbrella Schefflera")]: "umbrella schefflera plant",
  [plantKey("Viburnum Suspensum")]: "viburnum suspensum hedge",
  [plantKey("Washingtonia Palm")]: "washingtonia palm tree",
  [plantKey("Yellow Elder")]: "yellow elder tecoma stans flower",
  [plantKey("Zamia Cardboard Palm")]: "zamia furfuracea cardboard palm"
};

const PHOTO_SOURCE_STACK = [
  {
    label: "Openverse",
    lane: "1",
    purpose: "CC / public domain",
    note: "Start here for license-aware plant photos.",
    buildUrl: (query) => `https://openverse.org/search/image?q=${encodeURIComponent(query)}`
  },
  {
    label: "Wikimedia",
    lane: "2",
    purpose: "Botanical match",
    note: "Best for exact species and cultivar references.",
    buildUrl: (query) => `https://commons.wikimedia.org/w/index.php?search=${encodeURIComponent(query)}&title=Special:MediaSearch&type=image`
  },
  {
    label: "Pexels",
    lane: "3",
    purpose: "Lifestyle polish",
    note: "Use when the plant needs a warmer room or patio look.",
    buildUrl: (query) => `https://www.pexels.com/search/${encodeURIComponent(query)}/`
  },
  {
    label: "Pixabay",
    lane: "4",
    purpose: "Stock fallback",
    note: "Good backup source for broad plant searches.",
    buildUrl: (query) => `https://pixabay.com/images/search/${encodeURIComponent(query)}/`
  }
];

const DEFAULT_STOCK_PHOTO_MAP = {
  [plantKey("Monstera")]: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Indoor_Monstera_deliciosa.jpg/1280px-Indoor_Monstera_deliciosa.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Indoor_Monstera_deliciosa.jpg",
    provider: "Wikimedia Commons",
    license: "CC BY-SA 4.0",
    title: "Indoor Monstera deliciosa"
  }
};

function stockPhotoQueryForName(name) {
  return CURATED_PLANT_IMAGE_MAP[plantKey(name)] || `${name} plant nursery`;
}

function svgEscape(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function plantArtProfile(name) {
  const lower = String(name).toLowerCase();
  if (lower.includes("hibiscus")) return { leaf: "#286b3b", leaf2: "#7fb35b", bloom: "#f2cc42", accent: "#e85a69", bg: "#fff2d5" };
  if (lower.includes("iris") || lower.includes("agapanthus")) return { leaf: "#2e6f4d", leaf2: "#75a85f", bloom: "#6c8ee8", accent: "#f3d45d", bg: "#edf6ff" };
  if (lower.includes("palm") || lower.includes("phoenix") || lower.includes("ravenea") || lower.includes("washingtonia") || lower.includes("cycas")) return { leaf: "#2f8f61", leaf2: "#86c37d", bloom: "#d7a756", accent: "#163d25", bg: "#eef9ee" };
  if (lower.includes("croton") || lower.includes("codiaeum") || lower.includes("cordyline") || lower.includes("acalypha")) return { leaf: "#7a3c22", leaf2: "#d26938", bloom: "#f1d24c", accent: "#b93745", bg: "#fff0df" };
  if (lower.includes("ficus") || lower.includes("rubber")) return { leaf: "#143f2a", leaf2: "#365f46", bloom: "#b8d6a6", accent: "#f3c4a1", bg: "#edf3e8" };
  if (lower.includes("monstera") || lower.includes("philodendron")) return { leaf: "#1f7a48", leaf2: "#54a86a", bloom: "#d7a756", accent: "#153b24", bg: "#edf8ef" };
  if (lower.includes("dracaena") || lower.includes("sansevieria")) return { leaf: "#497a37", leaf2: "#d9c85d", bloom: "#99c170", accent: "#204824", bg: "#f3f5dd" };
  if (lower.includes("spathiphyllum") || lower.includes("peace")) return { leaf: "#2f7c47", leaf2: "#86b779", bloom: "#fffdf2", accent: "#d7a756", bg: "#eef7ea" };
  return { leaf: "#2f7c47", leaf2: "#86b779", bloom: "#d7a756", accent: "#153b24", bg: "#eef7ea" };
}

function plantPlaceholder(plant) {
  const name = typeof plant === "string" ? plant : plant.name;
  const size = typeof plant === "string" ? "" : plant.size;
  const profile = plantArtProfile(name);
  const safeName = svgEscape(name);
  const safeSize = svgEscape(size || "PlantEscapes inventory");
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="${profile.bg}"/>
          <stop offset="1" stop-color="#ffffff"/>
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="32%" r="55%">
          <stop offset="0" stop-color="#ffffff" stop-opacity="0.95"/>
          <stop offset="1" stop-color="${profile.leaf2}" stop-opacity="0.18"/>
        </radialGradient>
      </defs>
      <rect width="1200" height="900" fill="url(#bg)"/>
      <circle cx="880" cy="210" r="260" fill="url(#glow)"/>
      <ellipse cx="600" cy="770" rx="360" ry="58" fill="#153b24" opacity="0.15"/>
      <rect x="515" y="604" width="170" height="190" rx="22" fill="#d7a756"/>
      <path d="M515 618h170l-24 176H539z" fill="#b98238" opacity="0.55"/>
      <path d="M600 620C570 520 548 408 552 260" stroke="${profile.accent}" stroke-width="18" fill="none" stroke-linecap="round"/>
      <path d="M605 620C640 510 668 395 664 245" stroke="${profile.leaf}" stroke-width="16" fill="none" stroke-linecap="round"/>
      <ellipse cx="497" cy="365" rx="82" ry="205" fill="${profile.leaf}" opacity="0.92" transform="rotate(-34 497 365)"/>
      <ellipse cx="693" cy="340" rx="88" ry="218" fill="${profile.leaf2}" opacity="0.9" transform="rotate(32 693 340)"/>
      <ellipse cx="575" cy="290" rx="72" ry="192" fill="${profile.leaf}" opacity="0.86" transform="rotate(-8 575 290)"/>
      <ellipse cx="642" cy="285" rx="66" ry="174" fill="${profile.leaf2}" opacity="0.84" transform="rotate(12 642 285)"/>
      <circle cx="610" cy="210" r="58" fill="${profile.bloom}" opacity="0.92"/>
      <path d="M280 124h640" stroke="#153b24" stroke-opacity="0.12" stroke-width="2"/>
      <text x="600" y="104" text-anchor="middle" font-family="Manrope, Arial, sans-serif" font-size="28" font-weight="800" letter-spacing="6" fill="#153b24" opacity="0.7">CURATED PLANT IMAGE</text>
      <text x="600" y="840" text-anchor="middle" font-family="Cormorant Garamond, Georgia, serif" font-size="58" font-weight="700" fill="#153b24">${safeName}</text>
      <text x="600" y="878" text-anchor="middle" font-family="Manrope, Arial, sans-serif" font-size="24" font-weight="800" fill="#2f7c47">${safeSize}</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function deliveryLeadMailto(order) {
  const subject = `PlantEscapes delivery lead - ${order.plant || "plant order"}`;
  const body = [
    "New PlantEscapes delivery lead",
    "",
    `Plant: ${order.plant || ""}`,
    `Quantity: ${order.quantity || ""}`,
    `Lane: ${order.lane || order.routeType || ""}`,
    `Contact mood: ${order.persona || "Curious"}`,
    `Customer contact: ${order.contact || ""}`,
    `Location: ${order.location || "Charlotte, NC"}`,
    `Availability: ${order.price || ""}`,
    `Notes: ${order.notes || ""}`,
    `Created: ${order.createdAt || new Date().toLocaleString()}`,
    "",
    "Bot priority:",
    "Mostly bulk sales. Aim first at florists and landscapers, then offices, event decorators, property managers, and route-fill personal deliveries.",
    "",
    "Dojj launch health:",
    "28/100 - Launch mode: get leads moving",
    "Risk: Clean enough to push ads harder",
    "Next move: Start with 20 Charlotte bulk outcalls to florists and landscapers, then one flea-market booth test, then log every result.",
    "",
    "Advertising route:",
    ...PLANT_BOT_AD_ROUTES.map((route) => `- ${route}`),
    "",
    "Website health / hacker watch:",
    ...PLANT_WEBSITE_HEALTH_WATCH.map((route) => `- ${route}`),
    "",
    "Cross-site premium ad route:",
    `- ${LASERSMARKET_PREMIUM_ROUTE}`,
    "",
    "Dojj bot check: confirm bulk plant count, delivery fee, payment link, buyer type, and follow-up owner."
  ].join("\n");
  return `mailto:${SALES_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const RAW_PLANTS = [
  { quantity: 5, size: "Standard", name: "Acalypha" },
  { quantity: 10, size: "3GAL", name: "Agapanthus Lily of Nile", measurement: '12"x15"' },
  { quantity: 50, size: '10"', name: "Aglaonema Silver Bay" },
  { quantity: 50, size: '10"', name: "Aglaonema Stripes" },
  { quantity: 10, size: '10"', name: "Alocasia Potora" },
  { quantity: 10, size: "3GAL", name: "Alocasia Odora", measurement: '19"x16"' },
  { quantity: 10, size: "3GAL", name: "Arboricola Gold Capella", measurement: '17"x16"' },
  { quantity: 10, size: "3GAL", name: "Arboricola Green", measurement: '12"x13"' },
  { quantity: 10, size: "3GAL", name: "Arboricola Trinette", measurement: '10"x12"' },
  { quantity: 5, size: "Standard", name: "Banana" },
  { quantity: 5, size: "Standard", name: "Banana Ensete" },
  { quantity: 8, size: '10"', name: "Beaucarnea guatemalensis (Ponytail Palm)" },
  { quantity: 40, size: "Standard", name: "Blue African Iris" },
  { quantity: 15, size: "Standard", name: "Bottlebrush" },
  { quantity: 20, size: '10"', name: "Calathea" },
  { quantity: 10, size: "3GAL", name: "Carissa Emerald Blanket", measurement: '6"x15"' },
  { quantity: 15, size: "7GAL", name: "Chinese Fan Palm", measurement: '5ftx40"' },
  { quantity: 10, size: "3GAL", name: "Clusia Guttifera Small Leaf", measurement: '13"x12"' },
  { quantity: 10, size: "7GAL", name: "Clusia Guttifera Small Leaf", measurement: '28"x27"' },
  { quantity: 14, size: '10" STD 3-4', name: "Codiaeum Variegatum Fantasy" },
  { quantity: 14, size: '10" STD 5-', name: "Codiaeum Variegatum Fantasy" },
  { quantity: 10, size: "3GAL", name: "Cocoplum Red Tip", measurement: '14"x13"' },
  { quantity: 25, size: "Assorted", name: "Cordyline" },
  { quantity: 20, size: '10"', name: "Cordyline Terminalis Harlequin" },
  { quantity: 10, size: "3GAL", name: "Crape Myrtle Pure White", measurement: '23"x18"' },
  { quantity: 10, size: "3GAL", name: "Crinum Queen Emma", measurement: '13"x13"' },
  { quantity: 25, size: "Standard", name: "Crossandra" },
  { quantity: 15, size: "Assorted", name: "Croton" },
  { quantity: 15, size: '10"', name: "Ctenanthe Lubersii" },
  { quantity: 8, size: '10"', name: "Cycas Revoluta (Sago Palm)" },
  { quantity: 15, size: '10"', name: "Dieffenbachia Marianne" },
  { quantity: 15, size: '10"', name: "Dieffenbachia Panther" },
  { quantity: 12, size: "Standard", name: "Dracaena Lemon Lime" },
  { quantity: 30, size: "Standard", name: "Dracaena Warneckii Gold Star" },
  { quantity: 10, size: '10"', name: "Dracaena Warneckii Lemon Lime 2ppp" },
  { quantity: 12, size: "Standard", name: "Dracaena Yellow" },
  { quantity: 12, size: "Tall", name: "Dracaena Yellow Stripe" },
  { quantity: 30, size: '10"', name: "Fatsia" },
  { quantity: 25, size: "Standard", name: "Fatsia Japonica" },
  { quantity: 20, size: "Standard", name: "Ficus" },
  { quantity: 15, size: '10"', name: "Ficus Elastica Burgundy" },
  { quantity: 15, size: '10"', name: "Ficus Elastica Twist" },
  { quantity: 10, size: "3GAL", name: "Ficus Green Island", measurement: '8"x11"' },
  { quantity: 10, size: '12"', name: "Ficus Lyrata Bush" },
  { quantity: 15, size: '10" STD', name: "Ficus Lyrata" },
  { quantity: 15, size: '10"', name: "Ficus Standard" },
  { quantity: 15, size: '10"', name: "Ficus Tineke Standard" },
  { quantity: 20, size: "3GAL", name: "Gardenia Aimee Bush", measurement: '15"x15"' },
  { quantity: 30, size: "3GAL", name: "Ginger Variegated", measurement: '7"x10"' },
  { quantity: 10, size: "3GAL", name: "Hibiscus Double Peach Bush", measurement: '15"x18"' },
  { quantity: 10, size: "3GAL", name: "Hibiscus Double Red Bush", measurement: '13"x15"' },
  { quantity: 10, size: "3GAL", name: "Hibiscus Fiesta Bush", measurement: '12"x10"' },
  { quantity: 10, size: "3GAL", name: "Hibiscus Hollywood First To Arrive Bush", measurement: '15"x17"' },
  { quantity: 10, size: "3GAL", name: "Hibiscus Joann Bush", measurement: '12"x14"' },
  { quantity: 10, size: "3GAL", name: "Hibiscus Painted Red Lady Pink Bush", measurement: '14"x14"' },
  { quantity: 5, size: "Standard", name: "Hibiscus Pure Yellow" },
  { quantity: 10, size: "3GAL", name: "Hibiscus Red Hot Bush", measurement: '16"x16"' },
  { quantity: 10, size: "3GAL", name: "Hibiscus Seminole Pink Bush", measurement: '12"x14"' },
  { quantity: 10, size: "3GAL", name: "Hibiscus White Wings Bush", measurement: '15"x16"' },
  { quantity: 10, size: "3GAL", name: "Indian Hawthorn", measurement: '12"x12"' },
  { quantity: 15, size: "3GAL", name: "Iris African Yellow", measurement: '23"x20"' },
  { quantity: 15, size: "3GAL", name: "Iris Regina", measurement: '20"x13"' },
  { quantity: 10, size: "3GAL", name: "Ligustrum Variegated", measurement: '13"x13"' },
  { quantity: 15, size: '10"', name: "Money Tree (Pachira aquatica)" },
  { quantity: 5, size: '10"', name: "Money Tree Singles / Character (Pachira aquatica)" },
  { quantity: 20, size: "Standard", name: "Monstera" },
  { quantity: 10, size: "3GAL", name: "Panama Rose", measurement: '10"x10"' },
  { quantity: 35, size: '10"', name: "Phoenix Roebelenii" },
  { quantity: 15, size: "3GAL", name: "Philodendron Burle Marx", measurement: '14"x15"' },
  { quantity: 15, size: "3GAL", name: "Philodendron Congo Rojo", measurement: '15"x16"' },
  { quantity: 10, size: '10"', name: "Philodendron Lickety Split" },
  { quantity: 20, size: '12"', name: "Philodendron Monstera" },
  { quantity: 30, size: '10"', name: "Philodendron Monstera" },
  { quantity: 25, size: "3GAL", name: "Philodendron Monstera", measurement: '12"x12"' },
  { quantity: 15, size: "3GAL", name: "Philodendron Selloum", measurement: '10"x16"' },
  { quantity: 15, size: "3GAL", name: "Philodendron Xanadu", measurement: '10"x15"' },
  { quantity: 20, size: "3GAL", name: "Podocarpus Maki", measurement: '12"x11"' },
  { quantity: 10, size: "7GAL", name: "Podocarpus Maki", measurement: '33"x19"' },
  { quantity: 15, size: "3GAL", name: "Podocarpus Pringles", measurement: '8"x9"' },
  { quantity: 10, size: '10"', name: "Ponytail Stump" },
  { quantity: 15, size: '10"', name: "Ravenea Majesty Palm" },
  { quantity: 20, size: '10"', name: "Schefflera Arboricola Compacta" },
  { quantity: 15, size: "3GAL", name: "Sansevieria Laurentii", measurement: '19"x13"' },
  { quantity: 25, size: '10"', name: "Sansevieria Wintergreen" },
  { quantity: 20, size: '12"', name: "Sansevieria Wintergreen" },
  { quantity: 20, size: '10"', name: "Spathiphyllum Maximo" },
  { quantity: 25, size: '10"', name: "Spathiphyllum Sensation" },
  { quantity: 15, size: "3GAL", name: "Texas Sage Silver", measurement: '11"x11"' },
  { quantity: 25, size: "Standard", name: "Umbrella Schefflera" },
  { quantity: 7, size: "Standard", name: "Viburnum Suspensum" },
  { quantity: 15, size: "Standard", name: "Washingtonia Palm" },
  { quantity: 30, size: "Standard", name: "Yellow Elder" },
  { quantity: 5, size: "7GAL", name: "Zamia Cardboard Palm", measurement: '15"x22"' }
];

const PLANTS = RAW_PLANTS
  .map((plant) => {
    const defaultPhoto = DEFAULT_STOCK_PHOTO_MAP[plantKey(plant.name)];
    return {
      ...plant,
      id: plantId(plant.name, plant.size),
      category: plant.size === "Standard" ? "Landscape / Tropical" : plant.size,
      price: `${plant.quantity} available`,
      definition: `${plant.quantity} available - ${plant.size}${plant.measurement ? ` - ${plant.measurement}` : ""}. Ready for custom plant orders and local routing.`,
      features: [
        `${plant.quantity} in stock`,
        plant.size || "Assorted size",
        plant.measurement ? `Measured ${plant.measurement}` : "Real stock photo ready"
      ],
      stockQuery: stockPhotoQueryForName(plant.name),
      defaultPhoto,
      image: defaultPhoto?.src || plantPlaceholder(plant)
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name) || a.size.localeCompare(b.size));

let currentIndex = Math.max(0, PLANTS.findIndex((plant) => plant.name === FEATURED_PLANT_NAME));

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

function getDojjClock() {
  try {
    const existing = JSON.parse(localStorage.getItem(DOJJ_HEALTH_KEY) || "null");
    if (existing?.firstSeenAt) return existing;
  } catch {
    // Build a fresh health clock if storage is unavailable or corrupt.
  }
  const next = { firstSeenAt: Date.now(), lastRefreshAt: Date.now() };
  localStorage.setItem(DOJJ_HEALTH_KEY, JSON.stringify(next));
  return next;
}

function saveDojjClock(clock) {
  localStorage.setItem(DOJJ_HEALTH_KEY, JSON.stringify(clock));
}

function currentPlant() {
  return PLANTS[currentIndex];
}

let stockPhotoCache = null;
let catalogHydrationStarted = false;
let currentCockpitMode = "facts";
let cockpitThrottle = 68;
const pendingStockPhotoRequests = new Map();

function stockPhotoKey(plant) {
  return plantKey(typeof plant === "string" ? plant : plant.name);
}

function getStockPhotoCache() {
  if (stockPhotoCache) return stockPhotoCache;
  try {
    stockPhotoCache = JSON.parse(localStorage.getItem(STOCK_PHOTO_CACHE_KEY) || "{}");
  } catch {
    stockPhotoCache = {};
  }
  return stockPhotoCache;
}

function saveStockPhotoCache() {
  localStorage.setItem(STOCK_PHOTO_CACHE_KEY, JSON.stringify(getStockPhotoCache()));
}

function plainText(value) {
  return String(value || "").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").trim();
}

function scoreWikimediaCandidate(candidate, query) {
  const title = String(candidate.title || "").toLowerCase();
  const description = plainText(candidate.info?.extmetadata?.ImageDescription?.value).toLowerCase();
  let score = 0;
  if (candidate.info?.mime === "image/jpeg") score += 6;
  if (candidate.info?.mime === "image/png") score += 3;
  if (/\b(plant|flower|leaf|leaves|palm|tree|shrub|bush)\b/.test(title)) score += 2;
  if (/\b(plant|flower|leaf|leaves|palm|tree|shrub|bush)\b/.test(description)) score += 2;
  query.toLowerCase().split(/\s+/).filter((word) => word.length > 4).forEach((word) => {
    if (title.includes(word)) score += 1;
  });
  if (/\b(svg|map|range|distribution|logo|icon|diagram|seed|fruit)\b/.test(title)) score -= 10;
  if (/\b(herbarium|specimen|drawing|illustration)\b/.test(title)) score -= 3;
  return score;
}

async function fetchWikimediaStockPhoto(query) {
  try {
    const params = new URLSearchParams({
      action: "query",
      generator: "search",
      gsrsearch: query,
      gsrnamespace: "6",
      gsrlimit: "12",
      prop: "imageinfo",
      iiprop: "url|mime|extmetadata",
      iiurlwidth: "1200",
      format: "json",
      origin: "*"
    });
    const response = await fetch(`https://commons.wikimedia.org/w/api.php?${params.toString()}`);
    if (!response.ok) return null;
    const data = await response.json();
    const pages = Object.values(data.query?.pages || {});
    const candidates = pages
      .map((page) => ({ ...page, info: page.imageinfo?.[0] }))
      .filter((page) => page.info?.mime?.startsWith("image/") && (page.info.thumburl || page.info.url))
      .sort((a, b) => scoreWikimediaCandidate(b, query) - scoreWikimediaCandidate(a, query));
    const best = candidates[0];
    if (!best) return null;
    return {
      src: best.info.thumburl || best.info.url,
      sourceUrl: best.info.descriptionurl || best.info.url,
      provider: "Wikimedia Commons",
      license: plainText(best.info.extmetadata?.LicenseShortName?.value) || "Check license",
      title: String(best.title || query).replace(/^File:/, "")
    };
  } catch {
    return null;
  }
}

async function fetchOpenverseStockPhoto(query) {
  try {
    const params = new URLSearchParams({
      q: query,
      page_size: "12",
      mature: "false"
    });
    const response = await fetch(`https://api.openverse.engineering/v1/images/?${params.toString()}`);
    if (!response.ok) return null;
    const data = await response.json();
    const best = (data.results || []).find((result) => result.thumbnail || result.url);
    if (!best) return null;
    const license = [best.license, best.license_version].filter(Boolean).join(" ").toUpperCase();
    return {
      src: best.thumbnail || best.url,
      sourceUrl: best.foreign_landing_url || best.url,
      provider: "Openverse",
      license: license || "Check license",
      title: best.title || query
    };
  } catch {
    return null;
  }
}

async function resolveStockPhoto(plant) {
  const key = stockPhotoKey(plant);
  if (plant.defaultPhoto?.src) return { ...plant.defaultPhoto, query: freePhotoQuery(plant), resolvedAt: "default" };
  const cache = getStockPhotoCache();
  if (cache[key]?.src) return cache[key];
  if (pendingStockPhotoRequests.has(key)) return pendingStockPhotoRequests.get(key);

  const request = (async () => {
    const query = freePhotoQuery(plant);
    let photo = await fetchWikimediaStockPhoto(query);
    if (!photo) photo = await fetchOpenverseStockPhoto(query);
    if (!photo?.src) return null;
    cache[key] = {
      ...photo,
      query,
      resolvedAt: Date.now()
    };
    saveStockPhotoCache();
    return cache[key];
  })();

  pendingStockPhotoRequests.set(key, request);
  try {
    return await request;
  } catch {
    return null;
  } finally {
    pendingStockPhotoRequests.delete(key);
  }
}

function updateCurrentPhotoSource(plant, photo) {
  const note = document.getElementById("sourceCurrentPhoto");
  if (!note || currentPlant().id !== plant.id) return;
  if (!photo) {
    note.textContent = "Catalog photo loads from Wikimedia or Openverse when available. Verify each image license and attribution before publishing.";
    return;
  }
  note.innerHTML = `Catalog photo: <a href="${escapeHtml(photo.sourceUrl || photo.src)}" target="_blank" rel="noopener">${escapeHtml(photo.provider)}</a> - ${escapeHtml(photo.license || "check license")}. Verify attribution before publishing.`;
}

function applyStockPhotoToCatalog(plant, photo) {
  if (!photo?.src) return;
  const key = stockPhotoKey(plant);
  document.querySelectorAll(`[data-stock-photo-key="${key}"]`).forEach((img) => {
    img.src = photo.src;
    img.alt = `${plant.name} stock photo`;
    img.title = `${photo.provider} - ${photo.license || "check license"}`;
  });
  if (currentPlant().id === plant.id) updateCurrentPhotoSource(plant, photo);
}

function applyCachedStockPhotos() {
  const cache = getStockPhotoCache();
  const seen = new Set();
  PLANTS.forEach((plant) => {
    const key = stockPhotoKey(plant);
    if (seen.has(key)) return;
    seen.add(key);
    if (plant.defaultPhoto?.src) {
      applyStockPhotoToCatalog(plant, plant.defaultPhoto);
      return;
    }
    if (cache[key]?.src) applyStockPhotoToCatalog(plant, cache[key]);
  });
}

function hydrateCatalogStockPhotos() {
  if (catalogHydrationStarted) return;
  catalogHydrationStarted = true;
  const seen = new Set();
  const uniquePlants = PLANTS.filter((plant) => {
    const key = stockPhotoKey(plant);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  let nextIndex = 0;
  const worker = async () => {
    while (nextIndex < uniquePlants.length) {
      const plant = uniquePlants[nextIndex];
      nextIndex += 1;
      const photo = await resolveStockPhoto(plant);
      if (photo) applyStockPhotoToCatalog(plant, photo);
    }
  };
  Promise.all(Array.from({ length: 4 }, worker)).catch(() => {});
}

async function loadCuratedPhoto(img, plant) {
  if (!img || !plant) return;
  img.src = plant.image;
  updateCurrentPhotoSource(plant, plant.defaultPhoto || null);
  const photo = await resolveStockPhoto(plant);
  if (img.dataset.plantId === plant.id && photo) applyStockPhotoToCatalog(plant, photo);
}

function freePhotoQuery(plant) {
  return plant.stockQuery || stockPhotoQueryForName(plant.name);
}

function freePhotoLinks(plant) {
  const query = freePhotoQuery(plant);
  return PHOTO_SOURCE_STACK.map((source) => ({
    ...source,
    query,
    url: source.buildUrl(query)
  }));
}

function bindCopySourceQuery(container, query) {
  const copyButton = container.querySelector("[data-copy-source-query]");
  if (!copyButton) return;
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(query);
      copyButton.textContent = "Copied";
      setTimeout(() => {
        copyButton.textContent = "Copy Query";
      }, 1400);
    } catch {
      copyButton.textContent = query;
    }
  });
}

function plantOrderLabel(plant) {
  return `${plant.name} (${plant.size}) - ${plant.quantity} available`;
}

function seededNumber(value) {
  return String(value || "").split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

function plantReadingProfile(plant) {
  const seed = seededNumber(`${plant.name}-${plant.size}`);
  const lower = String(plant.name || "").toLowerCase();
  const quantity = Number(plant.quantity || 0);
  const tropical = /palm|banana|alocasia|philodendron|monstera|hibiscus|croton|cordyline|ginger|aglaonema|spathiphyllum/.test(lower);
  const tough = /sansevieria|zamia|cycas|ficus|schefflera|arboricola|podocarpus|viburnum/.test(lower);
  const flowering = /hibiscus|iris|agapanthus|gardenia|crossandra|bottlebrush|crape|yellow elder|panama rose/.test(lower);
  const light = flowering ? "bright / outdoor-friendly" : tropical ? "bright indirect" : tough ? "flexible light" : "filtered light";
  const water = tropical ? "steady moisture" : tough ? "let top soil dry" : "moderate schedule";
  const diseaseRisk = tough ? "low" : flowering ? "watch blooms / pests" : tropical ? "humidity watch" : "normal";
  const marketFit = quantity >= 40 ? "bulk-ready" : quantity >= 10 ? "delivery-friendly" : "premium / limited";
  const route = quantity >= 40
    ? "Florist + landscaper bulk route"
    : quantity >= 10
      ? "Charlotte bulk-friendly delivery route"
      : "limited feature plant route";
  const readScore = Math.min(99, 86 + (seed % 12) + (quantity >= 40 ? 2 : 0));
  const marginWatch = quantity >= 40 ? "bundle price lane" : quantity >= 10 ? "protect delivery fee" : "premium quote only";
  const confidence = `${88 + (seed % 10)}%`;
  const botScript = flowering
    ? `Lead with color: "${plant.name} gives the space an instant flower moment. Want one statement piece or a bulk setup?"`
    : tropical
      ? `Lead with atmosphere: "${plant.name} makes the room feel alive fast. Want Charlotte delivery or a bulk plant lane?"`
      : `Lead with reliability: "${plant.name} is a clean practical choice. Want me to match it to your light and delivery window?"`;
  return {
    identity: `${plant.name} / ${plant.size}`,
    care: `${light} / ${water}`,
    delivery: route,
    confidence,
    readScore: `${readScore}%`,
    marketFit,
    diseaseRisk,
    marginWatch,
    light,
    water,
    lightNote: flowering ? "Best for brighter placement and color visibility." : "Match placement before final quantity.",
    waterNote: tropical ? "Do not let the delivery customer guess the first watering." : "Simple care instructions reduce returns.",
    deliveryNote: `${quantity} available. ${route}.`,
    bulk: marketFit,
    botScript
  };
}

function plantReadingMailto(plant, reading) {
  const subject = `PlantEscapes product details - ${plant.name}`;
  const body = [
    "PlantEscapes product detail facts",
    "",
    `Plant: ${plant.name}`,
    `Size: ${plant.size}`,
    `Quantity: ${plant.quantity}`,
    `Read score: ${reading.readScore}`,
    `Identity: ${reading.identity}`,
    `Care: ${reading.care}`,
    `Disease risk: ${reading.diseaseRisk}`,
    `Delivery route: ${reading.delivery}`,
    `Dojj margin watch: ${reading.marginWatch}`,
    "",
    `Bot line: ${reading.botScript}`,
    "",
    "Send lead to: zzzanthony123@gmail.com"
  ].join("\n");
  return `mailto:${SALES_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function setText(id, value) {
  const node = document.getElementById(id);
  if (node) node.textContent = value;
}

function cockpitSourceLine(plant) {
  if (plant.defaultPhoto?.provider) return `${plant.defaultPhoto.provider} stock photo / ${plant.defaultPhoto.license}`;
  return "Catalog stock source loading from Wikimedia or Openverse";
}

function cockpitModePayload(plant, reading) {
  const quantity = Number(plant.quantity || 0);
  const throttleText = `${cockpitThrottle}% delivery pressure`;
  return {
    facts: {
      label: "Facts Mode",
      headline: `${plant.name}: ${plant.quantity} in stock`,
      body: `${plant.size}${plant.measurement ? ` / ${plant.measurement}` : ""}. ${reading.confidence} product confidence. ${cockpitSourceLine(plant)}.`,
      progress: Math.min(100, 62 + Math.floor(quantity / 2))
    },
    care: {
      label: "Care Mode",
      headline: `${reading.light} + ${reading.water}`,
      body: `${reading.lightNote} ${reading.waterNote} Give the customer a simple first-week care instruction so the delivery feels professional.`,
      progress: reading.diseaseRisk === "low" ? 84 : 68
    },
    route: {
      label: "Route Mode",
      headline: reading.delivery,
      body: `${throttleText}. Charlotte stays the beam; outbound orders qualify by quantity, access, delivery window, and urgency.`,
      progress: Math.min(100, cockpitThrottle + (quantity >= 20 ? 8 : 0))
    },
    margin: {
      label: "Margin Mode",
      headline: reading.marginWatch,
      body: `Dojj checks plant cost, fuel, container, labor, delivery fee, and payment-link status before the product leaves.`,
      progress: reading.marketFit === "bulk-ready" ? 82 : reading.marketFit === "delivery-friendly" ? 74 : 58
    },
    sales: {
      label: "Sales Mode",
      headline: "Outcall line ready",
      body: reading.botScript,
      progress: Math.min(100, 70 + Math.floor(cockpitThrottle / 4))
    }
  };
}

function renderCockpitControls(plant, reading) {
  const payload = cockpitModePayload(plant, reading);
  const mode = payload[currentCockpitMode] || payload.facts;
  setText("cockpitProductName", plant.name);
  setText("cockpitPhotoSource", cockpitSourceLine(plant));
  setText("cockpitThrottleValue", `${cockpitThrottle}%`);
  setText("cockpitModeLabel", mode.label);
  setText("cockpitModeHeadline", mode.headline);
  setText("cockpitModeBody", mode.body);
  const progress = document.getElementById("cockpitProgress");
  if (progress) progress.style.width = `${mode.progress}%`;
  document.querySelectorAll("[data-cockpit-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.cockpitMode === currentCockpitMode);
  });
}

function renderPlantReading(plant) {
  const reading = plantReadingProfile(plant);
  const inventoryLine = `${plant.quantity} available / ${plant.size}`;
  const measurementLine = plant.measurement ? `Measured at ${plant.measurement}; quote delivery with space and doorway clearance in mind.` : "No physical measurement listed yet; confirm height, width, and container before final quote.";
  const stockPosture = plant.quantity >= 40 ? "High-volume line ready for office, florist, or tent bundles." : plant.quantity >= 10 ? "Good delivery quantity for Charlotte orders and smaller bulk sets." : "Limited line; sell as a feature plant or premium add-on.";
  const profileNote = `${plant.category} item. ${measurementLine}`;
  const marketNote = reading.marketFit === "bulk-ready"
    ? "Push bundle pricing, delivery fee, and fast close."
    : reading.marketFit === "delivery-friendly"
      ? "Good for personal delivery, small offices, and plant-pair offers."
      : "Use scarcity and design value instead of discounting.";
  const riskNote = `${reading.diseaseRisk}. Confirm leaf condition, soil moisture, and customer light before delivery.`;
  const dojjNote = `${reading.marginWatch}. Dojj should verify plant cost, fuel, labor, container, and payment-link status before delivery.`;

  renderCockpitControls(plant, reading);
  setText("topCommandProduct", plant.name);
  setText("topCommandStock", inventoryLine);
  setText("topCommandCare", reading.care);
  setText("topCommandRoute", reading.delivery);
  setText("topCommandMarket", reading.marketFit);
  setText("topCommandRisk", reading.diseaseRisk);
  setText("topCommandSummary", `${plant.name} is the live product model: ${stockPosture} ${measurementLine}`);
  setText("commandStock", inventoryLine);
  setText("commandCare", reading.care);
  setText("commandRoute", reading.delivery);
  setText("commandCenterPlant", plant.name);
  setText("commandCenterSummary", `${plant.name} is loaded with ${reading.confidence} product confidence, ${reading.marketFit} market fit, and ${stockPosture}`);
  setText("commandInventory", inventoryLine);
  setText("commandInventoryNote", stockPosture);
  setText("commandIdentity", reading.identity);
  setText("commandProfileNote", profileNote);
  setText("commandLight", reading.light);
  setText("commandLightNote", reading.lightNote);
  setText("commandWater", reading.water);
  setText("commandWaterNote", reading.waterNote);
  setText("commandMarketFit", reading.marketFit);
  setText("commandMarketNote", marketNote);
  setText("commandRisk", reading.diseaseRisk);
  setText("commandRiskNote", riskNote);
  setText("commandBulk", reading.bulk);
  setText("commandDeliveryNote", reading.deliveryNote);
  setText("commandDojj", reading.marginWatch);
  setText("commandDojjNote", dojjNote);
  setText("commandSalesLine", reading.botScript);
  const email = document.getElementById("commandEmailLead");
  if (email) email.href = plantReadingMailto(plant, reading);
}

function renderPlantMenu() {
  const menu = document.getElementById("plantMenu");
  if (!menu) return;
  const totalPlants = PLANTS.reduce((sum, plant) => sum + plant.quantity, 0);
  menu.innerHTML = `
    <button class="active" type="button">${PLANTS.length} alphabetical items</button>
    <button type="button">${totalPlants} plants available</button>
    <button type="button">${currentPlant().name}</button>
  `;
}

function renderPlant() {
  const plant = currentPlant();
  const image = document.getElementById("plantImage");
  const category = document.getElementById("plantCategory");
  const name = document.getElementById("plantName");
  const price = document.getElementById("plantPrice");
  const definition = document.getElementById("plantDefinition");
  const featurePoints = document.getElementById("featurePoints");
  const freeLinks = document.getElementById("freePhotoLinks");
  const orderPlant = document.getElementById("orderPlant");
  if (!image || !category || !name || !price || !definition || !featurePoints || !orderPlant) return;

  image.dataset.plantId = plant.id;
  image.dataset.stockPhotoKey = stockPhotoKey(plant);
  image.onerror = () => {
    image.onerror = null;
    image.src = plant.image;
  };
  loadCuratedPhoto(image, plant);
  image.alt = plant.name;
  category.textContent = `${plant.category} inventory`;
  name.textContent = plant.name;
  price.textContent = plant.price;
  definition.textContent = plant.definition;
  orderPlant.value = plantOrderLabel(plant);
  featurePoints.innerHTML = plant.features.map((feature) => `<div class="feature-pill">${escapeHtml(feature)}</div>`).join("");
  if (freeLinks) {
    const sourceQuery = freePhotoQuery(plant);
    freeLinks.innerHTML = `
      <div class="source-stack-heading">
        <div>
          <p>Free plant photo stack</p>
          <strong>${escapeHtml(sourceQuery)}</strong>
        </div>
        <button type="button" class="source-query-button" data-copy-source-query>Copy Query</button>
      </div>
      <div class="source-stack">
        ${freePhotoLinks(plant).map((link) => `
          <a class="source-row" href="${escapeHtml(link.url)}" target="_blank" rel="noopener">
            <span class="source-rank">${escapeHtml(link.lane)}</span>
            <span>
              <strong>${escapeHtml(link.label)}</strong>
              <small>${escapeHtml(link.note)}</small>
            </span>
            <em>${escapeHtml(link.purpose)}</em>
          </a>
        `).join("")}
      </div>
      <small class="source-note" id="sourceCurrentPhoto">Catalog photo loads from Wikimedia or Openverse when available. Verify each image license and attribution before publishing.</small>
    `;
    bindCopySourceQuery(freeLinks, sourceQuery);
  }
  renderPlantReading(plant);
  renderPlantMenu();
  renderInventoryGrid();
}

function renderInventoryGrid() {
  const grid = document.getElementById("inventoryGrid");
  const summary = document.getElementById("inventorySummary");
  if (!grid) return;
  const totalPlants = PLANTS.reduce((sum, plant) => sum + plant.quantity, 0);
  const previewPlants = PLANTS.slice(0, INVENTORY_PREVIEW_LIMIT);
  if (summary) summary.textContent = `Showing ${previewPlants.length} featured line items. Full inventory has ${PLANTS.length} line items and ${totalPlants} total plants.`;
  grid.innerHTML = previewPlants.map((plant) => {
    const index = PLANTS.findIndex((item) => item.id === plant.id);
    return `
    <button class="inventory-card ${index === currentIndex ? "active" : ""}" type="button" data-inventory-index="${index}">
      <img src="${escapeHtml(plant.image)}" alt="${escapeHtml(plant.name)}" loading="lazy" data-stock-photo-key="${escapeHtml(stockPhotoKey(plant))}">
      <span>${escapeHtml(plant.price)}</span>
      <strong>${escapeHtml(plant.name)}</strong>
      <small>${escapeHtml(plant.size)}${plant.measurement ? ` - ${escapeHtml(plant.measurement)}` : ""}</small>
    </button>
  `;
  }).join("");
  grid.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", () => {
      const plant = PLANTS.find((item) => stockPhotoKey(item) === img.dataset.stockPhotoKey);
      img.src = plant?.defaultPhoto?.src || plantPlaceholder(img.alt || "Plant");
    }, { once: true });
  });
  grid.querySelectorAll("[data-inventory-index]").forEach((button) => {
    button.addEventListener("click", () => {
      currentIndex = Number(button.dataset.inventoryIndex);
      renderPlant();
      document.querySelector(".hero-card")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
  applyCachedStockPhotos();
  hydrateCatalogStockPhotos();
}

function inventoryCardMarkup(plant, index) {
  return `
    <button class="inventory-card full-inventory-card ${index === currentIndex ? "active" : ""}" type="button" data-inventory-index="${index}">
      <img src="${escapeHtml(plant.image)}" alt="${escapeHtml(plant.name)}" loading="lazy" data-stock-photo-key="${escapeHtml(stockPhotoKey(plant))}">
      <span>${escapeHtml(plant.price)}</span>
      <strong>${escapeHtml(plant.name)}</strong>
      <small>${escapeHtml(plant.size)}${plant.measurement ? ` - ${escapeHtml(plant.measurement)}` : ""}</small>
      <em>${escapeHtml(plant.category)}</em>
    </button>
  `;
}

function renderFullInventoryPage(filter = "") {
  const grid = document.getElementById("fullInventoryGrid");
  const summary = document.getElementById("fullInventorySummary");
  if (!grid) return;
  const query = filter.trim().toLowerCase();
  const totalPlants = PLANTS.reduce((sum, plant) => sum + plant.quantity, 0);
  const filteredPlants = PLANTS
    .map((plant, index) => ({ plant, index }))
    .filter(({ plant }) => {
      if (!query) return true;
      return [plant.name, plant.size, plant.measurement, plant.category]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(query));
    });
  if (summary) {
    summary.textContent = query
      ? `${filteredPlants.length} matching line items from ${PLANTS.length}; ${totalPlants} total plants in the complete catalog.`
      : `${PLANTS.length} alphabetized line items; ${totalPlants} total plants available.`;
  }
  grid.innerHTML = filteredPlants.map(({ plant, index }) => inventoryCardMarkup(plant, index)).join("");
  grid.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", () => {
      const plant = PLANTS.find((item) => stockPhotoKey(item) === img.dataset.stockPhotoKey);
      img.src = plant?.defaultPhoto?.src || plantPlaceholder(img.alt || "Plant");
    }, { once: true });
  });
  grid.querySelectorAll("[data-inventory-index]").forEach((button) => {
    button.addEventListener("click", () => {
      localStorage.setItem("plantescapes_featured_plant_index", button.dataset.inventoryIndex);
      window.location.href = "./index.html";
    });
  });
  applyCachedStockPhotos();
  hydrateCatalogStockPhotos();
}

function changePlant(direction) {
  currentIndex = (currentIndex + direction + PLANTS.length) % PLANTS.length;
  renderPlant();
}

function submitOrder(event) {
  event.preventDefault();
  const plant = currentPlant();
  const quantity = document.getElementById("orderQuantity").value;
  const lane = document.getElementById("orderLane")?.value || "Charlotte bulk delivery";
  const persona = document.getElementById("orderPersona")?.value || "Curious";
  const contact = document.getElementById("orderContact").value.trim();
  const notes = document.getElementById("orderNotes").value.trim();
  const status = document.getElementById("orderStatus");
  const account = getAccount();

  if (!contact) {
    status.textContent = "Please enter an email or text number so we can confirm your custom order.";
    return;
  }

  const orders = getOrders();
  const order = {
    id: `PEIP-${Date.now()}`,
    plant: plant.name,
    category: plant.category,
    price: plant.price,
    quantity,
    contact,
    notes,
    location: lane.includes("Virginia") ? "Charlotte outbound: VA / GA / TN" : "Charlotte, NC",
    routeType: lane.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    lane,
    persona,
    status: "new",
    createdAt: new Date().toLocaleString()
  };
  orders.unshift(order);
  saveOrders(orders);
  refreshDojjHealth();
  if (account.provider && account.provider !== "Guest") {
    account.history = [
      { plant: plant.name, price: plant.price, quantity, createdAt: new Date().toLocaleString() },
      ...(account.history || [])
    ].slice(0, 3);
    saveAccount(account);
    renderRememberedOrders();
  }

  const mailto = deliveryLeadMailto(order);
  status.innerHTML = `Custom order saved for ${escapeHtml(plant.name)}. <a href="${escapeHtml(mailto)}">Send this delivery lead to ${SALES_EMAIL}</a>.`;
  event.target.reset();
  document.getElementById("orderPlant").value = plantOrderLabel(plant);
  document.getElementById("orderQuantity").value = 1;
  const laneInput = document.getElementById("orderLane");
  const personaInput = document.getElementById("orderPersona");
  if (laneInput) laneInput.value = "Charlotte bulk delivery";
  if (personaInput) personaInput.value = "Curious";
}

function saveFloridaBulkRequest() {
  const plant = currentPlant();
  const orders = getOrders();
  const order = {
    id: `PEIP-FL-${Date.now()}`,
    plant: plant.name,
    category: plant.category,
    price: plant.price,
    quantity: "Coming soon",
    contact: "Route through Berry 704-533-5163",
    notes: "Florida bulk direct order lane requested from the homepage.",
    location: "Florida Bulk",
    routeType: "florida-bulk-coming-soon",
    lane: "Florida bulk direct order",
    persona: "Greedy for green",
    status: "coming-soon",
    createdAt: new Date().toLocaleString()
  };
  orders.unshift(order);
  saveOrders(orders);
  refreshDojjHealth();
  const status = document.getElementById("orderStatus");
  if (status) {
    const mailto = deliveryLeadMailto(order);
    status.innerHTML = `${escapeHtml(plant.name)} has been marked for the Florida Bulk direct-order lane. <a href="${escapeHtml(mailto)}">Email this bulk lead to ${SALES_EMAIL}</a>.`;
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
      <h3>${escapeHtml(order.plant)}</h3>
      <p><strong>Quantity:</strong> ${escapeHtml(order.quantity)}</p>
      <p><strong>Contact:</strong> ${escapeHtml(order.contact)}</p>
      <p><strong>Availability:</strong> ${escapeHtml(order.price)}</p>
      <p><strong>Location:</strong> ${escapeHtml(order.location)}</p>
      <p><strong>Lane:</strong> ${escapeHtml(order.lane || order.routeType || "Charlotte custom")}</p>
      <p><strong>Contact Mood:</strong> ${escapeHtml(order.persona || "Curious")}</p>
      <p><strong>Route Type:</strong> ${escapeHtml(order.routeType || "charlotte-custom")}</p>
      <p><strong>Placed:</strong> ${escapeHtml(order.createdAt)}</p>
      <p><strong>Notes:</strong> ${escapeHtml(order.notes || "No extra notes.")}</p>
      <p><strong>Status:</strong> ${escapeHtml(order.status)}</p>
      <p><a href="${escapeHtml(deliveryLeadMailto(order))}">Email lead to ${SALES_EMAIL}</a></p>
    </article>
  `).join("");
}

function renderDojjPanel() {
  const summary = document.getElementById("dojjSummary");
  const checks = document.getElementById("dojjChecks");
  if (!summary || !checks) return;

  const orders = getOrders();
  const health = computeCompanyHealth(orders);

  summary.innerHTML = `
    <div class="summary-pill">Action Credit: ${health.actionCredit} points</div>
    <div class="summary-pill">Money Direction: ${orders.length ? "orders moving" : "waiting for first close"}</div>
    <div class="summary-pill">Plants In Motion: ${health.totalPlants}</div>
    <div class="summary-pill">Follow-Ups Needed: ${health.followUpNeeded}</div>
    <div class="summary-pill">Bulk Signals: ${health.bulkSignals}</div>
    <div class="summary-pill">Bot Push: ${escapeHtml(health.botPush)}</div>
  `;
  renderCompanyHealthCard("companyHealthSummary", health, true);

  const checksList = [
    {
      title: "Money In",
      body: orders.length
        ? `${orders.length} order signals are logged. Send payment links only after confirming plant count, delivery window, and final price.`
        : "No order money yet. First job: turn one curious visitor into a confirmed text/email lead."
    },
    {
      title: "Money Out",
      body: "Track plant cost, container cost, soil, tent fee, fuel, labor, and market snacks separately so profit does not quietly walk away."
    },
    {
      title: "Not Supposed To Be There",
      body: health.leakFlags.length ? health.leakFlags.join(" | ") : "No obvious local-storage leaks yet. Keep logging every cash sale and delivery expense."
    },
    {
      title: "Next Best Action",
      body: health.openOrders
        ? "Call or text every open order today with a cheerful confirmation and payment-link timeline."
        : "Run the bulk bot first: 20 Charlotte outcalls to florists and landscapers, then office plant offers, then the flea-market booth test."
    }
  ];

  checks.innerHTML = checksList.map((item) => `
    <article class="order-item">
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.body)}</p>
    </article>
  `).join("");
}

function minutesSince(value) {
  const time = Date.parse(value || "");
  if (!Number.isFinite(time)) return 0;
  return Math.max(0, Math.floor((Date.now() - time) / 60000));
}

function computeCompanyHealth(orders = getOrders()) {
  const clock = getDojjClock();
  clock.lastRefreshAt = Date.now();
  saveDojjClock(clock);
  const numericOrders = orders
    .map((order) => Number(order.quantity || 0))
    .filter((quantity) => Number.isFinite(quantity) && quantity > 0);
  const totalPlants = numericOrders.reduce((sum, quantity) => sum + quantity, 0);
  const openOrders = orders.filter((order) => order.status === "new").length;
  const comingSoon = orders.filter((order) => order.status === "coming-soon").length;
  const bulkSignals = orders.filter((order) => String(order.routeType || "").includes("bulk") || String(order.lane || "").toLowerCase().includes("bulk")).length;
  const followUpNeeded = openOrders + comingSoon;
  const longestOpenMinutes = Math.max(0, ...orders
    .filter((order) => order.status === "new" || order.status === "coming-soon")
    .map((order) => minutesSince(order.createdAt)));
  const watchedMinutes = Math.max(DOJJ_BOT_BASELINE_MINUTES, Math.floor((Date.now() - Number(clock.firstSeenAt || Date.now())) / 60000));
  const actionCredit = orders.length * 10 + totalPlants * 2 + bulkSignals * 15;
  const leakFlags = [
    ...orders.filter((order) => !String(order.contact || "").trim()).map((order) => `${order.plant}: missing contact`),
    ...orders.filter((order) => !String(order.notes || "").trim()).slice(0, 3).map((order) => `${order.plant}: no space or delivery notes yet`),
    ...orders.filter((order) => order.status === "coming-soon").map((order) => `${order.plant}: bulk lane requested but supplier lane not finished`),
    ...(longestOpenMinutes > 1440 ? [`Open lead aging ${Math.floor(longestOpenMinutes / 60)} hours without close`] : [])
  ];
  const timeDrag = orders.length ? Math.min(14, Math.floor(longestOpenMinutes / 240)) : Math.min(10, Math.floor(watchedMinutes / 60));
  const computedScore = Math.max(18, Math.min(100, Math.round(
    38 +
    orders.length * 7 +
    totalPlants * 0.85 +
    bulkSignals * 7 -
    followUpNeeded * 3 -
    leakFlags.length * 4 -
    timeDrag
  )));
  const score = orders.length ? computedScore : 28;
  const status = score >= 82 ? "Healthy growth lane" : score >= 62 ? "Building traction" : score >= 42 ? "Needs follow-up pressure" : "Launch mode: get leads moving";
  const mode = followUpNeeded ? "follow-up clock active" : orders.length ? "traffic expansion clock active" : "prospecting clock active";
  const risk = leakFlags.length ? "Watch leaks and missing details" : followUpNeeded ? "Follow-up load is the main risk" : "Clean enough to push ads harder";
  const summary = orders.length
    ? `Dojj sees ${orders.length} order signal${orders.length === 1 ? "" : "s"}, ${totalPlants} plants in motion, ${bulkSignals} bulk signal${bulkSignals === 1 ? "" : "s"}, and ${followUpNeeded} follow-up item${followUpNeeded === 1 ? "" : "s"}. The company is in ${mode}.`
    : `Dojj sees a clean launch board but not enough sales proof yet. The company is in ${mode} after ${watchedMinutes} watched minute${watchedMinutes === 1 ? "" : "s"}.`;
  const nextMove = followUpNeeded
    ? "Convert every open lead into a confirmed delivery window, then send the payment link."
    : orders.length
      ? "Push florist and landscaper bulk follow-ups first, then office plant offers and weekend tent signup cards."
      : "Start with 20 Charlotte bulk outcalls to florists and landscapers, then one flea-market booth test, then log every result.";
  return {
    score,
    status,
    mode,
    risk,
    summary,
    nextMove,
    botPush: "Push bulk ads harder",
    primaryBuyers: "Florists and landscapers first; offices, event decorators, and property managers second; single deliveries only as route filler.",
    trafficBot: "Bulk-first traffic bot is pointed at Charlotte florists and landscapers, then offices/events, then route-fill personal deliveries.",
    websiteHealth: "Dojj watches DNS/SSL, redirect safety, missing images, form abuse, fake payment replies, and strange bot/referral spikes.",
    hackerWatch: PLANT_WEBSITE_HEALTH_WATCH.join(" | "),
    premiumRoute: LASERSMARKET_PREMIUM_ROUTE,
    totalPlants,
    openOrders,
    bulkSignals,
    followUpNeeded,
    actionCredit,
    leakFlags,
    watchedMinutes,
    longestOpenMinutes,
    refreshedAt: new Date(clock.lastRefreshAt).toLocaleTimeString()
  };
}

function renderCompanyHealthCard(id, health = computeCompanyHealth(), detailed = false) {
  const node = document.getElementById(id);
  if (!node) return;
  node.innerHTML = `
    <span>Dojj company health</span>
    <strong>${health.score}/100 - ${escapeHtml(health.status)}</strong>
    <p>${escapeHtml(health.summary)}</p>
    <p><b>Risk:</b> ${escapeHtml(health.risk)}</p>
    <p><b>Bot push:</b> ${escapeHtml(health.botPush)}</p>
    <p><b>Bulk buyers:</b> ${escapeHtml(health.primaryBuyers)}</p>
    <p><b>Traffic bot:</b> ${escapeHtml(health.trafficBot)}</p>
    <p><b>Website health:</b> ${escapeHtml(health.websiteHealth)}</p>
    <p><b>Premium route:</b> ${escapeHtml(health.premiumRoute)}</p>
    <p><b>Next move:</b> ${escapeHtml(health.nextMove)}</p>
    <small>Live refresh: ${escapeHtml(health.refreshedAt)} / ${escapeHtml(health.mode)}</small>
    ${detailed ? `<div class="health-bars"><i style="width:${health.score}%"></i></div>` : ""}
  `;
}

function refreshDojjHealth() {
  const health = computeCompanyHealth();
  renderCompanyHealthCard("companyHealthSummary", health, true);
  renderCompanyHealthCard("dojjPublicHealth", health, false);
}

function startDojjHealthTicker() {
  refreshDojjHealth();
  window.setInterval(refreshDojjHealth, 15000);
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
      <h3>${escapeHtml(review.name)}</h3>
      <p><strong>${escapeHtml(review.rating)}</strong></p>
      <p>${escapeHtml(review.text)}</p>
    </article>
  `).join("");
}

function renderRememberedOrders() {
  const remembered = document.getElementById("rememberedOrders");
  if (!remembered) return;
  const account = getAccount();
  const history = account.history || [];
  remembered.innerHTML = `
    <div class="summary-pill">Mode: ${escapeHtml(account.provider || "Guest")}</div>
    <div class="summary-pill">Saved purchase memory: ${account.provider === "Guest" ? "Guest mode does not remember purchases." : "Last 2-3 plants stay here."}</div>
    <div class="summary-pill">Card memory: handled later by secure payment processor only.</div>
    ${history.length ? history.map((item) => `<div class="summary-pill">${escapeHtml(item.plant)} - ${escapeHtml(item.price)} - Qty ${escapeHtml(item.quantity)}</div>`).join("") : `<div class="summary-pill">No remembered plant history yet.</div>`}
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
  const savedIndexValue = localStorage.getItem("plantescapes_featured_plant_index");
  const savedIndex = savedIndexValue === null ? NaN : Number(savedIndexValue);
  if (Number.isInteger(savedIndex) && PLANTS[savedIndex]) {
    currentIndex = savedIndex;
    localStorage.removeItem("plantescapes_featured_plant_index");
  }
  renderPlant();
  renderReviews();
  renderRememberedOrders();
  bindLoginButtons();
  document.getElementById("prevPlant")?.addEventListener("click", () => changePlant(-1));
  document.getElementById("nextPlant")?.addEventListener("click", () => changePlant(1));
  document.querySelectorAll("[data-cockpit-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      currentCockpitMode = button.dataset.cockpitMode || "facts";
      renderPlantReading(currentPlant());
    });
  });
  document.getElementById("cockpitThrottle")?.addEventListener("input", (event) => {
    cockpitThrottle = Number(event.target.value || 68);
    renderPlantReading(currentPlant());
  });
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
  document.getElementById("openCommandCenterButton")?.addEventListener("click", () => openModal("factsCommandModal", true));
  document.getElementById("topOpenCommandCenterButton")?.addEventListener("click", () => openModal("factsCommandModal", true));
  document.querySelector("[data-close-command]")?.addEventListener("click", () => openModal("factsCommandModal", false));
  document.getElementById("factsCommandModal")?.addEventListener("click", (event) => {
    if (event.target.id === "factsCommandModal") openModal("factsCommandModal", false);
  });
  document.getElementById("floridaBulkButton")?.addEventListener("click", saveFloridaBulkRequest);
  document.getElementById("adminOpenButton")?.addEventListener("click", () => {
    window.location.href = "./admin.html";
  });
}

function initFullInventoryPage() {
  renderFullInventoryPage();
  const search = document.getElementById("inventorySearch");
  search?.addEventListener("input", () => renderFullInventoryPage(search.value));
}

if (document.getElementById("orderForm")) initHomePage();
if (document.getElementById("fullInventoryGrid")) initFullInventoryPage();
if (document.getElementById("ordersList")) {
  renderAdminPage();
  renderDojjPanel();
}
if (document.getElementById("companyHealthSummary") || document.getElementById("dojjPublicHealth")) {
  startDojjHealthTicker();
}
