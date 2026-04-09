import { useState } from "react";
function App() {
  const [Title, setTitle] = useState("");
  const [Details, setDetails] = useState("");

  const [Task, setTask] = useState([]);

  const Sumbit = (e) => {
    e.preventDefault();

    let copyTask = [...Task];
    copyTask.push({ Title, Details });
    setTask(copyTask);
    setTitle("");
    setDetails("");

  };

  const Delete =(idx)=>{
   const copyTask = [...Task]
   copyTask.splice(idx,1)
   setTask(copyTask)
  }
  return (
    <div className="h-screen lg:flex  bg-black text-white ">
      <form
        className="flex lg:w-1/2 flex-col gap-4 p-10   
        items-start"
        onSubmit={(e) => {
          Sumbit(e);
        }}
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>
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
        <button className="bg-white active:bg-green-700  text-black outline-none px-5 w-full   py-2 font-bold rounded">
          Add Notes
        </button>
      </form>
      <div className="  p-5 lg:w-1/2 lg:border-l-2 bg-gray-900">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap  items-start justify-start h-[90%] gap-5 mt-5 overflow-auto">
          {Task.map(function (ele, idx) {
            return (
              <div
                key={idx}
                className="h-52
         w-40 rounded-2xl bg-cover relative flex flex-col justify-between bg-[url('https://png.pngtree.com/png-clipart/20220909/original/pngtree-banana-yellow-paper-note-png-image_8515852.png')] p-4 "
              >
                <div >
                  <h3 className="leading-tight underline text-black text-xl ms-1 mt-7 font-bold ">
                    {ele.Title}
                  </h3>
                  <p className="leading-tight  font-medium text-gray-500 p-1 ms-1">
                    {ele.Details}
                  </p>
                </div>
                <button
                onClick={(idx)=>{
                  Delete(idx)
                }}
                 className="bg-black text-white rounded-full  ms-1 p-2 text-center active:bg-gray-600 cursor-pointer">Delete </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
