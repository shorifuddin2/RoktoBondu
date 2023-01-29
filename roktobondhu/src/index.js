import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Kobitas from "./components/Blogs/Kobita/Kobitas";
import Campaigns from "./components/Blogs/Campaign/Campaigns";
import Blogs_Details from "./components/Blogs/Blogs_Details";
import Anuperona from "./components/Blogs/Anuperona";
import Roktototthyo from "./components/Blogs/Category/Roktototthyo/Roktototthyo";
import Roktototthyo_Details from "./components/Blogs/Category/Roktototthyo/Roktototthyo_Details";
import First_roktodan from "./components/Blogs/Category/First-roktodan/First-roktodan";
import First_roktodan_Details from "./components/Blogs/Category/First-roktodan/First-roktodan_Details";
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
import HomePage from "./Pages/HomePage/HomePage";
import RoktodanExpreience from "./components/Blogs/RoktodanExperience/RoktodanExperience";
import RoktodanStory from "./components/Blogs/RoktodanStory/RoktodanStory";
import AllPlatelet from "./Pages/platelet/AllPlatelet";
import APlusBloodSearch from "./Pages/APlusBloodSearch/APlusBloodSearch";
import SingleRoktodanExperience from "./components/Blogs/RoktodanExperience/SingleRoktodanExperience";
import CardMaking from "./Pages/CardMaking/CardMaking";
import PoremDetails from "./components/Blogs/Kobita/PoemDetails";
import PlateletContent from "./Pages/platelet/PlateletContent";
import CampaignDetails from "./components/Blogs/Campaign/CampaignDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/platelet",
    element: <PlateletContent />,
  },
  {
    path: "/all-platelet-search",
    element: <AllPlatelet />,
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
    path: "/volunteers",
    element: <Volunteers />,
  },
  {
    path: "/sohojogi",
    element: <Sohojogi />,
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
    path: "/blog",
    element: <Blog />,
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
    path: "/blogs/কবিতা",
    element: <Kobitas />,
  },
  {
    path: "/blogs/poem/:id",
    element: <PoremDetails />,
  },
  {
    path: "/blogs/ক্যাম্পেইন নিউজ",
    element: <Campaigns />,
  },
  {
    path: "/blogs/campaign/:id",
    element: <CampaignDetails />,
  },
  {
    path: "/blogs/প্রথম-রক্তদান",
    element: <First_roktodan />,
  },
  {
    path: "/blogs/category/First-roktodan/:id",
    element: <First_roktodan_Details />,
  },
  {
    path: "/blogs/রক্ততথ্য",
    element: <Roktototthyo />,
  },
  {
    path: "/blogs/category/roktototthoy/:id",
    element: <Roktototthyo_Details />,
  },
  {
    path: "/blogs/রক্তদানের-অভিজ্ঞতা",
    element: <RoktodanExpreience />,
  },
  {
    path: "/blogs/রক্তদানের-অভিজ্ঞতা/:id",
    element: <SingleRoktodanExperience />,
  },
  {
    path: "/blogs/রক্তদানের-গল্প",
    element: <RoktodanStory />,
  },
  {
    path: "/blogs/রক্তবন্ধু-গ্যালারি",
    element: <GalleryBlog />,
  },
  {
    path: "/blogs/রক্তবন্ধু-গ্যালারি/:id",
    element: <GalleryBlogDetails />,
  },
  {
    path: "/blogs/সংবাদ",
    element: <NewsBlog />,
  },

  {
    path: "/blogs/সংবাদ/:id",
    element: <NewsBlogDetails />,
  },

  {
    path: "/APlusBloodSearch",
    element: <APlusBloodSearch />,
  },
  {
    path: "/Card",
    element: <CardMaking />,
  },
  {
    path: "/all-platelet-search",
    element: <AllPlatelet />,
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
