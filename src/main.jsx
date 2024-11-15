import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Ajustes from "./pages/Ajustes.jsx";
import Sobre from "./pages/Sobre.jsx";
import Home from "./pages/Home.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Restinga from "./pages/restinga/Index.jsx";
import ContentPage from "./components/ContentPage.jsx";
import dataRestinga from "./data/restinga/restinga_flora.json";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "ajustes",
        element: <Ajustes />,
      },
      {
        path: "sobre",
        element: <Sobre />,
      },
      {
        path: "restinga",
        element: <Restinga />,
      },
      {
        path: "content/:id",
        element: <ContentPage item={dataRestinga} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
