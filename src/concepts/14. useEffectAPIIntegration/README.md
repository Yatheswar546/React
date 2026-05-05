# 📘 useEffect + API Integration

## 🚀 What You Will Learn

* How to fetch data using useEffect
* How to integrate API with UI
* How to use controlled input for search
* How to filter data dynamically
* Real-world product search example

---

## 1. Introduction

👉 In real applications:

* Data comes from APIs
* UI updates based on user input

👉 This is called **API Integration**

---

## 2. What We Will Build

👉 Product Search App:

* Fetch products from API
* Display list
* Add search input
* Filter products

---

## 3. Code Example

### 📄 1. ProductCard.jsx

```jsx
export default function ProductCard({ data }) {
  return (
    <div>
      <h3>{data.title}</h3>
      <p>Price: ${data.price}</p>
    </div>
  );
}
```

---

### 📄 2. ProductsSearch.jsx

```jsx
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductsSearch() {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  async function fetchProducts() {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  // Fetch data on load
  useEffect(() => {
    fetchProducts();
  }, []);

  // Filter products based on search
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Product Search</h1>

      {/* Controlled Input */}
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Loading State */}
      {loading && <p>Loading...</p>}

      {/* Product List */}
      {!loading &&
        filteredProducts.map(product => (
          <ProductCard key={product.id} data={product} />
        ))
      }
    </div>
  );
}
```

---

### 📄 3. App.jsx

```jsx
import ProductsSearch from "./concepts/14.useEffectAPIIntegration/ProductsSearch";

export default function App() {
  return (
    <>
      <ProductsSearch />
    </>
  );
}
```

---

### 🔍 How the Code Works (Step-by-Step)

---

#### Step 1: State Setup

```js
const [products, setProducts] = useState([]);
const [search, setSearch] = useState("");
const [loading, setLoading] = useState(true);
```

👉 products → stores API data
👉 search → stores user input
👉 loading → handles loading UI

---

#### Step 2: Fetch Data

```js
useEffect(() => {
  fetchProducts();
}, []);
```

👉 Runs once (on mount)
👉 Calls API

---

#### Step 3: Store Data

```js
setProducts(data.products);
```

👉 Updates state
👉 UI re-renders

---

#### Step 4: Controlled Input

```jsx
<input
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
```

👉 React controls input
👉 Updates search state

---

#### Step 5: Filtering Logic

```js
products.filter(product =>
  product.title.toLowerCase().includes(search.toLowerCase())
);
```

👉 Filters products based on input

---

#### Step 6: Render UI

```jsx
filteredProducts.map(...)
```

👉 Displays filtered list

---

### 🧠 Visual Flow

```text
Component Loads
      ↓
useEffect runs
      ↓
API Call
      ↓
Data stored in state
      ↓
User types in search
      ↓
State updates
      ↓
Filter runs
      ↓
UI updates
```

---

## 4. Real-World Use Cases

* E-commerce product search
* Movie search apps
* User filtering
* Dashboard filters

---

## 5. Common Mistakes

* Calling API outside useEffect
* Not using controlled input
* Not handling loading state
* Case-sensitive search bugs

---

## 6. Interview Questions

### Why use useEffect for API?

To control when API runs.

---

### Why controlled input?

To track user input using state.

---

### How filtering works?

Using array.filter() based on input.

---

## 7. Practice Problems

1. Add search for users
2. Add "No Results Found"
3. Add loading spinner
4. Add category filter
5. Highlight search text

---

## 8. Summary

* useEffect is used for API calls
* State stores data
* Controlled input handles user input
* Filtering updates UI dynamically

---

## 🔚 Final Thought

This is your first **real-world React feature**

👉 API + UI + User Interaction

---