# 📘 APIs in React

## 🚀 What You Will Learn

* What is an API
* What are Mock APIs
* Why we use Mock Data
* How to use real APIs
* How frontend and backend connect
* Practical examples

---

## 1. Introduction

👉 API stands for **Application Programming Interface**

👉 It allows frontend (React) to communicate with backend.

---

## 2. What are Mock APIs?

👉 Mock APIs = **dummy data used during development**

---

## 💡 Why Mock APIs?

In real companies:

* Frontend team starts first
* Backend may not be ready

👉 So developers use **dummy data**

---

## 3. Mock Data Example

### 📄 data.js

```js
export const products = [
  { id: 1, title: "iPhone 14", price: 800 },
  { id: 2, title: "Samsung S23", price: 700 },
  { id: 3, title: "MacBook Pro", price: 2000 }
];
```

---

## 4. Product Card 

### 📄 ProductCard.jsx

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

## 5. Rendering Mock Data

### 📄 ProductsMock.jsx (Using Mock Data)

```jsx
import { products } from "./data";
import ProductCard from "./ProductCard";

export default function ProductsMock() {
  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} data={product} />
      ))}
    </div>
  );
}
```

---

## 🔍 How This Works

### Step 1:

Data comes from local file

### Step 2:

`map()` loops through data

### Step 3:

Each item → ProductCard

### Step 4:

UI renders

---

## 6. Moving to Real API

👉 Once backend is ready:

We replace mock data with API calls

---

## 7. API Example

### 📄 ProductsAPI.jsx

```jsx
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductsAPI() {

  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setProducts(data.products);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {products.map(product => (
        <p key={product.id}>{product.title}</p>
      ))}
    </div>
  );
}
```

---

### 📄 App.jsx (Switch between both)

```jsx
import ProductsMock from "./concepts/12.APIs/ProductsMock";
// import ProductsAPI from "./concepts/12.APIs/ProductsAPI";

export default function App() {
  return (
    <>
      <ProductsMock />
      {/* <ProductsAPI /> */}
    </>
  );
}
```

---

## 🔍 How This Works

### Step 1:

Component loads

---

### Step 2:

useEffect runs

---

### Step 3:

API is called

---

### Step 4:

Data stored in state

---

### Step 5:

UI updates

---

## 8. Mock vs Real API

| Feature | Mock Data   | Real API   |
| ------- | ----------- | ---------- |
| Source  | Local file  | Server     |
| Speed   | Fast        | Depends    |
| Usage   | Development | Production |

---

## 9. Real-World Flow

```
Step 1 → Build UI with Mock Data
Step 2 → Replace with API
Step 3 → Connect frontend & backend
```

---

## 9. Common Mistakes

* Calling API outside useEffect
* Not handling errors
* Missing dependency array
* Wrong data mapping

---

## 10. Interview Questions

### What is an API?

A way for frontend to communicate with backend.

---

### What is Mock API?

Dummy data used during development.

---

### Why use Mock Data?

To continue frontend work before backend is ready.

---

## 11. Practice Problems

1. Create mock user list
2. Replace with API
3. Display images
4. Add loading state
5. Add error handling

---

## 12. Summary

* APIs connect frontend and backend
* Mock data helps development
* useEffect is used for API calls
* Real APIs replace mock data

---

## 🔚 Final Thought

APIs make your app **dynamic and real-world ready**

---