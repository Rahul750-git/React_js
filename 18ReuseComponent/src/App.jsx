function App() {
  const userData = [
    {
      name: "John Doe",
      age: 30,
      email: "john123@gmail.com",
      Id: 1,
    },
    {
      name: "smith",
      age: 31,
      email: "smith123@gmail.com",
      Id: 2,
    },
    {
      name: "Sarah Smith",
      age: 32,
      email: "sarah123@gmail.com",
      Id: 3,
    },
  ];

  return (
    <div>
      <h1>Reuse Component in Loop </h1>
      {userData.map((user) => (
     <div>Shyam</div>
      ))}
    </div>
  );
}

export default App;
