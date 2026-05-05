# 📘 Parallel API Calls in React

## 🚀 What You Will Learn

* What are Parallel API Calls
* Problem with sequential calls
* How Promise.all works
* Performance improvement
* Real-world use cases

---

## 1. Introduction

👉 In real applications, we often call multiple APIs:

* Users
* Posts
* Comments

👉 If we call them one by one → slow

👉 Solution → **Parallel API Calls**

---

## 2. What is a Promise?

👉 A Promise is:

An object that represents **the future result(success or failure) of an asynchronous operation**

---

## 3. Problem: Sequential API Calls

### 📁 SequentialCalls.jsx

```jsx
import { useEffect } from "react";

export default function SequentialCalls() {

  async function fetchData() {
    const start = Date.now();

    const postsRes = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await postsRes.json();

    const usersRes = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await usersRes.json();

    const commentsRes = await fetch("https://jsonplaceholder.typicode.com/comments");
    const comments = await commentsRes.json();

    const end = Date.now();

    console.log("Sequential Time:", end - start, "ms");
    console.log(posts, users, comments);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <h1>Check Console (Sequential)</h1>;
}
```

---

### 🔍 How This Works

#### Step 1:

First API runs

---

#### Step 2:

Second API waits

---

#### Step 3:

Third API waits

---

👉 Total time:

```
Task 1 → 3s
Task 2 → 5s
Task 3 → 4s

Total Time = 3 + 5 + 4 = 12 seconds
```

---

### ❌ Problem

* Slow performance
* Bad user experience

---

## 4. Solution: Parallel API Calls

👉 Run all APIs at same time

---

## 📁 ParallelCalls.jsx

```jsx
import { useEffect } from "react";

export default function ParallelCalls() {

  async function fetchData() {
    const start = Date.now();

    const [postsRes, usersRes, commentsRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts"),
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/comments"),
    ]);

    const [posts, users, comments] = await Promise.all([
      postsRes.json(),
      usersRes.json(),
      commentsRes.json(),
    ]);

    const end = Date.now();

    console.log("Parallel Time:", end - start, "ms");
    console.log(posts, users, comments);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <h1>Check Console (Parallel)</h1>;
}
```

---

### 🔍 How This Works (Step-by-Step)

---

#### Step 1: Promise.all()

```js
await Promise.all([
    fetch("url1"), 
    fetch("url2"),
    fetch("url3")
])
```

👉 Starts all API calls together

---

#### Step 2: Responses Received

```js
[postsRes, usersRes, commentsRes]
```

👉 All responses arrive

---

#### Step 3: Convert JSON

```js
await Promise.all([...json()])
```

👉 Convert all responses together

---

#### Step 4: Final Data

👉 posts, users, comments ready

---

#### Step 5: Time Taken

👉 Total time:

```
Start all tasks at same time

Time 0s:
Task1 → running
Task2 → running
Task3 → running

Time 3s:
Task1 → done
Task2 → 2s left
Task3 → 1s left

Time 4s:
Task1 → done
Task2 → 1s left
Task3 → done

Time 5s:
Task1 → done
Task2 → done
Task3 → done

Total Time = 5 seconds (slowest task)
```

👉 Only longest API time

```
max(3, 5, 4) = 5 seconds
```

### NOTE: 

* Total time depends on slowest API
* Not sum of all APIs

---

### 🧠 Visual Flow

```
Start all APIs together
      ↓
Wait for all to complete
      ↓
Process results
      ↓
Render UI
```

---

### NOTE:

* Sequential → Sum of all times
* Parallel → Maximum time

---

## 5. Promise Concurrency Methods

### 🔹 Promise.all()

* Runs all promises
* Fails if one fails

---

### 🔹 Promise.allSettled()

* Waits for all
* Returns success + failure

---

### 🔹 Promise.race()

* Returns first completed

---

### 🔹 Promise.any()

* Returns first successful

---

## 6. Real-World Use Cases

* Dashboard (users + stats + notifications)
* E-commerce (products + reviews + offers)
* Social apps (posts + comments + likes)

---

## 7. Common Mistakes

* Calling APIs sequentially
* Not using Promise.all
* Forgetting await
* Not handling errors

---

## 8. Interview Questions

### What is Promise.all?

Runs multiple promises in parallel.

---

### Why use parallel calls?

To improve performance.

---

### What happens if one fails?

Promise.all fails completely.

---

## 9. Practice Problems

1. Fetch users + posts together
2. Compare time (sequential vs parallel)
3. Add error handling
4. Use Promise.allSettled

---

## 10. Summary

* Sequential → slow
* Parallel → fast
* Promise.all is key
* Improves performance

---

## 🔚 Final Thought

Parallel API calls make your app:

👉 Faster
👉 Efficient
👉 Production-ready

---
