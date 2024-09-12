import React, { useEffect, useState } from "react";

function SignUp() {
  const data = {
    name: "",
    user: "",
    email: "",
    mobile: "",
    company: "",
    address: "",
    password: "",
  };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    console.log("Registered");
  }, [flag]);

  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (
      !inputData.name ||
      !inputData.user ||
      !inputData.email ||
      !inputData.mobile ||
      !inputData.company ||
      !inputData.address ||
      !inputData.password
    ) {
      alert("All fields are mandatory");
    } else {
      setFlag(true);
    }
  }
  return (
    <>
      <pre>
        {flag ? (
          <h2 className="ui-define">
            hello {inputData.name}, You were Registered Successfully
          </h2>
        ) : (
          ""
        )}
      </pre>
      <form className="container" onSubmit={handleSubmit}>
        <div className="header">
          <h1>SignUp</h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={inputData.name}
            onChange={handleData}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Create your user Id"
            name="user"
            value={inputData.user}
            onChange={handleData}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            value={inputData.email}
            onChange={handleData}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter your mobile number"
            name="mobile"
            value={inputData.mobile}
            onChange={handleData}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter your company name"
            name="company"
            value={inputData.company}
            onChange={handleData}
          ></input>
        </div>
        <div>
          <textarea
            class="area"
            placeholder=" Enter your home address"
            name="address"
            value={inputData.address}
            onChange={handleData}
          ></textarea>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter your password"
            name="password"
            value={inputData.password}
            onChange={handleData}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default SignUp;
