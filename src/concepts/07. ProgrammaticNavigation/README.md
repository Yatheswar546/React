# 📘 Programmatic Navigation (React Router)

## 🚀 What You Will Learn

* What is Programmatic Navigation
* Why we need it
* useNavigate Hook
* Navigation using logic/events
* Real-world examples
* Practical implementation

---

## 1. Introduction

👉 **Programmatic Navigation** means:
Navigating between pages **using JavaScript logic instead of clicking links**.

---

## 2. Why Programmatic Navigation?

Sometimes navigation depends on logic, not user clicks on links.

### Examples:

* After form submission → go to Dashboard
* After login → go to Home
* After adding item → go to Cart
* After logout → go to Login

👉 In these cases, `<Link>` is not enough

---

## 3. useNavigate Hook

👉 React Router provides a hook called `useNavigate`

```js
const navigate = useNavigate();
```

👉 It returns a function that allows navigation between routes programmatically

---

## 4. Basic Syntax

```js
navigate("/path");
```

---

## 5. Practical Example 1 (Button Navigation)

### 📁 GoToCart.jsx

```jsx id="h1eg7a"
import { useNavigate } from "react-router-dom";

export default function GoToCart() {

    const navigate = useNavigate();

    function handleClick() {
        navigate("/cart");
    }

    return (
        <div>
            <h1>Product Page</h1>
            <button onClick={handleClick}>Go to Cart</button>
        </div>
    );
}
```

---

### 📁 Cart.jsx

```jsx id="t3n8o9"
export default function Cart() {
    return <h1>Cart Page</h1>;
}
```

---

### 📁 App.jsx

```jsx id="9t2fjm"
import { Routes, Route } from "react-router-dom";
import Dashboard from './concepts/07. ProgrammaticNavigation/pages/Dashboard';
import Login from './concepts/07. ProgrammaticNavigation/LoginPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<GoToCart />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
```

---

## 6. Visual Flow

```
User clicks button
        │
        ▼
handleClick() runs
        │
        ▼
navigate("/cart")
        │
        ▼
URL changes to /cart
        │
        ▼
Cart component renders
```

---

# 🔍 How the Code Actually Works

## Step 1: useNavigate Hook

```js id="1f5lqv"
const navigate = useNavigate();
```

👉 This gives a navigation function

---

## Step 2: Button Click

```js id="7kgqmc"
<button onClick={handleClick}>
```

👉 When clicked → `handleClick()` runs

---

## Step 3: Navigation Happens

```js id="1rzz1y"
navigate("/cart");
```

👉 React Router:

* Updates URL
* Finds matching route
* Renders Cart component

---

## 7. Practical Example 2 (Form Submission)

### 📁 Login.jsx

```jsx id="f6z7qy"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");

    function handleLogin(e) {
        e.preventDefault();

        if(username.trim() === "admin") {
            navigate("/dashboard");
        } else {
            alert("Invalid User");
        }
    }

    return (
        <div>
            <h1 className="loginHeading">Login Form</h1>
            <form onSubmit={handleLogin}>
                <input 
                    type="text"
                    placeholder="Enter name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit" className="formButton">Login</button>
            </form>
        </div>
    );
}
```

---

### 📁 Dashboard.jsx

```jsx id="j7g2qk"
export default function Dashboard() {
    return <h1>Welcome to Dashboard</h1>;
}
```

---

### 📁 App.jsx

```jsx id="9t2fjm"
import { Routes, Route } from "react-router-dom";
import Dashboard from './concepts/07. ProgrammaticNavigation/pages/Dashboard';
import Login from './concepts/07. ProgrammaticNavigation/LoginPage';

function App() {
  return (
    <>  
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
```

### 📁 App.css

```css
#root {
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;

  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### 📁 index.css

```css
.loginHeading {
  margin-bottom: 20px;
  font-size: 48px;
}

form {
  background: #7ee369;
  padding: 30px;
  border-radius: 12px;
  width: 320px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
}

input {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
}

input:focus {
  border-color: #2563eb;
}

.formButton {
  width: 100%;
  padding: 12px;
  margin: 0;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
}

.formButton:hover {
  background-color: #1d4ed8;
}
```

---

## 🔍 How This Works

1. User enters username
2. Clicks Login
3. handleLogin runs
4. If condition passes → navigate
5. Redirects to dashboard

---

## 8. Extra Features of navigate()

### 🔹 Replace current page

```js id="8y3q4o"
navigate("/home", { replace: true });
```

👉 Replaces current history entry, so user cannot go back to previous page using browser back button

---

### 🔹 Go Back

```js id="c0m9q1"
navigate(-1);
```

👉 Same as browser back button

---

### 🔹 Go Forward

```js id="t4c1zo"
navigate(1);
```

---

### 🔹 Passing Data During Navigation

```js
navigate("/dashboard", { state: { user: username } });
```

👉 Access it using:

```js
import { useLocation } from "react-router-dom";

const location = useLocation();
console.log(location.state.user);
```

---

## 9. Real-World Use Cases

* Login / Logout redirect
* Payment success page
* Redirect after form submission
* Role-based navigation
* Protected routes

---

## 10. Common Mistakes

* Using `useNavigate` outside component
* Forgetting to call navigate()
* Wrong path names
* Confusing Link with navigate
* Not preventing default form submission

---

## 11. Interview Questions (With Answers)

### 1. What is Programmatic Navigation?

Navigation based on logic/events instead of user clicking links.

---

### 2. What is useNavigate?

A hook used to navigate between routes programmatically.

---

### 3. Difference between Link and navigate?

| Feature | Link        | navigate    |
| ------- | ----------- | ----------- |
| Type    | UI element  | Function    |
| Use     | User clicks | Logic-based |

---

### 4. How to redirect after login?

Using `navigate("/dashboard")`

---

### 5. What does navigate(-1) do?

Navigates back to previous page.

---

### 6. Can we pass data using navigate?

✅ Yes, using `state` parameter

---

## 12. Practice Problems

1. Create a button to go to Profile page
2. Redirect after login
3. Create logout functionality
4. Navigate after form submission
5. Implement back button using navigate

---

## 13. Summary

* Programmatic Navigation uses logic to navigate
* useNavigate is the key hook
* Works without user clicking links
* Used in real-world scenarios like login, forms

---

## 🔚 Final Thought

Programmatic Navigation makes your app **intelligent and dynamic**, not just clickable.

---