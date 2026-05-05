# 📘 Lifting State Up in React

## 🚀 What You Will Learn

* What is Lifting State Up
* Why it is needed
* How components share data
* Real-world example (Search + Products)

---

## 1. Introduction

👉 In React, data flows **top → down (parent → child)**

👉 But sometimes:

* Two components need same data
* They are not directly connected

👉 This creates a problem

---

## 2. Problem Statement

👉 Example:

* Search bar in Header
* Product list in Products

👉 Both need **same search data**

👉 But they are **siblings**, not parent-child

---

## ❌ Problem

```text
Header ❌→ Products
```

👉 Props cannot directly pass between siblings

---

## 3. Solution: Lifting State Up

👉 Move state to **common parent**

```text
        App (Parent)
        /        \
   Header      Products
```

👉 Parent shares data with both children

---

## 4. Code Example

### 📄 ProductCard.jsx 

```js
export default function ProductCard({ data }) {
    
    return (
        <>
            <h3>{data.title}</h3>
            <p>Price: ${data.price}</p>
        </>
    );
}
```

---

### 📄 Header.jsx (Search Input)

```js
export default function Header({ search, setSearch }) {

  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={handleChange}
      />
    </div>
  );
}
```

---

### 📄 Products.jsx (Display List)

```js
import ProductCard from "./ProductCard";

export default function Products({ products }) {

  return (
    <div>
      <h2>Products</h2>

      {products.map(product => (
        <ProductCard key={product.id} data={product} />
      ))}
    </div>
  );
}
```

---

### 📄 App.jsx (MAIN LOGIC - LIFTED STATE)

```jsx
import { useEffect, useState } from "react";
import Header from "./Header";
import Products from "./Products";

export default function App() {

  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();

      const filtered = data.products.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );

      setProducts(filtered);

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [search]);

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <Products products={products} />
    </>
  );
}
```

---

### 🔍 How the Code Works (Step-by-Step)

---

#### Step 1: State in Parent

```js
const [search, setSearch] = useState("");
```

👉 Stored in App (parent)

---

#### Step 2: Pass to Header

```jsx
<Header search={search} setSearch={setSearch} />
```

👉 Header gets access

---

#### Step 3: User Types

```js
setSearch(e.target.value);
```

👉 Updates parent state

---

#### Step 4: useEffect Runs

```js
useEffect(() => {
  fetchProducts();
}, [search]);
```

👉 Runs whenever search changes

---

#### Step 5: Filtering Logic

```js
product.title.toLowerCase().includes(search.toLowerCase())
```

👉 Filters products

---

#### Step 6: Pass Data to Products

```jsx
<Products products={products} />
```

👉 Products receives updated data

---

#### Step 7: UI Updates

👉 Filtered products displayed

---

### 🧠 Visual Flow

```text
User types in Header
        ↓
setSearch updates state (App)
        ↓
useEffect runs
        ↓
Products filtered
        ↓
Products component updates
```

---

## 5. Real-World Use Cases

* Search functionality
* Filters (price, category)
* Forms shared across components
* Dashboard data

---

## 6. Common Mistakes

* Trying to pass data between siblings directly
* Keeping state in wrong component
* Not lifting state to parent
* Over-lifting (unnecessary lifting)

---

## 7. Interview Questions

### What is Lifting State Up?

Moving state to a common parent to share between components.

---

### Why is it needed?

To share data between sibling components.

---

### When should we use it?

When multiple components need same state.

---

## 8. Practice Problems

1. Search + list filtering
2. Parent form controlling child components
3. Toggle theme across components
4. Shared counter between components

---

## 9. Summary

* React follows top-down data flow
* Siblings cannot share data directly
* Move state to parent
* Pass data using props

---

## 🔚 Final Thought

Lifting State Up is the foundation of:

👉 Component communication
👉 Data sharing
👉 Real-world apps

---