import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import LandingPage from "../features/landing/LandingPage";
import JobsListPage from "../features/jobs/JobsListPage";
import RegisterPage from "../features/auth/RegisterPage";
import CompaniesListPage from "../features/companies/CompaniesListPage";
import LoginPage from "../features/auth/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "jobs", element: <JobsListPage /> },
      { path: "companies", element: <CompaniesListPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "login", element: <LoginPage /> },
    ],
  },
]);
