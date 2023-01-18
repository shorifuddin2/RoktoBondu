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
import Roktototthyo from "./components/Blogs/Category/Roktototthyo/Roktototthyo";
import Roktototthyo_Details from "./components/Blogs/Category/Roktototthyo/Roktototthyo_Details";
import Roktodaner from "./components/Blogs/Category/Roktodaner/Roktodaner";
import Roktodaner_Details from "./components/Blogs/Category/Roktodaner/Roktodaner_Details";
import Blogs from "./Pages/Blog";
import Sohojogi from "./Pages/Sohojogi";
import Thalassemia from "./Pages/Thalassemia";
import ThalassemiaDetails from "./Pages/ThalassemiaDetails";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Volunteers from "./Pages/Volunteers/Volunteers";
import GalleryBlog from "./Pages/GalleryBlog/GalleryBlog";
import GalleryBlogDetails from "./Pages/GalleryBlog/GalleryBlogDetails";
import NewsBlog from "./Pages/NewsBlog/NewsBlog";
import NewsBlogDetails from "./Pages/NewsBlog/NewsBlogDetails";
import Blog from "./Pages/Blog";
import Platelet from "./Pages/Platelet"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/platelet",
    element:<Platelet></Platelet>
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
    path: "/volunteers",
    element: <Volunteers />,
  },
  {
    path: "/thalassemia-details",
    element: <ThalassemiaDetails />,
  },
  {
    path: "/blogs",
    element: <Blogs />
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
<<<<<<< HEAD
    path: "/blogs/category/roktototthoy/:id",
    element: <Roktototthyo_Details />,
  },
  {
    path: "/blogs/category/roktodaner/:id",
    element: <Roktodaner_Details />,
  },
  
=======
    path: '/blogs/কবিতা',
    element: <Kobitas />
  },
  {
    path: '/blogs/campaign',
    element: <Campaigns />
  },
  {
    path: '/blogs/রক্তবন্ধু-গ্যালারি',
    element: <GalleryBlog />
  },
  {
    path: '/blogs/রক্তবন্ধু-গ্যালারি/:id',
    element: <GalleryBlogDetails />
  },
  {
    path: '/blogs/সংবাদ',
    element: <NewsBlog />
  },
  {
    path: '/blogs/সংবাদ/:id',
    element: <NewsBlogDetails />
  },
  {
    path: '/blogs/poem/:poemId',
    element: <PoemDetails />
  },
  {
    path: '/blogs/campaigns',
    element: <Campaigns />
  },
  {
    path: '/blogs/campaign/:campaignId',
    element: <CampaignDetails />
  }
>>>>>>> ef2b7dbd8249d15afd4f50f416d50d1534f6316c
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
