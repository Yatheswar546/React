# 📘 React Props

## 🚀 What You Will Learn

* What are Props
* Why Props are needed
* How data flows in React
* Passing single & multiple props
* Practical counter example
* Real-world usage

---

## 1. Introduction

👉 **Props (Properties)** are used to pass data from one component to another.

👉 They help in creating **dynamic and reusable components**.

---

## 2. Why Props are Needed

Without props:

* Components will always behave the same
* No dynamic behavior

With props:

* Same component can behave differently
* Reusability increases

---

## 3. Data Flow in React

Props follow **unidirectional (one-way) data flow**

```
Parent Component  ───────────────▶  Child Component
          (sends data via props)
```

👉 Data always flows from **Parent → Child**

---

## 4. Real-Life Understanding

Imagine:

* You have **3 counters**
* Each behaves differently:

| Counter | Behavior  |
| ------- | --------- |
| 1       | +1 / -1   |
| 2       | +5 / -5   |
| 3       | +10 / -10 |

👉 Instead of creating 3 separate components,
we use **props to pass different values** to the **function(counter)**. The function will do the operations according to the respective value

---

## 5. Practical Example (Dynamic Counter)

### 📁 Counter.jsx

```jsx
import { useState } from "react";

export default function Counter({ diff }) {

    const [counter, setCounter] = useState(0);

    function handleAdd(){
        setCounter(counter + diff);
    }

    function handleSub(){
        setCounter(counter - diff);
    }

    return(
        <div className='Counter'>
            <button onClick={handleAdd}>+</button>
            {counter}
            <button onClick={handleSub}>-</button>
        </div>
    );
}
```

---

### 📁 App.jsx

```jsx
import Counter from './concepts/04. Props/Counter';

function App() {
  return (
    <>
      <h1>Counter by 1</h1>
      <Counter diff={1} />

      <h1>Counter by 5</h1>
      <Counter diff={5} />

      <h1>Counter by 10</h1>
      <Counter diff={10} />
    </>
  )
}

export default App;
```

---

## 🔥 Output Behavior

* First Counter → +1 / -1
* Second Counter → +5 / -5
* Third Counter → +10 / -10

👉 Same component, different behavior using props

---

## 6. Props as Objects

👉 Props are internally stored as an **object** {key: value} pair

```
props = {
  diff: 1,
  name: "Yathe"
}
```

---

## 7. Passing Multiple Props

### 📁 Counter.jsx

```jsx
import { useState } from "react";

export default function Counter({ diff, name }) {

    console.log(`props: ${diff}, ${name}`);

    const [counter, setCounter] = useState(0);

    function handleAdd(){
        setCounter(counter + diff);
    }

    function handleSub(){
        setCounter(counter - diff);
    }

    return(
        <div>
            <button onClick={handleAdd}>+</button>
            {counter}
            <button onClick={handleSub}>-</button>
            <p>{name}</p>
        </div>
    );
}
```

---

### 📁 App.jsx

```jsx
function App() {
  return (
    <>
      <h1>Counter with Name</h1>
      <Counter diff={1} name="Yathe" />

      <h1>Counter by 5</h1>
      <Counter diff={5} />

      <h1>Counter by 10</h1>
      <Counter diff={10} />
    </>
  )
}
```

---

### 🔍 Output

```
props: 1, Yathe
props: 5, undefined
props: 10, undefined
```

👉 If a prop is not passed → it becomes `undefined`

---

## 8. Visual Flow of Props

```
App (Parent)
   │
   ├── <Counter diff={1} />
   ├── <Counter diff={5} />
   └── <Counter diff={10} />
            │
            ▼
     Counter Component (Child)
     Uses diff to update state
```

---

## 9. Real-World Use Cases

Props are used everywhere:

* Passing user data to components
* Product details in e-commerce
* Reusable UI components (cards, buttons)
* Dashboard widgets

---

## 10. Common Mistakes

* Forgetting to pass props
* Wrong prop names
* Assuming props can be modified ❌
* Not handling undefined props
* Confusing props with state

---

## 11. Interview Questions (With Answers)

### 1. What are Props?

Props are data passed from parent to child components.

---

### 2. Are props mutable?

❌ No, props are **read-only (immutable)**

---

### 3. What is prop drilling?

Passing props through multiple levels of components unnecessarily.

---

### 4. Difference between Props and State?

| Feature    | Props     | State       |
| ---------- | --------- | ----------- |
| Source     | Parent    | Component   |
| Mutability | Read-only | Mutable     |
| Purpose    | Pass data | Manage data |

---

### 5. What happens if prop is not passed?

It becomes `undefined`.

---

### 6. Can we pass functions as props?

✅ Yes, very common in React (used for event handling)

---

## 12. Practice Problems

1. Create a component that displays user name using props
2. Create a button component with dynamic text
3. Create a card component with title and description
4. Create 3 counters with different step values
5. Pass a function as prop and trigger it

---

## 13. Summary

* Props are used to pass data between components
* Data flows from Parent → Child
* Props are read-only
* Helps create dynamic and reusable components

---

## 🔚 Final Thought

Props make your components **flexible and reusable**.
They are the key to building scalable React applications.

---