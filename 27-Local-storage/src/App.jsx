function App() {
  localStorage.setItem("user", "Ram");
  localStorage.setItem("age", "29");
  localStorage.setItem("city", "Bhopal");
  localStorage.removeItem("user");

  const obj = {
    user: "Shyam",
    age: 25,
    city: "Hr",
  };
  localStorage.setItem("obj", JSON.stringify(obj));

  const objVal = JSON.parse(localStorage.getItem("obj"));
  console.log(objVal);

  // const username = localStorage.getItem('user')
  // console.log(username);

  return <div> </div>;
}

export default App;
