/*
 * @edu-class-demo: personal
 */
/*
 * @edu-class-demo: personal
 */
/*
 * @edu-class-demo: personal
 */
import { Button, Form, Input } from "antd";
import { useAuth } from "context/auth-context";

// const apiUrl = process.env.REACT_APP_API_URL;
export const RegisterScreen = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { login, user } = useAuth();
  // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const username = (event.currentTarget.elements[0] as HTMLInputElement)
  //     .value;
  //   const password = (event.currentTarget.elements[1] as HTMLInputElement)
  //     .value;
  //   login({ username, password });
  // };
  const handleSubmit = (values: { username: string; password: string }) => {
    login(values);
  };
  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "请输如注册名" }]}
      >
        <Input type="text" id="username" placeholder="注册用户名" />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "请输入注册密码" }]}
      >
        <Input type="password" id="password" placeholder="注册密码" />
      </Form.Item>
      <Button htmlType={"submit"} type={"primary"}>
        注册
      </Button>
    </Form>
  );
};
