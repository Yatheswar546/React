# 📘 React Router

## 🚀 What You Will Learn

* What is routing
* Difference between MPA and SPA
* Why React Router is needed
* Core components (BrowserRouter, Routes, Route, Link)
* Practical Navbar routing example
* How routing works internally

---

## 1. Introduction

👉 In normal HTML, we use `<a>` tags to navigate between pages.

❌ Problem:

* Reloads entire page
* Reloads full DOM
* Slower performance
* Repeats same layout (header, navbar, footer)

---

## 2. MPA vs SPA

### 🔹 Multi Page Application (MPA)

* Each navigation reloads entire page
* Slower
* Traditional websites

---

### 🔹 Single Page Application (SPA)

* Only one HTML page
* Updates only required components
* Faster and smoother

👉 React follows **SPA approach**

---

## 3. What is React Router?

👉 **React Router** is a standard third-party library used for handling client-side routing in React applications.

👉 It enables navigation between components without page reload.

---

## 4. Installation

* We need to use 3rd party library `Router`
* We need to install `react-router` 

```bash
npm install react-router-dom
```

---

## 5. Core Concepts

### 🔹 BrowserRouter

👉 It stores the current location in the browser's address bar using clean URLs.

* Wraps the entire app
* Enables routing
* Uses browser URL

---

### 🔹 Routes `<Routes />`

* Container for all routes 
* Wraps all individual route definitions
* Checks URL and renders matching route
* Parent which is a collection of all Route(s)
* Examines all its children (`<Route /> elements`) and renders only the best match for the current URL.

---

### 🔹 Route `<Route />`

* It is fundamental unit
* Maps a path to a component
* It is children
* Takes element path as props and redirect to that component(page)

```jsx
<Route path="/about" element={<About />} />
```

---

### 🔹 Link

* Used for navigation
* Replacement for `<a>` tag
* `to` is used to give the path

```jsx
<Link to="/about">About</Link>
```

---

## 6. Project Structure (Example: Navbar)

```id="kjd7qh"
src
│
├── concepts
│     └── 06.ReactRouter 
│            ├── pages
│            │     ├── Home.jsx
│            │     ├── About.jsx
│            │     ├── Services.jsx
│            │     └── Contact.jsx
│            └── Navbar.jsx
│
├── App.jsx
└── main.jsx
```

---

## 7. Practical Example (Navbar Routing)

---

### 📁 main.jsx

* we need to wrap the `<App />` in `<BrowserRouter />`

```jsx id="gkq9f1"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
)
```

---

### 📁 App.jsx

* We need to import Route & Routes and all the components

```jsx id="7t9lqm"
import { Routes, Route } from 'react-router-dom'

import Navbar from "./concepts/06.ReactRouter/Navbar";
import Home from "./concepts/06.ReactRouter/pages/Home";
import About from "./concepts/06.ReactRouter/pages/About";
import Services from "./concepts/06.ReactRouter/pages/Services";
import Contact from "./concepts/06.ReactRouter/pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App;
```

---

### 📁 Navbar.jsx

* We use Link tag here to give the respective paths

```jsx id="3z8j1w"
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |
      <Link to="/about">About</Link> |
      <Link to="/services">Services</Link> |
      <Link to="/contact">Contact</Link>
    </nav>
  )
}
```

---

### 📁 Pages (Home.jsx, About.jsx, Services.jsx, Contact.jsx)

```jsx id="hxv8rf"
export default function Home(){
  return <h1>Home Page</h1>
}

export default function About(){
  return <h1>About Page</h1>
}

export default function Services(){
  return <h1>Services Page</h1>
}

export default function Contact(){
  return <h1>Contact Page</h1>
}
```

---

## 8. Visual Flow

```id="kz9qf4"
User clicks Link
        │
        ▼
URL changes
        │
        ▼
Routes checks path
        │
        ▼
Matching Route found
        │
        ▼
Component renders
```

---

## 🔍 How the Code Actually Works

### Step 1: BrowserRouter

```jsx id="3hvtf2"
<BrowserRouter>
  <App />
</BrowserRouter>
```

👉 It enables routing for the entire app
👉 Without this, routing will NOT work

---

### Step 2: Link (Navigation)

```jsx id="o1w5rp"
<Link to="/about">About</Link>
```

👉 When user clicks:

* URL changes to `/about`
* Page does NOT reload
* React handles navigation internally

---

### Step 3: Routes

```jsx id="o7l4gm"
<Routes>
```

👉 Acts like a controller:

* Looks at current URL
* Finds matching route

---

### Step 4: Route

```jsx id="8a3lre"
<Route path="/about" element={<About />} />
```

👉 Meaning:

* If URL is `/about`
* Render `<About />` component

---

### Step 5: Full Flow

1. User clicks "About"
2. URL → `/about`
3. Routes checks all routes
4. Finds matching path
5. Renders About component

---

## 🔥 Important Insight

👉 Navbar does NOT change
👉 Only page content changes

This is the power of **SPA (Single Page Application)**

---

## 9. Real-World Use Cases

* Website navigation
* Dashboards
* Admin panels
* E-commerce apps
* Multi-page UI inside single app

---

## 10. Common Mistakes

* Forgetting BrowserRouter
* Using `<a>` instead of `<Link>`
* Wrong path names
* Not importing components properly
* Incorrect folder structure

---

## 11. Interview Questions (With Answers)

### 1. What is React Router?

A library used for client-side routing in React applications.

---

### 2. Why not use `<a>` tag?

Because it reloads the entire page.

---

### 3. What is BrowserRouter?

Wraps the app and enables routing.

---

### 4. Difference between Route and Routes?

| Feature | Route        | Routes        |
| ------- | ------------ | ------------- |
| Purpose | Defines path | Groups routes |
| Usage   | Single route | Collection    |

---

### 5. What is Link?

Used to navigate between pages without reloading.

---

### 6. What is SPA?

Single Page Application where only components update, not full page reload.

---

## 12. Practice Problems

1. Add a new page (Profile)
2. Create navigation with 5 links
3. Add a "Not Found" page
4. Highlight active link
5. Create nested routes

---

## 13. Summary

* React Router enables navigation without reload
* Uses BrowserRouter, Routes, Route, Link
* Works on SPA concept
* Improves performance and user experience

---

## 🔚 Final Thought

React Router is what makes your app feel like a **real website** instead of a static page.

---