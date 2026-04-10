import axios from "axios";
import { useEffect, useState } from "react";
import { Loader } from "lucide-react";

function App() {
  const [UserData, setUserData] = useState([]);
  const GetData = async () => {
    //Data ko check karna
    // axios.post("https://picsum.photos/v2/list?page=2&limit=100",
    //   {Username:"Ram",Passward:'Ram@123'})

    // Data ko Update karta hai
    // axios.patch()

    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${Index}&limit=30`,
    );
    setUserData(response.data);
  };

  const [Index, setIndex] = useState(1);

  useEffect(() => {
    GetData();
  }, [Index]);

  let printUserdata = (
    <h3 className="text-gray-300 font-semibold text-lg -translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2">
      <h2 className="  flex items-center justify-center animate-spin ">
        <Loader />
      </h2>
      Loading...
    </h3>
  );

  if (UserData.length > 0) {
    printUserdata = UserData.map(function (ele, idx) {
      return (
        <div key={idx}>
          <a href={ele.download_url} target="_blank">
            <div className="h-40 w-44 overflow-hidden rounded-xl">
              <img
                className="h-full w-full object-cover"
                src={ele.download_url}
              />
            </div>
            <h2 className="font-bold ">{ele.author}</h2>
          </a>
        </div>
      );
    });
  }

  return (
    <div className="bg-black text-white overflow-auto h-screen">
      {/* <button
        onClick={() => {
          GetData();
        }}
        className="bg-green-600 active:scale-95 text-white mb-3 px-5 rounded py-2 m-4"
      >
        Get data
      </button> */}
      {/* <h1 className="bg-red-400 w-4 font-bold text-xl fixed">{Index}</h1> */}
      <div className="flex flex-wrap gap-4">{printUserdata}</div>
      <div className="flex justify-center items-center p-4 gap-4">
        <button
          onClick={() => {
            if (Index > 1) {
              setIndex(Index - 1);
              setUserData([]);
            }
          }}
          className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded  px-4 py-2 font-semibold"
        >
          Prev
        </button>
        <h4>Page {Index}</h4>
        <button
          onClick={() => {
            setUserData([]);
            setIndex(Index + 1);
          }}
          className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded  px-4 py-2 font-semibold"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
