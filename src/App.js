import React, { useState } from "react";
import "./styles.css";
import ShowCard from "./ShowCard.js"
const App = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    document.getElementById("button").style.display = "none";
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonresponse = await response.json();
    setUsers(jsonresponse['data']);
  };

  return (
    <div className="App">
      <div className="button" id="button">
        <button onClick={loadUsers}>Get Users</button>
      </div>

      <div className="data">
        {users.map(({ id, email, avatar ,first_name, last_name }) => (
          <ShowCard key={id} email={email} avatar={avatar} first_name={first_name} last_name={last_name}/>
        ))}
      </div>
    </div>
  );
};
export default App;


