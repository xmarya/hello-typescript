import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import AppLayout from "./components/AppLayout";
import TicTacToe from "./pages/tic-tac-toe/TicTacToe";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      
    ],
  },
  {
    path: "/ttt",
    element: <TicTacToe />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
