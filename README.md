# Bühler App

A lightweight product catalogue and shopping cart application built for the Bühler Group, allowing users to browse industrial machines, view product details, and manage a cart.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Vue 3 (Composition API) |
| State Management | Pinia |
| Routing | Vue Router 5 |
| Styling | Tailwind CSS v4 |
| Build Tool | Vite 8 |
| Node Requirement | `^20.19.0` or `>=22.12.0` |

---

## Getting Started

### Prerequisites

- Node.js `^20.19.0` or `>=22.12.0`
- npm

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd buhler-app

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173` by default.

### Build for Production

```bash
npm run build
```

Output is placed in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## Application Routes

| Path | Name | Component | Notes |
|---|---|---|---|
| `/` | — | Redirects to `/products` | |
| `/products` | `products` | `ProductsList` | Eagerly loaded; cached with `keep-alive` |
| `/products/:id` | `product-details` | `ProductDetails` | Lazy loaded; validates product ID at route guard |
| `/checkout` | `cart` | `Cart` | Lazy loaded |
| `/:pathMatch(.*)` | `page-not-found` | `PageNotFound` | Catch-all |

---