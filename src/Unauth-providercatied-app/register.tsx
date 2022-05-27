/*
 * @edu-class-demo: personal
 */
/*
 * @edu-class-demo: personal
 */
import { useAuth } from "context/auth-context";
import React, { FormEvent } from "react";

// const apiUrl = process.env.REACT_APP_API_URL;
export const RegisterScreen = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { register, user } = useAuth();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    register({ username, password });
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
        注册
      </button>
    </form>
  );
};
