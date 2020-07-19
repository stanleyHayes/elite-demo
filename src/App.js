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
import CoursesPage from "./pages/courses/CoursesPage";
import CourseDetailPage from "./pages/courses/CourseDetailPage";
import InstructorsPage from "./pages/instructors/InstructorsPage";
import InstructorDetailPage from "./pages/instructors/InstructorDetailPage";
import SchedulesPage from "./pages/schedules/SchedulesPage";
import ScheduleDetailPage from "./pages/schedules/ScheduleDetailPage";
import StudentsPage from "./pages/students/StudentsPage";
import StudentDetailPage from "./pages/students/StudentDetailPage";

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


          <Route exact={true} path="/courses">
            <CoursesPage />
          </Route>

          <Route exact={true} path="/courses/:courseID">
            <CourseDetailPage />
          </Route>

          <Route exact={true} path="/instructors">
            <InstructorsPage />
          </Route>

          <Route exact={true} path="/instructors/:instructorID">
            <InstructorDetailPage />
          </Route>

          <Route exact={true} path="/schedules">
            <SchedulesPage />
          </Route>

          <Route exact={true} path="/schedules/scheduleID">
            <ScheduleDetailPage />
          </Route>

          <Route exact={true} path="/students">
            <StudentsPage />
          </Route>

          <Route exact={true} path="/students/:studentID">
            <StudentDetailPage />
          </Route>

        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
