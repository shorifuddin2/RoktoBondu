import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Kobitas from "./components/Blogs/Kobita/Kobitas";
import Campaign from "./components/Blogs/Campaign/Campaign";
import Anuperona from "./components/Blogs/Anuperona";
import Blogs_Details from "./components/Blogs/Blogs_Details";
import Blogs from "./Pages/Blog";
import Sohojogi from "./Pages/Sohojogi";
import Thalassemia from "./Pages/Thalassemia";
import ThalassemiaDetails from "./Pages/ThalassemiaDetails";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/registration",
    element: <Registration></Registration>,
  },
  {
    path: "/thalassemia",
    element: <Thalassemia />,
  },
  {
    path: "/thalassemia-details",
    element: <ThalassemiaDetails />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/sohojogi",
    element: <Sohojogi />,
  },
  {
    path: "/blogs/অনুপ্রেরণা",
    element: <Anuperona />,
  },
  {
    path: "/blogs/:id",
    element: <Blogs_Details />,
  },
  {
    path: '/blogs/কবিতা',
    element: <Kobitas/>
  },
  {
    path: '/blogs/campaign',
    element: <Campaign/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
