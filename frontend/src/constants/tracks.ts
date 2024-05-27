export const js_data = {
  title: "JavaScript",
  logo: "/images/js.webp",
  relative_path: "javascript",
  beginner: [
    {
      question:
        "What is the difference between `let`, `const`, and `var` in JavaScript?",
      type: "theory",
      answer:
        "var is function-scoped, let and const are block-scoped. var declarations are hoisted, let and const declarations are not. const requires an initializer and can't be reassigned.",
    },
    {
      question: "Explain the concept of closures in JavaScript.",
      type: "theory",
      answer:
        "A closure is a function that retains access to its outer scope, even after the outer function has finished executing. This allows the inner function to access variables from the outer function's scope.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nconsole.log(typeof null);\n```",
      type: "output",
      code: "console.log(typeof null);",
      answer: "object",
    },
    {
      question: "What are Promises in JavaScript and why are they used?",
      type: "theory",
      answer:
        "Promises are objects representing the eventual completion or failure of an asynchronous operation. They are used to handle asynchronous operations more effectively and avoid callback hell.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nconst foo = [];\nfoo.push(1);\nfoo.push(2);\nfoo = [3, 4];\n```",
      type: "output",
      code: "const foo = [];\nfoo.push(1);\nfoo.push(2);\nfoo = [3, 4];",
      answer: "TypeError: Assignment to constant variable.",
    },
    {
      question: "Explain the concept of 'this' keyword in JavaScript.",
      type: "theory",
      answer:
        "The 'this' keyword refers to the object that is currently executing the function. Its value depends on how the function is called. In a method, it refers to the object, in a function, it refers to the global object (or undefined in strict mode).",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nconsole.log(0.1 + 0.2 == 0.3);\n```",
      type: "output",
      code: "console.log(0.1 + 0.2 == 0.3);",
      answer: "false",
    },
    {
      question: "What is event delegation in JavaScript?",
      type: "theory",
      answer:
        "Event delegation is a technique where a single event listener is added to a parent element to manage events for its child elements. It uses event bubbling to catch events from child elements and handle them at a higher level.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nlet a = 10;\nfunction foo() {\n  console.log(a);\n  let a = 20;\n}\nfoo();\n```",
      type: "output",
      code: "let a = 10;\nfunction foo() {\n  console.log(a);\n  let a = 20;\n}\nfoo();",
      answer: "ReferenceError: Cannot access 'a' before initialization",
    },
    {
      question: "What is the purpose of the `Array.prototype.map` method?",
      type: "theory",
      answer:
        "The `map` method creates a new array populated with the results of calling a provided function on every element in the calling array.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nconsole.log([1, 2, 3] + [4, 5, 6]);\n```",
      type: "output",
      code: "console.log([1, 2, 3] + [4, 5, 6]);",
      answer: "1,2,34,5,6",
    },
    {
      question: "Explain the difference between `==` and `===` in JavaScript.",
      type: "theory",
      answer:
        "`==` is the equality operator that performs type coercion, while `===` is the strict equality operator that does not perform type coercion and requires both values to be of the same type.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nconst arr = [1, 2, 3];\nconst [a, b, c] = arr;\nconsole.log(a, b, c);\n```",
      type: "output",
      code: "const arr = [1, 2, 3];\nconst [a, b, c] = arr;\nconsole.log(a, b, c);",
      answer: "1 2 3",
    },
    {
      question:
        "What are arrow functions and how do they differ from regular functions?",
      type: "theory",
      answer:
        "Arrow functions are a concise syntax for writing functions introduced in ES6. They differ from regular functions in that they do not have their own `this` binding and cannot be used as constructors.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nfunction foo() {\n  return\n  {\n    message: 'Hello'\n  };\n}\nconsole.log(foo());\n```",
      type: "output",
      code: "function foo() {\n  return\n  {\n    message: 'Hello'\n  };\n}\nconsole.log(foo());",
      answer: "undefined",
    },
    {
      question: "What is the purpose of `Array.prototype.reduce` method?",
      type: "theory",
      answer:
        "The `reduce` method executes a reducer function on each element of the array, resulting in a single output value. It is used to accumulate values from an array into a single result.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nconsole.log(typeof NaN);\n```",
      type: "output",
      code: "console.log(typeof NaN);",
      answer: "number",
    },
    {
      question: "What are template literals in JavaScript?",
      type: "theory",
      answer:
        "Template literals are string literals allowing embedded expressions. They are enclosed by backticks (` `) and can contain placeholders indicated by the `${expression}` syntax.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nconsole.log('5' - 3);\n```",
      type: "output",
      code: "console.log('5' - 3);",
      answer: "2",
    },
    {
      question:
        "What is the difference between `null` and `undefined` in JavaScript?",
      type: "theory",
      answer:
        "`undefined` means a variable has been declared but not assigned a value, while `null` is an assignment value that represents no value.",
    },
  ],
  intermediate: [
    {
      question:
        "What is the difference between `call`, `apply`, and `bind` methods in JavaScript?",
      type: "theory",
      answer:
        "`call` and `apply` are used to invoke functions with a specific `this` value and arguments. `call` accepts a list of arguments, while `apply` accepts an array of arguments. `bind` returns a new function with a specified `this` value and optionally pre-filled arguments.",
    },
    {
      question: "Explain prototypal inheritance in JavaScript.",
      type: "theory",
      answer:
        "Prototypal inheritance is a feature in JavaScript where objects can inherit properties and methods from other objects. This is achieved through the prototype chain, where objects have an internal link to another object called a prototype.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nconsole.log(1 + '1');\nconsole.log(1 - '1');\n```",
      type: "output",
      code: "console.log(1 + '1');\nconsole.log(1 - '1');",
      answer: "11\n0",
    },
    {
      question:
        "What is the difference between synchronous and asynchronous code in JavaScript?",
      type: "theory",
      answer:
        "Synchronous code is executed sequentially, blocking subsequent code until the current task completes. Asynchronous code allows other code to run while waiting for the asynchronous task to complete, often using callbacks, promises, or async/await.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nlet a = { x: 1 };\nlet b = a;\nb.x = 2;\nconsole.log(a.x);\n```",
      type: "output",
      code: "let a = { x: 1 };\nlet b = a;\nb.x = 2;\nconsole.log(a.x);",
      answer: "2",
    },
    {
      question: "What is the Event Loop in JavaScript?",
      type: "theory",
      answer:
        "The Event Loop is a mechanism in JavaScript that handles asynchronous callbacks. It continuously checks the call stack and the task queue, pushing tasks from the queue to the stack when the stack is empty.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nfor (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1000);\n}\n```",
      type: "output",
      code: "for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1000);\n}\n",
      answer: "3\n3\n3",
    },
    {
      question: "What is a higher-order function in JavaScript?",
      type: "theory",
      answer:
        "A higher-order function is a function that can take another function as an argument, return a function, or both. Examples include `map`, `filter`, and `reduce`.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nlet a = 10;\n(function() {\n  console.log(a);\n  a = 20;\n  console.log(a);\n  var a = 30;\n  console.log(a);\n})();\n```",
      type: "output",
      code: "let a = 10;\n(function() {\n  console.log(a);\n  a = 20;\n  console.log(a);\n  var a = 30;\n  console.log(a);\n})();",
      answer: "undefined\n20\n30",
    },
    {
      question: "What is the `this` keyword and how does it work?",
      type: "theory",
      answer:
        "`this` refers to the object that is currently executing the function. Its value is determined by how the function is called. In a method, `this` refers to the object the method is called on. In a constructor, `this` refers to the newly created instance. In an event, `this` refers to the element that received the event.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nconst arr = [10, 20, 30];\nconst [a, , c] = arr;\nconsole.log(a, c);\n```",
      type: "output",
      code: "const arr = [10, 20, 30];\nconst [a, , c] = arr;\nconsole.log(a, c);",
      answer: "10 30",
    },
    {
      question: "Explain the concept of promises in JavaScript.",
      type: "theory",
      answer:
        "A promise is an object representing the eventual completion or failure of an asynchronous operation. It can be in one of three states: pending, fulfilled, or rejected. Promises provide `then` and `catch` methods to handle asynchronous results.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nconst obj = { a: 1, b: 2 };\nconst newObj = { ...obj, b: 3 };\nconsole.log(newObj);\n```",
      type: "output",
      code: "const obj = { a: 1, b: 2 };\nconst newObj = { ...obj, b: 3 };\nconsole.log(newObj);",
      answer: "{ a: 1, b: 3 }",
    },
    {
      question:
        "What is the difference between `Array.prototype.map` and `Array.prototype.forEach`?",
      type: "theory",
      answer:
        "`map` creates a new array with the results of calling a provided function on every element in the calling array, whereas `forEach` executes a provided function once for each array element but does not return a new array.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nconst obj = { a: 1 };\nObject.freeze(obj);\nobj.a = 2;\nconsole.log(obj.a);\n```",
      type: "output",
      code: "const obj = { a: 1 };\nObject.freeze(obj);\nobj.a = 2;\nconsole.log(obj.a);",
      answer: "1",
    },
    {
      question:
        "Explain the difference between `Object.seal` and `Object.freeze`.",
      type: "theory",
      answer:
        "`Object.seal` prevents new properties from being added and marks all existing properties as non-configurable. Existing properties can still be modified. `Object.freeze` goes a step further and prevents any modifications to existing properties (i.e., making them non-writable).",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nconst person = { name: 'Alice' };\nconst greeting = `Hello, ${person.name}!`;\nconsole.log(greeting);\n```",
      type: "output",
      code: "const person = { name: 'Alice' };\nconst greeting = `Hello, ${person.name}!`;\nconsole.log(greeting);",
      answer: "Hello, Alice!",
    },
    {
      question: "What are generators in JavaScript?",
      type: "theory",
      answer:
        "Generators are functions that can be paused and resumed. They are defined using the `function*` syntax and use the `yield` keyword to return a value and pause execution. They return an iterator object.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nconst arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\nconst combined = [...arr1, ...arr2];\nconsole.log(combined);\n```",
      type: "output",
      code: "const arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\nconst combined = [...arr1, ...arr2];\nconsole.log(combined);",
      answer: "[1, 2, 3, 4, 5, 6]",
    },
    {
      question: "What is the purpose of the `await` keyword in JavaScript?",
      type: "theory",
      answer:
        "The `await` keyword is used inside an `async` function to pause the execution of the function until the promise is resolved. It makes asynchronous code appear synchronous and helps to write cleaner and more readable asynchronous code.",
    },
  ],
  advance: [
    {
      question:
        "Explain the concept of the JavaScript event loop and how it handles asynchronous operations.",
      type: "theory",
      answer:
        "The JavaScript event loop is responsible for executing code, collecting and processing events, and executing queued sub-tasks. The event loop continuously checks the call stack to see if there’s any function that needs to run. If the call stack is empty, it checks the task queue to see if there are any pending tasks (callbacks or asynchronous operations) waiting to be executed.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\n(async () => {\n  console.log('Start');\n  await new Promise(resolve => setTimeout(resolve, 1000));\n  console.log('End');\n})();\nconsole.log('Middle');\n```",
      type: "output",
      code: "(async () => {\n  console.log('Start');\n  await new Promise(resolve => setTimeout(resolve, 1000));\n  console.log('End');\n})();\nconsole.log('Middle');",
      answer: "Start\nMiddle\nEnd",
    },
    {
      question: "What are weak maps and weak sets in JavaScript?",
      type: "theory",
      answer:
        "WeakMaps and WeakSets are collections that hold weak references to their keys (in the case of WeakMap) or values (in the case of WeakSet). This means that the references do not prevent garbage collection if there are no other references to the object, allowing for better memory management.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nconst obj1 = { key: 'value' };\nconst obj2 = { key: 'value' };\nconst map = new Map();\nmap.set(obj1, 'obj1');\nmap.set(obj2, 'obj2');\nconsole.log(map.get(obj1));\nconsole.log(map.get(obj2));\n```",
      type: "output",
      code: "const obj1 = { key: 'value' };\nconst obj2 = { key: 'value' };\nconst map = new Map();\nmap.set(obj1, 'obj1');\nmap.set(obj2, 'obj2');\nconsole.log(map.get(obj1));\nconsole.log(map.get(obj2));",
      answer: "obj1\nobj2",
    },
    {
      question:
        "Explain the difference between shallow copy and deep copy in JavaScript.",
      type: "theory",
      answer:
        "A shallow copy creates a new object, but it does not create copies of nested objects. Instead, it copies references to the original objects. A deep copy, on the other hand, creates a new object and recursively copies all nested objects, ensuring that there are no shared references between the original and the copy.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nconst a = [1, [2, 3]];\nconst b = [...a];\nb[1][0] = 42;\nconsole.log(a[1][0]);\n```",
      type: "output",
      code: "const a = [1, [2, 3]];\nconst b = [...a];\nb[1][0] = 42;\nconsole.log(a[1][0]);",
      answer: "42",
    },
    {
      question: "What is the purpose of the `Reflect` API in JavaScript?",
      type: "theory",
      answer:
        "The `Reflect` API is a built-in object that provides methods for interceptable JavaScript operations. It is similar to the `Object` API but includes methods for fundamental language operations, such as property manipulation, function invocation, and object creation. These methods provide a way to perform operations that are also interceptable by proxy handlers.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nconst handler = {\n  get: (obj, prop) => prop in obj ? obj[prop] : 37\n};\nconst p = new Proxy({}, handler);\np.a = 1;\np.b = undefined;\nconsole.log(p.a);\nconsole.log(p.b);\nconsole.log(p.c);\n```",
      type: "output",
      code: "const handler = {\n  get: (obj, prop) => prop in obj ? obj[prop] : 37\n};\nconst p = new Proxy({}, handler);\np.a = 1;\np.b = undefined;\nconsole.log(p.a);\nconsole.log(p.b);\nconsole.log(p.c);",
      answer: "1\nundefined\n37",
    },
    {
      question: "Explain the concept of currying in JavaScript.",
      type: "theory",
      answer:
        "Currying is a functional programming technique in which a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. It allows for partial application of functions, where some arguments can be fixed in advance and the resulting function can be called with the remaining arguments later.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nfunction curry(f) {\n  return function(a) {\n    return function(b) {\n      return f(a, b);\n    };\n  };\n}\nfunction sum(a, b) {\n  return a + b;\n}\nconst curriedSum = curry(sum);\nconsole.log(curriedSum(1)(2));\n```",
      type: "output",
      code: "function curry(f) {\n  return function(a) {\n    return function(b) {\n      return f(a, b);\n    };\n  };\n}\nfunction sum(a, b) {\n  return a + b;\n}\nconst curriedSum = curry(sum);\nconsole.log(curriedSum(1)(2));",
      answer: "3",
    },
    {
      question:
        "What is memoization and how can it be implemented in JavaScript?",
      type: "theory",
      answer:
        "Memoization is an optimization technique that caches the results of expensive function calls and returns the cached result when the same inputs occur again. In JavaScript, it can be implemented using a closure to store the results in an object or a Map.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nfunction memoize(fn) {\n  const cache = {};\n  return function(...args) {\n    const key = JSON.stringify(args);\n    if (cache[key]) {\n      return cache[key];\n    } else {\n      const result = fn(...args);\n      cache[key] = result;\n      return result;\n    }\n  };\n}\nconst factorial = memoize(function(n) {\n  if (n === 0) return 1;\n  return n * factorial(n - 1);\n});\nconsole.log(factorial(5));\nconsole.log(factorial(6));\n```",
      type: "output",
      code: "function memoize(fn) {\n  const cache = {};\n  return function(...args) {\n    const key = JSON.stringify(args);\n    if (cache[key]) {\n      return cache[key];\n    } else {\n      const result = fn(...args);\n      cache[key] = result;\n      return result;\n    }\n  };\n}\nconst factorial = memoize(function(n) {\n  if (n === 0) return 1;\n  return n * factorial(n - 1);\n});\nconsole.log(factorial(5));\nconsole.log(factorial(6));",
      answer: "120\n720",
    },
    {
      question: "What are generator functions and how do they work?",
      type: "theory",
      answer:
        "Generator functions are a special type of function that can pause execution and resume later. They are defined using the `function*` syntax and use the `yield` keyword to return a value and pause execution. Calling a generator function does not execute its body immediately; instead, it returns an iterator. The `next` method of this iterator resumes the function's execution until the next `yield` or `return` statement.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nfunction* gen() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\nconst g = gen();\nconsole.log(g.next().value);\nconsole.log(g.next().value);\nconsole.log(g.next().value);\n```",
      type: "output",
      code: "function* gen() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\nconst g = gen();\nconsole.log(g.next().value);\nconsole.log(g.next().value);\nconsole.log(g.next().value);",
      answer: "1\n2\n3",
    },
    {
      question:
        "What is a Proxy object in JavaScript and what are its use cases?",
      type: "theory",
      answer:
        "A Proxy object in JavaScript allows you to create an intermediary that intercepts and customizes operations performed on target objects. Proxies can be used for logging, validation, formatting, or to implement objects with advanced behavior, such as negative array indices.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nconst target = {};\nconst handler = {\n  get: function(obj, prop) {\n    return prop in obj ? obj[prop] : 'default';\n  }\n};\nconst proxy = new Proxy(target, handler);\nconsole.log(proxy.nonExistentProperty);\n```",
      type: "output",
      code: "const target = {};\nconst handler = {\n  get: function(obj, prop) {\n    return prop in obj ? obj[prop] : 'default';\n  }\n};\nconst proxy = new Proxy(target, handler);\nconsole.log(proxy.nonExistentProperty);",
      answer: "default",
    },
    {
      question: "Explain the concept of a monad in JavaScript.",
      type: "theory",
      answer:
        "A monad is a design pattern used in functional programming to handle program-wide concerns such as state or I/O in a functional way. It encapsulates values and computation within a context, providing operations to chain functions while maintaining the context. JavaScript's Promise is an example of a monad, encapsulating asynchronous computation.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nPromise.resolve().then(() => console.log('Promise 1')); \nsetTimeout(() => console.log('Timeout'), 0); \nPromise.resolve().then(() => console.log('Promise 2')); \nconsole.log('Sync');\n```",
      type: "output",
      code: "Promise.resolve().then(() => console.log('Promise 1')); \nsetTimeout(() => console.log('Timeout'), 0); \nPromise.resolve().then(() => console.log('Promise 2')); \nconsole.log('Sync');",
      answer: "Sync\nPromise 1\nPromise 2\nTimeout",
    },
    {
      question:
        "What is tail call optimization (TCO) and does JavaScript support it?",
      type: "theory",
      answer:
        "Tail call optimization (TCO) is an optimization technique where the last function call in a function is optimized to avoid adding a new stack frame, allowing for constant stack space usage. JavaScript ES6 includes support for tail call optimization, but it is not widely implemented in most JavaScript engines.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nfunction factorial(n, acc = 1) {\n  if (n <= 1) return acc;\n  return factorial(n - 1, n * acc);\n}\nconsole.log(factorial(5));\n```",
      type: "output",
      code: "function factorial(n, acc = 1) {\n  if (n <= 1) return acc;\n  return factorial(n - 1, n * acc);\n}\nconsole.log(factorial(5));",
      answer: "120",
    },
    {
      question:
        "Explain the concept of an abstract syntax tree (AST) and its role in JavaScript engines.",
      type: "theory",
      answer:
        "An abstract syntax tree (AST) is a tree representation of the abstract syntactic structure of source code. Each node in the tree denotes a construct occurring in the source code. JavaScript engines use ASTs to parse and understand the code, perform optimizations, and generate executable instructions.",
    },
  ],
};

export const cpp_data = {
  title: "JavaScript",
  logo: "/images/cpp.png",
  relative_path: "javascript",
  beginner: [
    {
      question:
        "What is the difference between `let`, `const`, and `var` in JavaScript?",
      type: "theory",
      answer:
        "var is function-scoped, let and const are block-scoped. var declarations are hoisted, let and const declarations are not. const requires an initializer and can't be reassigned.",
    },
    {
      question: "Explain the concept of closures in JavaScript.",
      type: "theory",
      answer:
        "A closure is a function that retains access to its outer scope, even after the outer function has finished executing. This allows the inner function to access variables from the outer function's scope.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nconsole.log(typeof null);\n```",
      type: "output",
      code: "console.log(typeof null);",
      answer: "object",
    },
    {
      question: "What are Promises in JavaScript and why are they used?",
      type: "theory",
      answer:
        "Promises are objects representing the eventual completion or failure of an asynchronous operation. They are used to handle asynchronous operations more effectively and avoid callback hell.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nconst foo = [];\nfoo.push(1);\nfoo.push(2);\nfoo = [3, 4];\n```",
      type: "output",
      code: "const foo = [];\nfoo.push(1);\nfoo.push(2);\nfoo = [3, 4];",
      answer: "TypeError: Assignment to constant variable.",
    },
    {
      question: "Explain the concept of 'this' keyword in JavaScript.",
      type: "theory",
      answer:
        "The 'this' keyword refers to the object that is currently executing the function. Its value depends on how the function is called. In a method, it refers to the object, in a function, it refers to the global object (or undefined in strict mode).",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nconsole.log(0.1 + 0.2 == 0.3);\n```",
      type: "output",
      code: "console.log(0.1 + 0.2 == 0.3);",
      answer: "false",
    },
    {
      question: "What is event delegation in JavaScript?",
      type: "theory",
      answer:
        "Event delegation is a technique where a single event listener is added to a parent element to manage events for its child elements. It uses event bubbling to catch events from child elements and handle them at a higher level.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nlet a = 10;\nfunction foo() {\n  console.log(a);\n  let a = 20;\n}\nfoo();\n```",
      type: "output",
      code: "let a = 10;\nfunction foo() {\n  console.log(a);\n  let a = 20;\n}\nfoo();",
      answer: "ReferenceError: Cannot access 'a' before initialization",
    },
    {
      question: "What is the purpose of the `Array.prototype.map` method?",
      type: "theory",
      answer:
        "The `map` method creates a new array populated with the results of calling a provided function on every element in the calling array.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nconsole.log([1, 2, 3] + [4, 5, 6]);\n```",
      type: "output",
      code: "console.log([1, 2, 3] + [4, 5, 6]);",
      answer: "1,2,34,5,6",
    },
    {
      question: "Explain the difference between `==` and `===` in JavaScript.",
      type: "theory",
      answer:
        "`==` is the equality operator that performs type coercion, while `===` is the strict equality operator that does not perform type coercion and requires both values to be of the same type.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nconst arr = [1, 2, 3];\nconst [a, b, c] = arr;\nconsole.log(a, b, c);\n```",
      type: "output",
      code: "const arr = [1, 2, 3];\nconst [a, b, c] = arr;\nconsole.log(a, b, c);",
      answer: "1 2 3",
    },
    {
      question:
        "What are arrow functions and how do they differ from regular functions?",
      type: "theory",
      answer:
        "Arrow functions are a concise syntax for writing functions introduced in ES6. They differ from regular functions in that they do not have their own `this` binding and cannot be used as constructors.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nfunction foo() {\n  return\n  {\n    message: 'Hello'\n  };\n}\nconsole.log(foo());\n```",
      type: "output",
      code: "function foo() {\n  return\n  {\n    message: 'Hello'\n  };\n}\nconsole.log(foo());",
      answer: "undefined",
    },
    {
      question: "What is the purpose of `Array.prototype.reduce` method?",
      type: "theory",
      answer:
        "The `reduce` method executes a reducer function on each element of the array, resulting in a single output value. It is used to accumulate values from an array into a single result.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nconsole.log(typeof NaN);\n```",
      type: "output",
      code: "console.log(typeof NaN);",
      answer: "number",
    },
    {
      question: "What are template literals in JavaScript?",
      type: "theory",
      answer:
        "Template literals are string literals allowing embedded expressions. They are enclosed by backticks (` `) and can contain placeholders indicated by the `${expression}` syntax.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nconsole.log('5' - 3);\n```",
      type: "output",
      code: "console.log('5' - 3);",
      answer: "2",
    },
    {
      question:
        "What is the difference between `null` and `undefined` in JavaScript?",
      type: "theory",
      answer:
        "`undefined` means a variable has been declared but not assigned a value, while `null` is an assignment value that represents no value.",
    },
  ],
  intermediate: [
    {
      question:
        "What is the difference between `call`, `apply`, and `bind` methods in JavaScript?",
      type: "theory",
      answer:
        "`call` and `apply` are used to invoke functions with a specific `this` value and arguments. `call` accepts a list of arguments, while `apply` accepts an array of arguments. `bind` returns a new function with a specified `this` value and optionally pre-filled arguments.",
    },
    {
      question: "Explain prototypal inheritance in JavaScript.",
      type: "theory",
      answer:
        "Prototypal inheritance is a feature in JavaScript where objects can inherit properties and methods from other objects. This is achieved through the prototype chain, where objects have an internal link to another object called a prototype.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nconsole.log(1 + '1');\nconsole.log(1 - '1');\n```",
      type: "output",
      code: "console.log(1 + '1');\nconsole.log(1 - '1');",
      answer: "11\n0",
    },
    {
      question:
        "What is the difference between synchronous and asynchronous code in JavaScript?",
      type: "theory",
      answer:
        "Synchronous code is executed sequentially, blocking subsequent code until the current task completes. Asynchronous code allows other code to run while waiting for the asynchronous task to complete, often using callbacks, promises, or async/await.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nlet a = { x: 1 };\nlet b = a;\nb.x = 2;\nconsole.log(a.x);\n```",
      type: "output",
      code: "let a = { x: 1 };\nlet b = a;\nb.x = 2;\nconsole.log(a.x);",
      answer: "2",
    },
    {
      question: "What is the Event Loop in JavaScript?",
      type: "theory",
      answer:
        "The Event Loop is a mechanism in JavaScript that handles asynchronous callbacks. It continuously checks the call stack and the task queue, pushing tasks from the queue to the stack when the stack is empty.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nfor (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1000);\n}\n```",
      type: "output",
      code: "for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1000);\n}\n",
      answer: "3\n3\n3",
    },
    {
      question: "What is a higher-order function in JavaScript?",
      type: "theory",
      answer:
        "A higher-order function is a function that can take another function as an argument, return a function, or both. Examples include `map`, `filter`, and `reduce`.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nlet a = 10;\n(function() {\n  console.log(a);\n  a = 20;\n  console.log(a);\n  var a = 30;\n  console.log(a);\n})();\n```",
      type: "output",
      code: "let a = 10;\n(function() {\n  console.log(a);\n  a = 20;\n  console.log(a);\n  var a = 30;\n  console.log(a);\n})();",
      answer: "undefined\n20\n30",
    },
    {
      question: "What is the `this` keyword and how does it work?",
      type: "theory",
      answer:
        "`this` refers to the object that is currently executing the function. Its value is determined by how the function is called. In a method, `this` refers to the object the method is called on. In a constructor, `this` refers to the newly created instance. In an event, `this` refers to the element that received the event.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nconst arr = [10, 20, 30];\nconst [a, , c] = arr;\nconsole.log(a, c);\n```",
      type: "output",
      code: "const arr = [10, 20, 30];\nconst [a, , c] = arr;\nconsole.log(a, c);",
      answer: "10 30",
    },
    {
      question: "Explain the concept of promises in JavaScript.",
      type: "theory",
      answer:
        "A promise is an object representing the eventual completion or failure of an asynchronous operation. It can be in one of three states: pending, fulfilled, or rejected. Promises provide `then` and `catch` methods to handle asynchronous results.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nconst obj = { a: 1, b: 2 };\nconst newObj = { ...obj, b: 3 };\nconsole.log(newObj);\n```",
      type: "output",
      code: "const obj = { a: 1, b: 2 };\nconst newObj = { ...obj, b: 3 };\nconsole.log(newObj);",
      answer: "{ a: 1, b: 3 }",
    },
    {
      question:
        "What is the difference between `Array.prototype.map` and `Array.prototype.forEach`?",
      type: "theory",
      answer:
        "`map` creates a new array with the results of calling a provided function on every element in the calling array, whereas `forEach` executes a provided function once for each array element but does not return a new array.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nconst obj = { a: 1 };\nObject.freeze(obj);\nobj.a = 2;\nconsole.log(obj.a);\n```",
      type: "output",
      code: "const obj = { a: 1 };\nObject.freeze(obj);\nobj.a = 2;\nconsole.log(obj.a);",
      answer: "1",
    },
    {
      question:
        "Explain the difference between `Object.seal` and `Object.freeze`.",
      type: "theory",
      answer:
        "`Object.seal` prevents new properties from being added and marks all existing properties as non-configurable. Existing properties can still be modified. `Object.freeze` goes a step further and prevents any modifications to existing properties (i.e., making them non-writable).",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nconst person = { name: 'Alice' };\nconst greeting = `Hello, ${person.name}!`;\nconsole.log(greeting);\n```",
      type: "output",
      code: "const person = { name: 'Alice' };\nconst greeting = `Hello, ${person.name}!`;\nconsole.log(greeting);",
      answer: "Hello, Alice!",
    },
    {
      question: "What are generators in JavaScript?",
      type: "theory",
      answer:
        "Generators are functions that can be paused and resumed. They are defined using the `function*` syntax and use the `yield` keyword to return a value and pause execution. They return an iterator object.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nconst arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\nconst combined = [...arr1, ...arr2];\nconsole.log(combined);\n```",
      type: "output",
      code: "const arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\nconst combined = [...arr1, ...arr2];\nconsole.log(combined);",
      answer: "[1, 2, 3, 4, 5, 6]",
    },
    {
      question: "What is the purpose of the `await` keyword in JavaScript?",
      type: "theory",
      answer:
        "The `await` keyword is used inside an `async` function to pause the execution of the function until the promise is resolved. It makes asynchronous code appear synchronous and helps to write cleaner and more readable asynchronous code.",
    },
  ],
  advance: [
    {
      question:
        "Explain the concept of the JavaScript event loop and how it handles asynchronous operations.",
      type: "theory",
      answer:
        "The JavaScript event loop is responsible for executing code, collecting and processing events, and executing queued sub-tasks. The event loop continuously checks the call stack to see if there’s any function that needs to run. If the call stack is empty, it checks the task queue to see if there are any pending tasks (callbacks or asynchronous operations) waiting to be executed.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\n(async () => {\n  console.log('Start');\n  await new Promise(resolve => setTimeout(resolve, 1000));\n  console.log('End');\n})();\nconsole.log('Middle');\n```",
      type: "output",
      code: "(async () => {\n  console.log('Start');\n  await new Promise(resolve => setTimeout(resolve, 1000));\n  console.log('End');\n})();\nconsole.log('Middle');",
      answer: "Start\nMiddle\nEnd",
    },
    {
      question: "What are weak maps and weak sets in JavaScript?",
      type: "theory",
      answer:
        "WeakMaps and WeakSets are collections that hold weak references to their keys (in the case of WeakMap) or values (in the case of WeakSet). This means that the references do not prevent garbage collection if there are no other references to the object, allowing for better memory management.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nconst obj1 = { key: 'value' };\nconst obj2 = { key: 'value' };\nconst map = new Map();\nmap.set(obj1, 'obj1');\nmap.set(obj2, 'obj2');\nconsole.log(map.get(obj1));\nconsole.log(map.get(obj2));\n```",
      type: "output",
      code: "const obj1 = { key: 'value' };\nconst obj2 = { key: 'value' };\nconst map = new Map();\nmap.set(obj1, 'obj1');\nmap.set(obj2, 'obj2');\nconsole.log(map.get(obj1));\nconsole.log(map.get(obj2));",
      answer: "obj1\nobj2",
    },
    {
      question:
        "Explain the difference between shallow copy and deep copy in JavaScript.",
      type: "theory",
      answer:
        "A shallow copy creates a new object, but it does not create copies of nested objects. Instead, it copies references to the original objects. A deep copy, on the other hand, creates a new object and recursively copies all nested objects, ensuring that there are no shared references between the original and the copy.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nconst a = [1, [2, 3]];\nconst b = [...a];\nb[1][0] = 42;\nconsole.log(a[1][0]);\n```",
      type: "output",
      code: "const a = [1, [2, 3]];\nconst b = [...a];\nb[1][0] = 42;\nconsole.log(a[1][0]);",
      answer: "42",
    },
    {
      question: "What is the purpose of the `Reflect` API in JavaScript?",
      type: "theory",
      answer:
        "The `Reflect` API is a built-in object that provides methods for interceptable JavaScript operations. It is similar to the `Object` API but includes methods for fundamental language operations, such as property manipulation, function invocation, and object creation. These methods provide a way to perform operations that are also interceptable by proxy handlers.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nconst handler = {\n  get: (obj, prop) => prop in obj ? obj[prop] : 37\n};\nconst p = new Proxy({}, handler);\np.a = 1;\np.b = undefined;\nconsole.log(p.a);\nconsole.log(p.b);\nconsole.log(p.c);\n```",
      type: "output",
      code: "const handler = {\n  get: (obj, prop) => prop in obj ? obj[prop] : 37\n};\nconst p = new Proxy({}, handler);\np.a = 1;\np.b = undefined;\nconsole.log(p.a);\nconsole.log(p.b);\nconsole.log(p.c);",
      answer: "1\nundefined\n37",
    },
    {
      question: "Explain the concept of currying in JavaScript.",
      type: "theory",
      answer:
        "Currying is a functional programming technique in which a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. It allows for partial application of functions, where some arguments can be fixed in advance and the resulting function can be called with the remaining arguments later.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nfunction curry(f) {\n  return function(a) {\n    return function(b) {\n      return f(a, b);\n    };\n  };\n}\nfunction sum(a, b) {\n  return a + b;\n}\nconst curriedSum = curry(sum);\nconsole.log(curriedSum(1)(2));\n```",
      type: "output",
      code: "function curry(f) {\n  return function(a) {\n    return function(b) {\n      return f(a, b);\n    };\n  };\n}\nfunction sum(a, b) {\n  return a + b;\n}\nconst curriedSum = curry(sum);\nconsole.log(curriedSum(1)(2));",
      answer: "3",
    },
    {
      question:
        "What is memoization and how can it be implemented in JavaScript?",
      type: "theory",
      answer:
        "Memoization is an optimization technique that caches the results of expensive function calls and returns the cached result when the same inputs occur again. In JavaScript, it can be implemented using a closure to store the results in an object or a Map.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nfunction memoize(fn) {\n  const cache = {};\n  return function(...args) {\n    const key = JSON.stringify(args);\n    if (cache[key]) {\n      return cache[key];\n    } else {\n      const result = fn(...args);\n      cache[key] = result;\n      return result;\n    }\n  };\n}\nconst factorial = memoize(function(n) {\n  if (n === 0) return 1;\n  return n * factorial(n - 1);\n});\nconsole.log(factorial(5));\nconsole.log(factorial(6));\n```",
      type: "output",
      code: "function memoize(fn) {\n  const cache = {};\n  return function(...args) {\n    const key = JSON.stringify(args);\n    if (cache[key]) {\n      return cache[key];\n    } else {\n      const result = fn(...args);\n      cache[key] = result;\n      return result;\n    }\n  };\n}\nconst factorial = memoize(function(n) {\n  if (n === 0) return 1;\n  return n * factorial(n - 1);\n});\nconsole.log(factorial(5));\nconsole.log(factorial(6));",
      answer: "120\n720",
    },
    {
      question: "What are generator functions and how do they work?",
      type: "theory",
      answer:
        "Generator functions are a special type of function that can pause execution and resume later. They are defined using the `function*` syntax and use the `yield` keyword to return a value and pause execution. Calling a generator function does not execute its body immediately; instead, it returns an iterator. The `next` method of this iterator resumes the function's execution until the next `yield` or `return` statement.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nfunction* gen() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\nconst g = gen();\nconsole.log(g.next().value);\nconsole.log(g.next().value);\nconsole.log(g.next().value);\n```",
      type: "output",
      code: "function* gen() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\nconst g = gen();\nconsole.log(g.next().value);\nconsole.log(g.next().value);\nconsole.log(g.next().value);",
      answer: "1\n2\n3",
    },
    {
      question:
        "What is a Proxy object in JavaScript and what are its use cases?",
      type: "theory",
      answer:
        "A Proxy object in JavaScript allows you to create an intermediary that intercepts and customizes operations performed on target objects. Proxies can be used for logging, validation, formatting, or to implement objects with advanced behavior, such as negative array indices.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nconst target = {};\nconst handler = {\n  get: function(obj, prop) {\n    return prop in obj ? obj[prop] : 'default';\n  }\n};\nconst proxy = new Proxy(target, handler);\nconsole.log(proxy.nonExistentProperty);\n```",
      type: "output",
      code: "const target = {};\nconst handler = {\n  get: function(obj, prop) {\n    return prop in obj ? obj[prop] : 'default';\n  }\n};\nconst proxy = new Proxy(target, handler);\nconsole.log(proxy.nonExistentProperty);",
      answer: "default",
    },
    {
      question: "Explain the concept of a monad in JavaScript.",
      type: "theory",
      answer:
        "A monad is a design pattern used in functional programming to handle program-wide concerns such as state or I/O in a functional way. It encapsulates values and computation within a context, providing operations to chain functions while maintaining the context. JavaScript's Promise is an example of a monad, encapsulating asynchronous computation.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nPromise.resolve().then(() => console.log('Promise 1')); \nsetTimeout(() => console.log('Timeout'), 0); \nPromise.resolve().then(() => console.log('Promise 2')); \nconsole.log('Sync');\n```",
      type: "output",
      code: "Promise.resolve().then(() => console.log('Promise 1')); \nsetTimeout(() => console.log('Timeout'), 0); \nPromise.resolve().then(() => console.log('Promise 2')); \nconsole.log('Sync');",
      answer: "Sync\nPromise 1\nPromise 2\nTimeout",
    },
    {
      question:
        "What is tail call optimization (TCO) and does JavaScript support it?",
      type: "theory",
      answer:
        "Tail call optimization (TCO) is an optimization technique where the last function call in a function is optimized to avoid adding a new stack frame, allowing for constant stack space usage. JavaScript ES6 includes support for tail call optimization, but it is not widely implemented in most JavaScript engines.",
    },
    {
      question:
        "What will be the output of the following code?\n```javascript\nfunction factorial(n, acc = 1) {\n  if (n <= 1) return acc;\n  return factorial(n - 1, n * acc);\n}\nconsole.log(factorial(5));\n```",
      type: "output",
      code: "function factorial(n, acc = 1) {\n  if (n <= 1) return acc;\n  return factorial(n - 1, n * acc);\n}\nconsole.log(factorial(5));",
      answer: "120",
    },
    {
      question:
        "Explain the concept of an abstract syntax tree (AST) and its role in JavaScript engines.",
      type: "theory",
      answer:
        "An abstract syntax tree (AST) is a tree representation of the abstract syntactic structure of source code. Each node in the tree denotes a construct occurring in the source code. JavaScript engines use ASTs to parse and understand the code, perform optimizations, and generate executable instructions.",
    },
  ],
};

export const topics = [
  {
    id: 1,
    title: "JavaScript",
    slug: "javascript",
    topicData: js_data,
    levels: ["Beginner", "Intermediate", "Advanced"],
    image: "/images/js.webp",
  },
  {
    id: 2,
    title: "C++",
    slug: "cpp",
    topicData: cpp_data,
    levels: ["Beginner", "Intermediate", "Advanced"],
    image: "/images/cpp.png",
  },
  {
    id: 3,
    title: "Java",
    slug: "java",
    topicData: cpp_data,
    levels: ["Beginner", "Intermediate", "Advanced"],
    image: "/images/java.webp",
  },
  {
    id: 4,
    title: "Python",
    slug: "python",
    topicData: cpp_data,
    levels: ["Beginner", "Intermediate", "Advanced"],
    image: "/images/python.png",
  },
  {
    id: 5,
    title: "Golang",
    slug: "golang",
    topicData: cpp_data,
    levels: ["Beginner", "Intermediate", "Advanced"],
    image: "/images/go.png",
  },
];