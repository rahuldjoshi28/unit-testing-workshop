import React from "react";
import { Card, message, Typography } from "antd";
import { LoginForm } from "./LoginForm";
import { validateCredentials } from "../../services/login";
import { withLoader } from "../../hoc/Loader";

const Login = ({ onLoginSuccess, startLoader, stopLoader }) => {
  const handleLogin = async ({ username, password }) => {
    startLoader();
    try {
      const { name } = await validateCredentials(username, password);
      onLoginSuccess(name);
    } catch (e) {
      message.error("Something went wrong please try again!");
    } finally {
      stopLoader();
    }
  };

  return (
    <div className={"container"}>
      <Card>
        <Typography.Title level={2}>Login Form</Typography.Title>
        <LoginForm onSubmit={handleLogin} />
      </Card>
    </div>
  );
};

export default withLoader(Login);
