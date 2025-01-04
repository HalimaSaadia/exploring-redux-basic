import App from "@/App";
import Task from "@/pages/task";
import User from "@/pages/user";

import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,

        element: <Task />,
      },
      {
        path: "/user",
        element: <User />,
      },
    ],
  },
]);

export default routes;
