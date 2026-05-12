# 📘 useCallback & React.memo in React

## 🚀 What You Will Learn

* What is unnecessary re-rendering
* What is `React.memo`
* Why `React.memo` alone is not enough
* Function reference problem
* What is `useCallback`
* How `useCallback` solves re-render issues
* Difference between `useMemo` and `useCallback`
* Real-world use cases
* Interview questions & common mistakes

---

## 1. Introduction

In React:

👉 Parent component re-renders
👉 Child components may also re-render

Sometimes this is needed ✅

But sometimes:

❌ Child re-renders unnecessarily

This affects:

* Performance
* Rendering speed
* Optimization

---

## 2. Problem Statement

Let us understand this using a real example.

---

### 📄 SquareComponent.jsx

```jsx
import React from "react";

function SquareComponent({ handler, input }) {

    console.log("Child Component Rendered");

    function square(num) {
        console.log("Calculating Square...");
        return num * num;
    }

    return (
        <div>
            <h1>Square: {square(input)}</h1>

            <button onClick={handler}>
                Increment
            </button>
        </div>
    );
}

export default SquareComponent;
```

---

### 📄 App.jsx

```jsx
import { useState } from "react";
import SquareComponent from "./SquareComponent";

export default function App() {

    const [state, setState] = useState(false);
    const [input, setInput] = useState(1);

    console.log("Parent Component Rendered");

    const handler = () => {
        setInput(prev => prev + 1);
    };

    function handleParentState() {
        setState(!state);
    }

    return (
        <div>

            <button onClick={handleParentState}>
                Re-render Parent
            </button>

            <SquareComponent
                handler={handler}
                input={input}
            />

        </div>
    );
}
```

---

### 🔍 Problem Here

👉 Click:

```text
Re-render Parent
```

Even though:

* `input` did NOT change

Still:

```text
Child Component Rendered
```

runs again ❌

---

### ❌ Why Does This Happen?

Because:

👉 Parent component re-renders

When parent re-renders:

* Entire component function runs again
* New handler function gets created again

---

### 🧠 Important Concept

Functions in JavaScript are:

```text
Reference Types
```

Every re-render creates:

```text
NEW FUNCTION REFERENCE
```

---

## 🔴 What Actually Happens Without useCallback

Every render:

```jsx
const handler = () => {
   setInput(prev => prev + 1);
}
```

creates:

```js
NEW FUNCTION OBJECT
```

Even if code looks same.

---

## 🧠 Visualization

### First Render

```text
handler → Memory Address A1
```

---

### Second Render

```text
handler → Memory Address B2
```

---

### Third Render

```text
handler → Memory Address C3
```

👉 Even if logic is same:

```js
() => {
   setInput(prev => prev + 1);
}
```

Reference becomes different every render.

---

### 🔥 Result

React sees:

```js
oldHandler !== newHandler
```

because references are different.

So child receives:

```text
NEW PROP REFERENCE
```

Therefore:

❌ Child re-renders again

---

## 🧠 Visual Flow

```text
Parent Re-render
        ↓
New handler function created
        ↓
New reference generated
        ↓
Child receives new prop
        ↓
Child re-renders
```

---

## 3. Solution Step 1 → React.memo

---

### What is React.memo?

👉 `React.memo` is a Higher Order Component (HOC)

used to:

✅ Prevent unnecessary component re-renders

---

### How React.memo Works

It performs:

```text
Shallow Comparison of Props
```

---

### 📄 Updated SquareComponent.jsx

```jsx
import React from "react";

function SquareComponent({ handler, input }) {

    console.log("Child Component Rendered");

    function square(num) {
        console.log("Calculating Square...");
        return num * num;
    }

    return (
        <div>

            <h1>Square: {square(input)}</h1>

            <button onClick={handler}>
                Increment
            </button>

        </div>
    );
}

export default React.memo(SquareComponent);
```

---

### 🔍 Expected Behavior

👉 If props do NOT change:

❌ Child should NOT re-render

---

### ❌ But Problem Still Exists

Even after using:

```js
React.memo()
```

Child still re-renders ❌

---

## 🧠 Why React.memo Failed?

Because:

```js
handler
```

is a function.

And functions are compared by:

```text
REFERENCE
```

not by code.

---

## 🔥 Important Understanding

Even if function code looks same:

```js
() => {
   setInput(prev => prev + 1);
}
```

Every render creates:

```text
NEW FUNCTION OBJECT
```

So React.memo sees:

```js
oldHandler !== newHandler
```

Therefore:

❌ Re-render happens

---

## 4. Final Solution → useCallback

---

### What is useCallback?

👉 `useCallback` is a React Hook used to:

✅ Memoize functions
✅ Cache function references
✅ Prevent unnecessary re-creations

---

### Syntax

```jsx
const memoizedFunction = useCallback(() => {
    // logic
}, [dependencies]);
```

---

### 📄 Optimized App.jsx

```jsx
import { useState, useCallback } from "react";
import SquareComponent from "./SquareComponent";

export default function App() {

    const [state, setState] = useState(false);
    const [input, setInput] = useState(1);

    console.log("Parent Component Rendered");

    const handler = useCallback(() => {

        setInput(prev => prev + 1);

    }, []);

    function handleParentState() {
        setState(!state);
    }

    return (
        <div>

            <button onClick={handleParentState}>
                Re-render Parent
            </button>

            <SquareComponent
                handler={handler}
                input={input}
            />

        </div>
    );
}
```

---

### ✅ What useCallback Actually Does

`useCallback` stores and reuses the SAME function reference between renders.

Example:

```jsx
const handler = useCallback(() => {
   setInput(prev => prev + 1);
}, []);
```

Now:

* First render → function created
* Next renders → SAME function reference reused

So React sees:

```js
oldHandler === newHandler
```

✅ Same reference

---

## 🔥 Most Important Correction

👉 `useCallback` tries to PREVENT creating a new reference itself.

It does NOT:

* search old references
* compare function code
* identify same function logic

Instead:

```js
useCallback returns the previously stored function reference
```

if dependencies didn’t change.

---

## 🔍 Actual Flow of useCallback

---

### First Render

```jsx
const handler = useCallback(fn, []);
```

👉 React stores:

* function reference
* dependency array

---

### Second Render

React checks:

```js
Did dependencies change?
```

---

#### If NO:

👉 Return OLD function reference

---

#### If YES:

👉 Create NEW function reference

---

## 🔥 Then React.memo Comes Into Picture

Now child gets:

```jsx
handler={sameReference}
```

React.memo checks props:

```js
oldProps.handler === newProps.handler
```

✅ true

So:

```js
skip child re-render
```

---

## 🔍 How This Code Works (Step-by-Step)

---

### Step 1: Initial Render

`useCallback` stores function reference.

```text
handler → Address A1
```

---

### Step 2: Parent Re-renders

```js
setState(!state)
```

runs.

Parent re-renders.

---

### Step 3: useCallback Checks Dependency

```js
[]
```

Dependencies unchanged.

---

### Step 4: Old Function Reused

Instead of creating new function:

✅ Old reference reused

```text
handler → Address A1
```

---

### Step 5: React.memo Comparison

Old props === New props

So:

✅ Child component does NOT re-render

---

## 🧠 Final Visualization

Without useCallback:

```text
Render 1 → handler A1
Render 2 → handler B2
Render 3 → handler C3
```

❌ Different references

---

With useCallback:

```text
Render 1 → handler A1
Render 2 → handler A1
Render 3 → handler A1
```

✅ Same reference reused

---

## 🧠 Simplified Understanding

### useCallback job:

```js
Keep function reference stable
```

---

### React.memo job:

```js
Skip child render if props unchanged
```

---

They usually work together.

---

## 🎯 Real Purpose of useCallback

`useCallback` is mainly used for:

---

### 1. Stable Function References

Prevent recreating functions unnecessarily.

---

### 2. Optimizing Child Components

Especially with:

```js
React.memo
```

---

### 3. Performance Optimization

Avoid unnecessary child re-renders.

---

## 5. useMemo vs useCallback

| useMemo                         | useCallback                         |
| ------------------------------- | ----------------------------------- |
| Memoizes values                 | Memoizes functions                  |
| Returns calculated value        | Returns memoized function           |
| Used for expensive calculations | Used for stable function references |

---

### 🧠 Simple Understanding

```text
useMemo     → caches RESULT
useCallback → caches FUNCTION
```

---

## 6. Real-World Use Cases

---

### Search Components

Passing search handlers to child components.

---

### Form Components

Passing submit handlers to children.

---

### Optimized Dashboards

Preventing unnecessary re-renders.

---

### Large Applications

Performance optimization in nested components.

---

## 7. Important Notes

---

### ⚠️ useCallback should NOT be overused

`useCallback` also has cost.

Use only when:

✅ Function passed to child
✅ React.memo used
✅ Performance issue exists

---

### ❌ Bad Usage

```jsx
const fn = useCallback(() => {
   console.log("Hello");
}, []);
```

👉 Unnecessary optimization.

---

## 🔥 Important Interview Point

`useCallback` alone is usually NOT useful.

It becomes powerful when combined with:

```js
React.memo
```

---

## 8. Common Mistakes

* Using useCallback everywhere  ❌
* Wrong dependency array  ❌
* Forgetting dependencies  ❌
* Thinking useCallback stops parent re-renders  ❌
* Confusing useMemo with useCallback  ❌

---

## 9. Interview Questions (With Answers)

---

### 1. What is useCallback?

A Hook used to memoize functions between renders.

---

### 2. Why useCallback is used?

To prevent unnecessary function recreation and child re-renders.

---

### 3. What problem does React.memo solve?

Prevents unnecessary component re-renders.

---

### 4. Why React.memo alone sometimes fails?

Because function props create new references every render.

---

### 5. Difference between useMemo and useCallback?

| useMemo         | useCallback        |
| --------------- | ------------------ |
| Memoizes values | Memoizes functions |

---

### 6. Does useCallback stop re-renders?

❌ No

It only stabilizes function references.

---

## 10. Practice Problems

1. Pass handler to child component
2. Optimize child using React.memo
3. Add useCallback optimization
4. Compare before vs after optimization
5. Build optimized search component

---

## 11. Summary

* Parent re-renders can trigger child re-renders
* React.memo prevents unnecessary re-renders
* Function references cause React.memo failure
* useCallback memoizes function references
* useCallback + React.memo is powerful optimization

---

## 🧠 Simple Analogy

### Without useCallback

Every render:
👉 Parent gives child a NEW paper

Even if content same.

Child says:

```js
"This is new"
```

and re-renders.

---

### With useCallback

Parent reuses SAME paper.

Child says:

```js
"Nothing changed"
```

and skips render.

---

## 🎯 Final Correct Understanding

> useCallback stores and reuses the same function reference between renders unless dependencies change.
> Because the function reference remains same, React.memo sees unchanged props and skips unnecessary child re-rendering.

---

## 🔚 Final Takeaway

```text
React.memo optimizes COMPONENTS
useCallback optimizes FUNCTIONS
```

Together they help React avoid unnecessary re-renders and improve performance 🔥
