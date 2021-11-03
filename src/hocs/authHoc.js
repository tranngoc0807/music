import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
export const MQTTClientContext = React.createContext(null);
const authHoc = (WrappedComponent) => {
  const FuncComponent = ({ children, ...props }) => {
    let history = useHistory();
    useEffect(() => {
      const token = JSON.parse(localStorage.getItem("token"));
      if (!token) {
        history.push("/login");
      }
    }, []);
    return <WrappedComponent {...props}>{children}</WrappedComponent>;
  };
  return FuncComponent;
};

export default authHoc;
