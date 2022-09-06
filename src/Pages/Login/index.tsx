import { Button, Checkbox, Form, Input, Layout } from "antd";
import './login.css'
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAPIDispatch } from '../../Utils/useAPIDispatch';
import { serviceName, requestPayload } from "../../Utils/requests";
import * as ActionType from "../../Actions";
import { useDispatch } from "react-redux";

const { Header, Content, Footer } = Layout;

const Login = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onFinish = (values: any) => {
    console.log("Success:", values);
    dispatch({
      type: ActionType.FETCH_ACTION,
      requestPayload: requestPayload.login(values),
      serviceName: serviceName.login,
      serviceType: "POST"
    });

    // useAPIDispatch(serviceName.login, values, 'POST')

    navigate('/dashboard')
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo">
        Timesheet Portal</div>
      </Header>

      <Content
        className="site-layout"
        style={{ padding: "50px 50px", marginTop: 64 }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24}}
        >
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="name"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
      © 2022 Nitor Infotech All rights reserved
      </Footer>
    </Layout>
  );
};

export default Login;
