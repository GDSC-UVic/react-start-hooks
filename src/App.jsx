import "./App.css";
// Step 1: import useRef from react
import { useRef, useState, useEffect } from "react";

function App() {
  // Step 2: create a ref for the amount of times the component renders
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  // Step 3: increment the ref every time the component renders
  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

export default App;
