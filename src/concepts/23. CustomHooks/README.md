# 📘 Custom Hooks in React

## 🚀 What You Will Learn

* What are Custom Hooks
* Why Custom Hooks are needed
* Reusing logic in React
* Rules of Custom Hooks
* Creating your own Hook
* Real-world examples
* `useLocalStorage` Hook
* `useWindowSize` Hook
* Benefits of Custom Hooks
* Common mistakes & interview questions

---

## 1. Introduction

As applications grow:

👉 Multiple components start sharing similar logic.

Examples:

* API fetching
* Form handling
* LocalStorage logic
* Window resize tracking
* Timers

---

### ❌ Problem

Without Custom Hooks:

👉 Same code gets repeated again and again.

This causes:

* Duplicate code
* Difficult maintenance
* Hard debugging

---

## 2. Solution → Custom Hooks

👉 Custom Hooks allow us to:

✅ Extract reusable logic
✅ Share logic between components
✅ Keep components clean

---

## 3. What is a Custom Hook?

👉 A Custom Hook is:

A reusable JavaScript function that uses React Hooks internally.

---

## ⚠️ Important Rule

Custom Hooks must:

```text id="ytj1x8"
Start with "use"
```

Examples:

```js id="5r7plg"
useLocalStorage()
useWindowSize()
useFetch()
```

---

## 🧠 Why "use" Prefix?

React uses this naming convention to identify Hooks.

Without `use`:

❌ React will NOT treat it as a Hook properly.

---

## 4. Real Purpose of Custom Hooks

Custom Hooks help us:

```text id="9xz3n1"
Write logic once
        ↓
Reuse everywhere
```

---

### 🧠 Simple Analogy

Imagine:

👉 Custom Hook = reusable machine

You build it once.

Then multiple components can use it.

---

## 5. Real-World Use Cases

Custom Hooks are commonly used for:

---

### 1. API Fetching

```js id="9m4q0z"
useFetch()
```

---

### 2. Local Storage Handling

```js id="h18h7f"
useLocalStorage()
```

---

### 3. Window Resize Tracking

```js id="o6lyu4"
useWindowSize()
```

---

### 4. Authentication Logic

```js id="6dz7g9"
useAuth()
```

---

### 5. Debouncing Search

```js id="n9q2ya"
useDebounce()
```

---

## 6. Important Understanding

⚠️ Custom Hooks do NOT create shared state automatically.

Every component using a Hook gets:

```text id="3g2i9h"
Its own separate state
```

unless Context/global state is used.

---

## 7. Example 1 → Problem Without Custom Hook

Suppose:

Two components need:

👉 LocalStorage input logic.

---

### 📄 TempComponent.jsx

```jsx id="a9x4mj"
import { useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "temp_key";

export default function TempComponent() {

    const [input, setInput] = useState(
        localStorage.getItem(LOCAL_STORAGE_KEY) ?? "Crio"
    );

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, input);
    }, [input]);

    return (
        <div>

            <h2>Temp Component</h2>

            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

        </div>
    );
}
```

---

### 📄 RandomComponent.jsx

```jsx id="t9s8b2"
import { useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "random_key";

export default function RandomComponent() {

    const [input, setInput] = useState(
        localStorage.getItem(LOCAL_STORAGE_KEY) ?? "Random"
    );

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, input);
    }, [input]);

    return (
        <div>

            <h2>Random Component</h2>

            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

        </div>
    );
}
```

---

### ❌ Problem Here

👉 Same logic repeated in multiple components.

This is:

```text id="mkj8lz"
Code duplication
```

---

## 8. Solution → Create Custom Hook

---

### 📁 Folder Structure

```bash
src
│
├── hooks
│     ├── useLocalStorageInput.js
│     └── useWindowSize.js
│
├── TempComponent.jsx
├── RandomComponent.jsx
├── WindowSizeComponent.jsx
├── App.jsx
└── README.md
```

---

## 9. Example 1 → useLocalStorageInput Hook

---

### 📄 hooks/useLocalStorageInput.js

```jsx id="7cqkpk"
import { useEffect, useState } from "react";

export function useLocalStorageInput(key, defaultValue) {

    const [input, setInput] = useState(
        localStorage.getItem(key) ?? defaultValue
    );

    useEffect(() => {
        localStorage.setItem(key, input);
    }, [key, input]);

    return { input, setInput };
}
```

---

### 🔍 How This Hook Works

---

#### Step 1: Receives Parameters

```js id="p94rr0"
key
defaultValue
```

---

#### Step 2: Reads LocalStorage

```js id="9x2u8y"
localStorage.getItem(key)
```

---

#### Step 3: Stores Value in State

```js id="3tqaz3"
useState()
```

---

#### Step 4: Updates LocalStorage

Whenever input changes:

```js id="4q8n4w"
localStorage.setItem()
```

runs automatically.

---

#### Step 5: Returns State

```js id="v6ix0n"
return { input, setInput }
```

---

## 10. Using Custom Hook

---

### 📄 TempComponent.jsx

```jsx id="v8mpx5"
import { useLocalStorageInput } from "./hooks/useLocalStorageInput";

const LOCAL_STORAGE_KEY = "temp_key";

export default function TempComponent() {

    const { input, setInput } =
        useLocalStorageInput(LOCAL_STORAGE_KEY, "Crio");

    return (
        <div>

            <h2>Temp Component</h2>

            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

        </div>
    );
}
```

---

### 📄 RandomComponent.jsx

```jsx id="7mtmup"
import { useLocalStorageInput } from "./hooks/useLocalStorageInput";

const LOCAL_STORAGE_KEY = "random_key";

export default function RandomComponent() {

    const { input, setInput } =
        useLocalStorageInput(LOCAL_STORAGE_KEY, "Random");

    return (
        <div>

            <h2>Random Component</h2>

            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

        </div>
    );
}
```

---

## 🔍 Biggest Advantage

Now:

✅ Logic written once
✅ Reused everywhere

---

## 🧠 Visual Flow

```text id="06kj0i"
Custom Hook
     ↓
Reusable logic
     ↓
Multiple components use it
```

---

## 11. Example 2 → useWindowSize Hook

---

### 📄 hooks/useWindowSize.js

```jsx id="t7m7jx"
import { useEffect, useState } from "react";

export default function useWindowSize() {

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {

        function handleResize() {

            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });

        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };

    }, []);

    return windowSize;
}
```

---

### 📄 WindowSizeComponent.jsx

```jsx id="31ezgj"
import useWindowSize from "./hooks/useWindowSize";

export default function WindowSizeComponent() {

    const { width, height } = useWindowSize();

    return (
        <div>

            <h2>Window Size</h2>

            <p>Width: {width}</p>
            <p>Height: {height}</p>

        </div>
    );
}
```

---

### 🔍 How This Works

---

#### Step 1:

Hook stores current window size.

---

#### Step 2:

```js id="3kl7pl"
resize
```

event listener added.

---

#### Step 3:

Whenever window resizes:

```js id="axcqnh"
handleResize()
```

updates state.

---

#### Step 4:

Component automatically updates UI.

---

#### Step 5:

Cleanup removes listener on unmount.

---

## 12. Example 3 → Generic useLocalStorage Hook

---

### 📄 hooks/useLocalStorage.js

```jsx id="8a4v5o"
import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue = "") {

    const [value, setValue] = useState(() => {

        const storedValue = localStorage.getItem(key);

        return storedValue
            ? JSON.parse(storedValue)
            : initialValue;
    });

    useEffect(() => {

        localStorage.setItem(
            key,
            JSON.stringify(value)
        );

    }, [key, value]);

    return [value, setValue];
}
```

### 📄 App.js

```js
import './App.css'

import useLocalStorage from './concepts/23. CustomHooks/hooks/useLocalStorage';

export default function App() {

  const [name, setName] = useLocalStorage("username", "")

  return (
    <>
      
      <h1>{name}</h1>

      <button onClick={() => setName("Yathe")}>
        Set Name
      </button>

    </>
  );
}
```

---

### 🔍 Why This Hook is Better

✅ Generic
✅ Reusable
✅ Works for strings, arrays, objects

---

## 13. Rules of Custom Hooks

---

### ✅ Always start with "use"

```js id="flv3rx"
useSomething()
```

---

### ✅ Can use other Hooks inside

Examples:

```js id="9d3w8g"
useState
useEffect
useRef
```

---

### ❌ Never call Hooks inside normal functions

Wrong:

```js id="e6k0wk"
function helper() {
   useState();
}
```

---

### ✅ Use Hooks only inside:

* React Components
* Custom Hooks

---

## 14. Custom Hook vs Normal Function

| Normal Function         | Custom Hook          |
| ----------------------- | -------------------- |
| Cannot safely use Hooks | Can use Hooks        |
| General JS logic        | Reusable React logic |
| No React lifecycle      | Uses React lifecycle |
| No Hook rules           | Follows Hook rules   |

---

## 15. Common Mistakes

* Forgetting "use" prefix  ❌
* Calling Hooks inside normal functions  ❌
* Overcomplicating Hooks  ❌
* Creating Hooks for tiny logic  ❌
* Forgetting cleanup in useEffect  ❌

---

## 16. Interview Questions (With Answers)

---

### 1. What is a Custom Hook?

A reusable function that uses React Hooks internally.

---

### 2. Why Custom Hooks are used?

To reuse stateful logic across components.

---

### 3. Why should Hook names start with "use"?

React identifies them as Hooks.

---

### 4. Can Custom Hooks use other Hooks?

✅ Yes

---

### 5. Do Custom Hooks share state automatically?

❌ No

Each component gets separate state.

---

## 17. Practice Problems

1. Create `useCounter`
2. Create `useDebounce`
3. Create `useFetch`
4. Create `useToggle`
5. Create `useTheme`

---

## 18. Summary

* Custom Hooks help reuse logic
* Reduce duplicate code
* Make components cleaner
* Can internally use Hooks
* Must start with `use`

---

## 🧠 Simple Analogy

Think of Custom Hooks like:

👉 A reusable recipe 🍳

You write recipe once.

Anyone can cook using it.

---

## 🎯 Final Understanding

```text id="pk7m5q"
Component = UI
Custom Hook = reusable logic
```

---

## 🔚 Final Takeaway

Custom Hooks are one of the most powerful patterns in React.

They help you build:

✅ Cleaner code
✅ Reusable logic
✅ Scalable applications
✅ Professional React architecture