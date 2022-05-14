import React from "react";
import { Card, message, Typography } from "antd";
import { LoginForm } from "./LoginForm";
import { validateCredentials } from "../../services/login";
import { withLoader } from "../../components/Loader";

const Login = ({ onLoginSuccess, startLoading, stopLoading }) => {
  const handleLogin = async ({ username, password }) => {
    startLoading();
    try {
      const { name } = await validateCredentials(username, password);
      onLoginSuccess(name);
    } catch (e) {
      message.error("Something went wrong please try again!");
    } finally {
      stopLoading();
    }
  };

  return (
    <div className={"login-page"}>
      <Card>
        <Typography.Title level={2}>Login Form</Typography.Title>
        <LoginForm onSubmit={handleLogin} />
      </Card>
    </div>
  );
};

export default withLoader(Login);
