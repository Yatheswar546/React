# 📘 useMemo in React

## 🚀 What You Will Learn

* What is `useMemo`
* Why `useMemo` is needed
* What is memoization
* Expensive calculations
* Caching values
* Preventing unnecessary recalculations
* Real-world use cases
* Difference between `useMemo` and normal functions
* Common mistakes & interview questions

---

## 1. Introduction

👉 `useMemo` is a React Hook used for **performance optimization**.

It helps React:

* Cache calculated values
* Avoid unnecessary recalculations
* Improve performance

---

## 2. Why useMemo is Needed

Sometimes functions are:

* Expensive
* Heavy
* Called repeatedly

Even when input is same.

This causes:

❌ Slow rendering
❌ Performance issues
❌ Unnecessary calculations

---

## 3. What is an Expensive Calculation?

👉 An expensive calculation is a function that:

* Takes time to execute
* Runs many times unnecessarily

---

### Example

```jsx
function square(num) {
    console.log("Calculating square...");
    return num * num;
}
```

👉 Even if `num` is same:

```js
square(5);
square(5);
square(5);
```

It recalculates again and again ❌

---

## 4. What is Memoization?

👉 Memoization means:

Caching previously calculated results and reusing them.

---

## 🧠 Simple Idea

```text
Same input
    ↓
Reuse old result
    ↓
Avoid recalculation
```

---

## 5. Manual Memoization Example

Before learning `useMemo`, understand the actual problem.

---

### 📄 memoizeFunction.js

```js
function square(num) {
    console.log("Calculating...");
    return num * num;
}

function memoizeFunction(fn) {

    const cache = {};

    return function(input) {

        if(cache[input]) {
            console.log("Fetching from cache...");
            return cache[input];
        }

        const result = fn(input);

        cache[input] = result;

        return result;
    };
}

const memoizedSquare = memoizeFunction(square);

console.log(memoizedSquare(5));
console.log(memoizedSquare(5));
console.log(memoizedSquare(5));
```

---

### 🔍 How This Works

#### Step 1:

First call:

```js
memoizedSquare(5)
```

👉 No cache exists

---

#### Step 2:

Runs original function

```js
square(5)
```

👉 Stores result inside cache

---

#### Step 3:

Second call:

```js
memoizedSquare(5)
```

👉 Cache already exists

---

#### Step 4:

Returns stored value instead of recalculating

---

## ❌ Problems with Manual Memoization

* Extra code
* Manual cache handling
* Hard to maintain
* Complex logic

---

## 6. Solution → useMemo

👉 React provides `useMemo`

It automatically handles memoization for us.

---

## 7. Syntax

```jsx
const memoizedValue = useMemo(() => {
    return expensiveCalculation();
}, [dependencies]);
```

---

## 🧠 Mental Model

```text
Dependency changes?
        │
      YES → Recalculate
        │
      NO  → Use cached value
```

---

## 8. Practical Example (Without useMemo)

---

### 📄 WithoutUseMemo.jsx

```jsx
import { useState } from "react";

export default function WithoutUseMemo() {

    const [count, setCount] = useState(1);
    const [render, setRender] = useState(false);

    function square(num) {
        console.log("Calculating square...");
        return num * num;
    }

    const result = square(count);

    console.log("Component Re-rendered");

    return (
        <div>

            <h1>Without useMemo</h1>

            <h2>Square: {result}</h2>

            <button onClick={() => setCount(count + 1)}>
                Increment Number
            </button>

            <button onClick={() => setRender(!render)}>
                Re-render Component
            </button>

        </div>
    );
}
```

---

### 🔍 Problem Here

👉 Click:

```text
Re-render Component
```

Even though:

* `count` did NOT change

Still:

```js
square(count)
```

runs again ❌

---

### ❌ Why?

Because:

👉 Entire component re-renders

So all functions inside component run again.

---

## 9. Optimized Version Using useMemo

---

### 📄 WithUseMemo.jsx

```jsx
import { useMemo, useState } from "react";

export default function WithUseMemo() {

    const [count, setCount] = useState(1);
    const [render, setRender] = useState(false);

    function square(num) {
        console.log("Calculating square...");
        return num * num;
    }

    const memoizedSquare = useMemo(() => {
        return square(count);
    }, [count]);

    console.log("Component Re-rendered");

    return (
        <div>

            <h1>With useMemo</h1>

            <h2>Square: {memoizedSquare}</h2>

            <button onClick={() => setCount(count + 1)}>
                Increment Number
            </button>

            <button onClick={() => setRender(!render)}>
                Re-render Component
            </button>

        </div>
    );
}
```

---

### 🔍 How This Code Works (Step-by-Step)

---

#### Step 1: Initial Render

```js
square(count)
```

runs once.

---

#### Step 2: Result Stored

`useMemo` caches the calculated value.

---

#### Step 3: Click Re-render Button

```js
setRender(!render)
```

👉 Component re-renders

BUT:

```js
count
```

did NOT change.

---

#### Step 4: useMemo Checks Dependency

```js
[count]
```

👉 Same value

So:

✅ Uses cached value
❌ Does NOT recalculate

---

#### Step 5: Click Increment

```js
setCount(count + 1)
```

👉 count changes

Now:

✅ useMemo recalculates

---

## 🧠 Visual Flow

```text
Component Re-render
        │
Dependency Changed?
        │
   YES ─────▶ Recalculate
        │
   NO  ─────▶ Use Cached Value
```

---

## 10. useMemo DOES NOT Stop Re-renders

⚠️ Very important concept.

`useMemo`:

❌ Does NOT stop component re-rendering

👉 It only prevents expensive recalculations.

---

### Example

```jsx
console.log("Component Re-rendered");
```

This still runs.

But:

```js
square(count)
```

does NOT run unnecessarily.

---

## 🎯 Real Purpose of useMemo

`useMemo` is mainly used for:

---

### 1. Expensive Calculations

Examples:

* Sorting large arrays
* Filtering data
* Complex math operations

---

### 2. Performance Optimization

Avoid unnecessary work during renders.

---

### 3. Stable Computed Values

Prevent recalculating same result repeatedly.

---

## 11. Real-World Example

---

### Search Filtering

```jsx
const filteredProducts = useMemo(() => {

    return products.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

}, [products, search]);
```

---

#### Why useMemo Here?

Without `useMemo`:

👉 Filtering runs on every render

With `useMemo`:

👉 Filtering runs only when:

* `products` changes
* `search` changes

---

## 12. Types of Memoization

---

### 1. Memoization of Values

👉 `useMemo`

Caches calculated values.

---

### 2. Memoization of Functions

👉 `useCallback`

Caches function references.

---

### 3. Memoization of Components

👉 `React.memo`

Caches entire component rendering.

---

## 13. useMemo vs Normal Variable

| Normal Function             | useMemo                  |
| --------------------------- | ------------------------ |
| Recalculates every render   | Caches result            |
| No optimization             | Performance optimization |
| Slower for heavy operations | Faster                   |
| No dependency tracking      | Uses dependencies        |

---

## 14. Important Notes

---

### ⚠️ useMemo should NOT be overused

`useMemo` itself also has cost.

Use it only for:

✅ Heavy calculations
✅ Expensive operations

---

### ❌ Don’t use for simple calculations

Bad example:

```js
const total = useMemo(() => a + b, [a, b]);
```

👉 Not needed.

---

## 15. Common Mistakes

❌ Using `useMemo` everywhere
❌ Wrong dependency array
❌ Forgetting dependencies
❌ Expecting useMemo to stop re-renders
❌ Using useMemo for tiny calculations

---

## 16. Interview Questions (With Answers)

---

### 1. What is useMemo?

A Hook used to cache calculated values for performance optimization.

---

### 2. Why useMemo is used?

To avoid unnecessary expensive recalculations.

---

### 3. Does useMemo stop re-renders?

❌ No

It only memoizes values.

---

### 4. What is memoization?

Storing previously calculated results and reusing them.

---

### 5. Difference between useMemo and useCallback?

| useMemo         | useCallback        |
| --------------- | ------------------ |
| Memoizes values | Memoizes functions |

---

### 6. When should we use useMemo?

When calculations are expensive and repeated frequently.

---

## 17. Practice Problems

1. Create factorial calculator using useMemo
2. Filter products using useMemo
3. Sort large array using useMemo
4. Compare with and without useMemo
5. Create search optimization example

---

## 18. Summary

* `useMemo` caches values
* Used for performance optimization
* Avoids unnecessary recalculations
* Dependency array controls recalculation
* Helps optimize expensive operations

---

## 🧠 Simple Analogy

Think of `useMemo` like:

👉 A calculator with memory.

First time:

🧮 Calculates result

Second time with same input:

📋 Reuses stored answer

Instead of recalculating again.

---

## 🔚 Final Thought

`useMemo` is not about making React magical.

It is about:

👉 Avoiding unnecessary work
👉 Improving performance
👉 Optimizing expensive calculations

That’s the real power of `useMemo`.