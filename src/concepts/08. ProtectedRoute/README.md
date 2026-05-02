# 🔐 Protected Routes (React Router)

## 🚀 What You Will Learn

* What are Protected Routes
* Why they are needed
* Authentication flow
* useContext + useNavigate usage
* Real-world login system

---

## 1. Introduction

👉 **Protected Routes** are routes that are accessible only when a user is authenticated(logged in).

---

## 2. Why Protected Routes?

In real applications:

* Dashboard should not be accessible without login
* Profile should be private
* Admin pages should be restricted

---

## 3. Flow of Protected Route

```
User tries to access /dashboard
        │
        ▼
Check isLoggedIn ?
        │
   Yes ─────▶ Show Dashboard
        │
   No ─────▶ Redirect to Login
```

---

## 4. Core Idea

We:

1. Store login state
2. Wrap routes with ProtectedRoute
3. Redirect if not logged in

### NOTE: 
👉 ProtectedRoute is NOT security, only UI protection

---

## 5. Key Components

### 🔹 AuthContext

* Stores authentication state globally

---

### 🔹 ProtectedRoute

```jsx
if (!isLoggedIn) {
  return <Navigate to="/" replace />;
}
```

👉 Redirects if not logged in

---

### 🔹 Login

* Validates user
* Sets login state
* Navigates to dashboard

---

### 🔹 Dashboard

* Protected page
* Logout functionality

---

## 6. Project Structure (Example: Login + Dashboard)

```bash
src
│
├── concepts
│     └── 08.ProtectedRoute
│            ├── pages
│            │     ├── Dashboard.jsx
│            │     └── Login.jsx
│            │
│            ├── ProtectedRoute.jsx
│            ├── AuthContext.jsx
│            └── README.md
│
├── index.css
├── App.jsx
└── main.jsx
```

---

## 7. Practical Example (Login + Dashboard)

---

### 📄 1. AuthContext.jsx

👉 Manages login state globally

```jsx
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function login() {
        setIsLoggedIn(true);
    }

    function logout() {
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );

}

export function useAuth() {
    return useContext(AuthContext);
}
```

---

### 📄 2. ProtectedRoute.jsx

```js
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function ProtectedRoute({ children }) {

    const { isLoggedIn } = useAuth();

    if(!isLoggedIn) {
        return <Navigate to="/" />;
    }

    return children;
}
```

---

---

### 📄 3. Login.jsx

```js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

export default function Login() {

    const [username, setUsername] = useState("");
    const navigate = useNavigate();
    const { login } = useAuth();

    function handleLogin(e) {
        e.preventDefault();

        if(username.trim() === "admin") {
            login();
            navigate("/dashboard");
        } else {
            alert("Invalid Username");
        }
    }

    return (
        <div className="ProtectedRouteContainer">
            <h1>Login</h1>

            <form onSubmit={handleLogin}>
                <input 
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <button type="submit">Login</button>
            </form>

        </div>
    );

}
```

---

### 📄 4. Dashboard.jsx

```js
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import "../../../index.css";

export default function Dashboard() {

    const { logout } = useAuth();
    const navigate = useNavigate();

    function handleLogout() {
        logout();
        navigate("/");
    }

    return (
        <div className="ProtectedRouteContainer">
            <h1>Welcome to Dashboard</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}
```

---

### 📄 5. App.jsx (IMPORTANT)

```js
import './App.css'

import { Routes, Route } from 'react-router-dom';

import Login from './concepts/08. ProtectedRoute/pages/Login';
import Dashboard from './concepts/08. ProtectedRoute/pages/Dashboard';
import ProtectedRoute from './concepts/08. ProtectedRoute/ProtectedRoute';

function App() {

  return (
    <>  
      <Routes>
        <Route path="/" element={<Login />} />

        <Route 
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
    </>
  );
}

export default App;
```

---

### 📄 6. main.jsx 

```js
import { StrictMode, React } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './concepts/08. ProtectedRoute/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
    </StrictMode>
  </BrowserRouter>
)
```

---


### 🎨 7. index.css

```css
.ProtectedRouteContainer {
  text-align: center;
  margin-top: 100px;
}

.ProtectedRouteContainer input {
  padding: 10px;
  margin: 10px;
  width: 200px;
}

.ProtectedRouteContainer button {
  padding: 10px 20px;
  cursor: pointer;
}
```

---

## 🔍 Code Workflow - How the Code Works

Let’s understand how the application works step by step.

### 1. Application Start (`main.jsx`)

The app is wrapped with:

* **BrowserRouter** → enables routing
* **AuthProvider** → provides authentication state globally

👉 So every component can access login status.

---

### 2. Routing Setup (`App.jsx`)

Routes are defined like this:

* `/` → Login page
* `/dashboard` → Protected Dashboard page

👉 Dashboard is wrapped inside `ProtectedRoute`, which acts as a guard.

---

### 3. Login Page (`Login.jsx`)

This page:

* Takes user input (username)
* Stores it using state
* On form submit:

  * Checks if username is `"admin"`
  * If correct:

    * Calls `login()` (updates global auth state)
    * Navigates to `/dashboard`
  * If incorrect:

    * Shows alert

---

### 4. Authentication Handling (`AuthContext.jsx`)

This file manages login state globally.

It contains:

* `isLoggedIn` → stores whether user is logged in or not
* `login()` → sets `isLoggedIn = true`
* `logout()` → sets `isLoggedIn = false`

👉 It uses React Context so all components can access this data.

---

### 5. Protected Route (`ProtectedRoute.jsx`)

This is the **core logic for protection**.

* It checks `isLoggedIn`
* If user is **not logged in**:

  * Redirects to `/` (Login page)
* If user **is logged in**:

  * Renders the requested component (Dashboard)

---

### 6. Dashboard Page (`Dashboard.jsx`)

This page is only accessible after login.

It:

* Displays dashboard content
* Can include a logout button (optional)
* On logout:

  * Calls `logout()`
  * Clears auth state
  * Redirects back to login page

---

## 🔄 Complete Flow

1. App loads → Login page is shown
2. User enters username
3. If username is `"admin"`:

   * Login state becomes true
   * User navigates to `/dashboard`
4. ProtectedRoute checks login state:

   * If true → Dashboard is shown
   * If false → Redirect to Login
5. User can logout and return to Login page

---

## ⚠️ Important Note (Very Important)

👉 Protected Routes only protect UI, NOT backend.

Even if route is hidden:

* API must still validate authentication

---

## 🔁 What Happens on Page Refresh?

👉 Problem:

If user refreshes:

* State resets
* User becomes logged out

👉 Solution (advanced):

* Use localStorage / cookies / JWT

---

## 🧠 Simple Analogy

Think of your app like a **secure office building**:

* **Login Page** → Reception desk
* **AuthContext** → Security system (stores who is allowed)
* **ProtectedRoute** → Security guard at the door
* **Dashboard** → Restricted office area

👉 If you are not verified:
The guard sends you back to reception

👉 If you are verified:
The guard allows you inside

---

## ✅ Key Takeaway

This project shows how to:

* Manage global authentication state
* Protect routes based on login status
* Control navigation flow in a React app

---

## 8. Real-World Use Cases

* Login systems
* Admin dashboards
* Payment pages
* User profiles

---

## 9. Common Mistakes

* Not wrapping with AuthProvider
* Forgetting `replace` in Navigate
* Wrong route protection
* Mixing auth logic

---

## 10. Interview Questions

### What are Protected Routes?

Routes accessible only to authenticated users.

---

### How to implement them?

Using:

* Context / State
* Conditional rendering
* Navigate

---

### Are Protected Routes secure?

❌ No (frontend only)
✅ Backend validation is required

---

### How to persist login?

Using:

* localStorage
* cookies
* JWT

---

## 11. Summary

* Protects sensitive routes
* Uses authentication logic
* Improves security and UX
* Not a full security solution

---

## 🔚 Final Thought

Protected Routes make your app behave like a **real secure application**, not just a UI.

---

## 🚀 What You Built

✔ Login system
✔ Route protection
✔ Logout flow
✔ Real-world feature

---