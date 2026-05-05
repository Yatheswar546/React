# 📘 Fetch vs Axios in React

## 🚀 What You Will Learn

* What is Fetch
* What is Axios
* Difference between Fetch and Axios
* When to use each
* Practical examples

---

## 1. Introduction

👉 To get data from APIs, we use:

* Fetch (built-in)
* Axios (third-party library)

---

## 2. What is Fetch?

👉 Fetch is a **built-in JavaScript function** used to make API calls.

---

## 3. What is Axios?

👉 Axios is a **third-party library** used to make API calls.

👉 Install using:

```bash
npm install axios
```

---

## 4. Example of fetching data using Fetch and Axios

### 📁 Folder Structure

```bash
concepts
└── 13.FetchVsAxios
     ├── ProductsFetch.jsx
     ├── ProductsAxios.jsx
     └── README.md
```

---


### 4.a Fetch Example

### 📄 ProductsFetch.jsx

```jsx
const res = await fetch("https://dummyjson.com/products");
const data = await res.json();
setProducts(data.products);
```

---

### 🔍 How Fetch Works

#### Step 1:

fetch() makes request

---

#### Step 2:

Response comes (raw format)

---

#### Step 3:

Convert using `.json()`

---

#### Step 4:

Store in state

---

### 📄 4.a ProductsFetch.jsx (Complete Code)

```jsx
import { useEffect, useState } from "react";

export default function ProductsFetch() {

  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    } catch (err) {
      console.log("Fetch Error:", err);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Fetch API</h1>

      {products.map(product => (
        <p key={product.id}>{product.title}</p>
      ))}
    </div>
  );
}
```

### 4.b Axios Example

### 📄 ProductsAxios.jsx

```jsx
import axios from "axios";

const res = await axios.get("https://dummyjson.com/products");
setProducts(res.data.products);
```

---

### 🔍 How Axios Works

#### Step 1:

axios.get() makes request

---

#### Step 2:

Response is already in JSON

---

#### Step 3:

Directly access `res.data`

---

### 📄 4.b ProductsAxios.jsx (Complete Code)

👉 First install axios:

```bash
npm install axios
```

```jsx
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductsAxios() {

  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      setProducts(res.data.products);
    } catch (err) {
      console.log("Axios Error:", err);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Axios API</h1>

      {products.map(product => (
        <p key={product.id}>{product.title}</p>
      ))}
    </div>
  );
}
```

---

### 📄 App.jsx (optional switch)

```jsx
import ProductsFetch from "./concepts/13.FetchVsAxios/ProductsFetch";
// import ProductsAxios from "./concepts/13.FetchVsAxios/ProductsAxios";

export default function App() {
  return (
    <>
      <ProductsFetch />
      {/* <ProductsAxios /> */}
    </>
  );
}
```

---

## 5. Key Differences

| Feature         | Fetch        | Axios        |
| --------------- | ------------ | ------------ |
| Built-in        | ✅ Yes        | ❌ No         |
| Installation    | ❌ Not needed | ✅ Required   |
| JSON conversion | Required     | Not required |
| Error handling  | Manual       | Better       |
| Code length     | More         | Less         |

---

## 6. Code Comparison

### Fetch

```js
const res = await fetch(url);
const data = await res.json();
```

### Axios

```js
const res = await axios.get(url);
```

---

## 7. When to Use What?

### Use Fetch:

* Small projects
* No external library needed

---

### Use Axios:

* Real-world apps
* Better error handling
* Cleaner code

---

## 8. More example use-cases on fetch()

### 8.a Fetch with Proper Error Handling

### 📄 ProductsFetchWithError.jsx

```js
import { useEffect, useState } from "react";

export default function ProductsFetchWithError() {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    async function fetchProducts() {
        try {
            const res = await fetch("https://dummyjson.com/prcts");

            // 🔴 Important: fetch does NOT throw error automatically
            if(!res.ok) {
                throw new Error("Failed to fetch data");
            }

            const data = await res.json();
            setProducts(data.products);

        } catch (err) {
            console.log(err);
            setError(err.message);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <h1>Products (Fetch + Error Handling)</h1>

            {error && <p style={{ color: "red" }}>Error: {error}</p>}

            {products.map(product => (
                <p key={product.id}>{product.title}</p>
            ))}
        </>
    );

}
```

---

### 🔍 How This Works

#### Step 1:

```js
const res = await fetch(...)
```

👉 Makes API call

---

#### Step 2:

```js
if (!res.ok)
```

👉 Checks if request failed

---

#### Step 3:

```js
throw new Error(...)
```

👉 Manually triggers error

---

#### Step 4:

```js
catch (err)
```

👉 Handles error safely

---

### 📌 When to Use This

👉 Always when using **fetch**

Because:

* fetch does NOT fail automatically on HTTP errors
* You must handle it manually

---

### 8.b Fetch with Loading State

### 📄 ProductsFetchWithLoading.jsx

```js
import { useState, useEffect } from "react";

export default function ProductsFetchWithLoading() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchProducts() {
        try {
            const res = await fetch("https://dummyjson.com/products");
            const data = await res.json();
            setProducts(data.products);
        } catch (err) {
            console.log(err);
        } finally {
            // ✅ runs always (success or error)
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <h1>Products (Loading State)</h1>

            {loading ? (
                <p>Loading...</p>
            ) : (
                products.map(product => (
                    <p key={product.id}>{product.title}</p>
                ))
            )}
        </>
    );
}
```

---

### 🔍 How This Works

#### Step 1:

```js
const [loading, setLoading] = useState(true);
```

👉 Start with loading = true

---

#### Step 2:

API call runs

---

#### Step 3:

```js
finally {
  setLoading(false);
}
```

👉 Stops loading after API completes

---

#### Step 4:

```jsx
{loading ? <p>Loading...</p> : ...}
```

👉 Conditional rendering

---

### 📌 When to Use This

👉 Always when fetching data from API

Because:

* API takes time
* User needs feedback
* Prevents blank screen

---

## 🔥 BEST PRACTICE (Combine Both) 

👉 In real apps, we combine:

### 📄 Final Version (Recommended) ProductsBestPractice.jsx

```js
import { useEffect, useState } from "react";

export default function ProductsBestPractice() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchProducts() {
        try {
            const res = await fetch("https://dummyjson.com/products");

            if(!res.ok) {
                throw new Error("Failed to fetch data");
            }

            const data = await res.json();
            setProducts(data.products);

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <h1>Products</h1>

            {loading && <p>Loading...</p>}

            {error && <p style={{ color: "red" }}>{error}</p>}

            {!loading && !error && 
                products.map(product => (
                    <p key={product.id}>{product.title}</p>
                ))
            }
        </>
    );

}
```

---

## 🎯 Final Understanding

👉 Fetch needs:

* Manual error handling ✅
* Loading state ✅

---

## 🧠 Simple Rule

```id="tkclv3"
Fetch = Loading + Error + Data
```

---

## 9. Common Mistakes

* Forgetting `.json()` in fetch
* Not handling errors
* Using wrong response structure
* Not using async/await properly

---

## 10. Interview Questions

### What is Axios?

A library used to make API calls.

---

### Difference between Fetch and Axios?

Fetch is built-in, Axios is third-party and easier.

---

### Which is better?

Both are used, but Axios is preferred for better features and cleaner syntax mostly for real-world apps

---

### How do you handle API in React?

I use useEffect with loading state, error handling and proper response checks.

---

## 11. Practice Problems

1. Fetch users using fetch
2. Fetch same using axios
3. Compare outputs
4. Add error handling
5. Add loading state

---

## 12. Summary

* Fetch is built-in
* Axios is easier and powerful
* Both are used for API calls
* Axios is preferred in real-world apps

---

## 🔚 Final Thought

Fetch teaches fundamentals
Axios improves productivity

---