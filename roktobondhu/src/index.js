import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Kobitas from './components/Blogs/Kobita/Kobitas';
import Campaigns from './components/Blogs/Campaign/Campaigns';
import PoemDetails from "./components/Blogs/Kobita/PoemDetails";
import CampaignDetails from "./components/Blogs/Campaign/CampaignDetails";
import Blogs_Details from "./components/Blogs/Blogs_Details";
import Anuperona from "./components/Blogs/Anuperona";
import Blogs from "./Pages/Blog";
import Sohojogi from "./Pages/Sohojogi";
import Blog from "./Pages/Blog";
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
    path: "/blog",
    element: <Blog />,
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
    path: '/blogs/poem/:poemId',
    element: <PoemDetails/>
    
  },
  {
    path: '/blogs/campaigns',
    element: <Campaigns/>
  },
  {
    path: '/blogs/campaign/:campaignId',
    element: <CampaignDetails/>
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
