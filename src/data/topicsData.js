const topicsData = [
  {
    id: "jsx-components",
    title: "JSX & Components",
    theory: "JSX allows you to write HTML-like syntax in JavaScript.. Components are reusable UI pieces.",
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


//3. Components
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

//4. Understanding JSX
//JSX: JavaScript + XML/HTML syntax.
//You can write HTML inside JavaScript functions.

//below is a simple example of JSX and component as a live code you can see it will render a simple h1 element with text inside it, also you have to use (export deafult componenet name) while working with react, I have used render here due to SOME LIMITATIONS OF THE LIVE CODING ENVIRONMENT, for instance you should use export default Hello; in a real React project, instead of render(Hello />)

function Hello() {
  return <h1>Hello, JSX and Components!</h1>;
}
render(<Hello />);

 //Rules of JSX:
//It IS MANDATORY To Return only one parent element which can be h1 here to add more elements you can use a fragment or a div.
//Close all tags (<Hello /> not <Hello>).
//for practice you can remove the div or fragment and see it will throw an error.  
`.trim()
  },
  {
    id: "props-state",
    title: "Props & State",
    theory: "Props are inputs to components. State holds dynamic data inside components.",
    code: `
function Greeting(props) {
  return <h2>Hello, {props.name}!</h2>;
}

function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <Greeting name="User" />
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

render(<Counter />);
    `.trim()
  },
  {
    id: "event-handling",
    title: "Event Handling",
    theory: "React uses camelCase for event handlers and functions to handle events.",
    code: `
function ClickMe() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return <button onClick={handleClick}>Click Me</button>;
}

render(<ClickMe />);
    `.trim()
  },
  {
    id: "react-hooks",
    title: "React Hooks",
    theory: "Hooks let you use state and lifecycle features in functional components.",
    code: `
function Timer() {
  const [seconds, setSeconds] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>Seconds passed: {seconds}</p>;
}

render(<Timer />);
    `.trim()
  },
  {
    id: "api-integration",
    title: "API Integration",
    theory: "Fetch data from APIs inside useEffect and display it in components.",
    code: `
function Users() {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading users...</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

render(<Users />);
    `.trim()
  },
  {
    id: "project-building-tips",
    title: "Project Building Tips",
    theory: "Here are some tips to build React projects: Plan your component hierarchy.. Keep components small and reusable. Use state and props effectively. Use hooks for state and side-effects. Test components regularly.  Use tools like React Developer Tools. Write clean and readable code. Use version control (Git)."
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
    `.trim()
  }
];

export default topicsData;
