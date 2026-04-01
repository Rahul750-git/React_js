import Card from "./component/card";
function App() {
  return (
    <>
      <h1
        className="bg-green-500 
      text-black text-3xl text-center p-4 
      rounded-lg w-75 ms-5 mt-5  mb-3 hover:bg-green-700 hover:text-white "
      >
        Tailwind test
      </h1>
      
      <Card username="John Doe" btn="Click Me" /> 
      <Card  username="Jane Smith"btn="Visit Profile"/>   
    </>
  );
}

export default App;
