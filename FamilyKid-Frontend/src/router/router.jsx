import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../layout/Main";
import Register from "../layout/Register";
import Login from "../layout/Login";
import Table from "../layout/Table";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Main /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/table", element: <Table /> },
    ],
  },
]);
