import React from "react";
import { useSearchParams } from "react-router-dom";

export const withSearchParams = (Component) => {
  return function WrappedComponent(props) {
    const [searchParams] = useSearchParams();

    const params = [...searchParams].reduce((paramObj, [key, value]) => {
      paramObj[key] = value;
      return paramObj;
    }, {});

    return <Component {...props} params={params} />;
  };
};
