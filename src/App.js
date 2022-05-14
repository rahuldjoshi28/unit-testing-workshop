import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import Login from "./modules/login";
import { AuthProvider, useAuth } from "./modules/login/AuthContext";
import { Header } from "./modules/header";
import BookMovieTicket from "./modules/booking";

const Container = () => {
  const { isLoggedIn, setLoginInfo } = useAuth();

  if (!isLoggedIn()) {
    return <Login onLoginSuccess={setLoginInfo} />;
  }

  return (
    <div>
      <Header />
      <BookMovieTicket />
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Container />
      </div>
    </AuthProvider>
  );
}

export default App;
