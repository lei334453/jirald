/*
 * @edu-class-demo: personal
 */
/*
 * @edu-class-demo: personal
 */
/*
 * @edu-class-demo: personal
 */
import { Input, Select } from "antd";
import React, { ChangeEvent } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
}
interface SearchPanelProp {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchPanelProp["param"]) => void;
}
export const SearchPanel = ({ param, setParam, users }: SearchPanelProp) => {
  return (
    <form action="#">
      <div>
        <Input
          type="text"
          value={param.name}
          onChange={(evt: ChangeEvent<HTMLInputElement>) =>
            setParam({
              ...param,
              name: evt.target.value,
            })
          }
        />
        <Select
          value={param.personId}
          onChange={(value) =>
            setParam({
              ...param,
              personId: value,
            })
          }
        >
          <Select.Option value={""}>负责人</Select.Option>
          {users.map((user) => (
            <Select.Option key={user.id} value={user.id}>
              {user.name}
            </Select.Option>
          ))}
        </Select>
      </div>
    </form>
  );
};
