# 📘 Functional Components

## 🚀 What You Will Learn

* What are Functional Components
* How to create components
* Rules of components
* JSX return structure
* Named exports inside components
* Practical usage

---

## 1. Introduction

Functional Components are the **most commonly used way** to create components in React.

👉 They are simply **JavaScript functions** that return JSX (UI).

---

## 2. What are Components?

* Components are the **building blocks of a React application**
* Each component represents a **part of UI**
* Components are:

  * Reusable
  * Independent
  * Maintainable

---

## 3. Why Functional Components?

Earlier:

* Class Components were used

Now:

* Functional Components are preferred because:

  * Simpler syntax
  * Easier to understand
  * Works with Hooks
  * Less boilerplate

---

## 4. Rules of Functional Components

### ✅ Rule 1: Must return JSX

```jsx
function Demo(){
  return <h1>Hello</h1>
}
```

---

### ✅ Rule 2: Only one parent element

❌ Wrong:

```jsx
return (
  <h1>Hello</h1>
  <h2>World</h2>
)
```

✅ Correct:

```jsx
return (
  <>
    <h1>Hello</h1>
    <h2>World</h2>
  </>
)
```

👉 Use:

* `<div>` OR
* React Fragment `<> </>`

---

### ✅ Rule 3: Component name must start with Capital Letter

```jsx
function MyComponent(){ } ✅
function myComponent(){ } ❌
```

---

## 5. Syntax / Core Idea

```jsx
function ComponentName(){
  return (
    <>
      <h1>JSX Content</h1>
    </>
  )
}
```

---

## 6. Example

### 📁 Functional.jsx

```jsx
export default function Functional(){
  return(
    <>
      <h1>I am Functional Component</h1>
      <h2>I can return multiple elements using Fragment</h2>
    </>
  )
}

// Named exports
function Add(a,b){
  return a+b;
}

function Sub(a,b){
  return a-b;
}

export { Add, Sub };
```

---

### 📁 App.jsx

```jsx
import Functional, { Add, Sub } from './concepts/02. FunctionalComponents/Functional';

function App() {

  const a = 7;
  const b = 3;

  return (
    <>
      <Functional />

      <h1>Addition of {a} + {b} = {Add(a,b)}</h1>
      <h1>Subtraction of {a} - {b} = {Sub(a,b)}</h1>
    </>
  )
}

export default App;
```

---

## 7. Real-World Use Case

Functional components are used everywhere:

* Navbar
* Cards
* Buttons
* Forms
* Dashboard widgets

👉 Example:

* A "UserCard" component used multiple times with different data

---

## 8. Common Mistakes

* Not returning JSX
* Returning multiple elements without wrapper
* Using lowercase component names
* Wrong import/export names
* Mixing default and named imports incorrectly

---

## 9. Interview Questions (With Answers)

### 1. What is a Functional Component?

A Functional Component is a JavaScript function that returns JSX to render UI.

---

### 2. Why Functional Components are preferred?

* Simpler
* Less code
* Supports Hooks
* Better readability

---

### 3. Can a Functional Component return multiple elements?

Yes, but they must be wrapped inside:

* `<div>` OR
* Fragment `<> </>`

---

### 4. Difference between Functional and Class Components?

| Feature | Functional | Class      |
| ------- | ---------- | ---------- |
| Syntax  | Simple     | Complex    |
| State   | Hooks      | this.state |
| Usage   | Modern     | Legacy     |

---

### 5. What is a Fragment?

A Fragment (`<> </>`) allows grouping multiple elements without adding extra DOM nodes.

---

### 6. Can we use functions inside a component file?

Yes, we can define helper functions and export them as named exports.

---

## 10. Practice Problems

1. Create a component that displays your profile (name + age)
2. Create a component with 3 headings using Fragment
3. Create functions for multiplication and division and export them
4. Use them inside App.jsx
5. Create two components and render them together

---

## 11. Summary

* Functional Components are simple JavaScript functions
* They return JSX
* Only one parent element is allowed
* Fragments help avoid extra divs
* Most commonly used in modern React

---

## 🔚 Final Thought

Functional Components are the **foundation of modern React**.
Once you master this, understanding Hooks becomes much easier.

---