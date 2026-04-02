function App() {
  function call() {
    alert("Button Clicked!");
  }

  return (
    <>
      <h1>Click Event Example</h1>
      <button onClick={call}>Click Me</button>
    </>
  );
}

export default App;
