import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <h1>Controlled Component in React</h1>
      <form method="get">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
        <button
          type="submit"
          onClick={() => {
            setName("");
            setPassword("");
            setEmail("");
          }}
        >
          Clear
        </button>
      </form>

      <h2>Name: {name}</h2>
      <h2>Password: {password}</h2>
      <h2>Email: {email}</h2>
    </>
  );
}

export default App;
