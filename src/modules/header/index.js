import { Layout } from "antd";
import { useAuth } from "../login/AuthContext";

export const Header = () => {
  const { userName } = useAuth();
  return (
    <Layout.Header className={"flex-right"}>
      <div>
        <p data-testid="username" className={"header-username"}>
          {userName}
        </p>
      </div>
    </Layout.Header>
  );
};
