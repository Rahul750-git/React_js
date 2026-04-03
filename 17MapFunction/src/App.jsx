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
      <h1>Loop in Jsx with Map function</h1>
      <table border={"1"} cellPadding={"10px"} cellSpacing={"0px"}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.Id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.Id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
