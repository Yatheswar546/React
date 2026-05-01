# 📘 React Hooks

## 🚀 What You Will Learn

* What is rendering
* Why local variables don’t update UI
* What is state
* Stateful vs Stateless components
* What are Hooks
* useState (deep understanding)
* Practical Counter App

---

## 1. Rendering in React

👉 Rendering means:
Displaying UI on the screen.

👉 Re-rendering means:
Updating UI when data changes.

---

### ❗ Problem with Normal Variables

Let us create a Counter App which has a variable `count`.

```jsx
export default function Counter() {

    let count = 1;

    function handleCounter(){
        console.log(count++);
    }

    return (
        <div>
            <h1>Counter App</h1>
            <button onClick={handleCounter}>+</button>
            <h2>{count}</h2>
        </div>
    )
}
```

### ❌ What Happens Here?

* `count` stores the value and increases in console
* UI does NOT update

👉 Reason:

* `count` is a **local variable**
* React does NOT track it
* No re-render happens

---

## 2. What is State?

👉 **State is data that React tracks and uses to update the UI automatically.**

(State means holding and managing data inside a component)

### Examples:

* Counter value
* Form input
* Toggle (open/close)
* Dropdown state

---

## 3. Stateful vs Stateless Components

### 🔹 Stateful Component

* Has state
* Used for dynamic behavior (adds functionality)

**Example:**

* Counter
* Form

---

### 🔹 Stateless Component

* No state
* Only displays UI

**Example:**

* Header
* Static text

---

### ⚠️ Important Clarification

❌ Old understanding:

> Functional components don’t have state

✅ Correct:

* Earlier → Only Class Components had state
* Now → Functional Components also have state using Hooks

---

## 4. What are Hooks?

👉 Hooks are functions that allow functional components to use:

* State
* Lifecycle features

📌 Introduced in React 16.8

* Hooks are pre-written functions provided by React to use in case of State.

---

### Definition

Hooks are functions that allow you to **"hook into" React state and lifecycle features** from functional components

---

## 5. Most Important Hooks (Big 4)

### 🔹 1. useState

* Adds state to a component
* Example: counter value, form input

---

### 🔹 2. useEffect

* Handles side effects
* Example: API calls, timers, DOM updates

---

### 🔹 3. useContext

* Access global data without prop drilling i.e.passing props manually through every level 
* Example: theme, user data

---

### 🔹 4. useRef

* Creates a reference to a DOM element or a persists value 
* Does NOT trigger re-render

---

## 6. useState Hook (Core Concept)

👉 `useState` is used to store and update state in a functional component.

* It stores a state value inside the component
* We must use the update function to change the value

---

### Syntax

```jsx
const [state, setState] = useState(initialValue);
```

👉 `setState()` triggers a re-render after updating the value.

---

### Key Points

* Returns an array:

  * Current value
  * Function to update value

* Updating state:

  * Triggers re-render

* ❗ Never update state directly
  Always use the setter function

* You can have multiple states in a single component in functional components

---

## 7. Practical Example (Counter App)

### 📁 Counter.jsx

```jsx
import { useState } from "react";

export default function Counter() {

    const [counter, setCounter] = useState(0);

    function handleIncrement() {
        setCounter(counter + 1);
    }

    function handleDecrement() {
        setCounter(counter - 1);
    }

    return (
        <div>
            <h1>Counter App</h1>

            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>

            <h2 className="counter">{counter}</h2>
        </div>
    )
}
```

---

### 📁 App.jsx

```jsx
import Counter from './concepts/03. Hooks/Counter';

function App() {
  return (
    <>
      <Counter />
    </>
  )
}

export default App;
```

---

## 🔥 Alternative Method (Inline Update)

```jsx
<button onClick={() => setCounter(counter + 1)}>+</button>
```

---

## ⚠️ Important Notes

* Never do:

```js
counter = counter + 1 ❌
```

👉 React will NOT re-render correctly

* Always use:

```js
setCounter(counter + 1) ✅
```

---

## 8. Real-World Use Cases

* Counter apps
* Form handling
* Toggle buttons (dark/light mode)
* API data display
* Cart items in e-commerce

---

## 9. Common Mistakes

* Using normal variables instead of state
* Updating state directly
* Forgetting to import `useState`
* Naming mistakes in state variables
* Not understanding re-render

---

## 10. Interview Questions (With Answers)

### 1. What is a Hook?

Hooks are functions that allow functional components to use state and lifecycle features.

---

### 2. Why Hooks are introduced?

To allow functional components to use features that were previously only available in class components.

---

### 3. What is useState?

useState is a Hook used to add state to a functional component.

---

### 4. What happens when state updates?

React re-renders the component and updates UI.

---

### 5. Can we have multiple states?

Yes, we can use multiple `useState` hooks in a single component.

---

### 6. Difference between state and variable?

| Feature            | Variable | State |
| ------------------ | -------- | ----- |
| Triggers re-render | ❌ No     | ✅ Yes |
| Tracked by React   | ❌ No     | ✅ Yes |

---

### 7. Why direct state update is wrong?

React will not detect changes properly and UI won’t update correctly.

---

## 11. Practice Problems

1. Create a counter with + and - buttons
2. Add reset button to counter
3. Create toggle button (ON/OFF)
4. Create input field and display typed value
5. Create a like button that increases count

---

## 12. Summary

* React needs re-render to update UI
* Local variables don’t trigger re-render
* State is used to store dynamic data
* Hooks allow functional components to use state
* useState is the most important Hook

---

## 🔚 Final Thought

Hooks are where React becomes **dynamic and powerful**.
Understanding useState clearly is the key to mastering React.

---