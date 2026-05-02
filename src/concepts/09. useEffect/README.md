# 📘 useEffect & React Lifecycle

## 🚀 What You Will Learn

* What is useEffect
* Why it is needed
* What are side effects
* Dependency array (very important)
* React lifecycle (Mount, Update, Unmount)
* API integration using useEffect
* Common mistakes & interview questions

---

## 1. Introduction

👉 **useEffect** is a React Hook used to handle **side effects** in functional components.

---

## 2. What are Side Effects?

👉 Side effects are operations that happen **after React renders UI**, like fetching data or setting timers.

### Examples:

* API calls
* setTimeout / setInterval
* LocalStorage
* DOM manipulation

---

## 3. Problem Without useEffect

Let’s take your example 👇

```jsx
import { useState } from "react";

export default function Products() {
    const [products, setProducts] = useState([]);

    function fetchData() {
        console.log("API CALL 🔁");

        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => {
                console.log("Setting products");
                setProducts(data.products);
            });
    }

    fetchData();

    console.log("Component Rendered");

    return (
        <div>
            <h1>Products</h1>
            <p>{products.length}</p>
        </div>
    );
}
```

---

## ❌ What Happens Here?

* Component renders
* `fetchData()` runs
* `setProducts()` updates state
* Component re-renders
* `fetchData()` runs again

👉 This creates an **infinite loop** because state update triggers re-render, which again calls fetchData()

⚠️ Even if UI looks normal, API may still be calling repeatedly.
Check Network tab to see the issue clearly.

---

## 4. Solution → useEffect

👉 We control when side effects run using `useEffect`

---

## 5. Syntax

```jsx
useEffect(() => {
   // side effect
}, [dependencies]);
```

---

## 6. Dependency Array (Most Important)

### 🔹 Case 1: No Dependency Array

```jsx
useEffect(() => {
   fetchData();
});
```

👉 Runs on:

* Every render ❌ (dangerous)

---

### 🔹 Case 2: Empty Dependency Array

```jsx
useEffect(() => {
   fetchData();
}, []);
```

👉 Runs only:

* Once (on component mount) ✅

👉 This runs during the **Mounting Phase** (when component loads)

---

### 🔹 Case 3: With Dependencies

```jsx
useEffect(() => {
   console.log("Updated");
}, [products]);
```

👉 Runs when:

* `products` changes

👉 This is **Updating Phase**

---

## 🧠 Simple Mental Model

useEffect runs like this:

- No array → run always
- [] → run once
- [value] → run when value changes

---

## 7. Practical Example (API Fetch)

### 📁 Products.jsx

```jsx
import { useEffect, useState } from "react";

export default function Products(){

    const [products, setProducts] = useState([]);

    function fetchData(){
        console.log("API CALL 🔁");

        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => setProducts(data.products));
    }

    useEffect(() => {
        fetchData();
    }, []);

    console.log("Component Rendered");

    return (
        <div>
            <h1>Products</h1>

            {products.map((item) => (
                <p key={item.id}>{item.title}</p>
            ))}
        </div>
    );
}
```

---

## 🔍 How the Code Works (Step-by-Step)

### Step 1: Initial Render

* Component loads
* `products = []`

---

### Step 2: useEffect Runs

```js
useEffect(() => {
   fetchData();
}, []);
```

👉 Runs only once

---

### Step 3: API Call

* Data fetched from API
* `setProducts()` updates state

---

### Step 4: Re-render

* Component updates
* Products displayed

---

## 8. React Lifecycle (Simplified)

```
Mount → Update → Unmount
```

---

### 🔹 Mounting Phase

* Component loads
* useEffect with `[]` runs

---

### 🔹 Updating Phase

* State/props change
* useEffect runs (if dependency matches)

---

### 🔹 Unmounting Phase

* Component removed

👉 Example:

```jsx
useEffect(() => {

    return () => {
        console.log("Cleanup on unmount");
    };

}, []);
```

---

## 9. Cleanup Function (VERY IMPORTANT)

👉 Used to prevent memory leaks

### Example:

```jsx
useEffect(() => {

    const timer = setInterval(() => {
        console.log("Running...");
    }, 1000);

    return () => {
        clearInterval(timer);
    };

}, []);
```

👉 Meaning:

* Run something every **1 second**
* Stop it when component unmounts

👉 Cleanup runs when:

* Component unmounts
* Before next effect

---

### ✅ Case 1: Normal API Fetch (MOST COMMON)

👉 You **do NOT need setInterval**

```jsx
useEffect(() => {
    fetchData();
}, []);
```

✔ Runs once
✔ Best practice for API

---

### 🔥 Case 2: API Polling (Real Use Case)

👉 When you want to **refresh data every few seconds**

Example:

* Live stock prices
* Chat messages
* Notifications

---

### ✅ Example: Fetch API every 5 seconds

```js
import { useEffect, useState } from "react";

export default function Products() {

    const [products, setProducts] = useState([]);

    function fetchData() {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => setProducts(data.products));
    }

    useEffect(() => {

        // First API Call
        fetchData();

        // Repeat every 5 seconds
        const timer = setInterval(() => {
            fetchData();
        }, 5000);

        // Cleanup
        return () => {
            clearInterval(timer);
        };
    
    }, []);

    return (
        <div>
            <h1>Products (Auto Refresh)</h1>

            {products.map(item => (
                <p key={item.id}>{item.title}</p>
            ))}
        </div>
    );
}
```

---

## 🔍 How This Works

### Step 1:

Component loads → `useEffect` runs

### Step 2:

* Calls `fetchData()` once
* Sets interval (every 5 sec)

### Step 3:

Every 5 seconds:
👉 API runs again
👉 UI updates

### Step 4:

When component unmounts:
👉 `clearInterval()` stops it

---

## ⚠️ Important Notes

### ❌ Don’t do this:

```js
setInterval(fetchData(), 5000);
```

👉 This runs immediately and causes bugs

---

### ❌ Don’t forget cleanup

If you skip:

```js
clearInterval(timer);
```

👉 Memory leak + multiple intervals

---

### 💡 When to Use This Pattern

Use polling when:

* Data changes frequently
* Real-time updates needed

Don’t use it for:

* Static data
* One-time fetch

---

### 🧠 Simple Rule

👉 90% of cases:

```
useEffect → fetch once
```

👉 10% advanced cases:

```
useEffect + setInterval → polling
```

---

### 🚀 Final Understanding

* `useEffect` → controls WHEN things run
* `setInterval` → controls HOW OFTEN

---

## ⚡ Pro Tip

Never call API directly inside component body.

Always use useEffect to control execution.

---

## 10. Real-World Use Cases

* API calls
* Timers
* Event listeners
* Form validation
* Authentication checks

---

## 11. Common Mistakes

* Missing dependency array
* Infinite loops
* Wrong dependencies
* Forgetting cleanup
* Calling API outside useEffect

---

## 12. Interview Questions (With Answers)

### 1. What is useEffect?

A hook used to handle side effects in React.

---

### 2. What is dependency array?

Controls when useEffect runs.

---

### 3. What happens if no dependency array?

Runs on every render.

---

### 4. What is cleanup function?

Function returned inside useEffect to clean resources.

---

### 5. Why cleanup function?

To prevent memory leaks and stop unnecessary background processes like intervals or subscriptions.

---

### 6. Difference between [] and [value]?

| Case    | Behavior                |
| ------- | ----------------------- |
| []      | runs once               |
| [value] | runs when value changes |

---

### 7. Why infinite loop happens?

Because state update triggers re-render which triggers effect again.

---

## 13. Practice Problems

1. Fetch users from API
2. Create loading spinner
3. Create timer with cleanup
4. Fetch data on button click
5. Search input with API

---

## 14. Summary

* useEffect handles side effects
* Dependency array controls execution
* Prevents infinite loops
* Works with lifecycle phases

---

## 🔚 Final Thought

useEffect is what makes React **connected to real-world data**.

Without it:
👉 React cannot interact with APIs or external systems

With it:
👉 React becomes dynamic and interactive

---