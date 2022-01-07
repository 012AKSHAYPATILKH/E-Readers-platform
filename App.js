import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [list, setList] = useState([]);

  const handleUsernameChange = (e) => {
    setUserName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassWord(e.target.value);
  };
  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const addUser = async () => {
    const url = "http://localhost:4000/addUser";
    const data = {
      userName: userName,
      passWord: passWord,
      mobile: mobile,
      email: email,
    };

    // AJAX using AXIOS
    await axios.post(url, data);

    const newList = [data, ...list];
    setList(newList);

    setUserName("");
    setPassWord("");
    setMobile("");
    setEmail("");
  };

  const getUser1 = async () => {
    const url = "http://localhost:4000/users";
    const result = await axios.get(url);

    const list = result.data;
    const newList = [...list];
    setList(newList);
  };

  const getUser = async () => {
    const url = "http://localhost:4000/users";
    const result = await fetch(url);
    const list = await result.json();

    const newList = [...list];
    setList(newList);
  };

  // Spe Function::  Like Constructor :: React Hooks
  useEffect(() => getUser(), []);

  return (
    <div >
      <h1 className="bg-success">User Registration</h1>
      <div>
        <input
          type="text"
          name=""
          id=""
          value={userName}
          onChange={handleUsernameChange}
          placeholder="Enter Username"
        />
      </div>
      <div>
        <input
          type="text"
          name=""
          id=""
          value={passWord}
          onChange={handlePasswordChange}
          placeholder="Enter Password"
        />
      </div>
      <div>
        <input
          type="text"
          name=""
          id=""
          value={mobile}
          onChange={handleMobileChange}
          placeholder="Enter Mobile"
        />
      </div>
      <div>
        <input
          type="text"
          name=""
          id=""
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter Email"
        />
      </div>
      <div>
        <input type="button" name="" value="Register" onClick={addUser} />
        <input type="button" name="" value="Get User" onClick={getUser} />
      </div>

      <h1>User List</h1>

      {list.map((item, index) => (
        <div key={index}>
          {item.userName} {item.passWord} {item.mobile} {item.email}
        </div>
      ))}
    </div>
  );
}
