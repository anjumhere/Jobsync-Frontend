import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import LandingPage from "../features/landing/LandingPage";
import JobsListPage from "../features/jobs/JobsListPage";
import RegisterPage from "../features/auth/RegisterPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "jobs", element: <JobsListPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
]);
