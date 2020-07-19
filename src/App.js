import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import ScrollToTop from "./components/shared/ScrollToTop";
import HomePage from "./pages/home/HomePage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import AccountPage from "./pages/authentication/AccountPage";
import SignUpPage from "./pages/authentication/SignUpPage";
import SignInPage from "./pages/authentication/SignInPage";
import ForgotPasswordPage from "./pages/authentication/ForgotPasswordPage";
import ChangePasswordPage from "./pages/authentication/ChangePasswordPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Switch>

          <Route exact={true} path="/">
            <HomePage />
          </Route>

          <Route exact={true} path="/dashboard">
            <DashboardPage />
          </Route>

          <Route exact={true} path="/about">
            <AboutPage />
          </Route>

          <Route exact={true} path="/contact">
            <ContactPage />
          </Route>

          <Route exact={true} path="/change-password">
            <ChangePasswordPage />
          </Route>

          <Route exact={true} path="/forgot-password">
            <ForgotPasswordPage />
          </Route>

          <Route exact={true} path="/login">
            <SignInPage />
          </Route>

          <Route exact={true} path="/register">
            <SignUpPage />
          </Route>

          <Route exact={true} path="/account">
            <AccountPage />
          </Route>

        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
