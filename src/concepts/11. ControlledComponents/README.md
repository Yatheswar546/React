# 📘 Controlled Components (Forms in React)

## 🚀 What You Will Learn

* What are Controlled Components
* Why they are needed
* How React controls form inputs
* Handling input fields using state
* Form submission
* Real-world examples

---

## 1. Introduction

👉 In React, form elements like input, textarea, select can be controlled using **state**.

👉 When React controls the value of an input field using state, it is called a **Controlled Component**.

---

## 2. Simple Definition

👉 Controlled Component means:

React (state) is the **single source of truth** for form data.

---

## 3. Why Controlled Components?

Without control:

* Input manages its own state (unpredictable)

With control:

* React manages data
* Easy validation
* Easy submission
* Better control

---

## 4. Basic Example (Single Input)

### 📁 Example.jsx

```jsx id="c6r6yj"
import { useState } from "react";

export default function Example() {

    const [name, setName] = useState("");

    function handleChange(e) {
        setName(e.target.value);
    }

    return (
        <div>
            <h1>Controlled Input</h1>

            <input 
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={handleChange}
            />

            <p>Typed: {name}</p>
        </div>
    );
}
```

---

### 🔍 How the Code Works (Step-by-Step)

#### Step 1: State Created

```js
const [name, setName] = useState("");
```

👉 React stores input value

---

#### Step 2: Input Value Controlled

```js
value={name}
```

👉 Input shows value from state

---

#### Step 3: User Types

```js
onChange={handleChange}
```

👉 Runs on every keystroke

---

#### Step 4: State Updates

```js
setName(e.target.value);
```

👉 Updates state → UI updates

---

👉 Flow:

```
User types → onChange → setState → re-render → UI updates
```

---

## 5. Practical Example (Form Submission)

### 📁 LoginForm.jsx

```jsx id="0mfrqq"
import { useState } from "react";

export default function LoginForm() {

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log("Form Data:", formData);
    }

    return (
        <div>
            <h1>Login Form</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />

                <button type="submit">Login</button>

            </form>
        </div>
    );
}
```

---

### 🔍 How This Works (Step-by-Step)

#### Step 1: State Object

```js
const [formData, setFormData] = useState({...});
```

👉 Stores all inputs

---

#### Step 2: handleChange

```js
const { name, value } = e.target;
```

👉 Gets input name + value

---

#### Step 3: Dynamic Update

```js
[name]: value
```

👉 Updates correct field

---

#### Step 4: Submit

```js
e.preventDefault();
```

👉 Prevent page reload

---

#### Step 5: Data Ready

👉 Now you can send data to API

---

## 6. Real-World Example (Add Product)

👉 This connects with your mini project

### 📁 AddProduct.jsx

```jsx id="7n3q1g"
import { useState } from "react";

export default function AddProduct() {

    const [product, setProduct] = useState({
        title: "",
        price: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setProduct(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log("New Product:", product);
    }

    return (
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
    );
}
```

---

### 🔍 How This Connects to Your App

👉 Earlier:

* You fetched products

👉 Now:

* You can add products

👉 Next:

* You will send data to backend

---

## NOTE: 

Add the below line in **App.css** under `#root` for neat UI

```css
#root {
    display: flex;
    flex-direction: column;
}
```

## 7. Controlled vs Uncontrolled

| Feature     | Controlled   | Uncontrolled |
| ----------- | ------------ | ------------ |
| Data source | React state  | DOM          |
| Control     | Full control | Less control |
| Validation  | Easy         | Hard         |
| Usage       | Recommended  | Rare         |

---

## 8. Common Mistakes

* Forgetting `value` attribute
* Not using `onChange`
* Not using `name` for multiple inputs
* Not preventing form reload
* Mutating state directly

---

## 9. Interview Questions (With Answers)

### 1. What is a Controlled Component?

A component where React controls form input using state.

---

### 2. Why use Controlled Components?

For better control, validation, and handling.

---

### 3. What is single source of truth?

State is the only source of data.

---

### 4. Difference between controlled and uncontrolled?

Controlled → React state
Uncontrolled → DOM

---

## 10. Practice Problems

1. Create login form
2. Create signup form
3. Add validation
4. Add reset button
5. Add product form

---

## 11. Summary

* Controlled components use state
* React controls input values
* Easy to handle forms
* Required for real-world apps

---

## 🧠 Simple Analogy

Think of input like a **remote-controlled car**:

* Controlled → You control it
* Uncontrolled → It moves on its own

---

## 🔚 Final Thought

Controlled Components are the foundation of:
👉 Forms
👉 API requests
👉 User interaction

Master this:
👉 You can build real applications

---