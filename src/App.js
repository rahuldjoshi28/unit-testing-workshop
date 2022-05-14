import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "antd/dist/antd.css";
import "./App.css";
import Login from "./modules/login";
import { AuthProvider, useAuth } from "./modules/login/AuthContext";
import { Header } from "./modules/header";
import BookMovieTicket from "./modules/booking";
import TicketSummary from "./modules/ticketSummary/TicketSummary";

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
    <BrowserRouter>
      <AuthProvider>
        <div className="App">
          <Routes>
            <Route path={"/ticket-summary"} element={<TicketSummary />} />
            <Route path={"/"} element={<Container />} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
