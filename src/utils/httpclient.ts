import * as auth from "authProvider/auth-provider";

import { useAuth } from "../context/auth-context";

const apiUrl = process.env.REACT_APP_API_URL;
interface Config extends RequestInit {
  token?: string;
  data?: string;
}
export const http = async (
  endpoint: string,
  { data, token, headers, ...customConfig }: Config = {}
) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer${token}` : "",
      "Content-Type": data ? `application/json` : "",
    },
    ...customConfig,
  };
  if (config.method.toUpperCase() === "GET") {
    endpoint += `?{qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }
  return window
    .fetch(`${apiUrl}/${endpoint}`, config)
    .then(async (response) => {
      if (response.status === 401) {
        await auth.logout();
        window.location.reload();
        return Promise.reject({ message: "请重新登陆" });
      }
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject({ data });
      }
    });
};

export const useHttp = () => {
  const { user } = useAuth();
  //todo
  return (...[endpoint, config]: Parameters<typeof http>) =>
    http(endpoint, { ...config, token: user?.token });
};
// interface 也没法实现 Utility方
// typeof
// js中的typeof是runtime在运行时
// type Person={
//   name:string;
//   age:number;
// }
// const xiaoMing:Partial<Person>={
// }
// const shengming:Omit<Person,'name'|'age'>={
// }

// type PersonKeys=keyof Person;
// type Partial<T> = {
//   [P in keyof T]?: T[P];
// };
