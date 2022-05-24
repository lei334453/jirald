/*
 * @edu-class-demo: personal
 */
import React, { FormEvent } from "react";

const apiUrl = process.env.REACT_APP_API_URL;
export const LoginScreen = () => {
  //HTMLFormElement extends element
  const login = (param: { username: string; password: string }) => {
    fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param),
    }).then(async (response: Response) => {
      if (response.ok) {
        //   console.log('登陆成功');
      }
    });
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    login({ username, password });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id="username" placeholder="" />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="password" id="password" placeholder="" />
      </div>
      <button type="submit" id="login">
        登录
      </button>
    </form>
  );
};
