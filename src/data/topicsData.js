const topicsData = [
  {
    id: "react",
    title: "React",
    theory:  `## **What is React?**  
- React is a JavaScript library created by Facebook for building user interfaces (UIs).  
- It helps you build fast and interactive websites and apps.  
- Uses a component-based structure → UI is divided into small, reusable pieces.  
- Uses a **Virtual DOM** → updates only the parts of the page that change (not the whole page).  
- This makes React applications faster and more efficient than traditional websites.  
`.trim(),
    
code: `// This is how you write comments inside jsx but this wont work under return jsx block or you can say jsx markup the double slash will through error
{/*this is how you write comments inside return block or jsx markup*/}
//while using simple javascript you can use (/*...*/) to write comments.

//Web Fundamentals (Quick Review)
//Before diving deep into React, you need solid HTML, CSS, and JavaScript basics.
//HTML5: Semantic tags, forms, tables, media.
//CSS3: Flexbox, Grid, Responsive design, animations.
//JavaScript: Variables, functions, DOM manipulation, ES6+ features.
//📌 Practical: Build a simple responsive website without React.

//📚 Lesson 1 — React Basics
//1. What is React?
//React is a JavaScript library for building user interfaces (UI).
//It is component-based — you build small reusable parts and combine them.
//It updates only what’s needed in the UI using the Virtual DOM (fast performance).
//Example:
//Instead of refreshing the whole page when a button is clicked, React updates only the part that changed.


//2. Setting Up a React Project
//We’ll use Vite (faster than Create React App).

//# Create project
//npm create vite@latest

// # Project name
//  my-app, you can also write project name in the above step while creating the project

//# Choose:
//# ✔ Framework: React
//# ✔ Variant: JavaScript

//# Go inside folder
//cd my-app

//# Install dependencies
//npm install

//# Run project
//npm run dev
 function App() {
  return <h1>Hello, React!</h1>;
  }
  render(<App />);`
  },

  {
    id: "jsx-components",
    title: "JSX & Components",
    theory: `### **What is JSX (JavaScript XML)?**
- A syntax that lets you write HTML inside JavaScript.  
- Looks like HTML but is actually JavaScript under the hood.  
- Makes UI code more readable.  


---

### **What are Components?**
- A Component in React is like a small building block of your website or app.  
- Think of them like *LEGO pieces 🧩* → You can create small pieces (components) and then join them together to build a big thing (your app).  
- Each component is a reusable piece of code that can show something on the screen (like a button, a navbar, or a form).  
- Components make your code organized, reusable, and easy to manage.  


---

### **Types of Components**

There are *two* types of components:  

**1. Functional Components**  
   - Written as functions.  
   - **Example:**  
     function Hello() {  
       return <h1>Hello World!</h1>;  
     }  
    

**2. Class Components** (older way, not used much now) 
   - Written as classes.  
   - **Example:**  
     class Hello extends React.Component {  
       render() {  
         return <h1>Hello World!</h1>;  
       }  
     }  



`,
    code: `
// Components
//Components are reusable pieces of UI.
//They can be functional or class-based.
//Functional components are simpler and recommended for most cases.
//it should always start with a capital letter.

//Example of a functional component:
//import React from 'react';
//function MyComponent() {
   // return <h1>Hello, World!</h1>;
//}
//export default MyComponent;

//To use a component, import it and include it in JSX:
//import MyComponent from './MyComponent';

// Understanding JSX
//JSX: JavaScript + XML/HTML syntax.
//You can write HTML inside JavaScript functions.

//below is a simple example of JSX and component as a live code you can see it will render a simple h1 element with text inside it, also you have to use (export deafult componenet name) while working with react, I have used render here due to SOME LIMITATIONS OF THE LIVE CODING ENVIRONMENT, for instance you should use export default Hello; in a real React project, instead of render(Hello />)

function Hello() {
  return (
  <h1>Hello, JSX and Components!</h1>
  )
}
render(<Hello />);

 //Rules of JSX:
//It IS MANDATORY To Return atleast one parent element which can be h1 here to add more elements you can use a fragment or a div.
//Close all tags (<Hello /> not <Hello>).
//for practice you can add more elements like h2 etc..., click on run and check if its throws an error, to resolve the error wrap it into div such that <div></div> or an empty fragment such that <></> then you can add multiple elements to your return block.  
//Example
//function Hello() {
  //return (
  //<div>
  //<h1>Hello, JSX and Components!</h1>
  //<h1>Hello, JSX and Components!</h1>
  //</div>
  //)
//}
//render(<Hello />);
//OR
//function Hello() {
  //return (
  //<>
  //<h1>Hello, JSX and Components!</h1>
  //<h1>Hello, JSX and Components!</h1>
  //</>
  //)
//}
//render(<Hello />);

`.trim()
  },
  {
    id: "props-state",
    title: "Props & State",
    theory: `## **Props in React** 
- Short for Properties → like arguments you pass into a function.  
- Used to send data from a **parent component → child component** (Parent is like the giver, child is like the receiver).  
- Read-only → the child cannot change props, it can only use them.  
- Think of props as inputs or gifts a parent gives to a child component.  
- Makes components reusable, because the same child can display different data depending on what the parent sends.  

---

## **State in React**
- *State* = a component’s personal data storage → it belongs to the component itself.  
- Unlike props, state can change inside the component.  
- When state changes → React automatically re-renders the UI.  
- Think of state as the child’s own snack box → the child can add, remove, or change what’s inside anytime.  
- State is perfect for things like counters, toggles, forms, or any interactive data that changes over time.  
`,
    code: `
// Greeting component:
// - This is a functional component that takes 'props' as input.
// - Props are used to pass data from parent to child components.
// - Here we use 'props.name' to display a dynamic name inside the heading.
function Greeting(props) {
  return(
  <h2>Hello, {props.name}!</h2>
  ) // Display the name passed via props
}

// Counter component:
// - This component demonstrates state management in React using useState.
// - useState allows the component to keep track of data (here 'count') and update it dynamically.
function Counter() {
  const [count, setCount] = React.useState(0); 
  // 'count' is the state variable (initial value 0)
  // 'setCount' is the function used to update 'count'

  return (
    <div>
      <Greeting name="User" /> 
      {/* Render the Greeting component and pass the prop 'name' with value "User" */}
      
      <p>Count: {count}</p> 
      {/* Display the current value of the count state */}
      
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button> 
      {/* Button with an onClick event handler
          - When clicked, calls setCount to increase the count by 1
          - This triggers a re-render and updates the displayed count */}
    </div>
  );
}

// Render the Counter component:
// - This line mounts the Counter component into the DOM so it becomes visible on the page.
render(<Counter />);

//click the increment in the OUTPUT to see the count increasing by 1 on each click.
// practice by changing the name prop value to your name and see the changes in the output.

    `.trim()
  },
  {
    id: "event-handling",
    title: "Event Handling",
    theory: `## **Event Handling in React**  
- *Events = actions triggered by the user* → like clicking a button, typing in a field, hovering, or submitting a form.  
- React uses **camelCase** for event names (e.g., onClick, onChange) instead of lowercase like HTML (onclick).  
- Functions handle events → you write a function and tell React to run it when the event happens.  
- No parentheses when passing the function in JSX → \`onClick={handleClick}\`  
  - React will call it only when the event happens.  
- Event handling in React works a bit differently than plain HTML/JS because of the Virtual DOM.  
- You can also pass arguments to event handler functions if needed.    `,
    code: `
// ClickMe component:
// - This is a functional component that demonstrates event handling in React.
function ClickMe() {
  // handleClick function:
  // - This function runs when the button is clicked.
  // - It shows an alert message saying "Button clicked!".
  const handleClick = () => {
    alert('Button clicked!');
  };

  // Return JSX:
  // - Render a button element.
  // - onClick is a React event that triggers the handleClick function when the user clicks the button.
  return <button onClick={handleClick}>Click Me</button>;
}

// Render the ClickMe component:
// - Mounts the ClickMe component into the DOM so it becomes visible on the page.
render(<ClickMe />);

// Try clicking the "Click Me" button in the output to see the alert message.
//practice by changing the alert message to something else.

    `.trim()
  },
  {
    id: "react-hooks",
    title: "React Hooks",
    theory: `## **React Hooks**  
- Hooks are special functions in React that let you *“hook into”* React features (like state and lifecycle) without writing class components.  
- Introduced in React 16.8 → made functional components more powerful.  
- Only work in functional components (not in class components).  
- Hooks always start with use → e.g., \`useState\`, \`useEffect\`.  

### **🔹 Most Common Hooks:** 
- **useState** → Lets a component store and update state.  
   Example: \`const [count, setCount] = useState(0);\`  
- **useEffect** → Runs code at specific points (mount, update, unmount).  
   Example: fetching data after component loads.  
- **useContext** → Shares data without passing props manually through every level.  
- **useRef** → Access DOM elements directly or store values that don’t trigger re-render.  
- **useReducer** → Manages complex state logic, an alternative to useState.  

### 🔹 Why Hooks Are Useful:  
- Makes functional components powerful (no need for classes).  
- Helps reuse logic between components.  
- Simplifies state management and side effects.  
- Keeps code clean and easier to read. `,  

code:`// Timer component:
// - This functional component demonstrates useState and useEffect hooks in React.
// - It keeps track of time in seconds and updates every second.
function Timer() {
  // useState hook:
  // - Declare a state variable 'seconds' with initial value 0.
  // - 'setSeconds' is used to update the value of 'seconds'.
  const [seconds, setSeconds] = React.useState(0);

  // useEffect hook:
  // - Runs after the component renders.
  // - Here we use it to create a timer that updates every second.
  React.useEffect(() => {
    // setInterval:
    // - Calls a function every 1000 milliseconds (1 second).
    // - Updates 'seconds' state by adding 1 each time.
    const interval = setInterval(() => {
      setSeconds(s => s + 1); // Functional update ensures latest state is used
    }, 1000);

    // Cleanup function:
    // - Clears the interval when the component is unmounted to avoid memory leaks.
    return () => clearInterval(interval);
  }, []); // Empty dependency array: run effect only once when component mounts

  // Return JSX:
  // - Display the current number of seconds passed.
  return <p>Seconds passed: {seconds}</p>;
}

// Render the Timer component:
// - Mounts the Timer component into the DOM so it becomes visible on the page.
render(<Timer />);
// Try waiting and see the seconds count increase every second in the output.
// Practice by changing the interval time or adding a reset button.

    `.trim()
  },
   {
    id: "mapping",
    title: "Mapping & Lists",
    theory: `## **Mapping in React**  
- Mapping = displaying a list of items dynamically in your UI.  
- In React, we use JavaScript’s **.map() function** to loop through arrays and render components for each item.  
---
## *Useful for things like:* 
  - Lists of users
  - Products  
  - Posts  
  - Menu items 
  ---
 Each item must have a **unique key prop** → helps React track changes efficiently.  
`,
    code: `
// ListMapping component:
// - Demonstrates how to render a list of items in React using the map() function.
function ListMapping() {
  // fruits array:
  // - This is a simple array of fruit names.
  const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];

  // Return JSX:
  // - Render an unordered list <ul>.
  // - Use map() to loop through each fruit and create a <li> (list item).
  // - 'key' is required by React for each list item to uniquely identify it.
  //   Here we use 'index' as the key (not always best for dynamic lists, 
  //   but fine for simple static arrays like this).
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

// Render the ListMapping component:
// - Displays the list of fruits on the screen.
render(<ListMapping />);
// Try adding more fruits to the array and see them appear in the output.
// Practice by changing the fruit names or adding more items to the array.

`.trim()
  },
  {
    id: "react-routing",
    title: "React Routing",
    theory: `## **Routing in React**  
- *Routing* = showing different pages/components based on the URL.  
- In React, everything is a component, so routing decides which component to show.  
- React doesn’t have built-in routing → we use the React Router library.  
- Routes make your app feel like a multi-page website while still being a single-page app (SPA).  

## 🔹 Key Concepts  
- **BrowserRouter** → Wraps your app and enables routing.  
- **Routes** → Container that holds all your route definitions.  
- **Route** → Defines a path → component mapping.  
- **Link** → Used to navigate between routes without reloading the page.    `,
    code: `
/*
  ================================
  🚀 React Routing Explained
  ================================
  
✅ In this example, we are "simulating" routing using React state.
  
👉 Why simulation?
In this live preview environment, we cannot directly use 
the "react-router-dom" library because of technical restrictions.So we’ll mimic how routing works.

✅ How real routing works:
- <BrowserRouter> wraps the entire app
- <Routes> contain multiple <Route path="..."> elements
- <Link> or <NavLink> are used to navigate
- The browser URL also updates with the route

  ⚠️ Restriction here:
     - The URL will NOT change
     - Navigation is handled only by state

What is a URL?

URL = Uniform Resource Locator → the "address" of a page on the web.
Example: https://shop.example.com/products/42?color=red#reviews

👉 In React Router:
- "/" → Home page
- "/about" → About page
- "/contact" → Contact page

⚠️ But in THIS demo, since we only use state, the URL bar 
will NOT change. Navigation is fake (just for learning).
*/


// A simple component for Home Page
function Home() {
  return <h2>🏠 Home Page</h2>;
}

// A simple component for About Page
function About() {
  return <h2>ℹ️ About Page</h2>;
}

// Main App Component
function App() {
  // We store the current page in state
  const [page, setPage] = React.useState("home");

  return (
    <>
      {/* Navigation - instead of <Link>, we use buttons here */}
      <nav>
        {/* On button click, we set "page" state */}
        <button onClick={() => setPage("home")}>Home</button>

        <button onClick={() => setPage("about")}> About</button>
      </nav>

      {/* Conditional Rendering: 
          Only show the component that matches "page" */}
      {page === "home" && <Home />}
      {page === "about" && <About />}
    </>
  );
}

// Render App
render(<App />);

/*
  ================================
  📝 How REAL Routing Works
  ================================

In a real React project with "react-router-dom":

  1. Install it:
     npm install react-router-dom

  2. Example:

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

     export default function App() {
       return (
         <BrowserRouter>
           <nav>
             <Link to="/">Home</Link>
             <Link to="/about">About</Link>
             <Link to="/contact">Contact</Link>
           </nav>

           <Routes>
             <Route path="/" element={<h2>Home Page</h2>} />
             <Route path="/about" element={<h2>About Page</h2>} />
             <Route path="/contact" element={<h2>Contact Page</h2>} />
           </Routes>
         </BrowserRouter>
       );
     }

 In real routing:
- The URL bar updates ("/about", "/contact", etc.)
- You can refresh the page and still land on the correct route
- Navigation is handled by React Router instead of just state
*/


   
`.trim()
  },
  {
    id: "api-integration",
    title: "API Integration",
    theory: `## **API Integration in React**  

*API* = Application Programming Interface → a way for your app to get or send data from a server.  

- In React, API integration means:  
  - Fetching data (e.g., users, posts, weather info) and showing it in your components.  
  - Sending data to APIs (e.g., forms, updates).  

### 🔹 Common Methods  
- **Fetch API** → built into browsers.  
- **Axios** → popular library, easier syntax and extra features.  

### 🔹 Steps to Integrate an API (with Axios):  
1. **Install Axios** → npm install axios
2. **Use useEffect** → to fetch data when the component loads.  
3. **Store data in state** → useState to save API response.  
4. **Render data** in your component.  
`,
    code: `
// Users component:
// - Demonstrates fetching data from an API, using state, useEffect, and conditional rendering.
function Users() {
  // useState hooks:
  // - 'users' stores the list of users fetched from the API.
  // - 'loading' tracks whether the data is still being fetched.
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  // useEffect hook:
  // - Runs once after the component mounts to fetch data from the API.
  React.useEffect(() => {
    // fetch API data:
    // - Sends a GET request to the given URL.
    // - Converts the response to JSON.
    // - Updates 'users' state with the received data.
    // - Sets 'loading' to false to indicate data has loaded.
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []); // Empty array ensures this effect runs only once

  // Conditional rendering:
  // - If 'loading' is true, show a loading message.
  if (loading) return <p>Loading users...</p>;

  // Render JSX:
  // - Display the list of users using map().
  // - Each list item must have a unique 'key' prop to help React track elements.
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li> // Display user name
      ))}
    </ul>
  );
}

// Render the Users component:
// - Mounts the component into the DOM so the list of users is visible on the page.
render(<Users />);
// Try running the code to see the list of users fetched from the API.
// Practice by changing the API URL or displaying more user details.

    `.trim()
  },
  {
    id: "project-building-tips",
    title: "Project Building Tips",
    theory: `## **Project Building in React**  

Here are some useful tips to build React projects effectively:  

- **Plan your component hierarchy** 

 decide how components will be structured.  
- **Keep components small and reusable** 

easier to maintain and test.  
- **Use state and props effectively** 

pass data clearly between components.  
- **Use hooks** 

manage state and side-effects (like fetching data).  
- **Test components regularly** 

to catch bugs early.  
- **Use developer tools** 

e.g., React Developer Tools for debugging.  
- **Write clean and readable code**

improves collaboration and understanding.  
- **Use version control (Git)** 

track changes and collaborate easily.  `
    .trim(),
    code: `
function Tips() {
  return (
    <div>
      <h2>Project Building Tips</h2>
      <ul>
        <li>Plan your component hierarchy.</li>
        <li>Keep components small and reusable.</li>
        <li>Use state and props effectively.</li>
        <li>Use hooks for state and side-effects.</li>
        <li>Test components regularly.</li>
        <li>Use tools like React Developer Tools.</li>
        <li>Write clean and readable code.</li>
        <li>Use version control (Git).</li>
      </ul>
    </div>
  );
}

render(<Tips />);
// Practice by adding more tips or styling the list.
// You can also create a full project using these tips.
    `.trim()
  }
];

export default topicsData;
