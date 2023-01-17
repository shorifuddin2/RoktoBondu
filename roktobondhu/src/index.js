import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Blogs_Details from "./components/Blogs/Blogs_Details";
import Anuperona from "./components/Blogs/Anuperona";
import Roktototthyo from "./components/Blogs/Category/Roktototthyo/Roktototthyo";
import Roktototthyo_Details from "./components/Blogs/Category/Roktototthyo/Roktototthyo_Details";
import Roktodaner from "./components/Blogs/Category/Roktodaner/Roktodaner";
import Roktodaner_Details from "./components/Blogs/Category/Roktodaner/Roktodaner_Details";
import Blogs from "./Pages/Blog";
import Sohojogi from "./Pages/Sohojogi";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    path: "/blogs/রক্ততথ্য",
    element: <Roktototthyo />,
  },
  {
    path: "/blogs/রক্তদানের-অভিজ্ঞতা",
    element: <Roktodaner/>,
  },
  {
    path: "/blogs/:id",
    element: <Blogs_Details />,
  },
  {
    path: "/blogs/category/roktototthoy/:id",
    element: <Roktototthyo_Details />,
  },
  {
    path: "/blogs/category/roktodaner/:id",
    element: <Roktodaner_Details />,
  },
  
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
