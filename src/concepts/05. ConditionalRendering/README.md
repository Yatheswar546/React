# 📘 React Conditional Rendering

## 🚀 What You Will Learn

* What is Conditional Rendering
* Why it is needed
* Different ways to write conditions in React
* Practical toggle example
* Real-world use cases

---

## 1. Introduction

👉 **Conditional Rendering** means:
Displaying components based on specific conditions.

👉 In simple terms:
Show or hide UI depending on some condition.

---

## 2. Why Conditional Rendering is Needed

In real applications, UI is not always static.

We often need to:

* Show or hide components
* Display different content based on user actions
* Control UI dynamically

---

## 3. Real-World Examples

* Redirecting to Login / Signup pages
* "Read More" / "Show Less" buttons
* Navigation buttons
* Toggle (show/hide components)

---

## 4. Basic Idea

👉 React uses JavaScript conditions like:

* `if-else`
* Ternary operator (`condition ? true : false`)
* Logical AND (`&&`)

---

## 5. Practical Example (Toggle Counter)

👉 Scenario:
Show or hide a Counter component when clicking a button.

---

### 📁 ConditionalRendering.jsx

```jsx
import { useState } from 'react';
import Counter from '../04. Props/Counter';

export default function ToggleCounter() {

    const [showCounter, setShowCounter] = useState(false);

    function handleToggle() {

        // 1st Method (if-else)
        // if(showCounter){
        //     setShowCounter(false);
        // } else{
        //     setShowCounter(true);
        // }

        // 2nd Method (ternary)
        // showCounter ? setShowCounter(false) : setShowCounter(true);

        // 3rd Method (best practice)
        setShowCounter(!showCounter);
    }

    return (
        <div>
            <button onClick={handleToggle}>
                {showCounter ? "Hide Counter" : "Show Counter"}
            </button>

            {showCounter && <Counter diff={1} name="Yathe" />}
        </div>
    );
}
```

---

### 📁 App.jsx

```jsx
import ToggleCounter from './concepts/05. ConditionalRendering/ConditionalRendering';

function App() {
  return (
    <>
      <ToggleCounter />
    </>
  )
}

export default App;
```

---

## 6. Visual Flow

```
User Clicks Button
        │
        ▼
handleToggle() runs
        │
        ▼
State changes (true ↔ false)
        │
        ▼
Component re-renders
        │
        ▼
Counter shows / hides
```

---

## 🔍 How the Code Actually Works

### Step 1: Initial State

```js
const [showCounter, setShowCounter] = useState(false);
```

👉 Initially:

```
showCounter = false
```

* Button shows → **"Show Counter"**
* Counter is **hidden**

---

### Step 2: Button Click

```js
<button onClick={handleToggle}>
```

👉 When user clicks:

* `handleToggle()` function runs

---

#### 🔹 Method 1: if-else

```js
if(showCounter){
    setShowCounter(false);
} else{
    setShowCounter(true);
}
```

👉 Logic:

* If true → make false
* If false → make true

---

#### 🔹 Method 2: Ternary

```js
showCounter ? setShowCounter(false) : setShowCounter(true);
```

👉 Same logic in shorter form

---

#### 🔹 Method 3: Best Method

```js
setShowCounter(!showCounter);
```

👉 `!` means toggle:

| Current | New   |
| ------- | ----- |
| true    | false |
| false   | true  |

👉 This is the most clean and commonly used approach

---

### Step 3: Re-render Happens

When state updates:

```js
setShowCounter(...)
```

👉 React automatically re-renders the component

---

### Step 4: UI Updates

### Button Text

```js
{showCounter ? "Hide Counter" : "Show Counter"}
```

* true → "Hide Counter"
* false → "Show Counter"

---

### Counter Display

```js
{showCounter && <Counter />}
```

👉 Meaning:

* If `showCounter` is **true** → render Counter
* If `false` → render nothing

---

## 🎯 Final Flow

1. User clicks button
2. State toggles (true ↔ false)
3. React re-renders
4. UI updates

---

## 7. Key Concept

```jsx
{showCounter && <Counter />}
```

👉 Short and clean way to conditionally render components

---

## 8. Real-World Use Cases

* Show/Hide password
* Dropdown menus
* Modal popups
* Loading spinners
* Authentication UI

---

## 9. Common Mistakes

* Forgetting condition logic
* Using wrong operator
* Confusing `&&` with ternary
* Not managing state properly
* Writing complex conditions inside JSX

---

## 10. Interview Questions (With Answers)

### 1. What is Conditional Rendering?

Rendering UI based on conditions.

---

### 2. What are different ways to do it?

* if-else
* ternary operator
* logical AND (`&&`)

---

### 3. What does `&&` do in React?

If condition is true → render component
If false → render nothing

---

### 4. Difference between `&&` and ternary?

| Feature | &&        | Ternary                   |
| ------- | --------- | ------------------------- |
| Usage   | Show/hide | Choose between two values |
| Syntax  | Simple    | Slightly longer           |

---

### 5. Why use conditional rendering?

To create dynamic and interactive UI.

---

## 11. Practice Problems

1. Create a toggle button to show/hide text
2. Create a login/logout UI
3. Show "Loading..." when data is not ready
4. Show different UI based on user role
5. Create "Read More / Read Less" feature

---

## 12. Summary

* Conditional Rendering shows UI based on conditions
* Uses JavaScript operators
* Works with state
* Helps build dynamic UI

---

## 🔚 Final Thought

Conditional Rendering is what makes your UI **interactive and user-friendly**.

---