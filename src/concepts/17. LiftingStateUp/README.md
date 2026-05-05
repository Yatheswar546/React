# 📘 Lifting State Up in React (with API Integration)

## 🚀 What You Will Learn

* What is Lifting State Up
* Why it is needed
* Difference between useEffect and Lifting State
* Wrong vs Correct implementation
* Real-world example (Search + Products + API)
* Interview-ready understanding

---

# 1. Introduction

👉 In React, data flows **top → down (parent → child)**

👉 But sometimes:

* Multiple components need same data
* Components are siblings (not parent-child)

👉 This creates a problem

---

# 2. Problem Statement

👉 Example:

* Search input in Header
* Product list in Products

👉 Both need **same search value**

```text
Header ❌→ Products
```

👉 Props cannot directly pass between siblings

---

# 3. Solution: Lifting State Up

👉 Move state to **common parent**

```text
        App (Parent)
        /        \
   Header      Products
```

👉 Parent manages state and shares via props

---

# 🎯 Core Idea

```text
Lifting State Up → Move shared state to parent
```

---

# 4. ❌ Wrong Implementation (No Lifting State)

👉 Each component has its own state
👉 No connection between them

---

## 📄 Header.jsx

```jsx
import { useState } from "react";

export default function Header() {

  const [search, setSearch] = useState("");

  return (
    <input
      type="text"
      placeholder="Search..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
```

---

## 📄 Products.jsx

```jsx
import { useEffect, useState } from "react";

export default function Products() {

  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    const filtered = data.products.filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );

    setProducts(filtered);
  }

  useEffect(() => {
    fetchProducts();
  }, [search]);

  return (
    <div>
      {products.map(p => <p key={p.id}>{p.title}</p>)}
    </div>
  );
}
```

---

## ❌ Problem

```text
Header search ❌ NOT connected to Products search
```

👉 Two separate states
👉 No shared data
👉 UI does not sync

---

# 5. ✅ Correct Implementation (Lifting State Up)

👉 Move state to parent and share it

---

## 📄 ProductCard.jsx 

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

## 📄 Header.jsx (Search Input)

```jsx
export default function Header({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
```

---

## 📄 Products.jsx (Display List)

```jsx
import ProductCard from "./ProductCard";

export default function Products({ products }) {

    return (
        <>
            <h2>Products</h2>

            {products.map(product => (
                <ProductCard key={product.id} data={product} />
            ))}
        </>
    );
}
```

---

## 📄 App.jsx (Parent, MAIN LOGIC - LIFTED STATE)

```jsx
import { useEffect, useState } from "react";
import Header from './concepts/17. LiftingStateUp/Header';
import Products from './concepts/17. LiftingStateUp/Products';

export default function App() {

  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    try {
      const res = await fetch("https://dummyjson.com/products");

      // Proper fetch error handling
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

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

## 🔍 How the Code Works (Step-by-Step)

#### Step 1: State in Parent

```js
const [search, setSearch] = useState("");
```

👉 Central source of truth

---

#### Step 2: User Types in Header

```js
setSearch(e.target.value);
```

👉 Updates parent state

---

#### Step 3: useEffect Runs

```js
useEffect(() => {
  fetchProducts();
}, [search]);
```

👉 Runs whenever search changes

---

#### Step 4: API Call + Filter

```js
product.title.includes(search)
```

👉 Filters products

---

#### Step 5: Products Component Updates

👉 Receives updated data

---

## 🧠 Visual Flow

```text
User types in Header
        ↓
setSearch updates App state
        ↓
useEffect runs
        ↓
API fetch + filtering
        ↓
Products updated
        ↓
UI re-renders
```

---

# 6. 🔍 Difference: useEffect vs Lifting State

## 🎯 Short Answer

👉 **useEffect + API Integration**
= *“When and how to fetch data from API”*

👉 **Lifting State Up**
= *“Where should state live so multiple components can use it”*

---

## 🧠 Simple Analogy

* API Integration → *Cooking food* 🍳
* Lifting State → *Serving food to everyone at table* 🍽️

Both happen together, but they solve different problems.

---

## 🔑 Key Difference

### 1. useEffect + API Integration

👉 Focus: **Side effects (API calls)**

Example flow:

```text
Component loads
→ useEffect runs
→ API call happens
→ Data stored in state
→ UI renders
```

👉 State usually lives in **same component**

---

### 2. Lifting State Up

👉 Focus: **Sharing state between components**

Example flow:

```text
User types in Header
→ state updated in Parent
→ passed to Products
→ UI updates
```

👉 State lives in **parent component**

---

## 💡 One-Line Comparison

```text
👉 useEffect → controls WHEN logic runs **logic (API)**
👉 Lifting State → controls WHERE data lives **structure (state sharing)**
```

---

## 🧠 When Do We Use Each?

### Use useEffect when:

* Calling API
* Running side effects
* Fetching data

---

### Use Lifting State when:

* Two components need same data
* Components are siblings
* Props alone are not enough

---

## 🔥 Combined View (Very Important)

In real apps, BOTH are used together:

```text
Header → updates search
        ↓
App (state stored here)
        ↓
useEffect runs API
        ↓
Products gets updated data
```

👉 Both concepts work together

---

## 🎯 How to Explain in Interview

👉 Simple answer:

> useEffect is used to handle API calls and side effects,
> while Lifting State Up is used to share state between multiple components by moving it to a common parent.

---

# 7. Real-World Use Cases

* Search functionality
* Filters (price, category)
* Shared forms
* Dashboard data

---

# 8. Common Mistakes

* Keeping state in multiple components ❌
* Trying to share data between siblings directly ❌
* Not lifting state when required ❌
* Over-lifting unnecessary state ❌

---

# 9. Interview Questions (With Answers)

### What is Lifting State Up?

Moving state to a common parent to share between components

---

### Why is it needed?

> When multiple components need the same data, keeping separate state causes inconsistency.
> So we lift the state to a common parent and share it via props.

---

### Difference between useEffect and Lifting State?

useEffect handles side effects, lifting state handles data sharing

---

### When should we use it?

When multiple components need same data

---

# 10. Practice Problems

1. Search + filter products
2. Shared counter between components
3. Form input shared across components
4. Theme toggle (light/dark mode)

---

# 11. Summary

* React follows top-down data flow
* Siblings cannot share state directly
* Lift state to parent
* Pass data using props
* useEffect handles API logic
* Both concepts work together

---

# 🔚 Final Thought

Lifting State Up is the backbone of:

👉 Component communication
👉 Clean architecture
👉 Real-world React apps

---