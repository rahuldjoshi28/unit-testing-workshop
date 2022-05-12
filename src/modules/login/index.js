import React from "react";
import { Card, Typography } from "antd";
import { LoginForm } from "./LoginForm";
import { validateCredentials } from "../../services/login";

export const Login = ({ onLoginSuccess }) => {
  const handleLogin = async ({ username, password }) => {
    const { name } = await validateCredentials(username, password);
    onLoginSuccess(name);
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
