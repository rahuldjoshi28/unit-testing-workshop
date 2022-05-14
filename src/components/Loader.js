import { useState } from "react";
import { Spin } from "antd";

export const withLoader = (Component) => {
  return function WrappedComponent(props) {
    const [loading, setLoading] = useState(false);

    const startLoading = () => setLoading(true);
    const stopLoading = () => setLoading(false);

    if (loading) {
      return (
        <div className={"loader"}>
          <Spin size="large" />
        </div>
      );
    }

    return (
      <Component
        {...props}
        startLoading={startLoading}
        stopLoading={stopLoading}
      />
    );
  };
};
