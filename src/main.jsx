import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AdminProvider } from "./context/AdminContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Admin from "./paginas/admin";
import Catalogo from "./paginas/catalogo";
import Carrito from "./paginas/carrito";
import Productos from "./paginas/productos";
import Agregar from "./paginas/agregar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/catalogo",
    element: <Catalogo />,
  },
  {
    path: "/carrito",
    element: <Carrito />,
  },
  {
  path: "/productos",
    element: <Productos />,
  },
  {
    path: "/admin",
      element: <Admin />,
  },
  {
    path: "/agregar",
      element: <Agregar />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AdminProvider>
      <RouterProvider router={router} />
    </AdminProvider>
  </React.StrictMode>
);