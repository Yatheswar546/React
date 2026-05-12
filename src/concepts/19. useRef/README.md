# 📘 useRef Hook in React

## 🚀 What You Will Learn

* What is useRef
* Why useRef is needed
* Problem with unnecessary re-renders
* Difference between normal variable, useState, and useRef
* Why useRef does NOT trigger re-render
* DOM manipulation using useRef
* Focus input example
* When to use useState vs useRef
* Common mistakes and interview questions

---

## 1. Introduction

👉 In React, whenever state changes:

```js id="fxszks"
setState()
```

👉 Component re-renders.

---

### ❌ Problem

Too many unnecessary re-renders can:

* Slow down application
* Affect performance
* Cause lag in large applications

---

## 2. Understanding Re-renders

### 📄 App.jsx

```jsx id="av8e5u"
import { useState } from "react";

export default function App() {

  // Normal variable
  let counter = 0;

  // useState variable
  const [count, setCount] = useState(0);

  function handleIncrement() {

    counter++;
    console.log("Normal Variable:", counter);

    setCount(prev => prev + 1);
  }

  console.log("Component Re-rendered");

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={handleIncrement}>
        Increment
      </button>
    </div>
  );
}
```

---

### 🔍 How This Works

#### Step 1:

Button clicked

---

#### Step 2:

```js id="zsqcsp"
counter++
```

👉 Normal JS variable updates

BUT...

❌ Value resets after re-render

---

#### Step 3:

```js id="zqarf8"
setCount()
```

👉 State updates

👉 React re-renders component

---

#### Step 4:

Component function runs again

```text id="vntmko"
Component Re-rendered
```

---

## ❌ Problem with Both Approaches

### 1. Normal Variable

❌ Value does not persist across re-renders

---

### 2. useState

❌ Causes re-render every time

---

## 3. Solution → useRef

👉 useRef stores value:

✅ Without triggering re-render
✅ Value persists across renders

---

## 4. What is useRef?

👉 `useRef` is a React Hook used to:

* Store mutable values
* Persist values between renders
* Access DOM elements directly
* Avoid unnecessary re-renders

---

## 🎯 Core Idea

```text id="ub8a6x"
useRef updates value WITHOUT triggering re-render
```

---

## ⚠️ VERY IMPORTANT

### useRef DOES NOT stop re-renders

This is the biggest misconception.

👉 `useRef`:

* Stores value between renders
* Updates value without triggering re-render

BUT...

If something else causes re-render (`useState`):

```js id="0e1r5f"
setState()
```

👉 Component WILL still re-render.

---

## 🧠 Important Understanding

```text id="cxnq7n"
useRef ≠ prevent re-render
```

👉 It only avoids triggering re-render by itself.

---

## 5. Basic Syntax

```jsx id="vkf6sp"
const myRef = useRef(initialValue);
```

---

### Accessing Value

```js id="6pwnfx"
myRef.current
```

👉 `.current` stores actual value.

---

## 6. Practical Example (Persisting Value Without Re-render)

### 📄 App.jsx

```jsx id="tttgj8"
import { useRef, useState } from "react";

export default function App() {

  // Normal variable
  let normalCounter = 0;

  // useState variable
  const [count, setCount] = useState(0);

  // useRef variable
  const counterRef = useRef(0);

  function handleIncrement() {

    // Normal variable
    normalCounter++;
    console.log("Normal Variable:", normalCounter);

    // useRef variable
    counterRef.current++;
    console.log("useRef Value:", counterRef.current);

    // useState variable
    setCount(prev => prev + 1);
  }

  console.log("Component Re-rendered");

  return (
    <div>

      <h1>useState Value: {count}</h1>

      <button onClick={handleIncrement}>
        Increment
      </button>

    </div>
  );
}
```

---

### 🔍 How This Works (Step-by-Step)

---

#### Step 1:

Component loads.

```text id="gn0ljh"
normalCounter = 0
count = 0
counterRef.current = 0
```

---

#### Step 2:

Button clicked.

---

#### Step 3:

Normal variable updates.

```js id="jtvf6d"
normalCounter++
```

BUT...

❌ Gets reset on next render.

---

#### Step 4:

Ref value updates.

```js id="z8g2gk"
counterRef.current++
```

✅ Value persists across renders.

---

#### Step 5:

State updates.

```js id="vjlwmz"
setCount()
```

👉 This triggers re-render.

---

#### Step 6:

Component runs again.

BUT...

```text id="ddzjlwm"
normalCounter resets ❌
counterRef persists ✅
```

---

## 🔥 Core Difference

| Normal Variable        | useRef                  |
| ---------------------- | ----------------------- |
| Resets on every render | Persists across renders |
| Changes lost           | Changes retained        |
| Not managed by React   | Managed by React        |
| No `.current`          | Uses `.current`         |

---

## 🧠 Important Point

## Updating ref alone DOES NOT re-render

Example:

```jsx id="hmjlwm"
function handleIncrement() {
    counterRef.current++;
    console.log(counterRef.current);
}
```

👉 UI will NOT update
👉 Component will NOT re-render

Because refs are invisible to React rendering system.

---

## 🧠 Visual Understanding

```text id="nny3g9"
useState change
      ↓
React notified
      ↓
Re-render happens

-------------------------

useRef change
      ↓
React NOT notified
      ↓
No re-render
```

---

## 🎯 Real Purpose of useRef

`useRef` is mainly used for:

---

### 1. Persisting values without re-render

Examples:

* Timer IDs
* Previous values
* Mutable counters
* Debouncing timers

---

### 2. Accessing DOM elements

Most common use case.

---

## 7. DOM Manipulation Example

### 📄 Form.jsx

```jsx id="g2vws9"
import { useRef } from "react";

export default function Form() {

  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus();
  }

  return (
    <div>

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter text"
      />

      <button onClick={handleFocus}>
        Focus Input
      </button>

    </div>
  );
}
```

---

### 🔍 How This Works

#### Step 1:

```js id="mbm8kz"
const inputRef = useRef(null)
```

👉 Creates ref object.

---

#### Step 2:

```jsx id="n2s6kk"
ref={inputRef}
```

👉 React connects DOM element to ref.

---

#### Step 3:

```js id="hh9xt4"
inputRef.current
```

👉 Gives actual DOM element.

---

#### Step 4:

```js id="pv3jlwm"
inputRef.current.focus()
```

👉 Cursor focuses input field.

---

## 🧠 Visual Flow

```text id="lbj5j9"
Button Click
    ↓
handleFocus()
    ↓
inputRef.current
    ↓
focus()
    ↓
Cursor moves to input
```

---

## 💡 Simple Analogy

Think of:

---

### useState

👉 Public notice board

Whenever changed:

📢 Everyone gets notified (re-render)

---

### useRef

👉 Personal notebook

You can change it silently:

🤫 No announcement (no re-render)

---

## 8. Important Rules of useRef

### ✅ Safe Places to Read/Write ref.current

1. Event handlers
2. useEffect hooks

---

### ❌ Avoid During Rendering

```js id="wjlzq7"
const value = ref.current;
```

Inside JSX rendering logic can create unpredictable behavior.

---

## ⚠️ Pitfalls of useRef Hook

### ❌ Avoid Reading/Writing `ref.current` During Rendering

```jsx id="k5z9qt"
const value = myRef.current;
```

👉 Don’t directly read/write refs inside rendering logic.

---

## Why?

React components should behave like **pure functions**.

👉 Meaning:

If the inputs are same:

* Props
* State
* Context

Then React expects the component to return the **same JSX output**.

---

## ❌ Problem with refs during render

If `ref.current` changes during rendering:

* Output may become unpredictable
* React behavior may break
* UI inconsistencies can happen

---

## ✅ Safe Places to Use `ref.current`

1. Event handlers

```js id="t0kq6m"
handleClick()
```

2. useEffect hooks

```js id="1p1uzh"
useEffect(() => {})
```

---

## 🎯 Simple Rule

```text id="vbh2jz"
Render phase → Avoid refs ❌
Event/useEffect → Safe ✅
```

---

## 9. useState vs useRef

| Feature                 | useState | useRef       |
| ----------------------- | -------- | ------------ |
| Causes re-render        | ✅ Yes    | ❌ No         |
| Stores persistent value | ✅ Yes    | ✅ Yes        |
| Used in UI rendering    | ✅ Yes    | ❌ Usually No |
| DOM access              | ❌ No     | ✅ Yes        |

---

### 🎯 When to Use What?

---

#### ✅ useState

Use when:

* Value should update UI
* UI depends on value

Examples:

* Counter
* Form input
* Toggle

---

#### ✅ useRef

Use when:

* Value should NOT trigger UI update
* DOM access needed
* Store timers/interval IDs
* For sub-calculations of a value
* Store previous values

Examples:

* Input focus
* Debouncing timers
* Scroll position

---

## 10. Real-World Use Cases

* Focus input automatically
* Store timer IDs
* Prevent unnecessary renders
* Access video/audio elements
* Store previous values

---

## 11. Common Mistakes

❌ Using useRef instead of useState for UI
❌ Updating ref expecting UI update
❌ Reading/writing during render
❌ Forgetting `.current`

---

## 12. Interview Questions (With Answers)

### What is useRef?

A hook used to persist mutable values without triggering re-render.

---

### Does useRef cause re-render?

❌ No

---

### Difference between useState and useRef?

State causes re-render, ref does not.

---

### Main use case of useRef?

DOM manipulation and persistent mutable values.

---

### Why useRef is used in debouncing?

To store timer ID without causing re-render.

---

## 13. Practice Problems

1. Focus input button
2. Stopwatch using useRef
3. Store previous counter value
4. Auto-focus login form
5. Store timeout ID using useRef

---

## 🚀 Final Takeaway

* `useState` → stores data + triggers re-render
* `useRef` → stores data WITHOUT triggering re-render
* `useRef` persists value across renders
* `useRef.current` changes silently

That’s the real power of `useRef`.

---

## 🔚 Final Thought

👉 useState controls UI
👉 useRef controls persistent values behind the scenes

Mastering useRef helps you build:

✅ Faster apps
✅ Cleaner logic
✅ Real-world React features

---