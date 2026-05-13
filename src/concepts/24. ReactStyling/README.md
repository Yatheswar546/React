# 📘 Styling React Using CSS

## 🚀 What You Will Learn

* Why styling is important in React
* Different ways to style React components
* Inline CSS
* External CSS files
* CSS Modules
* CSS-in-JS (`styled-components`)
* Component-scoped styling
* Best practices
* Real-world usage

---

# 1. Introduction

React only handles:

```text
UI structure + functionality
```

To make UI beautiful:

👉 We use CSS.

---

# 2. Ways to Style React

React supports multiple styling approaches:

| Method       | Usage                    |
| ------------ | ------------------------ |
| Inline CSS   | Small dynamic styles     |
| External CSS | General styling          |
| CSS Modules  | Component-scoped styling |
| CSS-in-JS    | Styling inside JS        |

---

# 🧠 Recommendation Order

For beginners:

```text
External CSS
      ↓
CSS Modules
      ↓
CSS-in-JS
      ↓
Tailwind CSS
      ↓
Material UI
```

---

# 📁 Suggested Folder Structure

```bash
src
│
├── concepts
│     └── 24.ReactStyling
│            ├── 01.ExternalCSS
│            │      ├── ExternalCSS.jsx
│            │      └── ExternalCSS.css
│            │
│            ├── 02.InlineCSS
│            │      └── InlineCSS.jsx
│            │
│            ├── 03.CSSModules
│            │      ├── Button.jsx
│            │      └── Button.module.css
│            │
│            ├── 04.CSSInJS
│            │      └── StyledComponent.jsx
│            │
│            └── README.md
│
├── App.jsx
└── main.jsx
```

---

# 3. External CSS (Most Common)

This is the most commonly used beginner-friendly approach.

---

# 📄 ExternalCSS.css

```css
.container {
    text-align: center;
    padding: 20px;
}

.heading {
    color: blue;
    font-size: 40px;
}

.button {
    padding: 10px 20px;
    background-color: black;
    color: white;
    border: none;
    cursor: pointer;
}
```

---

# 📄 ExternalCSS.jsx

```jsx
import "./ExternalCSS.css";

export default function ExternalCSS() {

    return (
        <div className="container">

            <h1 className="heading">
                External CSS Styling
            </h1>

            <button className="button">
                Click Me
            </button>

        </div>
    );
}
```

---

# 🔍 How This Works

---

## Step 1:

Create CSS file.

---

## Step 2:

Import CSS file.

```js
import "./ExternalCSS.css";
```

---

## Step 3:

Use classes using:

```jsx
className=""
```

---

# ⚠️ Important

In React:

❌ `class`

✅ `className`

because `class` is reserved in JavaScript.

---

# 🧠 Best Use Case

Use External CSS for:

✅ General styling
✅ Reusable classes
✅ Beginner projects

---

# 4. Inline CSS

Inline CSS means:

👉 Writing styles directly inside JSX.

---

# 📄 InlineCSS.jsx

```jsx
export default function InlineCSS() {

    const headingStyle = {
        color: "red",
        fontSize: "40px",
        textAlign: "center"
    };

    return (
        <div>

            <h1 style={headingStyle}>
                Inline CSS
            </h1>

        </div>
    );
}
```

---

# 🔍 How This Works

---

## Step 1:

Styles written as:

```js
JavaScript Object
```

---

## Step 2:

Pass object to:

```jsx
style={}
```

---

# ⚠️ Important Rules

---

## CSS properties use camelCase

❌ Wrong:

```js
font-size
```

✅ Correct:

```js
fontSize
```

---

## Values must be strings (mostly)

```js
color: "red"
```

---

# 🧠 Best Use Case

Use Inline CSS for:

✅ Dynamic styles
✅ Conditional styling
✅ Small changes

---

# ❌ Not Ideal For

* Large styling
* Reusable styles
* Complex UI

---

# 5. Dynamic Inline Styling

One powerful feature of inline styling:

👉 Dynamic styles.

---

# 📄 DynamicStyle.jsx

```jsx
export default function DynamicStyle() {

    const isDark = true;

    return (
        <div>

            <h1
                style={{
                    color: isDark ? "white" : "black",
                    backgroundColor: isDark ? "black" : "white",
                    padding: "20px"
                }}
            >
                Dynamic Styling
            </h1>

        </div>
    );
}
```

---

# 🔍 How This Works

```js
condition ? value1 : value2
```

changes styles dynamically.

---

# 🧠 Real-World Usage

* Dark mode
* Error messages
* Active buttons
* Theme switching

---

# 6. CSS Modules

Problem with normal CSS:

❌ Class name conflicts.

Example:

```css
.button
```

can affect multiple components accidentally.

---

# ✅ Solution → CSS Modules

CSS Modules provide:

```text
Component-scoped CSS
```

---

# 📄 Button.module.css

```css
.button {
    background-color: purple;
    color: white;
    padding: 10px 20px;
    border: none;
}
```

---

# 📄 Button.jsx

```jsx
import styles from "./Button.module.css";

export default function Button() {

    return (
        <button className={styles.button}>
            CSS Module Button
        </button>
    );
}
```

---

# 🔍 How This Works

---

## Step 1:

File name must be:

```text
.module.css
```

---

## Step 2:

Import styles object.

```js
import styles from "./Button.module.css";
```

---

## Step 3:

Use classes like:

```jsx
styles.button
```

---

# 🧠 Biggest Advantage

CSS Modules automatically create:

```text
Unique class names
```

So:

✅ No conflicts

---

# 🧠 Best Use Case

Use CSS Modules for:

✅ Medium/Large projects
✅ Component-based styling
✅ Avoiding conflicts

---

# 7. CSS-in-JS (styled-components)

CSS-in-JS means:

👉 Writing CSS inside JavaScript.

Popular library:

```text
styled-components
```

---

# 📦 Installation

```bash
npm install styled-components
```

---

# 📄 StyledComponent.jsx

```jsx
import styled from "styled-components";

const Heading = styled.h1`
    color: white;
    background-color: teal;
    padding: 20px;
    text-align: center;
`;

export default function StyledComponent() {

    return (
        <div>

            <Heading>
                Styled Components
            </Heading>

        </div>
    );
}
```

---

# 🔍 How This Works

---

## Step 1:

Import:

```js
styled
```

---

## Step 2:

Create styled component.

```js
const Heading = styled.h1
```

---

## Step 3:

Write CSS inside:

```js
backticks ``
```

---

## Step 4:

Use component normally.

```jsx
<Heading />
```

---

# 🧠 Biggest Advantage

✅ Component-scoped styling
✅ Dynamic styling
✅ No class conflicts

---

# ⚠️ Beginner Note

CSS-in-JS is powerful,

but:

👉 External CSS + CSS Modules are easier initially.

---

# 8. Comparison of Styling Methods

| Method       | Best For                  |
| ------------ | ------------------------- |
| Inline CSS   | Small dynamic styles      |
| External CSS | Beginner/general styling  |
| CSS Modules  | Component-scoped styling  |
| CSS-in-JS    | Advanced scalable styling |

---

# 9. Most Commonly Used in Real Projects

Nowadays:

```text
Tailwind CSS
Material UI
CSS Modules
```

are used heavily.

But:

👉 Learning normal CSS styling first is VERY important.

---

# 10. Common Mistakes

* Using `class` instead of `className`  ❌
* Forgetting `.module.css` extension  ❌
* Wrong camelCase in inline styles  ❌
* Overusing inline CSS  ❌
* Mixing too many styling approaches  ❌

---

# 11. Interview Questions (With Answers)

---

## 1. How can we style React components?

Using:

* External CSS
* Inline CSS
* CSS Modules
* CSS-in-JS

---

## 2. Why className instead of class?

Because `class` is reserved in JavaScript.

---

## 3. What are CSS Modules?

CSS files scoped locally to components.

---

## 4. What is CSS-in-JS?

Writing CSS directly inside JavaScript.

---

## 5. Which styling approach is best?

Depends on project size and requirements.

---

# 12. Practice Problems

1. Create dark/light mode
2. Style card component
3. Create reusable button
4. Build navbar using CSS Modules
5. Create dynamic text color

---

# 13. Summary

* React supports multiple styling methods
* External CSS is easiest for beginners
* Inline CSS is useful for dynamic styling
* CSS Modules avoid class conflicts
* CSS-in-JS keeps styles inside components

---

# 🧠 Simple Analogy

Think of styling methods like:

| Method       | Analogy                         |
| ------------ | ------------------------------- |
| Inline CSS   | Writing notes directly on paper |
| External CSS | Separate design notebook        |
| CSS Modules  | Private notebook per component  |
| CSS-in-JS    | Design + logic together         |

---

# 🔚 Final Takeaway

Before learning:

```text
Tailwind CSS
Material UI
```

you should understand:

✅ Basic CSS
✅ Component styling
✅ CSS Modules
✅ Dynamic styling

Because these are the foundations of React UI styling.

([w3schools.com][1])

[1]: https://www.w3schools.com/react/react_css_styling.asp?utm_source=chatgpt.com "React CSS Styling"
