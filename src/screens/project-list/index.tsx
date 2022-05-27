/*
 * @edu-class-demo: personal
 */
import React, { useEffect, useState } from "react";

import { cleanObject, useMount } from "../../utils/clean";
import { useDebounce } from "../../utils/delay";
import { useHttp } from "../../utils/httpclient";
import { List } from "./List";
import { SearchPanel } from "./search-panel";

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  //防抖函数
  const debounce = useDebounce(param, 2000);

  const client = useHttp();
  useEffect(() => {
    client("projects", { data: cleanObject(debounce) }).then(setList);
    // fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debounce))}`).then(
    //   async (response) => {
    //     if (response.ok) {
    //       setList(await response.json());
    //     }
    //   }
    // );
  }, [debounce]);
  useMount(() => {
    client("users").then(setUsers);
    // fetch(`${apiUrl}/users`).then(async (response) => {
    //   if (response.ok) {
    //     setUsers(await response.json());
    //   }
    // });
  });
  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};
