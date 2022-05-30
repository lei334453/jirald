/*
 * @edu-class-demo: personal
 */
import { Table } from "antd";
import React from "react";

import { User } from "./search-panel";

interface Project {
  id: string;
  name: string;
  email: string;
  personId: string;
  pin: boolean;
  organization: string;
}
interface ListProp {
  list: Project[];
  users: User[];
}
export const List = ({ list, users }: ListProp) => {
  return (
    <Table
      pagination={false}
      columns={[
        {
          title: "名称",
          dataIndex: "name",
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: "负责人",
          render(value, project) {
            return (
              <span>
                {users.find((user) => user.id === project.personId)?.name ||
                  "未知"}
              </span>
            );
          },
        },
      ]}
      dataSource={list}
    />
  );
};
