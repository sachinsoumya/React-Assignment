const heading = React.createElement(
  "h1",
  { id: "haeding", class: "Hello" },
  "Hello world Sachin"
);

const parent = React.createElement(
  "div",
  { id: "div" },
 [ React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", { id: "grand" }, "I am a h1 tag") , React.createElement("h2", { id: "grand" }, "I am a h2 tag")] 
  ) , React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", { id: "grand" }, "I am a h1 tag") , React.createElement("h2", { id: "grand" }, "I am a h2 tag")] 
)]
)

console.log(heading);
console.log(parent);

/* React.createElement(Object) => HTML Dom tree (Browser understands) */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

