import { useState } from "react";

import AxiosInstance from "../../../utilsClient/AxiosInstance";

const ForgetPass = () => {
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    const res = await AxiosInstance.post(
      "/user/forgetPassword",
      {
        email,
      },
      config
    );

    console.log(res);

    setResponse(res.data.msg);
  };

  return (
    <div>
      
      <h2
        style={{
          textAlign: "center",
          color: "black",
          fontFamily: "cursive",
          margin: "5vh 0 2vh",
        }}
      >
      Forgot Password
      </h2>

      {response}

      <form onSubmit={onSubmit}>
      <div className="mb-3 row mx-3 my-3">
        <input
          name="email"
          type="email"
          value={email}
          //autoComplete='off'
          placeholder="Enter Email"
          onChange={handleChange}
          required
        />
        </div>

        <button type="submit" className="btn btn-primary mx-3 my-3">
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default ForgetPass;
