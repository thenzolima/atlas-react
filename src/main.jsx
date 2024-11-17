import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Ajustes from "./pages/Ajustes.jsx";
import Sobre from "./pages/Sobre.jsx";
import Home from "./pages/Home.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import IndexRestinga from "./pages/restinga/Index.jsx";
import ContentPage from "./components/ContentPage.jsx";
import IndexTalassociclo from "./pages/talassociclo/Index.jsx";
import IndexMataAtlantica from "./pages/mata-atlantica/Index.jsx";
const routes = [
  { path: "/", element: <Home /> },
  { path: "ajustes", element: <Ajustes /> },
  { path: "sobre", element: <Sobre /> },
  { path: "restinga", element: <IndexRestinga /> },
  { path: "talassociclo", element: <IndexTalassociclo /> },
  { path: "mata-atlantica", element: <IndexMataAtlantica /> },
  { path: "/conteudo/:topic/:id", element: <ContentPage /> },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: routes,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
