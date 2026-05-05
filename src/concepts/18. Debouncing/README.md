# 📘 Debouncing in React

## 🚀 What You Will Learn

* What is Debouncing
* Why it is needed
* Problem without Debouncing
* How Debouncing works
* Before vs After implementation
* Real-world use cases
* Interview-ready understanding

---

## 1. Introduction

👉 **Debouncing** is a technique used to **delay execution of a function** until a certain time has passed after the last event.

👉 In simple words:

> Run the function **only after user stops typing**

---

## 2. Why Debouncing is Needed

👉 In real apps:

* User types in search bar
* API gets called on every keystroke

❌ This causes:

* Too many API calls
* High server load
* Poor performance

---

## 3. Problem Without Debouncing

👉 Example:

User types `"react"`

```text
r → API call
re → API call
rea → API call
reac → API call
react → API call
```

👉 Total = **5 API calls ❌**

---

## 4. Example Without Debouncing

### 📄 Header.jsx

```jsx
import { useEffect, useState } from "react";
import axios from "axios";

export default function Header() {

  const [searchKey, setSearchKey] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setSearchKey(e.target.value);
  };

  async function fetchData() {
    if (!searchKey) return;

    try {
      const res = await axios.get(
        `https://dummyjson.com/products/search?q=${searchKey}`
      );
      setResults(res.data.products);
      console.log(searchKey);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, [searchKey]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchKey}
        onChange={handleChange}
      />

      {results.map(item => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}
```

---

## 🔍 How This Works (Without Debouncing)

### Step 1:

User types in input

### Step 2:

```js
setSearchKey(value)
```

---

### Step 3:

```js
useEffect runs
```

---

### Step 4:

```js
API gets called EVERY time
```

---

👉 Result:

```text
Too many API calls ❌
```

---

## 5. Solution: Debouncing

👉 Wait for a short time before calling API

👉 Only call API when user stops typing

---

## 6. Example With Debouncing

### 📄 Header.jsx

```jsx
import { useEffect, useState } from "react";
import axios from "axios";

export default function Header() {

  const [searchKey, setSearchKey] = useState("");
  const [results, setResults] = useState([]);
  const [timer, setTimer] = useState(null);

  const handleChange = (e) => {
    setSearchKey(e.target.value);
  };

  async function fetchData(query) {
    if (!query) return;

    try {
      const res = await axios.get(
        `https://dummyjson.com/products/search?q=${query}`
      );
      setResults(res.data.products);
      console.log(query);
    } catch (err) {
      console.log(err);
    }
  }

  function debounceSearch(value) {

    if (timer) clearTimeout(timer);

    const timerId = setTimeout(() => {
      fetchData(value);
    }, 500);

    setTimer(timerId);
  }

  useEffect(() => {
    debounceSearch(searchKey);
  }, [searchKey]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchKey}
        onChange={handleChange}
      />

      {results.map(item => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}
```

---

## 🔍 How This Works (With Debouncing)

### Step 1:

User types

---

### Step 2:

```js
setSearchKey(value)
```

---

### Step 3:

```js
useEffect triggers debounceSearch()
```

---

### Step 4:

```js
clearTimeout(previous timer)
```

👉 Cancels previous API call

---

### Step 5:

```js
setTimeout → waits 500ms
```

---

### Step 6:

If user stops typing → API runs

---

👉 Result:

```text
Only 1 API call ✅
```

---

## 🧠 Visual Flow

```text
User typing
   ↓
Timer resets
   ↓
User stops typing
   ↓
API call happens
```

---

## 🎯 Key Difference

```text
Without Debounce → API on every keystroke ❌
With Debounce → API after delay ✅
```

---

## 7. Real-World Use Cases

* Search autocomplete
* Search filters
* Form validation
* Window resize events
* Button click prevention

---

## 8. Common Mistakes

* Not clearing previous timer ❌
* Calling API inside setTimeout incorrectly ❌
* Too large delay (bad UX) ❌
* Too small delay (ineffective) ❌

---

## 9. Interview Questions (With Answers)

### What is Debouncing?

Delaying function execution until user stops triggering events

---

### Why use Debouncing?

To reduce unnecessary API calls and improve performance

---

### Difference between Debounce and Throttle?

* Debounce → waits until stop
* Throttle → runs at fixed intervals

---

### Where is Debouncing used?

Search bars, resize events, autocomplete

---

## 10. Practice Problems

1. Add debounce to search input
2. Create debounce for form validation
3. Build search with API
4. Compare with and without debounce
5. Add loading state

---

## 11. Summary

* Debouncing delays execution
* Prevents unnecessary API calls
* Improves performance
* Essential for real-world apps

---

## 🔚 Final Thought

Debouncing makes your app:

👉 Faster
👉 Efficient
👉 User-friendly

---