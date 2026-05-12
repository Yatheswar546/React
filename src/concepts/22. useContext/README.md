# 📘 useContext & Prop Drilling in React

## 🚀 What You Will Learn

* What is Prop Drilling
* Why Prop Drilling is a problem
* What is Context API
* What is `useContext`
* How `createContext` works
* Provider & Consumer concept
* Sharing global data in React
* Real-world use cases
* Common mistakes & interview questions

---

## 1. Introduction

In React:

👉 Data normally flows using:

```text
Props
```

Parent passes data to child components.

This works well for small applications ✅

But in large applications:

❌ Passing props through many components becomes difficult.

This problem is called:

```text
Prop Drilling
```

---

## 2. What is Prop Drilling?

👉 Prop Drilling means:

Passing props through multiple intermediate components even when they don't need the data.

---

### 🧠 Scenario

Let us imagine:

```text
App
 ↓
ParentComponent
 ↓
ChildComponent
 ↓
GrandchildComponent
```

Suppose:

👉 `App` has:

```js
count
```

But only:

```text
GrandchildComponent
```

needs it.

Still:

❌ We must pass props through every component.

---

### 🔥 Visual Problem

```text
App
 ↓ passes props
ParentComponent
 ↓ passes props
ChildComponent
 ↓ passes props
GrandchildComponent ✅ actually uses it
```

Middle components:

❌ Don't need the props
❌ But still receive them

---

### ❌ Problems with Prop Drilling

* Too much prop passing
* Difficult to maintain
* Components become tightly connected
* Hard to scale applications

---

## 3. Practical Example (Prop Drilling)

---

### 📄 App.jsx

```jsx id="9xm0kq"
import { useState } from "react";
import ParentComponent from "./ParentComponent";

export default function App() {

    const [count, setCount] = useState(0);

    return (
        <div>

            <h1>App Component</h1>

            <ParentComponent
                count={count}
                setCount={setCount}
            />

        </div>
    );
}
```

---

### 📄 ParentComponent.jsx

```jsx id="t4q5uv"
import ChildComponent from "./ChildComponent";

export default function ParentComponent({ count, setCount }) {

    return (
        <div>

            <h2>Parent Component</h2>

            <ChildComponent
                count={count}
                setCount={setCount}
            />

        </div>
    );
}
```

---

### 📄 ChildComponent.jsx

```jsx id="cv6od8"
import GrandchildComponent from "./GrandchildComponent";

export default function ChildComponent({ count, setCount }) {

    return (
        <div>

            <h3>Child Component</h3>

            <GrandchildComponent
                count={count}
                setCount={setCount}
            />

        </div>
    );
}
```

---

### 📄 GrandchildComponent.jsx

```jsx id="gr1xbt"
export default function GrandchildComponent({ count, setCount }) {

    return (
        <div>

            <h4>Grandchild Component</h4>

            <p>Count: {count}</p>

            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>

        </div>
    );
}
```

---

#### 🔍 Problem Here

👉 Only:

```text
GrandchildComponent
```

needs:

```js
count
setCount
```

But:

```text
ParentComponent
ChildComponent
```

receive props unnecessarily ❌

---

#### 🧠 Visual Flow

```text
App
 ↓
ParentComponent ❌ doesn't use props
 ↓
ChildComponent ❌ doesn't use props
 ↓
GrandchildComponent ✅ uses props
```

---

## 4. Solution → Context API

React provides:

```text
Context API
```

to solve Prop Drilling.

---

### What is Context?

👉 Context allows us to:

✅ Share data globally
✅ Avoid prop drilling
✅ Access data directly from any component

---

## 5. What is useContext?

👉 `useContext` is a React Hook used to:

✅ Access data from Context

without manually passing props.

---

### 🧠 Simple Mental Model

Instead of:

```text
Passing props manually
```

React creates:

```text
Global shared storage
```

that components can directly access.

---

## 6. Core Concepts

---

### createContext()

Creates a Context object.

---

### Provider

Provides data to child components.

---

### useContext()

Consumes/read data from Context.

---

### 🧠 Simple Visualization

```text
Provider stores data
        ↓
Any child component can access it
```

---

## 7. Steps to Use useContext

---

### Step 1: Create Context

---

### 📄 CountContext.jsx

```jsx id="7v5w3n"
import { createContext } from "react";

export const CountContext = createContext();
```

---

### 🔍 What Happens Here?

```js
createContext()
```

creates a global Context container.

---

### Step 2: Provide Context

---

### 📄 App.jsx

```jsx id="a2od91"
import { useState } from "react";
import ParentComponent from "./ParentComponent";
import { CountContext } from "./CountContext";

export default function App() {

    const [count, setCount] = useState(0);

    return (
        <CountContext.Provider
            value={{ count, setCount }}
        >

            <h1>App Component</h1>

            <ParentComponent />

        </CountContext.Provider>
    );
}
```

---

### 🔍 What Happens Here?

```jsx
<CountContext.Provider>
```

wraps all child components.

---

## 🧠 Important Point

```js
value={{ count, setCount }}
```

means:

👉 These values become globally accessible inside wrapped components.

---

### Step 3: Access Context Data

---

### 📄 ParentComponent.jsx

```jsx id="bmxh7g"
import ChildComponent from "./ChildComponent";

export default function ParentComponent() {

    return (
        <div>

            <h2>Parent Component</h2>

            <ChildComponent />

        </div>
    );
}
```

---

### 📄 ChildComponent.jsx

```jsx id="n8y3uk"
import GrandchildComponent from "./GrandchildComponent";

export default function ChildComponent() {

    return (
        <div>

            <h3>Child Component</h3>

            <GrandchildComponent />

        </div>
    );
}
```

---

### 📄 GrandchildComponent.jsx

```jsx id="1q5kru"
import { useContext } from "react";
import { CountContext } from "./CountContext";

export default function GrandchildComponent() {

    const { count, setCount } = useContext(CountContext);

    return (
        <div>

            <h4>Grandchild Component</h4>

            <p>Count: {count}</p>

            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>

        </div>
    );
}
```

---

## 🔍 How This Code Works (Step-by-Step)

---

### Step 1: Context Created

* Create a Context with "useContext" hook in React.

```js
import { createContext } from "react";

export const CountContext = createContext()
```

creates shared Context.

---

### Step 2: Provider Shares Data

* Wrap App.js with "contextProvider" by passing values that need access in all the children components.

### 📄 App.jsx
```jsx
import React, { useState } from 'react';
import { CountContext } from './CountContext';
import ParentComponent from './ParentComponent';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <CountContext.Provider value={{ count, setCount }}>
                <ParentComponent />
            </CountContext.Provider>
        </div>
    );
}
```

makes data available globally.

---

### Step 3: Components Wrapped

Now, all child components inside Provider can directly access the data(count variable) declared in App.js component to any component (GrandchildComponent.js etc...) without passing it as props through every children component

---

### Step 4: useContext Reads Data

```js
import { CountContext } from "./CountContext";

const {count, setCount} = useContext(CountContext);
```

directly accesses Context values.

---

### Step 5: No Prop Drilling Needed

Now:

❌ No manual prop passing

---

### 🧠 Final Visual Flow

Without useContext:

```text
App
 ↓ props
Parent
 ↓ props
Child
 ↓ props
Grandchild
```

---

With useContext:

```text
        Context
           ↓
Grandchild accesses directly
```

---

## 🔥 Biggest Advantage

👉 Intermediate components become cleaner.

Before:

```jsx
<Child count={count} setCount={setCount} />
```

After:

```jsx
<Child />
```

Much simpler ✅

---

## 8. useContext DOES NOT Replace All Props

⚠️ Very important concept.

`useContext` is useful for:

✅ Global/shared data

Examples:

* Theme
* Authentication
* User data
* Language settings

---

❌ Not for every small state.

Overusing Context can make app harder to manage.

---

## 9. Real-World Use Cases

---

### Authentication

Logged-in user data.

---

### Theme Switching

Dark/light mode.

---

### Language Translation

Global language settings.

---

### Shopping Cart

Cart data shared across app.

---

## 10. Important Notes

---

### ⚠️ Provider Re-rendering

If Provider value changes:

👉 All consuming components re-render.

---

### ⚠️ useContext avoids prop drilling

But:

❌ It is NOT a performance optimization tool.

---

## 🔥 Interview-Level Understanding

`useContext` solves:

```text
Data sharing problem
```

NOT:

```text
Re-render optimization problem
```

---

## 11. useContext vs Props

| Props                    | useContext              |
| ------------------------ | ----------------------- |
| Manual passing           | Global access           |
| Good for small hierarchy | Good for deep hierarchy |
| Parent → Child only      | Any child can access    |
| Can cause prop drilling  | Avoids prop drilling    |

---

## 12. Common Mistakes

* Using Context for everything  ❌
* Forgetting Provider  ❌
* Wrong Context import  ❌
* Creating too many contexts  ❌
* Confusing Context with state management libraries  ❌

---

## 13. Interview Questions (With Answers)

---

### 1. What is Prop Drilling?

Passing props through multiple unnecessary components.

---

### 2. What is useContext?

A Hook used to access Context values directly.

---

### 3. Why useContext is used?

To avoid prop drilling.

---

### 4. What does createContext do?

Creates a Context object.

---

### 5. What is Provider?

Component used to provide Context values.

---

### 6. Does useContext improve performance?

❌ No

It mainly solves data sharing problems.

---

## 14. Practice Problems

1. Theme toggle using Context
2. Authentication system
3. Language switcher
4. Shopping cart using Context
5. User profile sharing

---

## 15. Summary

* Prop drilling makes apps difficult to maintain
* Context API solves deep prop passing
* createContext creates shared Context
* Provider shares data
* useContext consumes data directly
* Helps manage global shared state

---

## 🧠 Simple Analogy

Imagine:

### Without Context

Teacher passes message student-by-student:

```text
A → B → C → D
```

Even if only D needs it.

---

### With Context

Teacher announces on speaker 📢

Anyone can hear directly.

---

## 🎯 Final Understanding

```text
Props      → direct communication
useContext → global shared communication
```

---

## 🔚 Final Takeaway

`useContext` makes React applications:

✅ Cleaner
✅ Easier to scale
✅ Easier to maintain

by removing unnecessary prop drilling 🔥