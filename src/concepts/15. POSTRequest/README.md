# 📘 POST Request (Send Data to Backend)

## 🚀 What You Will Learn

* What is POST request
* How to send data to backend
* How forms connect with APIs
* Real-world example (Add Product)

---

## 1. Introduction

👉 In real applications:

* Users submit forms
* Data is sent to backend

👉 This is done using **POST request**

---

## 2. What is POST Request?

👉 POST is used to:

* Send data
* Create new resource

---

## 3. What We Will Build

👉 Add Product Form:

* User enters product
* Clicks submit
* Data sent to API

---

## 4. Code Example

### 📄 1. AddProduct.jsx (Main Concept)

```jsx
import { useState } from "react";

export default function AddProduct() {

  const [product, setProduct] = useState({
    title: "",
    price: ""
  });

  const [message, setMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setProduct(prev => ({
      ...prev,
      [name]: value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
      });

      const data = await res.json();

      setMessage("Product Added Successfully ✅");
      console.log("Response:", data);

      // Reset form
      setProduct({
        title: "",
        price: ""
      });

    } catch (err) {
      console.log(err);
      setMessage("Error adding product ❌");
    }
  }

  return (
    <div>
      <h1>Add Product</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="Product Title"
          value={product.title}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
        />

        <button type="submit">Add Product</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
```

---

### 📄 2. ProductList.jsx (Optional Display)

👉 (Helps connect with previous concepts)

```jsx
import { useEffect, useState } from "react";

export default function ProductList() {

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
      <h2>Product List</h2>

      {products.map(product => (
        <p key={product.id}>{product.title}</p>
      ))}
    </div>
  );
}
```

---

### 📄 3. App.jsx

```jsx
import AddProduct from "./concepts/15.POSTRequest/AddProduct";

export default function App() {
  return (
    <>
      <AddProduct />
    </>
  );
}
```

---

### 🔍 How the Code Works (Step-by-Step)

---

#### Step 1: State Setup

```js
const [product, setProduct] = useState({...});
```

👉 Stores form data

---

#### Step 2: Controlled Inputs

```jsx
value={product.title}
onChange={handleChange}
```

👉 React controls input

---

#### Step 3: Handle Change

```js
[name]: value
```

👉 Updates correct field

---

#### Step 4: Form Submit

```js
e.preventDefault();
```

👉 Prevents page reload

---

#### Step 5: API Call

```js
fetch(url, {
  method: "POST",
  headers: {...},
  body: JSON.stringify(product)
});
```

👉 Sends data to backend

---

#### Step 6: Response Handling

```js
const data = await res.json();
```

👉 Backend response

---

#### Step 7: UI Feedback

```js
setMessage("Product Added");
```

👉 Shows success message

---

#### Step 8: Reset Form

```js
setProduct({ title: "", price: "" });
```

👉 Clears inputs

---

### 🧠 Visual Flow

```text
User enters data
      ↓
onChange updates state
      ↓
Submit button clicked
      ↓
handleSubmit runs
      ↓
POST API call
      ↓
Backend stores data
      ↓
Response received
      ↓
UI updated
```

---

## 5. Real-World Use Cases

* Signup form
* Login form
* Add product
* Submit feedback

---

## 6. Common Mistakes

* Forgetting JSON.stringify
* Missing headers
* Not preventing default
* Wrong API method
* Not handling response

---

## 7. Fetch vs Axios (POST)

### Fetch

```js
fetch(url, {
  method: "POST",
  body: JSON.stringify(data)
});
```

---

### Axios

```js
axios.post(url, data);
```

👉 Axios is simpler

---

## 8. Interview Questions

### What is POST request?

Used to send data to backend.

---

### Difference between GET and POST?

GET → fetch data
POST → send data

---

### Why JSON.stringify?

To convert object into JSON format.

---

## 9. Practice Problems

1. Create signup form
2. Add product form
3. Add validation
4. Show success message
5. Connect with API

---

## 10. Summary

* POST sends data to backend
* Forms use controlled components
* API call happens on submit
* Response updates UI

---

## 🔚 Final Thought

Now your app can:

👉 Read data (GET)
👉 Send data (POST)

👉 This is **full-stack interaction 🔥**

---