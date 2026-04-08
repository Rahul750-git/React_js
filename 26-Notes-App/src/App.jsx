import { useState } from "react";

function App() {
  const [Title, setTitle] = useState("");
  const [Details, setDetails] = useState("");

  const Sumbit = (e) => {
    e.preventDefault();
    console.log("Form Sumbitted", Title);
    setTitle("");
  };
  return (
    <div className="h-screen lg:flex  bg-black text-white ">
      <form
    
        className="flex lg:w-1/2 flex-col gap-4 p-10   
        items-start"
        onSubmit={(e) => {
          Sumbit(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter Notes Heading"
          onChange={(ele) => {
            setTitle(ele.target.value);
          }}
          value={Title}
          className="px-5 py-2 font-medium outline-none border-2 rounded w-full "
        />
        <textarea
          type="text"
          placeholder="Enter Details"
          onChange={(val) => {
            setDetails(val.target.value);
          }}
          value={Details}
          className="px-5 py-2 h-20 font-medium border-2 outline-none rounded w-full   "
        />
        <button className="bg-white  text-black outline-none px-5 w-full   py-2 font-bold rounded">
          Add Notes
        </button>
      </form>
      <div className="  p-5 lg:w-1/2 border-l-2 bg-gray-900">
        <h1 className="text-3xl font-bold">Your Notes</h1>
        <div className="flex flex-wrap h-full gap-5 mt-5 overflow-auto">
          <div
            className="h-52
         w-40 rounded-2xl bg-white "
          ></div>
          <div
            className="h-52
         w-40 rounded-2xl bg-white "
          ></div>
          <div
            className="h-52
         w-40 rounded-2xl bg-white "
          ></div>
          <div
            className="h-52
         w-40 rounded-2xl bg-white "
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
